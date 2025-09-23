import { Match, Schema as S } from 'effect'
import { Unversioned } from './unversioned.js'
import { Versioned } from './versioned.js'

// ============================================================================
// Members
// ============================================================================

export { Unversioned } from './unversioned.js'
export { Versioned } from './versioned.js'

// ============================================================================
// Schema
// ============================================================================

export const Schema = S.Union(Versioned, Unversioned)

export type Schema = typeof Schema.Type

// ============================================================================
// Type Guard
// ============================================================================

export const is = S.is(Schema)

// ============================================================================
// Codecs
// ============================================================================

export const decode = S.decode(Schema)
export const encode = S.encode(Schema)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(Schema)

// ============================================================================
// Helpers
// ============================================================================

export const getVersion = (schema: Schema) =>
  Match.value(schema).pipe(
    Match.tagsExhaustive({
      SchemaUnversioned: () => undefined,
      SchemaVersioned: (s) => s.version,
    }),
  )
