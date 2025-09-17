# Date Only

Date handling utilities without time components.

## Import

```typescript
import { DateOnly } from 'graphql-kit/date-only'
```

## Overview

The Date Only module provides utilities for working with dates without time components, useful for date-based versioning and comparisons.

## Creating Dates

```typescript
// Create from components
const date = DateOnly.create(2024, 1, 15)

// Create from Date object
const fromDate = DateOnly.fromDate(new Date())

// Parse from string
const parsed = DateOnly.parse('2024-01-15')
```

## Date Operations

```typescript
// Compare dates
const isAfter = DateOnly.isAfter(date1, date2)
const isBefore = DateOnly.isBefore(date1, date2)
const isEqual = DateOnly.equals(date1, date2)

// Format dates
const formatted = DateOnly.format(date, 'YYYY-MM-DD')
```

## See Also

- [Version](/api/version) - Date-based versioning