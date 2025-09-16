import type { TraversalError } from './error.js';
export declare const renderPathWithError: (error: TraversalError) => string;
export declare const renderTraversalError: (error: TraversalError) => string;
/**
 * Render a concise version of the error for inline display.
 */
export declare const renderTraversalErrorConcise: (error: TraversalError) => string;
/**
 * Convert traversal error to a diagnostic-friendly format.
 * Useful for integrating with build tools and IDEs.
 */
export declare const toDiagnosticMessage: (error: TraversalError) => {
    message: string;
    hint?: string;
    position: number;
    path: string;
};
//# sourceMappingURL=error-renderer.d.ts.map