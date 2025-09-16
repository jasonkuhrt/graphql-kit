import { S } from '#kit-temp';
declare const Integer_base: S.TaggedClass<Integer, "VersionInteger", {
    readonly _tag: S.tag<"VersionInteger">;
} & {
    value: typeof S.Number;
}>;
export declare class Integer extends Integer_base {
}
export declare const make: <C extends new (...args: Array<any>) => any>(this: C, ...args: ConstructorParameters<C>) => InstanceType<C>;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is Integer;
export declare const decode: (i: {
    readonly _tag: "VersionInteger";
    readonly value: number;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<Integer, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: {
    readonly _tag: "VersionInteger";
    readonly value: number;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Integer;
export declare const encode: (a: Integer, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "VersionInteger";
    readonly value: number;
}, import("effect/ParseResult").ParseError, never>;
export declare const equivalence: import("effect/Equivalence").Equivalence<Integer>;
export {};
//# sourceMappingURL=integer.d.ts.map