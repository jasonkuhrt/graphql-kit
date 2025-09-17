# Getting Started

GraphQL Kit is a comprehensive toolkit for working with GraphQL schemas in TypeScript, built on top of Effect for robust error handling and functional programming patterns.

## Quick Start

### Installation

```bash
pnpm add graphql-kit graphql effect
# or
npm install graphql-kit graphql effect
# or
yarn add graphql-kit graphql effect
```

Note: `graphql` is a peer dependency and must be installed separately.

### Basic Usage

```typescript
import { Grafaid } from 'graphql-kit/grafaid'
import { Schema } from 'graphql-kit/schema'
import { Effect } from 'effect'

// Parse a GraphQL schema
const schema = Grafaid.Schema.parse(`
  type Query {
    hello: String
  }
`)

// Work with schema objects
const queryType = schema.getQueryType()
console.log(queryType?.name) // "Query"
```

## Core Concepts

### Effect-based APIs

GraphQL Kit uses Effect for error handling and composition. This provides:

- **Type-safe error handling** - Errors are part of the type signature
- **Composability** - Chain operations with confidence
- **Resource management** - Automatic cleanup of resources
- **Observability** - Built-in support for tracing and metrics

### Modular Architecture

Each module in GraphQL Kit is designed to be used independently:

```typescript
// Import only what you need
import { Catalog } from 'graphql-kit/catalog'
import { Change } from 'graphql-kit/change'
import { Version } from 'graphql-kit/version'
```

### Type Safety

All APIs are fully typed with TypeScript, providing excellent IDE support and compile-time safety:

```typescript
import { Schema } from 'graphql-kit/schema'
import { pipe } from 'effect'

// Type-safe schema operations
pipe(
  Schema.fromString(schemaSDL),
  Effect.map(schema => {
    // schema is fully typed here
    const types = schema.getTypeMap()
    return types
  })
)
```

## Next Steps

- Learn about [installation options](./installation)
- Explore the [API documentation](/api/grafaid)
- Check out [examples](https://github.com/jasonkuhrt/graphql-kit/tree/main/examples)