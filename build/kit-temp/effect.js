import { Schema as S } from 'effect';
import { isLiteral, isSuspend, isTransformation, isTypeLiteral } from 'effect/SchemaAST';
export { Schema as S } from 'effect';
export var EffectKit;
(function (EffectKit) {
    let Struct;
    (function (Struct) {
        Struct.tagPropertyName = '_tag';
        Struct.isTagged = (value) => {
            return typeof value === 'object' && value !== null && Struct.tagPropertyName in value;
        };
        /**
         * Delete all properties from an object except the tag property
         * Mutates the object in place
         */
        Struct.clearExceptTag = (obj) => {
            for (const prop in obj) {
                if (prop !== Struct.tagPropertyName) {
                    delete obj[prop];
                }
            }
        };
    })(Struct = EffectKit.Struct || (EffectKit.Struct = {}));
    let Schema;
    (function (Schema) {
        let Literal;
        (function (Literal) {
            /**
             * Extract the literal value from a specific field in a schema
             * Returns the exact literal type, not any
             */
            Literal.getValueAtField = (schema, fieldName) => {
                const ast = schema.ast;
                // Resolve any transformations to get to the struct
                let resolved = AST.resolve(ast);
                if (isTransformation(ast)) {
                    resolved = AST.resolve(ast.to);
                }
                // Find the field with the given name
                if (isTypeLiteral(resolved)) {
                    const field = resolved.propertySignatures.find(prop => prop.name === fieldName);
                    if (field && isLiteral(field.type)) {
                        return field.type.literal;
                    }
                }
                throw new Error(`Field "${fieldName}" is not a literal or not found`);
            };
        })(Literal = Schema.Literal || (Schema.Literal = {}));
        Schema.pickLiteral1FieldsAsLiterals = (schema) => {
            const picked = {};
            const ast = schema.ast;
            if (isTypeLiteral(ast)) {
                ast.propertySignatures.forEach(prop => {
                    if (isLiteral(prop.type) && prop.name !== '_tag') {
                        // @ts-expect-error - Extract the literal value, not the schema
                        picked[prop.name] = prop.type.literal;
                    }
                });
            }
            return picked;
        };
        Schema.pickLiteral1Fields = (schema) => {
            const picked = {};
            const ast = schema.ast;
            if (isTypeLiteral(ast)) {
                ast.propertySignatures.forEach(prop => {
                    if (isLiteral(prop.type)) {
                        // @ts-expect-error
                        picked[prop.name] = schema.fields[prop.name];
                    }
                });
            }
            return picked;
        };
        let Struct;
        (function (Struct) {
            /**
             * Extract specific fields from a struct schema
             * Type-safe at input/output but implementation can cheat
             */
            Struct.extractFields = (schema, keys) => {
                const result = Object.fromEntries(keys.map(key => [key, schema.fields[key]]));
                return result;
            };
        })(Struct = Schema.Struct || (Schema.Struct = {}));
        let TaggedStruct;
        (function (TaggedStruct) {
            TaggedStruct.getTagOrThrow = (schema) => {
                // Resolve non-structural wrappers
                let resolved = AST.resolve(schema.ast);
                // If it's a transformation, check the 'to' side
                if (isTransformation(schema.ast)) {
                    resolved = AST.resolve(schema.ast.to);
                }
                // Check if we reached a TypeLiteral (struct)
                if (!isTypeLiteral(resolved)) {
                    throw new Error(`Expected to reach a TypeLiteral (struct) after traversing non-structural schemas, but got: ${resolved._tag}`);
                }
                // Direct access: _tag is always first in TaggedStruct
                const tagProperty = resolved.propertySignatures[0];
                if (!tagProperty || tagProperty.name !== '_tag') {
                    throw new Error('Expected _tag as first property in TaggedStruct');
                }
                // The _tag property's type should be a Literal
                const tagType = tagProperty.type;
                if (!isLiteral(tagType)) {
                    throw new Error('Expected Literal type for _tag property');
                }
                // Ensure the literal is a string
                if (typeof tagType.literal !== 'string') {
                    throw new Error(`Expected tag to be a string literal, but got ${typeof tagType.literal}: ${tagType.literal}`);
                }
                return tagType.literal;
            };
        })(TaggedStruct = Schema.TaggedStruct || (Schema.TaggedStruct = {}));
        let UnionAdt;
        (function (UnionAdt) {
            /**
             * Type-safe collection of tagged struct members from a union schema
             * Returns a map where keys are inferred tag literals
             */
            UnionAdt.collectMembersByTag = (union) => {
                const membersByTag = new Map();
                for (const member of union.members) {
                    const tag = TaggedStruct.getTagOrThrow(member);
                    membersByTag.set(tag, member);
                }
                return membersByTag;
            };
            /**
             * Create a factory function for a discriminated union.
             *
             * @example
             * ```typescript
             * const MyUnion = Schema.Union(
             *   Schema.TaggedStruct('TypeA', { value: Schema.String }),
             *   Schema.TaggedStruct('TypeB', { count: Schema.Number })
             * )
             *
             * const make = EffectKit.Schema.Union.make(MyUnion)
             *
             * // Type-safe member creation
             * const a = make('TypeA', { value: 'hello' }) // TypeA
             * const b = make('TypeB', { count: 42 })      // TypeB
             * ```
             */
            UnionAdt.makeMake = (union) => {
                const membersByTag = UnionAdt.collectMembersByTag(union);
                // Return the factory function
                return ((tag, fields) => {
                    const memberSchema = membersByTag.get(tag);
                    if (!memberSchema) {
                        throw new Error(`Unknown tag: ${tag}`);
                    }
                    // Use the member's make function with the tag added
                    return memberSchema.make({ _tag: tag, ...fields });
                });
            };
            // ============================================================================
            // ADT Detection Functions
            // ============================================================================
            /**
             * Parse tags to detect ADTs.
             * Returns a Map of ADT names to ADT info.
             *
             * @deprecated Use parseADT instead which returns single ADT or null
             *
             * @example
             * parseADTs(['CatalogVersioned', 'CatalogUnversioned'])
             * // Map { 'Catalog' => { name: 'Catalog', members: [...] } }
             */
            UnionAdt.parseADTs = (tags) => {
                const result = new Map();
                const adt = UnionAdt.parse(tags);
                if (adt) {
                    result.set(adt.name, adt);
                }
                return result;
            };
            /**
             * Parse tags to detect if they form a single ADT.
             * Returns the ADT info if all tags follow one ADT pattern, null otherwise.
             *
             * @example
             * parseADT(['CatalogVersioned', 'CatalogUnversioned'])
             * // { name: 'Catalog', members: [...] }
             *
             * parseADT(['CatalogVersioned', 'User'])
             * // null (not an ADT - mixed patterns)
             */
            UnionAdt.parse = (tags) => {
                if (tags.length < 2)
                    return null; // Need at least 2 members for an ADT
                // Parse all tags
                const parsedTags = tags.map(tag => ({
                    tag,
                    parsed: parseTag(tag),
                })).filter(item => item.parsed !== null);
                // If not all tags could be parsed, it's not an ADT
                if (parsedTags.length !== tags.length)
                    return null;
                // Check if all tags have the same ADT name
                const firstParsed = parsedTags[0];
                if (!firstParsed)
                    return null;
                const firstAdtName = firstParsed.parsed.adtName;
                const allSameAdt = parsedTags.every(item => item.parsed.adtName === firstAdtName);
                if (!allSameAdt)
                    return null;
                // Build the ADT info
                const members = parsedTags.map(item => ({
                    tag: item.tag,
                    memberName: item.parsed.memberName,
                }));
                return {
                    name: firstAdtName,
                    members,
                };
            };
            /**
             * Check if a specific tag is an ADT member given all tags in the union.
             *
             * @example
             * isADTMember('CatalogVersioned', ['CatalogVersioned', 'CatalogUnversioned'])
             * // true
             */
            UnionAdt.isADTMember = (tag, allTags) => {
                const adt = UnionAdt.parse(allTags);
                if (!adt)
                    return false;
                return adt.members.some((m) => m.tag === tag);
            };
            /**
             * Get ADT info for a specific tag.
             * Returns null if the tag is not an ADT member.
             */
            UnionAdt.getADTInfo = (tag, allTags) => {
                const adt = UnionAdt.parse(allTags);
                if (!adt)
                    return null;
                const member = adt.members.find((m) => m.tag === tag);
                if (member) {
                    return {
                        adtName: adt.name,
                        memberName: member.memberName,
                    };
                }
                return null;
            };
            // ============================================================================
            // Helper Functions
            // ============================================================================
            /**
             * Parse a single tag to extract potential ADT structure.
             * This does NOT verify if it's actually part of an ADT.
             *
             * @example
             * parseTag('CatalogVersioned') // { adtName: 'Catalog', memberName: 'Versioned' }
             * parseTag('User') // null
             */
            const parseTag = (tag) => {
                // Must start with uppercase
                if (!/^[A-Z]/.test(tag)) {
                    return null;
                }
                // Match pattern: Capital + lowercase letters, then Capital + any letters
                const match = tag.match(/^([A-Z][a-z]+)([A-Z][a-zA-Z]+)$/);
                if (!match) {
                    return null;
                }
                const [, adtName, memberName] = match;
                // Check if we got valid matches
                if (!adtName || !memberName) {
                    return null;
                }
                // Suffix must have at least one lowercase to be valid camelCase
                if (!/[a-z]/.test(memberName)) {
                    return null;
                }
                return { adtName, memberName };
            };
            /**
             * Format an ADT tag from components.
             */
            UnionAdt.formatADTTag = (adtName, memberName) => {
                return `${adtName}${memberName}`;
            };
        })(UnionAdt = Schema.UnionAdt || (Schema.UnionAdt = {}));
        let AST;
        (function (AST) {
            /**
             * Extract the tag value from a TypeLiteral AST with _tag field
             */
            AST.extractTag = (ast) => {
                const tagProp = ast.propertySignatures.find((p) => p.name === '_tag' && isLiteral(p.type));
                if (!tagProp || !isLiteral(tagProp.type)) {
                    return null;
                }
                const literal = tagProp.type.literal;
                return typeof literal === 'string' ? literal : null;
            };
            /**
             * Collect all tagged members from a union AST into a map keyed by tag
             */
            AST.collectTaggedMembers = (ast) => {
                const membersByTag = new Map();
                for (const member of ast.types) {
                    if (isTypeLiteral(member)) {
                        const tag = AST.extractTag(member);
                        if (tag) {
                            membersByTag.set(tag, member);
                        }
                    }
                }
                return membersByTag;
            };
            // ============================================================================
            // Core Resolution
            // ============================================================================
            /**
             * Resolves an AST node to its underlying type, handling transformations and suspensions
             *
             * @param ast - The AST node to resolve
             * @returns The resolved AST node
             */
            AST.resolve = (ast) => {
                if (isTransformation(ast)) {
                    return AST.resolve(ast.from);
                }
                if (isSuspend(ast)) {
                    return AST.resolve(ast.f());
                }
                return ast;
            };
            // ============================================================================
            // Struct/TypeLiteral Operations
            // ============================================================================
            /**
             * Extracts the schema for a specific field from a struct schema.
             *
             * Handles:
             * - TypeLiteral (standard structs)
             * - Transformation (which might wrap a struct)
             * - Suspend types (lazy schema references)
             *
             * @param schema - The struct schema to extract from
             * @param fieldName - The name of the field to extract
             * @returns The field's schema, or undefined if not found
             */
            AST.getFieldSchema = (schema, fieldName) => {
                const ast = schema.ast;
                // Handle TypeLiteral (structs)
                if (isTypeLiteral(ast)) {
                    const prop = ast.propertySignatures.find((p) => p.name === fieldName);
                    if (prop) {
                        const fieldAst = AST.resolve(prop.type);
                        return S.make(fieldAst);
                    }
                }
                // Handle Transformation (might wrap a struct)
                if (isTransformation(ast)) {
                    return AST.getFieldSchema(S.make(ast.from), fieldName);
                }
                return undefined;
            };
            /**
             * Extracts all property keys from a TypeLiteral (struct).
             *
             * @param ast - The TypeLiteral AST node
             * @returns Array of property names as strings
             */
            AST.extractPropertyKeys = (ast) => {
                return ast.propertySignatures
                    .map(p => p.name)
                    .filter(name => typeof name === 'string');
            };
            /**
             * Gets a property signature from a TypeLiteral by name.
             *
             * @param ast - The TypeLiteral AST node
             * @param propertyName - The name of the property to find
             * @returns The property signature, or undefined if not found
             */
            AST.getPropertySignature = (ast, propertyName) => {
                return ast.propertySignatures.find(p => p.name === propertyName);
            };
            /**
             * Checks if a property exists in a TypeLiteral.
             *
             * @param ast - The TypeLiteral AST node
             * @param propertyName - The name of the property to check
             * @returns True if the property exists, false otherwise
             */
            AST.hasProperty = (ast, propertyName) => {
                return AST.getPropertySignature(ast, propertyName) !== undefined;
            };
            /**
             * Extracts the type AST of a specific property from a TypeLiteral.
             * Automatically resolves Suspend types.
             *
             * @param ast - The TypeLiteral AST node
             * @param propertyName - The name of the property
             * @returns The property's type AST, or undefined if not found
             */
            AST.getResolvedPropertyType = (ast, propertyName) => {
                const prop = AST.getPropertySignature(ast, propertyName);
                if (!prop)
                    return undefined;
                return AST.resolve(prop.type);
            };
            // ============================================================================
            // Union Operations
            // ============================================================================
            /**
             * Extracts all tags from a union
             */
            AST.extractTagsFromUnion = (ast) => {
                const tags = [];
                for (const member of ast.types) {
                    if (isTypeLiteral(member)) {
                        const tag = AST.extractTag(member);
                        if (tag) {
                            tags.push(tag);
                        }
                    }
                }
                return tags;
            };
        })(AST = Schema.AST || (Schema.AST = {}));
    })(Schema = EffectKit.Schema || (EffectKit.Schema = {}));
})(EffectKit || (EffectKit = {}));
//# sourceMappingURL=effect.js.map