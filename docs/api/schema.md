# Schema

High-level schema management with versioning support.

## Import

```typescript
import { Schema } from 'graphql-kit/schema'
```

## Overview

The Schema module provides high-level abstractions for managing GraphQL schemas, including versioned and unversioned schemas with Effect-based error handling.

## Creating Schemas

### From SDL String

```typescript
import { Effect, pipe } from 'effect'

const schemaEffect = Schema.fromString(`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`)

// Execute the effect
const schema = await Effect.runPromise(schemaEffect)
```

### From GraphQL Schema Object

```typescript
import { buildSchema } from 'graphql'

const graphqlSchema = buildSchema(`
  type Query {
    hello: String
  }
`)

const schema = Schema.fromGraphQLSchema(graphqlSchema)
```

## Versioned Schemas

Work with schemas that have version information:

```typescript
import { Schema } from 'graphql-kit/schema'
import { Version } from 'graphql-kit/version'

// Create a versioned schema
const versionedSchema = Schema.Versioned.create({
  schema: graphqlSchema,
  version: Version.SemVer.create('1.0.0'),
})

// Access version information
const version = Schema.Versioned.getVersion(versionedSchema)
const schema = Schema.Versioned.getSchema(versionedSchema)
```

## Unversioned Schemas

Work with schemas without version information:

```typescript
import { Schema } from 'graphql-kit/schema'

// Create an unversioned schema
const unversionedSchema = Schema.Unversioned.create(graphqlSchema)

// Convert to versioned
const versioned = Schema.Unversioned.toVersioned(
  unversionedSchema,
  Version.SemVer.create('1.0.0'),
)
```

## Schema Analysis

### Type Inspection

```typescript
// Get all types
const types = Schema.getTypes(schema)

// Get specific type
const userType = Schema.getType(schema, 'User')

// Check if type exists
const hasType = Schema.hasType(schema, 'User')
```

### Field Analysis

```typescript
// Get fields from an object type
const fields = Schema.getFields(schema, 'User')

// Get field type information
const fieldType = Schema.getFieldType(schema, 'User', 'email')

// Check field properties
const isRequired = Schema.isFieldRequired(schema, 'User', 'email')
const isList = Schema.isFieldList(schema, 'User', 'posts')
```

## Schema Transformations

### Adding Types

```typescript
pipe(
  schema,
  Schema.addType(newType),
  Effect.map(updatedSchema => {
    // Work with updated schema
  }),
)
```

### Modifying Types

```typescript
pipe(
  schema,
  Schema.updateType('User', type => ({
    ...type,
    description: 'Updated user type',
  })),
  Effect.map(updatedSchema => {
    // Work with updated schema
  }),
)
```

### Removing Types

```typescript
pipe(
  schema,
  Schema.removeType('DeprecatedType'),
  Effect.map(updatedSchema => {
    // Work with updated schema
  }),
)
```

## Schema Validation

```typescript
// Validate schema structure
const validation = Schema.validate(schema)

if (validation.isValid) {
  console.log('Schema is valid')
} else {
  console.error('Validation errors:', validation.errors)
}
```

## Schema Comparison

```typescript
// Compare two schemas
const differences = Schema.compare(schema1, schema2)

// Check if schemas are equivalent
const areEqual = Schema.equals(schema1, schema2)
```

## Working with Directives

```typescript
// Get all directives
const directives = Schema.getDirectives(schema)

// Get directive by name
const deprecated = Schema.getDirective(schema, 'deprecated')

// Check if field has directive
const isDeprecated = Schema.hasDirective(
  schema,
  'User',
  'oldField',
  'deprecated',
)
```

## Error Handling

All Schema operations use Effect for error handling:

```typescript
pipe(
  Schema.fromString(invalidSDL),
  Effect.catchTag('ParseError', error => {
    console.error('Failed to parse schema:', error.message)
    return Effect.fail(error)
  }),
  Effect.catchTag('ValidationError', error => {
    console.error('Schema validation failed:', error.message)
    return Effect.fail(error)
  }),
)
```

## Integration with Other Modules

```typescript
import { Catalog } from 'graphql-kit/catalog'
import { Change } from 'graphql-kit/change'
import { Schema } from 'graphql-kit/schema'

// Track changes between schemas
const changes = Change.between(oldSchema, newSchema)

// Add to catalog
const catalog = Catalog.add(catalog, schema, version)
```

## See Also

- [Grafaid](/api/grafaid) - Low-level GraphQL utilities
- [Catalog](/api/catalog) - Schema catalog management
- [Change](/api/change) - Schema change tracking
- [Version](/api/version) - Version management
