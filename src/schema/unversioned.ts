import { Order, Schema as S } from 'effect'
import { Revision } from '../revision/$.js'
import { SchemaDefinition } from '../schema-definition/$.js'

// Category class for better type safety
class Category extends S.Class<Category>('SchemaCategory')({
  name: S.String,
  types: S.Array(S.String),
}) {
  static is = S.is(Category)
}

export class Unversioned extends S.TaggedClass<Unversioned>('SchemaUnversioned')('SchemaUnversioned', {
  revisions: S.Array(Revision),
  definition: SchemaDefinition.SchemaDefinition,
  categories: S.optionalWith(
    S.Array(Category),
    { default: () => [] },
  ),
}, {
  title: 'Unversioned Schema',
  description: 'A GraphQL schema without semantic versioning',
  adt: { name: 'Schema' },
}) {
  static is = S.is(Unversioned)

  /**
   * Orders by first revision date if any
   */
  static order: Order.Order<Unversioned> = Order.mapInput(Order.string, (schema) => schema.revisions[0]?.date ?? '')

  static min = Order.min(Unversioned.order)
  static max = Order.max(Unversioned.order)
  static lessThan = Order.lessThan(Unversioned.order)
  static greaterThan = Order.greaterThan(Unversioned.order)
}
