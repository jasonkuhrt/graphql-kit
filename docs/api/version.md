# Version

Flexible version management with multiple strategies.

## Import

```typescript
import { Version } from 'graphql-kit/version'

// Strategy-specific imports
import { CustomVersion } from 'graphql-kit/version/custom'
import { DateVersion } from 'graphql-kit/version/date'
import { IntegerVersion } from 'graphql-kit/version/integer'
import { SemVer } from 'graphql-kit/version/semver'
```

## Overview

The Version module provides flexible version management with built-in strategies for semantic versioning, date-based versioning, integer versioning, and custom version schemes.

## Semantic Versioning (SemVer)

### Creating SemVer Versions

```typescript
import { SemVer } from 'graphql-kit/version/semver'

// Create from string
const v1 = SemVer.create('1.2.3')
const v2 = SemVer.create('2.0.0-beta.1')

// Create from components
const v3 = SemVer.from({
  major: 1,
  minor: 2,
  patch: 3,
  prerelease: 'beta.1',
  build: 'build.123',
})
```

### SemVer Operations

```typescript
// Increment versions
const v2 = SemVer.incrementMajor(v1) // 2.0.0
const v3 = SemVer.incrementMinor(v1) // 1.3.0
const v4 = SemVer.incrementPatch(v1) // 1.2.4

// Compare versions
const isNewer = SemVer.compare(v2, v1) > 0
const isEqual = SemVer.equals(v1, v1Copy)

// Check version ranges
const inRange = SemVer.satisfies(v1, '>=1.0.0 <2.0.0')
```

## Date-based Versioning

### Creating Date Versions

```typescript
import { DateVersion } from 'graphql-kit/version/date'

// Create from date
const v1 = DateVersion.create(new Date('2024-01-15'))
const v2 = DateVersion.fromString('2024-01-15')

// Create current date version
const current = DateVersion.now()
```

### Date Version Operations

```typescript
// Compare date versions
const isNewer = DateVersion.compare(v2, v1) > 0

// Format date versions
const formatted = DateVersion.format(v1, 'YYYY-MM-DD')
const iso = DateVersion.toISO(v1)

// Get date components
const year = DateVersion.getYear(v1)
const month = DateVersion.getMonth(v1)
const day = DateVersion.getDay(v1)
```

## Integer Versioning

### Creating Integer Versions

```typescript
import { IntegerVersion } from 'graphql-kit/version/integer'

// Create from number
const v1 = IntegerVersion.create(1)
const v2 = IntegerVersion.create(42)

// Parse from string
const v3 = IntegerVersion.parse('100')
```

### Integer Version Operations

```typescript
// Increment version
const next = IntegerVersion.increment(v1) // 2

// Compare versions
const isNewer = IntegerVersion.compare(v2, v1) > 0

// Get numeric value
const value = IntegerVersion.toNumber(v1)
```

## Custom Versioning

### Defining Custom Strategies

```typescript
import { CustomVersion } from 'graphql-kit/version/custom'

// Define a custom version strategy
const myStrategy = CustomVersion.define({
  parse: (input: string) => {
    // Parse custom format
    const [year, release] = input.split('-')
    return { year: parseInt(year), release }
  },

  format: (version) => {
    return `${version.year}-${version.release}`
  },

  compare: (a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    }
    return a.release.localeCompare(b.release)
  },

  increment: (version) => {
    const releaseNum = parseInt(version.release) || 0
    return {
      ...version,
      release: String(releaseNum + 1),
    }
  },
})

// Use custom strategy
const v1 = myStrategy.create('2024-alpha')
const v2 = myStrategy.increment(v1)
```

## Version Comparison

### Universal Comparison

```typescript
import { Version } from 'graphql-kit/version'

// Compare any version types
const result = Version.compare(v1, v2)

if (result < 0) {
  console.log('v1 is older than v2')
} else if (result > 0) {
  console.log('v1 is newer than v2')
} else {
  console.log('versions are equal')
}
```

### Sorting Versions

```typescript
// Sort an array of versions
const versions = [v3, v1, v2]
const sorted = Version.sort(versions)

// Sort in descending order
const descending = Version.sortDescending(versions)
```

## Version Ranges

### Range Checking

```typescript
// Check if version is in range
const inRange = Version.inRange(v1, { min: v0, max: v2 })

// Check multiple ranges
const ranges = [
  { min: v1, max: v2 },
  { min: v3, max: v4 },
]
const inAnyRange = Version.inAnyRange(version, ranges)
```

### Range Operations

```typescript
// Create version range
const range = Version.createRange('>=1.0.0 <2.0.0')

// Check if version satisfies range
const satisfies = Version.satisfiesRange(version, range)

// Get versions within range
const filtered = Version.filterByRange(versions, range)
```

## Version Parsing

### Flexible Parsing

```typescript
// Auto-detect version format
const version = Version.parse('1.2.3') // SemVer
const dateVer = Version.parse('2024-01-15') // Date
const intVer = Version.parse('42') // Integer

// Parse with specific strategy
const semver = Version.parseAs('1.2.3', 'semver')
const date = Version.parseAs('2024-01-15', 'date')
```

## Version Conversion

### Between Strategies

```typescript
// Convert between version types
const dateFromSemver = Version.toDate(semverVersion)
const intFromDate = Version.toInteger(dateVersion)

// Custom conversion
const converted = Version.convert(version, targetStrategy)
```

## Effect Integration

```typescript
import { Effect, pipe } from 'effect'

pipe(
  Version.parseEffect('1.2.3'),
  Effect.flatMap(version => Version.validateEffect(version)),
  Effect.map(version => Version.increment(version)),
  Effect.catchTag('VersionError', error => {
    console.error('Version operation failed:', error)
    return Effect.fail(error)
  }),
)
```

## See Also

- [Catalog](/api/catalog) - Version catalog management
- [Schema](/api/schema) - Versioned schemas
- [Change](/api/change) - Version change tracking
