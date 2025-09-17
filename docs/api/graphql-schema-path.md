# GraphQL Schema Path

Path parsing and resolution for GraphQL schemas.

## Import

```typescript
import { SchemaPath } from 'graphql-kit/graphql-schema-path'
```

## Overview

The GraphQL Schema Path module provides utilities for parsing and resolving paths within GraphQL schemas, similar to JSONPath but for GraphQL schemas.

## Path Syntax

```typescript
// Parse schema paths
const path = SchemaPath.parse('Query.user.email')
const nested = SchemaPath.parse('Mutation.updateUser(id: ID!).name')
```

## Path Resolution

```typescript
// Resolve path in schema
const resolved = SchemaPath.resolve(schema, 'Query.user')

// Get type at path
const type = SchemaPath.getType(schema, 'User.email')
```

## See Also

- [Schema](/api/schema) - Schema navigation
- [Grafaid](/api/grafaid) - Schema utilities