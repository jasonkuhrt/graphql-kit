# Installation

## Prerequisites

- Node.js 18 or higher
- TypeScript 5.0 or higher
- A package manager (pnpm, npm, or yarn)

## Package Installation

GraphQL Kit is available on npm and can be installed with any package manager:

::: code-group

```bash [pnpm]
pnpm add graphql-kit graphql effect
```

```bash [npm]
npm install graphql-kit graphql effect
```

```bash [yarn]
yarn add graphql-kit graphql effect
```

:::

## Peer Dependencies

GraphQL Kit has the following peer dependencies that must be installed:

- `graphql` (^16.0.0) - The GraphQL JavaScript reference implementation
- `effect` (^3.0.0) - The Effect library for functional programming

## TypeScript Configuration

GraphQL Kit is written in TypeScript and requires the following compiler options:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Module System

GraphQL Kit is ESM-only. Make sure your project is configured for ES modules:

```json
// package.json
{
  "type": "module"
}
```

Or use `.mjs` extensions for your JavaScript files.

## Importing Modules

GraphQL Kit provides multiple entry points for different functionality:

```typescript
// Core modules
import { Catalog } from 'graphql-kit/catalog'
import { Change } from 'graphql-kit/change'
import { Grafaid } from 'graphql-kit/grafaid'
import { Revision } from 'graphql-kit/revision'
import { Schema } from 'graphql-kit/schema'
import { Version } from 'graphql-kit/version'

// Utility modules
import { DateOnly } from 'graphql-kit/date-only'
import { GraphQLError } from 'graphql-kit/graphql-error'
import { SchemaLoader } from 'graphql-kit/graphql-schema-loader'
import { SchemaPath } from 'graphql-kit/graphql-schema-path'
import { Lifecycles } from 'graphql-kit/lifecycles'
import { SchemaDefinition } from 'graphql-kit/schema-definition'
import { VersionCoverage } from 'graphql-kit/version-coverage'
```

## Version-specific Imports

Some modules provide version-specific sub-modules:

```typescript
// Version strategies
import { CustomVersion } from 'graphql-kit/version/custom'
import { DateVersion } from 'graphql-kit/version/date'
import { IntegerVersion } from 'graphql-kit/version/integer'
import { SemVer } from 'graphql-kit/version/semver'
```

## Development Setup

For contributing to GraphQL Kit:

```bash
# Clone the repository
git clone https://github.com/jasonkuhrt/graphql-kit.git
cd graphql-kit

# Install dependencies
pnpm install

# Build the project
pnpm build

# Run tests
pnpm test

# Start development mode
pnpm dev
```
