import type { Obj } from '@wollybeard/kit'
import { Order, Schema as S } from 'effect'
import { Revision } from '../revision/$.js'
import { SchemaDefinition } from '../schema-definition/$.js'
import { Version } from '../version/$.js'

// ============================================================================
// Schema
// ============================================================================

export interface BranchPoint {
  readonly schema: Versioned
  readonly revision: Revision
}

export interface BranchPointEncoded {
  readonly schema: VersionedEncoded
  readonly revision: Revision
}

export interface Versioned {
  readonly _tag: 'SchemaVersioned'
  readonly version: Version.Version
  readonly branchPoint: BranchPoint | null
  readonly revisions: ReadonlyArray<Revision>
  readonly definition: SchemaDefinition.SchemaDefinition
  readonly categories: ReadonlyArray<{ readonly name: string; readonly types: ReadonlyArray<string> }>
}

export interface VersionedEncoded extends
  Obj.Replace<Versioned, {
    readonly version: S.Schema.Encoded<typeof Version.Version>
    readonly branchPoint: BranchPointEncoded | null
    readonly revisions: ReadonlyArray<S.Schema.Encoded<typeof Revision>>
    readonly definition: S.Schema.Encoded<typeof SchemaDefinition.SchemaDefinition>
  }>
{}

// Category class for better type safety
class Category extends S.Class<Category>('SchemaCategory')({
  name: S.String,
  types: S.Array(S.String),
}) {
  static is = S.is(Category)
}

// BranchPoint class
class BranchPointSchema extends S.Class<BranchPointSchema>('BranchPoint')({
  // The 'as any' is needed here due to circular type reference during class definition
  schema: S.suspend((): S.Schema<Versioned, VersionedEncoded> => Versioned as any),
  revision: Revision,
}) {
  static is = S.is(BranchPointSchema)
}

export class Versioned extends S.TaggedClass<Versioned>('SchemaVersioned')('SchemaVersioned', {
  version: Version.Version,
  branchPoint: S.NullOr(BranchPointSchema),
  revisions: S.Array(Revision),
  definition: SchemaDefinition.SchemaDefinition,
  categories: S.optionalWith(
    S.Array(Category),
    { default: () => [] },
  ),
}) {
  static is = S.is(Versioned)

  static order: Order.Order<Versioned> = Order.mapInput(Version.order, (schema) => schema.version)

  static min = Order.min(Versioned.order)
  static max = Order.max(Versioned.order)
  static lessThan = Order.lessThan(Versioned.order)
  static greaterThan = Order.greaterThan(Versioned.order)
}
