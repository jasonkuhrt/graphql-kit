import { S } from '#kit-temp';
export declare const GraphQLName: S.filter<S.filter<typeof S.String>>;
export type GraphQLName = S.Schema.Type<typeof GraphQLName>;
export type GraphQLNameEncoded = S.Schema.Encoded<typeof GraphQLName>;
export declare const make: (a: string, options?: S.MakeOptions) => string;
export declare const decode: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<string, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => string;
export declare const encode: (a: string, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<string, import("effect/ParseResult").ParseError, never>;
export declare const encodeSync: (a: string, overrideOptions?: import("effect/SchemaAST").ParseOptions) => string;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is string;
export type GraphQLNameStart = '_' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
//# sourceMappingURL=graphql-name.d.ts.map