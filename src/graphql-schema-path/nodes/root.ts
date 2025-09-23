import { S } from '#dep/effect'
import * as Field from './field.js'
import * as Type from './type.js'

/**
 * The root GraphQL schema path structure.
 * Represents the starting point of a path traversal.
 */

// ============================================================================
// Type Definitions
// ============================================================================

export interface Root {
  readonly _tag: 'GraphQLPathRoot'
  readonly version?: string | undefined
  readonly next?: RootNext | undefined
}

export type RootNext = Type.Type

export interface RootEncoded {
  readonly _tag: 'GraphQLPathRoot'
  readonly version?: string | undefined
  readonly next?: RootNextEncoded | undefined
}

export type RootNextEncoded = Type.TypeEncoded

// ============================================================================
// Schema
// ============================================================================

export class Root extends S.TaggedClass<Root>('GraphQLPathRoot')('GraphQLPathRoot', {
  version: S.optional(S.String),
  next: S.optional(S.suspend((): S.Schema<RootNext, RootNextEncoded> => Type.Schema)),
}) {}

export const Schema = Root

// ============================================================================
// Constructors
// ============================================================================

export const make = Root.make.bind(Root)
