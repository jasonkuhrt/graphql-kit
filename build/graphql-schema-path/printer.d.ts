import { Nodes } from './nodes/$.js';
/**
 * Parameters passed to the formatPath callback.
 */
export interface FormatNodeParams {
    /** The complete node string including separator and content */
    nodeString: string;
    /** The AST node being formatted */
    node: Nodes.$Groups.$Any;
    /** The separator for this node */
    separator: string;
}
/**
 * Print a GraphQL schema path AST to its string representation.
 * This is the inverse of the parse operation.
 *
 * @example
 * print(parse('User.posts$limit#')) // 'User.posts$limit#'
 * print(parse('v1.0:Query.users')) // 'v1.0:Query.users'
 */
export declare const print: (path: Nodes.Root.Root, formatNode?: (params: FormatNodeParams) => string) => string;
//# sourceMappingURL=printer.d.ts.map