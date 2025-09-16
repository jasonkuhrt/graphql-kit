import type { Path } from '../path.js';
import { type Token } from './tokens.js';
/**
 * Parse tokens into a GraphQL schema path AST
 */
export declare function parse(tokens: Token[]): Path;
export declare class ParseError extends Error {
    readonly position: number;
    constructor(message: string, position: number);
}
//# sourceMappingURL=parser.d.ts.map