# GraphQL Error

Utilities for handling and formatting GraphQL errors.

## Import

```typescript
import { GraphQLError } from 'graphql-kit/graphql-error'
```

## Overview

The GraphQL Error module provides enhanced error handling utilities for GraphQL operations, including error formatting, aggregation, and Effect integration.

## Creating Errors

```typescript
// Create a GraphQL error
const error = GraphQLError.create({
  message: 'Field not found',
  extensions: {
    code: 'FIELD_NOT_FOUND',
    field: 'user.email',
  },
})

// Create from native Error
const fromError = GraphQLError.fromError(new Error('Something went wrong'))
```

## Error Formatting

```typescript
// Format for client response
const formatted = GraphQLError.format(error)

// Format multiple errors
const errors = GraphQLError.formatAll([error1, error2, error3])
```

## Effect Integration

```typescript
import { Effect } from 'effect'

// Create Effect errors
const effect = GraphQLError.fail('Operation failed')

// Handle GraphQL errors in Effect
Effect.catchTag('GraphQLError', error => {
  console.error(GraphQLError.format(error))
  return Effect.fail(error)
})
```

## See Also

- [Grafaid](/api/grafaid) - Core GraphQL utilities
- [Schema](/api/schema) - Schema validation errors
