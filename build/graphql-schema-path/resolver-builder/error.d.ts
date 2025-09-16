import type { Path } from '../path.js';
import type { StepFailure } from './stepper.js';
import type { TraversalLocation } from './traversal-location.js';
declare const TraversalError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => import("effect/Cause").YieldableError & {
    readonly _tag: "TraversalError";
} & Readonly<A>;
/**
 * Error for failures during path traversal.
 * Contains full context about where and why traversal failed.
 */
export declare class TraversalError extends TraversalError_base<{
    /**
     * The original path that was being traversed.
     */
    path: Path;
    /**
     * Where in the path traversal failed.
     */
    location: TraversalLocation;
    /**
     * The underlying failure from the adaptor.
     */
    cause: StepFailure;
    /**
     * Suggestions for what might be available (from introspection).
     */
    suggestions?: string[];
}> {
}
/**
 * Extract the segment name from a path node for display.
 */
export declare const getSegmentName: (segment: any) => string;
/**
 * Extract a display name without prefix from a segment.
 */
export declare const getSegmentDisplayName: (segment: any) => string;
/**
 * Check if a value is a TraversalError.
 */
export declare const is: (value: unknown) => value is TraversalError;
/**
 * Re-export the print function for convenience.
 */
export { renderTraversalError as print } from './error-renderer.js';
//# sourceMappingURL=error.d.ts.map