import { Level } from '#change/level';
import { S } from '#kit-temp';
export declare const Criticality: S.Struct<{
    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
    reason: S.optional<typeof S.String>;
}>;
export type Level = typeof Level.Type;
export type Criticality = typeof Criticality.Type;
export declare const make: (props: {
    readonly reason?: string | undefined;
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
}, options?: S.MakeOptions) => {
    readonly reason?: string | undefined;
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly reason?: string | undefined;
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
};
export declare const isBreaking: (criticality: Criticality) => boolean;
export declare const isDangerous: (criticality: Criticality) => boolean;
export declare const isSafe: (criticality: Criticality) => boolean;
export declare const decode: (i: {
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    readonly reason?: string | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly reason?: string | undefined;
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
}, import("effect/ParseResult").ParseError, never>;
export declare const encode: (a: {
    readonly reason?: string | undefined;
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    readonly reason?: string | undefined;
}, import("effect/ParseResult").ParseError, never>;
export declare const equivalence: import("effect/Equivalence").Equivalence<{
    readonly reason?: string | undefined;
    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
}>;
//# sourceMappingURL=criticality.d.ts.map