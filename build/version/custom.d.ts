import { S } from '#kit-temp';
declare const Custom_base: S.TaggedClass<Custom, "VersionCustom", {
    readonly _tag: S.tag<"VersionCustom">;
} & {
    value: typeof S.String;
}>;
export declare class Custom extends Custom_base {
}
export declare const make: <C extends new (...args: Array<any>) => any>(this: C, ...args: ConstructorParameters<C>) => InstanceType<C>;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is Custom;
export declare const decode: (i: {
    readonly _tag: "VersionCustom";
    readonly value: string;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<Custom, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: {
    readonly _tag: "VersionCustom";
    readonly value: string;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Custom;
export declare const encode: (a: Custom, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "VersionCustom";
    readonly value: string;
}, import("effect/ParseResult").ParseError, never>;
export declare const equivalence: import("effect/Equivalence").Equivalence<Custom>;
export {};
//# sourceMappingURL=custom.d.ts.map