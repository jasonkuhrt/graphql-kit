import { Data } from 'effect';
/**
 * Error for failures during path traversal.
 * Contains full context about where and why traversal failed.
 */
export class TraversalError extends Data.TaggedError('TraversalError') {
}
// ============================================================================
// Legacy Helper Functions (for compatibility)
// ============================================================================
/**
 * Extract the segment name from a path node for display.
 */
export const getSegmentName = (segment) => {
    switch (segment._tag) {
        case 'GraphQLPathSegmentType':
            return segment.name;
        case 'GraphQLPathSegmentField':
            return `.${segment.name}`;
        case 'GraphQLPathSegmentArgument':
            return `$${segment.name}`;
        case 'GraphQLPathSegmentResolvedType':
            return '#';
        default:
            return segment.name ?? 'unknown';
    }
};
/**
 * Extract a display name without prefix from a segment.
 */
export const getSegmentDisplayName = (segment) => {
    return segment.name ?? 'unknown';
};
// ============================================================================
// Type Guards
// ============================================================================
/**
 * Check if a value is a TraversalError.
 */
export const is = (value) => {
    return value instanceof TraversalError;
};
// ============================================================================
// Display
// ============================================================================
/**
 * Re-export the print function for convenience.
 */
export { renderTraversalError as print } from './error-renderer.js';
//# sourceMappingURL=error.js.map