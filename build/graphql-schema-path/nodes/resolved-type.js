import { S } from '#kit-temp';
// ============================================================================
// Schema
// ============================================================================
export const Schema = S.TaggedStruct('GraphQLPathSegmentResolvedType', {
    next: S.optional(S.Undefined),
});
// Types are manually defined above
// ============================================================================
// Constructors
// ============================================================================
export const make = Schema.make;
//# sourceMappingURL=resolved-type.js.map