import { Either, Schema as S } from 'effect';
import { Nodes } from '../nodes/$.js';
import * as TraversalError from './error.js';
/**
 * Core failure types for path traversal steps.
 * These are returned by adaptors when traversal fails.
 * The framework uses introspection to enrich these with details.
 */
// ============================================================================
// Step Failure Schemas
// ============================================================================
/**
 * The requested node could not be found.
 */
export const NodeNotFound = S.TaggedStruct('NodeNotFound', {});
/**
 * The target node's kind doesn't match what's required for this traversal.
 */
export const KindMismatch = S.TaggedStruct('KindMismatch', {});
/**
 * Union of all step failures.
 */
export const StepFailure = S.Union(NodeNotFound, KindMismatch);
// ============================================================================
// Constructors
// ============================================================================
export var StepFailures;
(function (StepFailures) {
    StepFailures.NodeNotFound = (input = {}) => ({ _tag: 'NodeNotFound', ...input });
    StepFailures.KindMismatch = (input = {}) => ({ _tag: 'KindMismatch', ...input });
})(StepFailures || (StepFailures = {}));
// ============================================================================
// Guard Failure
// ============================================================================
export const GuardFailure = S.TaggedStruct('KindMismatch', {});
// ============================================================================
// Stepper Execution
// ============================================================================
export const runStepper = (stepper, state) => {
    // Check if this node's parent is Root (unmapped)
    const isRootChild = state.parentChain.length === 0;
    if (isRootChild) {
        // Root-child nodes only get pathNode and context
        return stepper.step({
            pathNode: state.currentPathNode,
            context: state.context,
        });
    }
    // Handle guard if present for non-root-child nodes
    let effectiveTargetNode = state.targetParentNode;
    if (stepper.guard) {
        const guardResult = stepper.guard(state.targetParentNode);
        if (Either.isLeft(guardResult)) {
            // Guard failed
            const location = {
                currentNode: state.currentPathNode,
                parentChain: [...state.parentChain],
                position: state.position,
            };
            // For KindMismatch, we can provide node kind information
            let nodeKind;
            if (state.options?.introspection) {
                nodeKind = state.options.introspection.getKind?.({
                    node: state.targetParentNode,
                    context: state.context,
                });
            }
            return Either.left(new TraversalError.TraversalError({
                path: state.path,
                location,
                cause: guardResult.left, // GuardFailure has same shape as KindMismatch
                // Could add nodeKind here if TraversalError supported it
            }));
        }
        // Guard passed - use narrowed value
        effectiveTargetNode = guardResult.right;
    }
    // Execute the step with target node
    return stepper.step({
        pathNode: state.currentPathNode,
        targetNode: effectiveTargetNode,
        context: state.context,
    });
};
//# sourceMappingURL=stepper.js.map