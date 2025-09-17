<div align="center">
  <img src="docs/.vitepress/public/logo.svg" alt="GraphQL Kit Logo" width="200" height="200" />

# graphql-kit

GraphQL toolkit with Effect-based utilities.

</div>

## Installation

```bash
npm install graphql-kit
# or
pnpm add graphql-kit
# or
yarn add graphql-kit
```

## Usage

```typescript
import { Catalog } from 'graphql-kit/catalog'
import { Grafaid } from 'graphql-kit/grafaid'
import { Schema } from 'graphql-kit/schema'
// ... and more modules
```

## Modules

- `grafaid` - GraphQL AST and schema utilities
- `catalog` - Schema catalog management (versioned/unversioned)
- `schema` - Schema handling and operations
- `change` - Schema change tracking and analysis
- `revision` - Revision management
- `version` - Version handling (semver, date, custom)
- `lifecycles` - Schema lifecycle management
- `graphql-error` - GraphQL error utilities
- `graphql-schema-loader` - Schema loading utilities
- `graphql-schema-path` - Schema path parsing and resolution
- `schema-definition` - Schema definition utilities
- `date-only` - Date-only type handling
- `version-coverage` - Version coverage analysis

## License

MIT
