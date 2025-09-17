# Revision

Schema revision management and tracking.

## Import

```typescript
import { Revision } from 'graphql-kit/revision'
```

## Overview

The Revision module provides tools for managing schema revisions, tracking changes over time, and maintaining revision history.

## Creating Revisions

```typescript
import { Revision } from 'graphql-kit/revision'

// Create a new revision
const revision = Revision.create({
  schema: graphqlSchema,
  version: '1.0.0',
  timestamp: new Date(),
  author: 'john.doe',
  message: 'Initial schema revision',
})
```

## Revision Properties

```typescript
// Access revision metadata
const schema = Revision.getSchema(revision)
const version = Revision.getVersion(revision)
const timestamp = Revision.getTimestamp(revision)
const author = Revision.getAuthor(revision)
const message = Revision.getMessage(revision)
```

## Revision History

```typescript
// Create revision history
const history = Revision.createHistory()

// Add revisions
const updated = Revision.addToHistory(history, revision)

// Get revisions
const latest = Revision.getLatest(history)
const all = Revision.getAllRevisions(history)
const byVersion = Revision.getByVersion(history, '1.0.0')
```

## See Also

- [Schema](/api/schema) - Schema management
- [Version](/api/version) - Version strategies
- [Change](/api/change) - Change tracking
