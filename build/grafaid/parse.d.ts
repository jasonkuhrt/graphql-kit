import { Effect } from 'effect';
import { type DocumentNode } from 'graphql';
import { ParseError } from './parse-error.js';
/**
 * Parse GraphQL source text into an AST.
 *
 * This is the centralized parsing function that should be used throughout
 * the codebase for parsing any GraphQL content (schemas or documents).
 *
 * @param source - The GraphQL source text to parse
 * @param options - Optional parsing configuration
 * @returns An Effect that yields a DocumentNode AST or fails with ParseError
 *
 * @example
 * ```ts
 * // Parse a schema
 * const schemaAst = yield* parse(schemaSDL, {
 *   parseType: 'schema',
 *   source: 'schema.graphql'
 * })
 *
 * // Parse a query document
 * const queryAst = yield* parse(queryString, {
 *   parseType: 'document',
 *   source: 'getUserQuery'
 * })
 * ```
 */
export declare const parse: (source: string, options?: {
    /**
     * The type of content being parsed.
     * Helps provide better error messages.
     */
    parseType?: "schema" | "document" | "unknown";
    /**
     * Optional source identifier for debugging.
     * Could be a file path, URL, or descriptive name.
     */
    source?: string;
}) => Effect.Effect<DocumentNode, ParseError>;
/**
 * Parse GraphQL schema SDL with typed errors.
 *
 * This is a specialized version of parse() that's explicitly for schemas.
 *
 * @param source - The GraphQL schema SDL to parse
 * @param options - Optional parsing configuration
 * @returns An Effect that yields a DocumentNode AST or fails with ParseError
 */
export declare const parseSchema: (source: string, options?: {
    source?: string;
}) => Effect.Effect<DocumentNode, ParseError>;
/**
 * Parse GraphQL document (query/mutation/subscription) with typed errors.
 *
 * This is a specialized version of parse() that's explicitly for executable documents.
 *
 * @param source - The GraphQL document to parse
 * @param options - Optional parsing configuration
 * @returns An Effect that yields a DocumentNode AST or fails with ParseError
 */
export declare const parseDocument: (source: string, options?: {
    source?: string;
}) => Effect.Effect<DocumentNode, ParseError>;
/**
 * Create an empty DocumentNode.
 * Useful for representing an absence of GraphQL content.
 */
export declare const empty: DocumentNode;
//# sourceMappingURL=parse.d.ts.map