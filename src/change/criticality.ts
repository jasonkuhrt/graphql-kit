import { S } from '#dep/effect'
import { Level } from './level.js'

// ============================================================================
// Schema
// ============================================================================

export class Criticality extends S.Class<Criticality>('Criticality')({
  level: Level,
  reason: S.optional(S.String),
}, {
  title: 'Change Criticality',
  description: 'The criticality assessment of a GraphQL schema change',
}) {}

export type Level = typeof Level.Type

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
