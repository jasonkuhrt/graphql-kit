import { S } from '#dep/effect'
import type { Obj } from '@wollybeard/kit'
import { Order } from 'effect'
import { Revision } from '../revision/$.js'
import { SchemaDefinition } from '../schema-definition/$.js'
import { Version } from '../version/$.js'

// ============================================================================
// Schema
// ============================================================================

export interface BranchPoint {
  readonly schema: Versioned
  readonly revision: Revision.Revision
}

export interface BranchPointEncoded {
  readonly schema: VersionedEncoded
  readonly revision: Revision.Revision
}

export interface Versioned {
  readonly _tag: 'SchemaVersioned'
  readonly version: Version.Version
  readonly branchPoint: BranchPoint | null
  readonly revisions: ReadonlyArray<Revision.Revision>
  readonly definition: SchemaDefinition.SchemaDefinition
  readonly categories: ReadonlyArray<{ readonly name: string; readonly types: ReadonlyArray<string> }>
}

export interface VersionedEncoded extends
  Obj.Replace<Versioned, {
    readonly version: S.Schema.Encoded<typeof Version.Version>
    readonly branchPoint: BranchPointEncoded | null
    readonly revisions: ReadonlyArray<S.Schema.Encoded<typeof Revision.Revision>>
    readonly definition: S.Schema.Encoded<typeof SchemaDefinition.SchemaDefinition>
  }>
{}

// Category class for better type safety
class Category extends S.Class<Category>('SchemaCategory')({
  name: S.String,
  types: S.Array(S.String),
}) {}

// BranchPoint class
class BranchPointSchema extends S.Class<BranchPointSchema>('BranchPoint')({
  // The 'as any' is needed here due to circular type reference during class definition
  schema: S.suspend((): S.Schema<Versioned, VersionedEncoded> => Versioned as any),
  revision: Revision.Revision,
}) {}

export class Versioned extends S.TaggedClass<Versioned>('SchemaVersioned')('SchemaVersioned', {
  version: Version.Version,
  branchPoint: S.NullOr(BranchPointSchema),
  revisions: S.Array(Revision.Revision),
  definition: SchemaDefinition.SchemaDefinition,
  categories: S.optionalWith(
    S.Array(Category),
    { default: () => [] },
  ),
}) {}

// ============================================================================
// Type Guard
// ============================================================================

export const is = S.is(Versioned)

// ============================================================================
// Ordering
// ============================================================================

export const order: Order.Order<Versioned> = Order.mapInput(Version.order, (schema) => schema.version)

export const min = Order.min(order)
export const max = Order.max(order)
export const lessThan = Order.lessThan(order)
export const greaterThan = Order.greaterThan(order)

// ============================================================================
// Codecs
// ============================================================================

export const decode = S.decode(Versioned)
export const encode = S.encode(Versioned)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(Versioned)
