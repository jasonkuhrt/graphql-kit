import { EffectKit } from '#kit-temp';
import { Either } from 'effect';
import { Nodes } from '../nodes/$.js';
import * as TraversalError from './error.js';
import * as Stepper from './stepper.js';
// ============================================================================
// Error Handling
// ============================================================================
const createTraversalError = (state, stepFailure) => {
    const location = {
        currentNode: state.currentPathNode, // Caller ensures this is not undefined
        parentChain: [...state.parentChain],
        position: state.position,
    };
    // Enrich error with introspection if available
    let suggestions;
    if (state.options?.introspection && stepFailure._tag === 'NodeNotFound') {
        // Call appropriate introspector based on failing segment type
        switch (state.currentPathNode._tag) {
            case 'GraphQLPathSegmentType':
                suggestions = state.options.introspection.getTypes?.({
                    context: state.context,
                });
                break;
            case 'GraphQLPathSegmentField':
                suggestions = state.options.introspection.getFields?.({
                    node: state.targetParentNode,
                    context: state.context,
                });
                break;
            case 'GraphQLPathSegmentArgument':
                suggestions = state.options.introspection.getArguments?.({
                    node: state.targetParentNode,
                    context: state.context,
                });
                break;
            case 'GraphQLPathSegmentResolvedType':
                // ResolvedType never fails with NodeNotFound - it's a type resolution
                // No suggestions needed
                break;
        }
    }
    return new TraversalError.TraversalError({
        path: state.path,
        location,
        cause: stepFailure,
        ...(suggestions ? { suggestions } : {}),
    });
};
// ============================================================================
// Define Traverser
// ============================================================================
export const define = (options) => {
    const steppers = {};
    const createBuilder = () => {
        const builder = {};
        //
        //
        //
        // ━━━━━━━━━━━━━━ • node methods
        //
        //
        const nodeTags = Nodes.$Groups.All
            .map(_ => EffectKit.Schema.TaggedStruct.getTagOrThrow(_.Schema))
            .filter(_ => _ !== 'GraphQLPathRoot');
        for (const tag of nodeTags) {
            builder[tag] = (builderFn) => {
                const stepperConfig = {};
                const stepperBuilder = {
                    guard: (guardFn) => ({
                        step: (stepFn) => {
                            stepperConfig.guard = guardFn;
                            stepperConfig.step = stepFn;
                        },
                    }),
                    step: (stepFn) => {
                        stepperConfig.step = stepFn;
                    },
                };
                builderFn(stepperBuilder);
                steppers[tag] = stepperConfig;
                return builder;
            };
        }
        //
        //
        //
        // ━━━━━━━━━━━━━━ • done method
        //
        //
        // Add done method
        builder.done = () => {
            return {
                create: (context) => {
                    const resolve = (path) => {
                        const state = {
                            path,
                            parentChain: [],
                            position: 0,
                            currentPathNode: path.next,
                            targetParentNode: null,
                            context,
                            options,
                        };
                        while (state.currentPathNode) {
                            const nodeTag = state.currentPathNode._tag;
                            state.position++;
                            const stepper = steppers[nodeTag]; // Type system ensures this is defined
                            const result = Stepper.runStepper(stepper, state);
                            if (Either.isLeft(result)) {
                                // If runStepper returned a TraversalError (from guard failure), return it directly
                                // Otherwise, create a TraversalError from the StepFailure
                                if (result.left instanceof TraversalError.TraversalError) {
                                    return result;
                                }
                                return Either.left(createTraversalError(state, result.left));
                            }
                            // Update for next iteration
                            state.parentChain.push(state.currentPathNode);
                            state.targetParentNode = result.right;
                            state.currentPathNode = state.currentPathNode.next;
                        }
                        return Either.right(state.targetParentNode);
                    };
                    return resolve;
                },
            };
        };
        return builder;
    };
    return createBuilder();
};
//# sourceMappingURL=define.js.map