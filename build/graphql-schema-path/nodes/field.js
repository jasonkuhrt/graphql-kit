import { Grafaid } from '#grafaid';
import { S } from '#kit-temp';
import * as GraphQLName from '../graphql-name.js';
import * as Argument from './argument.js';
import * as ResolvedType from './resolved-type.js';
/**
 * GraphQL field segment in a schema path.
 */
// This path node represents a GraphQL Field
export const graphqlKind = Grafaid.Schema.Kinds.Kinds.Field;
// ============================================================================
// Schema
// ============================================================================
export const Schema = S.TaggedStruct('GraphQLPathSegmentField', {
    name: GraphQLName.GraphQLName,
    next: S.optional(S.suspend(() => S.Union(Schema, Argument.Schema, ResolvedType.Schema))),
});
// ============================================================================
// Constructors
// ============================================================================
export const make = Schema.make;
//# sourceMappingURL=field.js.map