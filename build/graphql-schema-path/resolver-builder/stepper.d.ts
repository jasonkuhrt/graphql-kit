import { Either, Schema as S } from 'effect';
import { Nodes } from '../nodes/$.js';
import type { Path } from '../path.js';
import type { TargetSpec } from './define.js';
import * as TraversalError from './error.js';
/**
 * Core failure types for path traversal steps.
 * These are returned by adaptors when traversal fails.
 * The framework uses introspection to enrich these with details.
 */
/**
 * The requested node could not be found.
 */
export declare const NodeNotFound: S.TaggedStruct<"NodeNotFound", {}>;
/**
 * The target node's kind doesn't match what's required for this traversal.
 */
export declare const KindMismatch: S.TaggedStruct<"KindMismatch", {}>;
/**
 * Union of all step failures.
 */
export declare const StepFailure: S.Union<[S.TaggedStruct<"NodeNotFound", {}>, S.TaggedStruct<"KindMismatch", {}>]>;
export type NodeNotFound = typeof NodeNotFound.Type;
export type KindMismatch = typeof KindMismatch.Type;
export type StepFailure = typeof StepFailure.Type;
export declare namespace StepFailures {
    const NodeNotFound: (input?: {}) => {
        _tag: "NodeNotFound";
    };
    const KindMismatch: (input?: {}) => {
        _tag: "KindMismatch";
    };
}
export declare const GuardFailure: S.TaggedStruct<"KindMismatch", {}>;
export type GuardFailure = typeof GuardFailure.Type;
export interface Stepper {
    guard?: (targetNode: any) => Either.Either<any, GuardFailure>;
    step: (params: any) => Either.Either<any, StepFailure>;
}
export type GetStepperInputTargetNode<$TargetSpec extends TargetSpec, $Tag extends Nodes.$Types.Tag> = NonNullable<$TargetSpec['nodes'][Nodes.$Types.GetParentTags<$Tag> & keyof $TargetSpec['nodes']]>;
export interface TraversalState {
    path: Path;
    parentChain: Nodes.$Groups.$Any[];
    position: number;
    currentPathNode: Nodes.$Groups.$Any | undefined;
    targetParentNode: any;
    context: any;
    options: any | undefined;
}
export declare const runStepper: (stepper: Stepper, state: TraversalState) => Either.Either<any, StepFailure | TraversalError.TraversalError>;
//# sourceMappingURL=stepper.d.ts.map