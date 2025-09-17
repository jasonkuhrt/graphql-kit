# Version Coverage

Analyze version coverage and compatibility.

## Import

```typescript
import { VersionCoverage } from 'graphql-kit/version-coverage'
```

## Overview

The Version Coverage module provides tools for analyzing version coverage across schemas and detecting compatibility gaps.

## Coverage Analysis

```typescript
// Analyze coverage between versions
const coverage = VersionCoverage.analyze(schemas, versions)

// Get coverage percentage
const percentage = VersionCoverage.getPercentage(coverage)

// Find gaps
const gaps = VersionCoverage.findGaps(coverage)
```

## See Also

- [Version](/api/version) - Version management
- [Catalog](/api/catalog) - Version catalogs