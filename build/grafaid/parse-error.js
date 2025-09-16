import { Data } from 'effect';
/**
 * Error that occurs when parsing GraphQL source text fails.
 *
 * This error provides structured information about parse failures,
 * including the source context and the underlying parse error details.
 */
export class ParseError extends Data.TaggedError('ParseError') {
}
/**
 * Helper to create a ParseError with common defaults.
 */
export const makeParseError = (message, options) => {
    const props = {
        parseType: options?.parseType ?? 'unknown',
        message,
    };
    if (options?.source !== undefined) {
        props.source = options.source;
    }
    if (options?.cause !== undefined) {
        props.cause = options.cause;
    }
    if (options?.excerpt !== undefined) {
        props.excerpt = options.excerpt;
    }
    return new ParseError(props);
};
//# sourceMappingURL=parse-error.js.map