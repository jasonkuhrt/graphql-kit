import { S } from '#dep/effect'
import { Order } from 'effect'
import { Revision } from '../revision/$.js'
import { SchemaDefinition } from '../schema-definition/$.js'

// ============================================================================
// Schema
// ============================================================================

// Category class for better type safety
class Category extends S.Class<Category>('SchemaCategory')({
  name: S.String,
  types: S.Array(S.String),
}) {}

export class Unversioned extends S.TaggedClass<Unversioned>('SchemaUnversioned')('SchemaUnversioned', {
  revisions: S.Array(Revision.Revision),
  definition: SchemaDefinition.SchemaDefinition,
  categories: S.optionalWith(
    S.Array(Category),
    { default: () => [] },
  ),
}, {
  title: 'Unversioned Schema',
  description: 'A GraphQL schema without semantic versioning',
  adt: { name: 'Schema' },
}) {}

// ============================================================================
// Type Guard
// ============================================================================

export const is = S.is(Unversioned)

// ============================================================================
// Ordering
// ============================================================================

/**
 * Orders by first revision date if any
 */
export const order: Order.Order<Unversioned> = Order.mapInput(Order.string, (schema) => schema.revisions[0]?.date ?? '')

export const min = Order.min(order)
export const max = Order.max(order)
export const lessThan = Order.lessThan(order)
export const greaterThan = Order.greaterThan(order)

// ============================================================================
// Codecs
// ============================================================================

export const decode = S.decode(Unversioned)
export const encode = S.encode(Unversioned)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(Unversioned)
