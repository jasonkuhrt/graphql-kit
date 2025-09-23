import { Schema as S } from 'effect'

// ============================================================================
// Schema - Options
// ============================================================================

// ============================================================================
// Schema - Type Breakdown
// ============================================================================

/**
 * Breakdown of types by kind with percentages.
 */
export class TypeKindBreakdown extends S.Class<TypeKindBreakdown>('TypeKindBreakdown')({
  objectTypes: S.Number,
  objectTypesPercentage: S.Number,
  interfaceTypes: S.Number,
  interfaceTypesPercentage: S.Number,
  unionTypes: S.Number,
  unionTypesPercentage: S.Number,
  enumTypes: S.Number,
  enumTypesPercentage: S.Number,
  scalarTypes: S.Number,
  scalarTypesPercentage: S.Number,
  inputTypes: S.Number,
  inputTypesPercentage: S.Number,
}, {
  description: 'Breakdown of types by kind with percentages',
}) {}

// ============================================================================
// Schema - Description Coverage
// ============================================================================

/**
 * Coverage statistics for descriptions.
 */
export class DescriptionCoverage extends S.Class<DescriptionCoverage>('DescriptionCoverage')({
  /**
   * Percentage of types with descriptions.
   */
  types: S.Number,
  /**
   * Percentage of fields with descriptions.
   */
  fields: S.Number,
  /**
   * Percentage of arguments with descriptions.
   */
  arguments: S.Number,
  /**
   * Overall description coverage percentage.
   */
  overall: S.Number,
}, {
  description: 'Coverage statistics for descriptions',
}) {}

// ============================================================================
// Schema - Deprecation Metrics
// ============================================================================

/**
 * Metrics about deprecated schema elements.
 */
export class DeprecationMetrics extends S.Class<DeprecationMetrics>('DeprecationMetrics')({
  /**
   * Total number of deprecated fields.
   */
  fields: S.Number,
  /**
   * Total number of deprecated enum values.
   */
  enumValues: S.Number,
  /**
   * Total number of deprecated arguments.
   */
  arguments: S.Number,
  /**
   * Percentage of schema surface area that is deprecated.
   */
  surfaceAreaPercentage: S.Number,
}, {
  description: 'Metrics about deprecated schema elements',
}) {}

// ============================================================================
// Schema - Version Statistics
// ============================================================================

/**
 * Statistics for a single schema version.
 */
export class VersionStatistics extends S.Class<VersionStatistics>('VersionStatistics')({
  /**
   * Version identifier.
   */
  version: S.String,
  /**
   * Date of this version/revision.
   */
  date: S.optional(S.String),
  /**
   * Total number of types (excluding introspection types).
   */
  totalTypes: S.Number,
  /**
   * Type breakdown by kind.
   */
  typeBreakdown: TypeKindBreakdown,
  /**
   * Number of queries.
   */
  queries: S.Number,
  /**
   * Number of mutations.
   */
  mutations: S.Number,
  /**
   * Number of subscriptions.
   */
  subscriptions: S.Number,
  /**
   * Description coverage metrics.
   */
  descriptionCoverage: DescriptionCoverage,
  /**
   * Deprecation metrics.
   */
  deprecation: DeprecationMetrics,
  /**
   * Total number of fields across all types.
   */
  totalFields: S.Number,
  /**
   * Total number of arguments across all fields.
   */
  totalArguments: S.Number,
}, {
  description: 'Statistics for a single schema version',
}) {}

// ============================================================================
// Schema - Stability Metrics
// ============================================================================

/**
 * Stability metrics calculated across schema history.
 */
export class StabilityMetrics extends S.Class<StabilityMetrics>('StabilityMetrics')({
  /**
   * Churn rate - percentage of schema that changes between versions.
   */
  churnRate: S.optional(S.Number),
  /**
   * Average duration in milliseconds between revisions.
   */
  averageRevisionInterval: S.optional(S.Number),
  /**
   * Average number of revisions per day.
   */
  averageRevisionsPerDay: S.optional(S.Number),
  /**
   * Total number of revisions.
   */
  totalRevisions: S.Number,
  /**
   * Date of first revision.
   */
  firstRevisionDate: S.optional(S.String),
  /**
   * Date of last revision.
   */
  lastRevisionDate: S.optional(S.String),
  /**
   * Stability rating: 'high', 'medium', 'low' based on churn rate.
   */
  rating: S.optional(S.Union(S.Literal('high'), S.Literal('medium'), S.Literal('low'))),
}, {
  description: 'Stability metrics calculated across schema history',
}) {}
