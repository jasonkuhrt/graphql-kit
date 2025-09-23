import { S } from '#dep/effect'
import { Grafaid } from '#grafaid'
import * as GraphQLName from '../graphql-name.js'
import * as Field from './field.js'
import * as ResolvedType from './resolved-type.js'

/**
 * GraphQL argument segment in a schema path.
 */

// This path node represents a GraphQL Argument
export const graphqlKind = Grafaid.Schema.Kinds.Kinds.Argument

export interface Argument {
  readonly _tag: 'GraphQLPathSegmentArgument'
  readonly name: string
  readonly next?: ArgumentNext | undefined
}

export type ArgumentNext =
  | Field.Field
  | ResolvedType.ResolvedType

export interface ArgumentEncoded {
  readonly _tag: 'GraphQLPathSegmentArgument'
  readonly name: string
  readonly next?: ArgumentNextEncoded | undefined
}

export type ArgumentNextEncoded =
  | Field.FieldEncoded
  | ResolvedType.ResolvedTypeEncoded

// ============================================================================
// Schema
// ============================================================================

export class Argument extends S.TaggedClass<Argument>('GraphQLPathSegmentArgument')('GraphQLPathSegmentArgument', {
  name: GraphQLName.GraphQLName,
  next: S.optional(S.suspend((): S.Schema<ArgumentNext, ArgumentNextEncoded> =>
    S.Union(
      Field.Schema,
      ResolvedType.Schema,
    )
  )),
}) {}

export const Schema = Argument

// ============================================================================
// Constructors
// ============================================================================

export const make = Argument.make.bind(Argument)
