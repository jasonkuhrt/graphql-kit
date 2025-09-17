# Schema Definition

Utilities for working with GraphQL schema definitions.

## Import

```typescript
import { SchemaDefinition } from 'graphql-kit/schema-definition'
```

## Overview

The Schema Definition module provides utilities for creating and manipulating GraphQL schema definitions programmatically.

## Creating Definitions

```typescript
// Create type definitions
const typeDef = SchemaDefinition.createType({
  name: 'User',
  fields: [
    { name: 'id', type: 'ID!' },
    { name: 'name', type: 'String!' },
    { name: 'email', type: 'String!' },
  ],
})
```

## See Also

- [Schema](/api/schema) - Schema management
- [Grafaid](/api/grafaid) - AST utilities
