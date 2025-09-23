import { Version } from '#version'
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
}) {
  static is = S.is(TypeKindBreakdown)

  get totalTypes(): number {
    return this.objectTypes + this.interfaceTypes + this.unionTypes
      + this.enumTypes + this.scalarTypes + this.inputTypes
  }

  get dominantTypeKind(): string {
    const types = [
      { kind: 'object', count: this.objectTypes },
      { kind: 'interface', count: this.interfaceTypes },
      { kind: 'union', count: this.unionTypes },
      { kind: 'enum', count: this.enumTypes },
      { kind: 'scalar', count: this.scalarTypes },
      { kind: 'input', count: this.inputTypes },
    ]
    return types.sort((a, b) => b.count - a.count)[0]!.kind
  }
}

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
}) {
  static is = S.is(DescriptionCoverage)

  get lowestCoverage(): { area: string; percentage: number } {
    const areas = [
      { area: 'types', percentage: this.types },
      { area: 'fields', percentage: this.fields },
      { area: 'arguments', percentage: this.arguments },
    ]
    return areas.sort((a, b) => a.percentage - b.percentage)[0]!
  }
}

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
}) {
  static is = S.is(DeprecationMetrics)

  get totalDeprecated(): number {
    return this.fields + this.enumValues + this.arguments
  }
}

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
  version: S.optional(Version.Version),
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
}) {
  static is = S.is(VersionStatistics)

  get totalOperations(): number {
    return this.queries + this.mutations + this.subscriptions
  }

  get schemaSize(): number {
    return this.totalTypes + this.totalFields + this.totalArguments
  }

  get isMutationHeavy(): boolean {
    return this.totalOperations > 0 && (this.mutations / this.totalOperations) > 0.5
  }

  get isQueryOnly(): boolean {
    return this.mutations === 0 && this.subscriptions === 0
  }
}

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
}) {
  static is = S.is(StabilityMetrics)

  get isStable(): boolean {
    return this.rating === 'high'
  }

  get isVolatile(): boolean {
    return this.rating === 'low'
  }

  get averageRevisionIntervalDays(): number | undefined {
    return this.averageRevisionInterval
      ? this.averageRevisionInterval / (1000 * 60 * 60 * 24)
      : undefined
  }
}
