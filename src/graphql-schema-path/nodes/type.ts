import { S } from '#dep/effect'
import { Grafaid } from '#grafaid'
import * as GraphQLName from '../graphql-name.js'
import * as Field from './field.js'

/**
 * GraphQL type segment in a schema path.
 * Represents a reference to a GraphQL type (Object, Interface, Union, Enum, Scalar, Input).
 */

// This path node can represent any named type
// The actual kind is determined at runtime when traversing
export const graphqlKinds = Grafaid.Schema.Kinds.Like.Named

// ============================================================================
// Type Definitions
// ============================================================================

export interface Type {
  readonly _tag: 'GraphQLPathSegmentType'
  readonly name: string
  readonly next?: TypeNext | undefined
}

export type TypeNext = Field.Field

export interface TypeEncoded {
  readonly _tag: 'GraphQLPathSegmentType'
  readonly name: string
  readonly next?: TypeNextEncoded | undefined
}

export type TypeNextEncoded = Field.FieldEncoded

// ============================================================================
// Schema
// ============================================================================

export class Type extends S.TaggedClass<Type>('GraphQLPathSegmentType')('GraphQLPathSegmentType', {
  name: GraphQLName.GraphQLName,
  next: S.optional(S.suspend((): S.Schema<TypeNext, TypeNextEncoded> => Field.Schema)),
}) {}

export const Schema = Type

// ============================================================================
// Constructors
// ============================================================================

export const make = Type.make.bind(Type)
