# Change

Schema change tracking and breaking change detection.

## Import

```typescript
import { Change } from 'graphql-kit/change'
```

## Overview

The Change module provides comprehensive tools for tracking changes between GraphQL schemas, detecting breaking changes, and analyzing the criticality of changes.

## Change Detection

### Basic Comparison

```typescript
import { Change } from 'graphql-kit/change'

// Compare two schemas
const changes = Change.compare(oldSchema, newSchema)

// Check if there are any changes
if (changes.length > 0) {
  console.log(`Found ${changes.length} changes`)
}
```

### Change Types

```typescript
// Categorize changes by type
const breaking = Change.getBreaking(changes)
const dangerous = Change.getDangerous(changes)
const safe = Change.getSafe(changes)

console.log({
  breaking: breaking.length,
  dangerous: dangerous.length,
  safe: safe.length
})
```

## Change Analysis

### Change Details

Each change includes detailed information:

```typescript
changes.forEach(change => {
  console.log({
    type: change.type,
    path: change.path,
    criticality: change.criticality,
    description: change.description,
    breaking: change.isBreaking,
    oldValue: change.oldValue,
    newValue: change.newValue
  })
})
```

### Criticality Levels

```typescript
import { Criticality } from 'graphql-kit/change/criticality'

// Check change criticality
const critical = changes.filter(
  change => change.criticality === Criticality.Breaking
)

const dangerous = changes.filter(
  change => change.criticality === Criticality.Dangerous
)

const safe = changes.filter(
  change => change.criticality === Criticality.Safe
)
```

## Change Types

### Field Changes

```typescript
// Detect field additions
const addedFields = Change.getAddedFields(changes)

// Detect field removals
const removedFields = Change.getRemovedFields(changes)

// Detect field type changes
const typeChanges = Change.getFieldTypeChanges(changes)
```

### Type Changes

```typescript
// Detect type additions
const addedTypes = Change.getAddedTypes(changes)

// Detect type removals
const removedTypes = Change.getRemovedTypes(changes)

// Detect type kind changes
const kindChanges = Change.getTypeKindChanges(changes)
```

### Argument Changes

```typescript
// Detect argument additions
const addedArgs = Change.getAddedArguments(changes)

// Detect argument removals
const removedArgs = Change.getRemovedArguments(changes)

// Detect argument type changes
const argTypeChanges = Change.getArgumentTypeChanges(changes)
```

## Change Sets

### Creating Change Sets

```typescript
// Create a change set from multiple comparisons
const changeSet = Change.createChangeSet([
  { from: v1Schema, to: v2Schema, version: '1.0.0 -> 2.0.0' },
  { from: v2Schema, to: v3Schema, version: '2.0.0 -> 3.0.0' }
])
```

### Analyzing Change Sets

```typescript
// Get change summary
const summary = Change.summarize(changeSet)

console.log({
  totalChanges: summary.total,
  breakingChanges: summary.breaking,
  dangerousChanges: summary.dangerous,
  safeChanges: summary.safe,
  affectedTypes: summary.affectedTypes,
  affectedFields: summary.affectedFields
})
```

## Migration Guidance

### Generate Migration Guide

```typescript
// Generate migration instructions
const guide = Change.generateMigrationGuide(changes)

guide.forEach(instruction => {
  console.log({
    action: instruction.action,
    target: instruction.target,
    description: instruction.description,
    example: instruction.example
  })
})
```

### Compatibility Check

```typescript
// Check if schemas are compatible
const compatible = Change.areCompatible(oldSchema, newSchema)

if (!compatible) {
  const issues = Change.getCompatibilityIssues(oldSchema, newSchema)
  console.error('Schemas are not compatible:', issues)
}
```

## Change Rules

### Custom Rules

```typescript
// Define custom change rules
const customRules = Change.createRules({
  fieldRemoval: 'breaking',
  fieldAddition: 'safe',
  typeRemoval: 'breaking',
  deprecation: 'dangerous'
})

// Apply custom rules
const changes = Change.compare(oldSchema, newSchema, {
  rules: customRules
})
```

### Rule Overrides

```typescript
// Override default rules
const changes = Change.compare(oldSchema, newSchema, {
  overrides: {
    // Treat field additions as dangerous instead of safe
    fieldAddition: 'dangerous',
    // Ignore deprecations
    deprecation: 'ignore'
  }
})
```

## Reporting

### Text Report

```typescript
// Generate human-readable report
const report = Change.generateTextReport(changes)
console.log(report)
```

### JSON Report

```typescript
// Generate JSON report
const jsonReport = Change.generateJSONReport(changes)
await fs.writeFile('changes.json', JSON.stringify(jsonReport, null, 2))
```

### Markdown Report

```typescript
// Generate Markdown report
const markdown = Change.generateMarkdownReport(changes)
await fs.writeFile('CHANGELOG.md', markdown)
```

## Effect Integration

```typescript
import { Effect, pipe } from 'effect'

pipe(
  Effect.all([
    Schema.fromString(oldSDL),
    Schema.fromString(newSDL)
  ]),
  Effect.map(([oldSchema, newSchema]) =>
    Change.compare(oldSchema, newSchema)
  ),
  Effect.flatMap(changes => {
    if (Change.hasBreaking(changes)) {
      return Effect.fail('Breaking changes detected')
    }
    return Effect.succeed(changes)
  }),
  Effect.catchTag('ChangeError', error => {
    console.error('Change analysis failed:', error)
    return Effect.fail(error)
  })
)
```

## See Also

- [Schema](/api/schema) - Schema management
- [Catalog](/api/catalog) - Schema catalog
- [Version](/api/version) - Version management