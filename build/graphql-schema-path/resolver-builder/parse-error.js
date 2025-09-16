import { Data } from 'effect';
/**
 * Error for failures during path string parsing.
 * Occurs before traversal when converting string to AST.
 */
export class ParseError extends Data.TaggedError('ParseError') {
}
//# sourceMappingURL=parse-error.js.map