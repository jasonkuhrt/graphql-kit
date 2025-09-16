import { Nodes } from './nodes/$.js';
/**
 * Pretty print a GraphQL schema path with syntax highlighting for terminal output.
 * Useful for debugging, error messages, and CLI tools.
 *
 * @example
 * prettyPrint(parse('User.posts$limit'))
 * // Returns colored output: cyan(User) gray(.) yellow(posts) gray($) magenta(limit)
 */
export declare const prettyPrint: (path: Nodes.Root.Root) => string;
//# sourceMappingURL=printer-terminal.d.ts.map