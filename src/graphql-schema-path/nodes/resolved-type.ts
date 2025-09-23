import { S } from '#dep/effect'

/**
 * GraphQL resolved type segment in a schema path.
 * Represents the final type resolution in a field path.
 *
 * This is a terminal node - it has no next segment.
 * Used to indicate "resolve to the actual type" in paths like:
 * - User.posts# (resolve the type of posts field)
 */

// This is not a GraphQL kind itself, but a traversal operation
// It represents "resolve to the named type" of a field or argument
// No graphqlKind export as this is a meta-operation

export interface ResolvedType {
  readonly _tag: 'GraphQLPathSegmentResolvedType'
  readonly next?: undefined
}

export interface ResolvedTypeEncoded {
  readonly _tag: 'GraphQLPathSegmentResolvedType'
  readonly next?: undefined
}

// ============================================================================
// Schema
// ============================================================================

export class ResolvedType
  extends S.TaggedClass<ResolvedType>('GraphQLPathSegmentResolvedType')('GraphQLPathSegmentResolvedType', {
    next: S.optional(S.Undefined),
  })
{}

export const Schema = ResolvedType

// ============================================================================
// Constructors
// ============================================================================

export const make = ResolvedType.make.bind(ResolvedType)
