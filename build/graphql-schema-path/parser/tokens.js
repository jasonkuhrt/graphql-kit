import { S } from '#kit-temp';
// ============================================================================
// Token Helpers
// ============================================================================
const TokenFor = (tag, display) => S.TaggedStruct(tag, {
    display: S.Literal(display)
        .pipe(S.propertySignature, S.withConstructorDefault(() => display)),
    value: S.String,
    pos: S.Number,
});
const TokenSymbolFor = (tag, display) => S.TaggedStruct(tag, {
    display: S.Literal(display)
        .pipe(S.propertySignature, S.withConstructorDefault(() => display)),
    pos: S.Number,
});
// ============================================================================
// Token Types
// ============================================================================
/**
 * Token types for the GraphQL schema path tokenizer
 */
export const TokenType = S.Enums({
    NAME: 'NAME',
    VERSION: 'VERSION',
    DOT: 'DOT',
    DOLLAR: 'DOLLAR',
    HASH: 'HASH',
    COLON: 'COLON',
    EOF: 'EOF',
});
// ============================================================================
// Token Schemas
// ============================================================================
export const NameToken = TokenFor(TokenType.enums.NAME, 'name');
export const VersionToken = TokenFor(TokenType.enums.VERSION, 'version');
export const DotToken = TokenSymbolFor(TokenType.enums.DOT, '.');
export const DollarToken = TokenSymbolFor(TokenType.enums.DOLLAR, '$');
export const HashToken = TokenSymbolFor(TokenType.enums.HASH, '#');
export const ColonToken = TokenSymbolFor(TokenType.enums.COLON, ':');
export const EOFToken = TokenSymbolFor(TokenType.enums.EOF, 'EOF');
// ============================================================================
// Union Token
// ============================================================================
export const Token = S.Union(NameToken, VersionToken, DotToken, DollarToken, HashToken, ColonToken, EOFToken);
// ============================================================================
// Constructors
// ============================================================================
export const makeNameToken = NameToken.make;
export const makeVersionToken = VersionToken.make;
export const makeDotToken = DotToken.make;
export const makeDollarToken = DollarToken.make;
export const makeHashToken = HashToken.make;
export const makeColonToken = ColonToken.make;
export const makeEOFToken = EOFToken.make;
// ============================================================================
// Type Guards
// ============================================================================
export const isNameToken = S.is(NameToken);
export const isVersionToken = S.is(VersionToken);
export const isDotToken = S.is(DotToken);
export const isDollarToken = S.is(DollarToken);
export const isHashToken = S.is(HashToken);
export const isColonToken = S.is(ColonToken);
export const isEOFToken = S.is(EOFToken);
//# sourceMappingURL=tokens.js.map