# Grafaid

GraphQL AST and schema utilities for working with GraphQL documents and schemas.

## Import

```typescript
import { Grafaid } from 'graphql-kit/grafaid'
```

## Overview

Grafaid provides low-level utilities for working with GraphQL AST nodes, documents, and schemas. It includes tools for parsing, analyzing, and manipulating GraphQL structures.

## Main APIs

### Schema Utilities

```typescript
// Parse a schema from SDL
const schema = Grafaid.Schema.parse(`
  type Query {
    hello: String
  }
`)

// Check if a type is a root type
const isRoot = Grafaid.Schema.isRootType(schema, someType)

// Get root type details
const rootDetails = Grafaid.Schema.getRootDetails(schema)
```

### Document Utilities

```typescript
// Work with GraphQL documents
const document = Grafaid.Document.parse(`
  query GetUser {
    user(id: "123") {
      name
      email
    }
  }
`)

// Analyze operation types
const operationType = Grafaid.Document.getOperationType(document)
```

### Type Guards

```typescript
// Check GraphQL type kinds
if (Grafaid.Schema.isObjectType(type)) {
  // type is GraphQLObjectType
}

if (Grafaid.Schema.isScalarType(type)) {
  // type is GraphQLScalarType
}

if (Grafaid.Schema.isListType(type)) {
  // type is GraphQLList
}
```

### AST Node Utilities

```typescript
// Work with AST nodes
const fieldNode = Grafaid.Document.createFieldNode({
  name: 'user',
  arguments: [/* ... */],
  selectionSet: /* ... */
})

// Check node kinds
if (Grafaid.Document.isFieldNode(node)) {
  // node is FieldNode
}
```

## Type Utilities

### Working with Type Wrappers

```typescript
// Unwrap non-null and list types
const innerType = Grafaid.Schema.unwrapType(wrappedType)

// Check if type is nullable
const isNullable = Grafaid.Schema.isNullableType(type)

// Get named type from wrapped type
const namedType = Grafaid.Schema.getNamedType(type)
```

### Schema Introspection

```typescript
// Get all types in schema
const typeMap = schema.getTypeMap()

// Get specific type by name
const userType = schema.getType('User')

// Get root operation types
const queryType = schema.getQueryType()
const mutationType = schema.getMutationType()
const subscriptionType = schema.getSubscriptionType()
```

## Error Handling

Grafaid uses Effect for error handling:

```typescript
import { Effect, pipe } from 'effect'

pipe(
  Grafaid.Schema.parseEffect(schemaSDL),
  Effect.map(schema => {
    // Work with parsed schema
    return schema.getQueryType()
  }),
  Effect.catchTag('ParseError', error => {
    console.error('Failed to parse schema:', error)
    return Effect.fail(error)
  }),
)
```

## Advanced Features

### Custom Scalars

```typescript
// Define custom scalar types
const DateScalar = Grafaid.Schema.createScalar({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize: (value) => value.toISOString(),
  parseValue: (value) => new Date(value),
  parseLiteral: (ast) => {
    if (ast.kind === 'StringValue') {
      return new Date(ast.value)
    }
    return null
  },
})
```

### Schema Validation

```typescript
// Validate schema for errors
const errors = Grafaid.Schema.validate(schema)
if (errors.length > 0) {
  console.error('Schema validation failed:', errors)
}
```

## See Also

- [Schema](/api/schema) - Higher-level schema management
- [Change](/api/change) - Schema change tracking
- [GraphQL Schema Path](/api/graphql-schema-path) - Path parsing and resolution
