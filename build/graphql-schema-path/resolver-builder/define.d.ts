import { Either } from 'effect';
import type { Simplify } from 'type-fest';
import { Nodes } from '../nodes/$.js';
import type { Path } from '../path.js';
import * as TraversalError from './error.js';
import * as Stepper from './stepper.js';
export type { GetStepperInputTargetNode } from './stepper.js';
export type Resolve<$TargetSpec extends TargetSpec> = (path: Path) => Either.Either<$TargetSpec['nodes'][keyof $TargetSpec['nodes']], TraversalError.TraversalError>;
export interface TargetSpec {
    context?: object;
    nodes: {
        [_ in Nodes.$Types.Tag]?: object;
    };
}
export type GetTargetNodes<$TargetSpec extends TargetSpec> = Simplify<$TargetSpec['nodes'][keyof $TargetSpec['nodes']]>;
export interface Introspection<$TargetSpec extends TargetSpec> {
    getKind?: (params: {
        node: GetTargetNodes<$TargetSpec>;
        context: $TargetSpec['context'];
    }) => string | undefined;
    getName?: (params: {
        node: GetTargetNodes<$TargetSpec>;
        context: $TargetSpec['context'];
    }) => string | undefined;
    getTypes?: (params: {
        context: $TargetSpec['context'];
    }) => string[] | undefined;
    getFields?: (params: {
        node: GetTargetNodes<$TargetSpec>;
        context: $TargetSpec['context'];
    }) => string[] | undefined;
    getArguments?: (params: {
        node: GetTargetNodes<$TargetSpec>;
        context: $TargetSpec['context'];
    }) => string[] | undefined;
}
export interface Definition<$TargetSpec extends TargetSpec> {
    create: (context: $TargetSpec['context']) => Resolve<$TargetSpec>;
    introspection?: Introspection<$TargetSpec>;
}
type StepperBuilder<$TargetNode, $PathNode, $Context, $ResultNode> = [$TargetNode] extends [never] ? {
    step: (stepFn: (params: {
        pathNode: $PathNode;
        context: $Context;
    }) => Either.Either<$ResultNode, Stepper.StepFailure>) => void;
} : {
    guard<$Validated>(guardFn: (targetNode: $TargetNode) => Either.Either<$Validated, Stepper.GuardFailure>): {
        step: (stepFn: (params: {
            targetNode: $Validated;
            pathNode: $PathNode;
            context: $Context;
        }) => Either.Either<$ResultNode, Stepper.StepFailure>) => void;
    };
    step: (stepFn: (params: {
        targetNode: $TargetNode;
        pathNode: $PathNode;
        context: $Context;
    }) => Either.Either<$ResultNode, Stepper.StepFailure>) => void;
};
type DefineBuilder<$TargetSpec extends TargetSpec, $Steppers = {}> = {
    [$Tag in Nodes.$Types.Tag & keyof $TargetSpec['nodes']]: (builderFn: (builder: StepperBuilder<Stepper.GetStepperInputTargetNode<$TargetSpec, $Tag>, Nodes.$Types.Index[$Tag], $TargetSpec['context'], $TargetSpec['nodes'][$Tag]>) => void) => DefineBuilder<$TargetSpec, $Steppers & {
        [_ in $Tag]: {
            guard?: (targetNode: any) => Either.Either<any, Stepper.GuardFailure>;
            step: (params: any) => Either.Either<any, Stepper.StepFailure>;
        };
    }>;
} & {
    done: () => Definition<$TargetSpec>;
};
interface Options<$TargetSpec extends TargetSpec = TargetSpec> {
    introspection?: Introspection<$TargetSpec>;
}
export declare const define: <$TargetSpec extends TargetSpec>(options?: Options<$TargetSpec>) => DefineBuilder<$TargetSpec>;
//# sourceMappingURL=define.d.ts.map