import { Level } from '#change/level';
import { S } from '#kit-temp';
export declare const Criticality: S.Struct<{
    level: any;
    reason: S.optional<typeof S.String>;
}>;
export type Level = typeof Level.Type;
export type Criticality = typeof Criticality.Type;
export declare const make: (props: any, options?: S.MakeOptions) => any;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is any;
export declare const isBreaking: (criticality: Criticality) => boolean;
export declare const isDangerous: (criticality: Criticality) => boolean;
export declare const isSafe: (criticality: Criticality) => boolean;
export declare const decode: (i: {
    readonly [x: string]: any;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<any, import("effect/ParseResult").ParseError, any>;
export declare const encode: (a: any, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly [x: string]: any;
}, import("effect/ParseResult").ParseError, any>;
export declare const equivalence: import("effect/Equivalence").Equivalence<any>;
//# sourceMappingURL=criticality.d.ts.map