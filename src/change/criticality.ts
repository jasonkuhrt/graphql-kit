import { Level } from '#change/level'
import { S } from '#kit-temp'

// ============================================================================
// Schema
// ============================================================================

export const Criticality = S.Struct({
  level: Level,
  reason: S.optional(S.String),
}).annotations({
  identifier: 'Criticality',
  title: 'Change Criticality',
  description: 'The criticality assessment of a GraphQL schema change',
})

export type Level = typeof Level.Type
export type Criticality = typeof Criticality.Type

// ============================================================================
// Constructors
// ============================================================================

export const make = Criticality.make

// ============================================================================
// Guards
// ============================================================================

export const is = S.is(Criticality)

// ============================================================================
// State Predicates
// ============================================================================

export const isBreaking = (criticality: Criticality): boolean => criticality.level === 'BREAKING'

export const isDangerous = (criticality: Criticality): boolean => criticality.level === 'DANGEROUS'

export const isSafe = (criticality: Criticality): boolean => criticality.level === 'NON_BREAKING'

// ============================================================================
// Codecs
// ============================================================================

export const decode = S.decode(Criticality)
export const encode = S.encode(Criticality)

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(Criticality)
