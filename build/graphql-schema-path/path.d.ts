import { S } from '#kit-temp';
import { Effect, ParseResult } from 'effect';
import { Nodes } from './nodes/$.js';
import type { ParsePath } from './parser/type-parser.js';
/**
 * The root GraphQL schema path structure with bidirectional string codec.
 * Represents a complete path to any element in a GraphQL schema.
 *
 * @property version - Optional version coverage for multi-version schema support
 * @property value - The starting point of the path (output or input type)
 *
 * String format examples:
 * - "User" - The User type
 * - "User.posts" - Field access
 * - "User.posts$limit" - Argument access
 * - "User@deprecated" - Directive
 * - "v1.0:User" - With version
 * - "v1.0,2.0:User.posts" - Multiple versions
 * - "v1.0-3.0:Query.users" - Version range
 *
 * AST format examples:
 * ```typescript
 * // Simple type reference
 * { _tag: 'GraphQLSchemaPath', value: { _tag: 'GraphQLPathSegmentOutputType', name: 'User' } }
 *
 * // Field path
 * { _tag: 'GraphQLSchemaPath', value: {
 *   _tag: 'GraphQLPathSegmentOutputType',
 *   name: 'User',
 *   next: { _tag: 'GraphQLPathSegmentOutputField', name: 'posts' }
 * }}
 *
 * // With version coverage
 * { _tag: 'GraphQLSchemaPath',
 *   version: '1.0-2.0',
 *   value: { _tag: 'GraphQLPathSegmentOutputType', name: 'User' }
 * }
 * ```
 *
 * @todo Consider adding GraphQLPathSegmentDirectiveDefinition for standalone directive definitions
 * e.g., "directive \@deprecated(reason: String) on FIELD_DEFINITION"
 * Currently we only support directive applications (directives on types/fields)
 */
export declare const parse: (input: string) => Nodes.Root.Root;
export declare const Path: S.transformOrFail<typeof S.String, S.TaggedStruct<"GraphQLPathRoot", {
    version: S.optional<typeof S.String>;
    next: S.optional<S.suspend<Nodes.Type.Type, Nodes.Type.TypeEncoded, never>>;
}>, never>;
export type Path = S.Schema.Type<typeof Nodes.Root.Schema>;
/**
 * Decode a string into a GraphQL schema path with type-level parsing
 * When used with string literals, returns the exact parsed type
 *
 * @example
 * const path = await Effect.runPromise(decode('User.posts'))
 * // Type is exactly: ParsePath<'User.posts'>
 */
export declare function decode<$Input extends string>(input: $Input): Effect.Effect<string extends $Input ? Path : ParsePath<$Input> extends {
    _tag: 'GraphQLPathRoot';
} ? ParsePath<$Input> : Path, ParseResult.ParseError, never>;
/**
 * Synchronously decode a string into a GraphQL schema path with type-level parsing
 * When used with string literals, returns the exact parsed type
 *
 * @example
 * const path = decodeSync('User.posts')
 * // Type is exactly: ParsePath<'User.posts'>
 */
export declare function decodeSync<$Input extends string>(input: $Input): string extends $Input ? Path : ParsePath<$Input> extends {
    _tag: 'GraphQLPathRoot';
} ? ParsePath<$Input> : Path;
export declare const encode: (a: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<unknown, ParseResult.ParseError, unknown>;
export declare const encodeSync: (a: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => unknown;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "GraphQLPathRoot";
    readonly version?: string | undefined;
    readonly next?: Nodes.Type.Type | undefined;
};
//# sourceMappingURL=path.d.ts.map