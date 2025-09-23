import { S } from '#dep/effect'
import { Grafaid } from '#grafaid'
import * as GraphQLName from '../graphql-name.js'
import * as Argument from './argument.js'
import * as ResolvedType from './resolved-type.js'

/**
 * GraphQL field segment in a schema path.
 */

// This path node represents a GraphQL Field
export const graphqlKind = Grafaid.Schema.Kinds.Kinds.Field

// Forward declare the Field class for type references
export interface Field {
  readonly _tag: 'GraphQLPathSegmentField'
  readonly name: string
  readonly next?: FieldNext | undefined
}

export type FieldNext =
  | Field
  | Argument.Argument
  | ResolvedType.ResolvedType

export interface FieldEncoded {
  readonly _tag: 'GraphQLPathSegmentField'
  readonly name: string
  readonly next?: FieldNextEncoded | undefined
}

export type FieldNextEncoded =
  | FieldEncoded
  | Argument.ArgumentEncoded
  | ResolvedType.ResolvedTypeEncoded

// ============================================================================
// Schema
// ============================================================================

export class Field extends S.TaggedClass<Field>('GraphQLPathSegmentField')('GraphQLPathSegmentField', {
  name: GraphQLName.GraphQLName,
  next: S.optional(S.suspend((): S.Schema<FieldNext, FieldNextEncoded> =>
    S.Union(
      S.suspend((): S.Schema<Field, FieldEncoded> => Field as any),
      Argument.Schema,
      ResolvedType.Schema,
    )
  )),
}) {}

export const Schema = Field

// ============================================================================
// Constructors
// ============================================================================

export const make = Field.make.bind(Field)
