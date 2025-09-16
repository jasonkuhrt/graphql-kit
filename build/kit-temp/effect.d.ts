import type { ReplaceProperty } from '#kit-temp/ob';
import { Schema as S } from 'effect';
import type * as E from 'effect';
import type * as EAST from 'effect/SchemaAST';
export type StringOrNever<$Type> = $Type extends string ? $Type : never;
export { Schema as S } from 'effect';
export declare namespace EffectKit {
    namespace Struct {
        type StructTag = string;
        const tagPropertyName = "_tag";
        type TagPropertyName = typeof tagPropertyName;
        type TaggedStruct = {
            [_ in TagPropertyName]: StructTag;
        };
        const isTagged: (value: unknown) => value is TaggedStruct;
        /**
         * Delete all properties from an object except the tag property
         * Mutates the object in place
         */
        const clearExceptTag: (obj: TaggedStruct) => void;
    }
    namespace Tag {
        type PropertyName = '_tag';
    }
    namespace TaggedStruct {
        /**
         * Omit the _tag field from a type
         */
        type OmitTag<$T> = Omit<$T, Tag.PropertyName>;
    }
    namespace Schema {
        namespace Literal {
            /**
             * Extract the type of a literal field from a schema
             */
            type GetFieldLiteralType<$Schema extends S.Schema.All, $FieldName extends string> = $Schema extends S.TaggedStruct<any, infer $Fields> ? $FieldName extends keyof $Fields ? $Fields[$FieldName] extends S.PropertySignature<any, infer $Type, any, any, any, any, any> ? $Type : $Fields[$FieldName] extends S.Literal<infer $Values> ? $Values extends readonly [infer $First, ...any[]] ? $First : never : never : never : never;
            /**
             * Extract the literal value from a specific field in a schema
             * Returns the exact literal type, not any
             */
            const getValueAtField: <$Schema extends S.Schema.All, $FieldName extends string>(schema: $Schema, fieldName: $FieldName) => GetFieldLiteralType<$Schema, $FieldName>;
        }
        type Constructor<$Schema extends Struct.$any, $InputFields> = (fields: $InputFields) => S.Schema.Type<$Schema>;
        type ConstructorUsingOmitLiteral1Algo<$Schema extends Struct.$any> = (fields: ConstructorFieldsUsingOmitLiteral1Algo<$Schema>) => S.Schema.Type<$Schema>;
        const pickLiteral1FieldsAsLiterals: <schema extends Struct.$any>(schema: schema) => { [k in keyof PickLiteral1Fields<schema>]: S.Schema.Type<PickLiteral1Fields<schema>[k]>; };
        const pickLiteral1Fields: <schema extends Struct.$any>(schema: schema) => PickLiteral1Fields<schema>;
        type PickLiteral1Fields<$Schema extends Struct.$any> = {
            [k in keyof Struct.ExtractFields<$Schema>]: Struct.ExtractFields<$Schema>[k] extends S.Literal<infer __literals__ extends [string]> ? Struct.ExtractFields<$Schema>[k] : never;
        };
        type OmitLiteral1Fields<$Schema extends Struct.$any> = {
            [k in keyof Struct.ExtractFields<$Schema>]: Struct.ExtractFields<$Schema>[k] extends S.Literal<infer __literals__ extends [string]> ? never : Struct.ExtractFields<$Schema>[k];
        };
        type GetLiteral1FieldsNames<$Schema extends Struct.$any> = keyof PickLiteral1Fields<$Schema>;
        type ConstructorFieldsUsingOmitLiteral1Algo<$Schema extends Struct.$any> = $Schema extends S.Struct<infer __fields__> ? S.Struct.Constructor<Omit<__fields__, GetLiteral1FieldsNames<$Schema>>> : never;
        type ConstructorFor<$Schema extends S.Struct<any>, $Input> = ReplaceProperty<$Schema, 'make', (fields: $Input) => S.Schema.Type<$Schema>>;
        type $any = S.Schema<any, any, any>;
        type ArgDecoded<$Schema extends $any> = S.Schema.Type<$Schema>;
        type ArgEncoded<$Schema extends $any> = S.Schema.Encoded<$Schema>;
        namespace Tag {
            type GetValue<$Tag extends S.tag<any>> = $Tag extends S.tag<infer __value__> ? __value__ : never;
        }
        namespace Struct {
            type $any = S.Struct<any>;
            type ExtractFields<$Struct extends S.Struct<any>> = $Struct extends S.Struct<infer __fields__> ? __fields__ : never;
            /**
             * Extract specific fields from a struct schema
             * Type-safe at input/output but implementation can cheat
             */
            const extractFields: <$Fields extends S.Struct.Fields, $Keys extends ReadonlyArray<keyof $Fields>>(schema: S.Struct<$Fields> | S.TaggedStruct<any, $Fields>, keys: $Keys) => Pick<$Fields, $Keys[number]>;
        }
        namespace TaggedStruct {
            export type ExtractByTag<$TagName extends Tag, $Union extends S.Schema.All> = $Union extends S.Union<infer $Members extends readonly S.Schema.All[]> ? ExtractTaggedStructFromArray<$TagName, $Members> : $Union extends S.TaggedStruct<infer __tag__, any> ? $TagName extends __tag__ ? $Union : never : never;
            type ExtractTaggedStructFromArray<$TagName extends Tag, $Schemas extends readonly S.Schema.All[]> = $Schemas extends readonly [infer $First extends S.Schema.All, ...infer $Rest extends readonly S.Schema.All[]] ? $First extends S.TaggedStruct<infer __tag__, any> ? $TagName extends __tag__ ? $First : ExtractTaggedStructFromArray<$TagName, $Rest> : ExtractTaggedStructFromArray<$TagName, $Rest> : never;
            export type DoesTaggedUnionContainTag<$TagName extends string, $Union extends S.Schema.All> = $Union extends S.Union<infer $Members extends readonly S.Schema.All[]> ? ContainsTagInArray<$TagName, $Members> : $Union extends S.TaggedStruct<infer __tag__, any> ? $TagName extends __tag__ ? true : false : $Union extends S.suspend<infer $Type, any, any> ? $Type extends {
                readonly _tag: infer __tag__;
            } ? $TagName extends __tag__ ? true : false : false : false;
            type ContainsTagInArray<$TagName extends string, $Schemas extends readonly S.Schema.All[]> = $Schemas extends readonly [infer $First extends S.Schema.All, ...infer $Rest extends readonly S.Schema.All[]] ? $First extends S.TaggedStruct<infer __tag__, any> ? $TagName extends __tag__ ? true : ContainsTagInArray<$TagName, $Rest> : $First extends S.suspend<infer $Type, any, any> ? $Type extends {
                readonly _tag: infer __tag__;
            } ? $TagName extends __tag__ ? true : ContainsTagInArray<$TagName, $Rest> : ContainsTagInArray<$TagName, $Rest> : ContainsTagInArray<$TagName, $Rest> : false;
            export type Tag = string;
            export type $any = S.TaggedStruct<E.SchemaAST.LiteralValue, any>;
            export type Any = S.TaggedStruct<any, any>;
            export type Filter<$TaggedStruct extends $any, $PickedKeys extends keyof Struct.ExtractFields<$TaggedStruct>> = $TaggedStruct extends S.TaggedStruct<infer __tag__, infer __structFields__> ? S.TaggedStruct<__tag__, Pick<__structFields__, $PickedKeys>> : never;
            export type ArgTag<$Schema extends Schema.$any> = $Schema extends S.TaggedStruct<infer __tag__ extends EAST.LiteralValue, any> ? __tag__ : never;
            export type ArgTagString<$Schema extends Schema.$any> = StringOrNever<ArgTag<$Schema>>;
            export type ArgFields<$Schema extends Any> = $Schema extends S.TaggedStruct<any, infer __fields__> ? __fields__ : never;
            export const getTagOrThrow: <schema extends Schema.$any>(schema: schema) => ArgTagString<schema>;
            export {};
        }
        namespace UnionAdt {
            export type $any = S.Union<TaggedStruct.$any[]>;
            export interface ADTInfo {
                name: string;
                members: ADTMember[];
            }
            export interface ADTMember {
                tag: string;
                memberName: string;
            }
            /**
             * Extract all tag values from a union of tagged structs
             */
            export type GetTags<$Union extends $any> = StringOrNever<Tag.GetValue<$Union['members'][number]['fields']['_tag']>>;
            /**
             * Extract a specific member by its tag
             */
            export type ExtractMemberByTag<$Union extends S.Union<any>, $Tag extends GetTags<$Union>> = Union.Arg.MembersAsUnion<$Union> extends infer __member__ ? __member__ extends S.TaggedStruct<$Tag, any> ? S.Schema.Type<__member__> : never : never;
            /**
             * Factory function type for creating union members
             */
            export type FnMake<$Union extends S.Union<any>> = <$Tag extends GetTags<$Union>>(tag: $Tag, fields: EffectKit.TaggedStruct.OmitTag<ExtractMemberByTag<$Union, $Tag>>) => ExtractMemberByTag<$Union, $Tag>;
            /**
             * Type-safe collection of tagged struct members from a union schema
             * Returns a map where keys are inferred tag literals
             */
            export const collectMembersByTag: <$Union extends $any>(union: $Union) => Map<GetTags<$Union>, Union.Arg.MembersAsUnion<$Union>>;
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
            export const makeMake: <union extends S.Union<any>>(union: union) => FnMake<union>;
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
            export const parseADTs: (tags: string[]) => Map<string, ADTInfo>;
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
            export const parse: (tags: string[]) => ADTInfo | null;
            /**
             * Check if a specific tag is an ADT member given all tags in the union.
             *
             * @example
             * isADTMember('CatalogVersioned', ['CatalogVersioned', 'CatalogUnversioned'])
             * // true
             */
            export const isADTMember: (tag: string, allTags: string[]) => boolean;
            /**
             * Get ADT info for a specific tag.
             * Returns null if the tag is not an ADT member.
             */
            export const getADTInfo: (tag: string, allTags: string[]) => {
                adtName: string;
                memberName: string;
            } | null;
            /**
             * Format an ADT tag from components.
             */
            export const formatADTTag: (adtName: string, memberName: string) => string;
            /**
             * Type-level version of parseTag
             */
            export type ParseTag<$Tag extends string> = $Tag extends `${infer __adtName__}${infer __memberName__}` ? __adtName__ extends `${infer __first__}${infer __rest__}` ? __first__ extends Capitalize<__first__> ? __rest__ extends `${Lowercase<__rest__>}${string}` ? __memberName__ extends `${infer __first2__}${infer __rest2__}` ? __first2__ extends Capitalize<__first2__> ? __rest2__ extends `${string}${Lowercase<string>}${string}` | `${Lowercase<string>}${string}` | Lowercase<string> ? {
                adtName: __adtName__;
                memberName: __memberName__;
            } : never : never : never : never : never : never : never;
            /**
             * Convert ADT name to path (PascalCase to kebab-case)
             */
            export type ADTNameToPath<$Name extends string> = Lowercase<$Name>;
            /**
             * Convert member name to path (PascalCase to kebab-case)
             */
            export type MemberNameToPath<$Name extends string> = Lowercase<$Name>;
            /**
             * Extract all tags from a union type.
             */
            export type ExtractTags<$T> = $T extends {
                _tag: infer __tag__ extends string;
            } ? __tag__ : never;
            /**
             * Count members with a specific ADT prefix in a union.
             */
            type CountADTMembers<$ADTName extends string, $Union> = [
                Extract<$Union, {
                    _tag: `${$ADTName}${string}`;
                }>
            ] extends [never] ? 0 : [Extract<$Union, {
                _tag: `${$ADTName}${string}`;
            }>] extends [infer __first__] ? [Exclude<Extract<$Union, {
                _tag: `${$ADTName}${string}`;
            }>, __first__>] extends [never] ? 1 : 2 : 0;
            /**
             * Check if a tag is an ADT member within a schema.
             */
            export type IsHasMemberTag<$Tag extends string, $S extends Schema.$any> = $S extends S.Schema<infer __union__> ? ParseTag<$Tag> extends {
                adtName: infer __adt__ extends string;
            } ? CountADTMembers<__adt__, __union__> extends 0 ? false : CountADTMembers<__adt__, __union__> extends 1 ? false : true : false : false;
            /**
             * Get ADT info from a tag within a schema.
             */
            export type GetMemberInfo<$Tag extends string, $S extends Schema.$any> = $S extends S.Schema<infer __union__> ? ParseTag<$Tag> extends {
                adtName: infer __adt__ extends string;
                memberName: infer __member__ extends string;
            } ? CountADTMembers<__adt__, __union__> extends 0 ? never : CountADTMembers<__adt__, __union__> extends 1 ? never : {
                adtName: __adt__;
                memberName: __member__;
            } : never : never;
            export {};
        }
        namespace Union {
            type $any = S.Union<$any[]>;
            type $anyOfStructs = S.Union<Struct.$any[]>;
            namespace Arg {
                type Members<$Union extends S.Union<any>> = $Union extends S.Union<infer __members__> ? __members__ : never;
                type MembersAsUnion<$Union extends S.Union<any>> = Members<$Union>[number];
            }
        }
        namespace AST {
            /**
             * Extract the tag value from a TypeLiteral AST with _tag field
             */
            const extractTag: (ast: EAST.TypeLiteral) => string | null;
            /**
             * Collect all tagged members from a union AST into a map keyed by tag
             */
            const collectTaggedMembers: (ast: EAST.Union) => Map<string, EAST.TypeLiteral>;
            /**
             * Resolves an AST node to its underlying type, handling transformations and suspensions
             *
             * @param ast - The AST node to resolve
             * @returns The resolved AST node
             */
            const resolve: (ast: EAST.AST) => EAST.AST;
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
            const getFieldSchema: (schema: S.Schema<any, any, any>, fieldName: string) => S.Schema<any, any, never> | undefined;
            /**
             * Extracts all property keys from a TypeLiteral (struct).
             *
             * @param ast - The TypeLiteral AST node
             * @returns Array of property names as strings
             */
            const extractPropertyKeys: (ast: EAST.TypeLiteral) => string[];
            /**
             * Gets a property signature from a TypeLiteral by name.
             *
             * @param ast - The TypeLiteral AST node
             * @param propertyName - The name of the property to find
             * @returns The property signature, or undefined if not found
             */
            const getPropertySignature: (ast: EAST.TypeLiteral, propertyName: string | symbol) => EAST.PropertySignature | undefined;
            /**
             * Checks if a property exists in a TypeLiteral.
             *
             * @param ast - The TypeLiteral AST node
             * @param propertyName - The name of the property to check
             * @returns True if the property exists, false otherwise
             */
            const hasProperty: (ast: EAST.TypeLiteral, propertyName: string | symbol) => boolean;
            /**
             * Extracts the type AST of a specific property from a TypeLiteral.
             * Automatically resolves Suspend types.
             *
             * @param ast - The TypeLiteral AST node
             * @param propertyName - The name of the property
             * @returns The property's type AST, or undefined if not found
             */
            const getResolvedPropertyType: (ast: EAST.TypeLiteral, propertyName: string | symbol) => EAST.AST | undefined;
            /**
             * Extracts all tags from a union
             */
            const extractTagsFromUnion: (ast: EAST.Union) => string[];
        }
    }
}
//# sourceMappingURL=effect.d.ts.map