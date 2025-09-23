import { Schema as S } from 'effect'
import { StabilityMetrics, VersionStatistics } from './data.js'

/**
 * Complete statistics report for a GraphQL catalog.
 */
export class Report extends S.Class<Report>('StatisticsReport')({
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
}, {
  description: 'Complete statistics report for a GraphQL catalog',
}) {
  static is = S.is(Report)
}
