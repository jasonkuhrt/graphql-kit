declare const ParseError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => import("effect/Cause").YieldableError & {
    readonly _tag: "ParseError";
} & Readonly<A>;
/**
 * Error for failures during path string parsing.
 * Occurs before traversal when converting string to AST.
 */
export declare class ParseError extends ParseError_base<{
    /**
     * The input string that failed to parse.
     */
    input: string;
    /**
     * Character position where parsing failed.
     */
    position: number;
    /**
     * Human-readable error message.
     */
    message: string;
}> {
}
export {};
//# sourceMappingURL=parse-error.d.ts.map