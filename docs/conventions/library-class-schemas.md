# Class Schema Convention

## Overview

Schema classes use Effect Schema's `TaggedClass` and `Class` APIs with a minimal, class-as-namespace pattern.

## Key Principles

1. **Classes as Namespaces**: Classes themselves serve as namespaces with static methods
2. **Minimal Definition**: Only essential static methods are defined
3. **Direct Imports**: Import classes directly, not as namespaces
4. **No Module-Level Exports**: All functionality is on the class via static methods or inherited

## Class Structure

### Basic Template

```typescript
import { Schema as S } from 'effect'

export class ClassName extends S.TaggedClass<ClassName>('Tag')('Tag', {
  // fields
}) {
  static is = S.is(ClassName)
}
```

### What Each Class Provides

- **`.make()`** - Inherited from TaggedClass, no need to define
- **`.is()`** - Type guard as static method
- **Equality** - Built-in via Data.Class (use `Equal.equals(a, b)`)
- **Hashing** - Built-in via Data.Class

### What Consumers Use Directly from Effect

When needed, consumers use Effect Schema functions directly:

```typescript
import { Schema as S } from 'effect'
import { MyClass } from './my-class.js'

// Decoding
const decode = S.decode(MyClass)
const result = decode(data)

// Encoding
const encode = S.encode(MyClass)
const encoded = encode(instance)
```

## Import Pattern

### ❌ Old Pattern (namespace imports)

```typescript
import * as User from './user.js'

const user = User.make({ name: 'Alice' })
const isValid = User.is(value)
```

### ✅ New Pattern (direct imports)

```typescript
import { User } from './user.js'

const user = User.make({ name: 'Alice' })
const isValid = User.is(value)
```

## Examples

### Simple Schema Class

```typescript
import { Schema as S } from 'effect'

export class User extends S.TaggedClass<User>('User')('User', {
  id: S.String,
  name: S.String,
  email: S.String,
}) {
  static is = S.is(User)
}
```

### Class with Domain Logic

```typescript
import { Schema as S } from 'effect'

export class Document extends S.TaggedClass<Document>('Document')('Document', {
  content: S.String,
  version: S.Number,
}) {
  static is = S.is(Document)

  // Domain-specific static methods
  static getLatestVersion = (docs: Document[]): Document => {
    return docs.reduce((latest, doc) =>
      doc.version > latest.version ? doc : latest
    )
  }
}
```

### Class with Ordering

```typescript
import { Order, Schema as S } from 'effect'

export class Revision extends S.TaggedClass<Revision>('Revision')('Revision', {
  date: S.String,
  changes: S.Array(S.String),
}) {
  static is = S.is(Revision)

  static order: Order.Order<Revision> = Order.mapInput(
    Order.string,
    (revision) => revision.date,
  )

  static min = Order.min(Revision.order)
  static max = Order.max(Revision.order)
}
```

## Union Types

When creating unions, use the classes directly:

```typescript
import { Schema as S } from 'effect'
import { UnversionedDoc } from './unversioned-doc.js'
import { VersionedDoc } from './versioned-doc.js'

export const Document = S.Union(VersionedDoc, UnversionedDoc)
export type Document = typeof Document.Type
```

## Benefits

1. **Less Boilerplate**: No redundant codec exports
2. **Clear Intent**: Shows we're using Effect Schema directly
3. **Smaller Files**: Minimal code per schema
4. **Type Safety**: Full type inference with `.make()`
5. **Consistency**: Uniform pattern across all schemas
