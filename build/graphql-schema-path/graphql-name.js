import { S } from '#kit-temp';
/**
 * GraphQL name validation schema.
 *
 * Validates that a string conforms to GraphQL naming rules:
 * - Must start with a letter or underscore
 * - Can contain letters, digits, and underscores
 * - Cannot start with "__" (reserved for introspection)
 */
// ============================================================================
// Schema
// ============================================================================
/**
 * Valid GraphQL name.
 * Follows GraphQL spec naming rules.
 * Allows introspection fields (__typename, __type, __schema).
 */
const introspectionFields = new Set(['__typename', '__type', '__schema']);
export const GraphQLName = S.String.pipe(S.pattern(/^[_a-zA-Z][_a-zA-Z0-9]*$/), S.filter((name) => !name.startsWith('__') || introspectionFields.has(name), {
    message: () => 'GraphQL names cannot start with "__" (except for introspection fields)',
}));
// ============================================================================
// Constructors
// ============================================================================
export const make = GraphQLName.make;
// ============================================================================
// Codecs
// ============================================================================
export const decode = S.decodeUnknown(GraphQLName);
export const decodeSync = S.decodeUnknownSync(GraphQLName);
export const encode = S.encode(GraphQLName);
export const encodeSync = S.encodeSync(GraphQLName);
// ============================================================================
// Type Guards
// ============================================================================
export const is = S.is(GraphQLName);
//# sourceMappingURL=graphql-name.js.map