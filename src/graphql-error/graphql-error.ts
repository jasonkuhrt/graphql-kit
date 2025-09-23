import { S } from '#dep/effect'

// ============================================================================
// Schema
// ============================================================================

/**
 * GraphQL source location information
 */
export class Location extends S.Class<Location>('GraphQLLocation')({
  line: S.Number,
  column: S.Number,
}, {
  description: 'Source location in a GraphQL document',
}) {
  static is = S.is(Location)
}

/**
 * GraphQL error structure
 */
export class GraphQLError extends S.Class<GraphQLError>('GraphQLError')({
  message: S.String,
  locations: S.optional(S.Array(Location)),
}, {
  description: 'GraphQL validation or execution error',
}) {
  static is = S.is(GraphQLError)
}

/**
 * Example info for validation context
 */
class ValidationExample extends S.Class<ValidationExample>('ValidationExample')({
  id: S.String,
  path: S.String,
}) {
  static is = S.is(ValidationExample)
}

/**
 * Context for GraphQL validation errors
 */
export class ValidationContext extends S.Class<ValidationContext>('GraphQLValidationContext')({
  example: ValidationExample,
  version: S.String,
  errors: S.Array(GraphQLError),
}, {
  description: 'Context for GraphQL validation errors against a schema version',
}) {
  static is = S.is(ValidationContext)
}

// ============================================================================
// Type guards
// ============================================================================

// ============================================================================
// Codecs
// ============================================================================

export const decode = S.decode(GraphQLError)
export const decodeSync = S.decodeSync(GraphQLError)
export const encode = S.encode(GraphQLError)
