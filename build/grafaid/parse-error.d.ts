declare const ParseError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => import("effect/Cause").YieldableError & {
    readonly _tag: "ParseError";
} & Readonly<A>;
/**
 * Error that occurs when parsing GraphQL source text fails.
 *
 * This error provides structured information about parse failures,
 * including the source context and the underlying parse error details.
 */
export declare class ParseError extends ParseError_base<{
    /**
     * The type of GraphQL content being parsed.
     * Helps identify whether the error occurred while parsing a schema or a document.
     */
    readonly parseType: 'schema' | 'document' | 'unknown';
    /**
     * Optional source identifier for debugging.
     * Could be a file path, URL, or other identifier.
     */
    readonly source?: string;
    /**
     * The error message describing what went wrong.
     */
    readonly message: string;
    /**
     * The original error that caused the parse failure.
     */
    readonly cause?: unknown;
    /**
     * Optional excerpt of the source text where the error occurred.
     * Useful for showing context in error messages.
     */
    readonly excerpt?: string;
}> {
}
/**
 * Helper to create a ParseError with common defaults.
 */
export declare const makeParseError: (message: string, options?: {
    parseType?: "schema" | "document" | "unknown";
    source?: string;
    cause?: unknown;
    excerpt?: string;
}) => ParseError;
export {};
//# sourceMappingURL=parse-error.d.ts.map