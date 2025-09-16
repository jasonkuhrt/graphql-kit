import { Token } from './tokens.js';
/**
 * Tokenize a GraphQL schema path string into tokens
 *
 * @param input The path string to tokenize
 * @returns Array of tokens
 * @throws {TokenizerError} If invalid characters are encountered
 */
export declare function tokenize(input: string): Token[];
/**
 * Tokenizer error thrown when invalid characters are encountered
 */
export declare class TokenizerError extends Error {
    readonly position: number;
    constructor(message: string, position: number);
}
//# sourceMappingURL=tokenizer.d.ts.map