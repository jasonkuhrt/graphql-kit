import { S } from '#dep/effect'
import { Schema } from '../schema/$.js'

// ============================================================================
// Schema
// ============================================================================

export class Unversioned extends S.TaggedClass<Unversioned>('CatalogUnversioned')('CatalogUnversioned', {
  schema: Schema.Unversioned.Unversioned,
}, {
  identifier: 'CatalogUnversioned',
  title: 'Unversioned Catalog',
  description: 'A catalog of an unversioned GraphQL schema with its revision history',
  adt: { name: 'Catalog' },
}) {}

// ============================================================================
// Constructors
// ============================================================================

export const make = Unversioned.make.bind(Unversioned)

// ============================================================================
// Guards
// ============================================================================

export const is = S.is(Unversioned)

// ============================================================================
// Codecs
// ============================================================================

export const decode = S.decode(Unversioned)
export const encode = S.encode(Unversioned)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(Unversioned)
