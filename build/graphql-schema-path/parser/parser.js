import { Nodes } from '../nodes/$.js';
import {} from './tokens.js';
import * as Tokens from './tokens.js';
// ============================================================================
// Helpers
// ============================================================================
const tokenToString = (token) => token.display;
// ============================================================================
// Parser
// ============================================================================
/**
 * Parse tokens into a GraphQL schema path AST
 */
export function parse(tokens) {
    let state = { tokens, pos: 0 };
    const versionResult = parseVersion(state);
    const version = versionResult.value;
    state = versionResult.state;
    const pathResult = parseTypePath(state);
    const path = pathResult.value;
    state = pathResult.state;
    const endToken = peek(state);
    if (!Tokens.isEOFToken(endToken)) {
        throw new ParseError(`Unexpected token '${tokenToString(endToken)}' at position ${endToken.pos}`, endToken.pos);
    }
    return Nodes.Root.make({
        version,
        next: path,
    });
}
// ============================================================================
// Version Parsing
// ============================================================================
function parseVersion(state) {
    const token = peek(state);
    if (Tokens.isVersionToken(token)) {
        state = advance(state);
        // Version must be followed by a colon
        const colonToken = peek(state);
        if (Tokens.isColonToken(colonToken)) {
            state = advance(state);
            return {
                value: token.value,
                state,
            };
        }
        else {
            throw new ParseError(`Expected ':' after version but got '${tokenToString(colonToken)}' at position ${colonToken.pos}`, colonToken.pos);
        }
    }
    return { value: undefined, state };
}
// ============================================================================
// Path Parsing
// ============================================================================
function parseTypePath(state) {
    const typeResult = parseType(state);
    const type = typeResult.value;
    state = typeResult.state;
    const nextResult = parseTypeContinuation(state);
    const next = nextResult.value;
    state = nextResult.state;
    return {
        value: Nodes.Type.make({
            name: type,
            next,
        }),
        state,
    };
}
function parseTypeContinuation(state) {
    const token = peek(state);
    if (Tokens.isDotToken(token))
        return parseField(state);
    return { value: undefined, state };
}
function parseField(state) {
    // Skip dot
    state = advance(state);
    const nameResult = parseName(state);
    const name = nameResult.value;
    state = nameResult.state;
    const nextResult = parseFieldContinuation(state);
    const next = nextResult.value;
    state = nextResult.state;
    return {
        value: Nodes.Field.make({
            name,
            next,
        }),
        state,
    };
}
function parseFieldContinuation(state) {
    const token = peek(state);
    if (Tokens.isDotToken(token))
        return parseField(state);
    if (Tokens.isDollarToken(token))
        return parseArgument(state);
    if (Tokens.isHashToken(token))
        return parseResolvedType(state);
    return { value: undefined, state };
}
function parseArgument(state) {
    // Skip $
    state = advance(state);
    const nameResult = parseName(state);
    const name = nameResult.value;
    state = nameResult.state;
    const nextResult = parseArgumentContinuation(state);
    const next = nextResult.value;
    state = nextResult.state;
    return {
        value: Nodes.Argument.make({
            name,
            next,
        }),
        state,
    };
}
function parseArgumentContinuation(state) {
    const token = peek(state);
    if (Tokens.isDotToken(token))
        return parseField(state);
    if (Tokens.isHashToken(token))
        return parseResolvedType(state);
    return { value: undefined, state };
}
function parseResolvedType(state) {
    // Skip #
    state = advance(state);
    return {
        value: Nodes.ResolvedType.make({}),
        state,
    };
}
// ============================================================================
// Utilities
// ============================================================================
function peek(state) {
    return state.tokens[state.pos] || Tokens.makeEOFToken({ pos: state.pos });
}
function advance(state) {
    return { ...state, pos: state.pos + 1 };
}
function parseName(state) {
    const token = peek(state);
    if (!Tokens.isNameToken(token)) {
        throw new ParseError(`Expected name but got '${tokenToString(token)}' at position ${token.pos}`, token.pos);
    }
    return {
        value: token.value,
        state: advance(state),
    };
}
function parseType(state) {
    return parseName(state);
}
// ============================================================================
// Errors
// ============================================================================
export class ParseError extends Error {
    position;
    constructor(message, position) {
        super(message);
        this.position = position;
        this.name = 'ParseError';
    }
}
//# sourceMappingURL=parser.js.map