import { Schema as S } from 'effect'
import * as Schema from '../schema/$.js'

export class Unversioned extends S.TaggedClass<Unversioned>('CatalogUnversioned')('CatalogUnversioned', {
  schema: Schema.Schema.Unversioned,
}, {
  identifier: 'CatalogUnversioned',
  title: 'Unversioned Catalog',
  description: 'A catalog of an unversioned GraphQL schema with its revision history',
  adt: { name: 'Catalog' },
}) {
  static is = S.is(Unversioned)
}
