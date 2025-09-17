# Catalog

Schema catalog management for versioned and unversioned schemas.

## Import

```typescript
import { Catalog } from 'graphql-kit/catalog'
```

## Overview

The Catalog module provides a way to manage collections of GraphQL schemas, both versioned and unversioned. It supports operations like adding, removing, and querying schemas within a catalog.

## Versioned Catalog

### Creating a Versioned Catalog

```typescript
import { Catalog } from 'graphql-kit/catalog'
import { Version } from 'graphql-kit/version'

// Create an empty versioned catalog
const catalog = Catalog.Versioned.create()

// Add a schema with version
const updatedCatalog = Catalog.Versioned.add(
  catalog,
  schema,
  Version.SemVer.create('1.0.0')
)
```

### Querying Versioned Schemas

```typescript
// Get schema by exact version
const schema = Catalog.Versioned.get(catalog, '1.0.0')

// Get latest version
const latest = Catalog.Versioned.getLatest(catalog)

// Get all versions
const versions = Catalog.Versioned.getVersions(catalog)

// Check if version exists
const hasVersion = Catalog.Versioned.has(catalog, '1.0.0')
```

### Version Range Queries

```typescript
// Get schemas within version range
const range = Catalog.Versioned.getRange(catalog, '>=1.0.0 <2.0.0')

// Get schemas matching version pattern
const matches = Catalog.Versioned.match(catalog, '1.x')
```

## Unversioned Catalog

### Creating an Unversioned Catalog

```typescript
import { Catalog } from 'graphql-kit/catalog'

// Create an empty unversioned catalog
const catalog = Catalog.Unversioned.create()

// Add schemas with identifiers
const updated = Catalog.Unversioned.add(
  catalog,
  'production',
  productionSchema
)
```

### Querying Unversioned Schemas

```typescript
// Get schema by identifier
const schema = Catalog.Unversioned.get(catalog, 'production')

// Get all identifiers
const ids = Catalog.Unversioned.getIdentifiers(catalog)

// Check if identifier exists
const hasSchema = Catalog.Unversioned.has(catalog, 'staging')
```

## Catalog Operations

### Merging Catalogs

```typescript
// Merge two catalogs
const merged = Catalog.merge(catalog1, catalog2)

// Merge with conflict resolution
const mergedWithStrategy = Catalog.mergeWith(
  catalog1,
  catalog2,
  (existing, incoming) => {
    // Custom conflict resolution
    return incoming // Use incoming on conflict
  }
)
```

### Filtering Catalogs

```typescript
// Filter schemas in catalog
const filtered = Catalog.filter(catalog, schema => {
  // Return true to keep schema
  return schema.getQueryType() !== null
})

// Filter by version (versioned catalog)
const recent = Catalog.Versioned.filterByVersion(
  catalog,
  version => version.major >= 2
)
```

### Transforming Catalogs

```typescript
// Transform all schemas in catalog
const transformed = Catalog.map(catalog, schema => {
  // Apply transformation to each schema
  return addCustomDirectives(schema)
})
```

## Catalog Analysis

### Schema Comparison

```typescript
// Compare schemas across versions
const changes = Catalog.Versioned.compareVersions(
  catalog,
  '1.0.0',
  '2.0.0'
)

// Find breaking changes
const breaking = Catalog.Versioned.findBreakingChanges(
  catalog,
  '1.0.0',
  '2.0.0'
)
```

### Statistics

```typescript
// Get catalog statistics
const stats = Catalog.getStatistics(catalog)
console.log({
  totalSchemas: stats.count,
  totalTypes: stats.totalTypes,
  averageFields: stats.averageFieldsPerType
})
```

## Persistence

### Serialization

```typescript
// Serialize catalog to JSON
const json = Catalog.toJSON(catalog)

// Save to file
await Effect.runPromise(
  Catalog.saveToFile(catalog, './catalog.json')
)
```

### Deserialization

```typescript
// Load from JSON
const catalog = Catalog.fromJSON(json)

// Load from file
const loadedCatalog = await Effect.runPromise(
  Catalog.loadFromFile('./catalog.json')
)
```

## Effect-based API

All Catalog operations support Effect for composable error handling:

```typescript
import { Effect, pipe } from 'effect'

pipe(
  Catalog.Versioned.create(),
  Effect.flatMap(catalog =>
    Catalog.Versioned.addEffect(
      catalog,
      schemaSDL,
      '1.0.0'
    )
  ),
  Effect.flatMap(catalog =>
    Catalog.Versioned.validateAll(catalog)
  ),
  Effect.catchTag('CatalogError', error => {
    console.error('Catalog operation failed:', error)
    return Effect.fail(error)
  })
)
```

## Integration Examples

### With Version Module

```typescript
import { Version } from 'graphql-kit/version'

// Use different version strategies
const semverCatalog = Catalog.Versioned.create(Version.SemVer)
const dateCatalog = Catalog.Versioned.create(Version.Date)
const customCatalog = Catalog.Versioned.create(customVersionStrategy)
```

### With Change Module

```typescript
import { Change } from 'graphql-kit/change'

// Track changes between catalog versions
const changes = pipe(
  Catalog.Versioned.getRange(catalog, '1.0.0', '2.0.0'),
  Effect.map(schemas =>
    Change.analyzeProgression(schemas)
  )
)
```

## See Also

- [Schema](/api/schema) - Schema management
- [Version](/api/version) - Version strategies
- [Change](/api/change) - Change tracking