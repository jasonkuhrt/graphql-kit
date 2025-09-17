# GraphQL Schema Loader

Utilities for loading GraphQL schemas from various sources.

## Import

```typescript
import { SchemaLoader } from 'graphql-kit/graphql-schema-loader'
```

## Overview

The GraphQL Schema Loader provides utilities to load schemas from files, URLs, and other sources with Effect-based error handling.

## Loading from Files

```typescript
// Load from SDL file
const schema = await Effect.runPromise(
  SchemaLoader.fromFile('./schema.graphql'),
)

// Load from JSON introspection
const fromJson = await Effect.runPromise(
  SchemaLoader.fromJSON('./schema.json'),
)
```

## Loading from URLs

```typescript
// Load from GraphQL endpoint
const schema = await Effect.runPromise(
  SchemaLoader.fromURL('https://api.example.com/graphql'),
)

// With authentication
const authenticated = await Effect.runPromise(
  SchemaLoader.fromURL('https://api.example.com/graphql', {
    headers: {
      Authorization: 'Bearer token',
    },
  }),
)
```

## See Also

- [Schema](/api/schema) - Schema management
- [Grafaid](/api/grafaid) - Schema parsing
