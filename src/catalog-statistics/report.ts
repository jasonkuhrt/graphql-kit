import { S } from '../kit-temp/effect.js'
import { StabilityMetrics, VersionStatistics } from './data.js'

/**
 * Complete statistics report for a GraphQL catalog.
 */
export const Report = S.Struct({
  /**
   * Global stability metrics across all versions.
   */
  stability: StabilityMetrics,
  /**
   * Statistics per version.
   */
  versions: S.Array(VersionStatistics),
  /**
   * Current/latest version statistics (convenience).
   */
  current: S.optional(VersionStatistics),
}).annotations({
  identifier: 'StatisticsReport',
  description: 'Complete statistics report for a GraphQL catalog',
})

export type Report = typeof Report.Type

// ============================================================================
// Constructors
// ============================================================================

export const make = Report.make

// ============================================================================
// Type Guards
// ============================================================================

export const is = S.is(Report)

// ============================================================================
// Codec
// ============================================================================

export const decode = S.decode(Report)
export const decodeSync = S.decodeSync(Report)
export const encode = S.encode(Report)
