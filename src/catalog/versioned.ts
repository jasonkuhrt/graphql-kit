import { Array, Either, HashMap, Order, pipe, Schema as S } from 'effect'
import * as Schema from '../schema/$.js'
import { Version } from '../version/$.js'
import { EmptyCatalogError } from './catalog.js'

// ============================================================================
// Schema
// ============================================================================

export class Versioned extends S.TaggedClass<Versioned>('CatalogVersioned')('CatalogVersioned', {
  entries: S.HashMap({
    key: Version.Version,
    value: Schema.Schema.Versioned,
  }),
}, {
  identifier: 'CatalogVersioned',
  title: 'Versioned Catalog',
  description: 'A catalog of versioned GraphQL schemas with their revision history',
  adt: { name: 'Catalog' },
}) {
  static is = S.is(Versioned)

  /**
   * Get all schemas sorted by version (newest first)
   */
  static getAll = (catalog: Versioned): Schema.Schema.Versioned[] => {
    return pipe(
      catalog.entries,
      HashMap.values,
      Array.fromIterable,
      // Put newest versions first in array
      Array.sort(Order.reverse(Schema.Schema.Versioned.order)),
    )
  }

  /**
   * Get the latest schema from a versioned catalog.
   * The latest version is determined by Version.max comparison.
   *
   * @param catalog - The versioned catalog
   * @returns Either with the latest schema or EmptyCatalogError
   */
  static getLatest = (catalog: Versioned): Either.Either<Schema.Schema.Versioned, EmptyCatalogError> => {
    const schema = Versioned.getAll(catalog)[0]
    if (!schema) {
      return Either.left(
        new EmptyCatalogError({
          reason: 'Versioned catalog has no entries - cannot get latest schema',
        }),
      )
    }
    return Either.right(schema)
  }

  static getOldestOrThrow = (catalog: Versioned): Schema.Schema.Versioned => {
    const schemas = Versioned.getAll(catalog)
    const schema = schemas[schemas.length - 1]
    if (!schema) throw new Error('Versioned catalog has no entries - cannot get oldest schema')
    return schema
  }

  /**
   * Get the latest schema definition from a versioned catalog.
   * The latest version is determined by Version.max comparison.
   *
   * @param catalog - The versioned catalog
   * @returns The GraphQL schema definition of the latest version
   * @throws {Error} If the catalog has no entries
   * @deprecated Use getLatest which returns Either
   */
  static getLatestOrThrow = (catalog: Versioned): Schema.Schema.Versioned => {
    const result = Versioned.getLatest(catalog)
    if (Either.isLeft(result)) {
      throw new Error(result.left.reason)
    }
    return result.right
  }

  /**
   * Get all versions sorted (newest first)
   */
  static getVersions = (catalog: Versioned): Version.Version[] => {
    return pipe(
      catalog,
      Versioned.getAll,
      Array.map(_ => _.version),
    )
  }
}
