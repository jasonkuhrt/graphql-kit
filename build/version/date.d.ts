import { S } from '#kit-temp';
declare const Date_base: S.TaggedClass<Date, "VersionDate", {
    readonly _tag: S.tag<"VersionDate">;
} & {
    value: S.brand<S.refine<string, typeof S.String>, "DateOnly">;
}>;
export declare class Date extends Date_base {
}
export declare const make: <C extends new (...args: Array<any>) => any>(this: C, ...args: ConstructorParameters<C>) => InstanceType<C>;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is Date;
export declare const decode: (i: {
    readonly _tag: "VersionDate";
    readonly value: string;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<Date, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: {
    readonly _tag: "VersionDate";
    readonly value: string;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Date;
export declare const encode: (a: Date, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "VersionDate";
    readonly value: string;
}, import("effect/ParseResult").ParseError, never>;
export declare const equivalence: import("effect/Equivalence").Equivalence<Date>;
export {};
//# sourceMappingURL=date.d.ts.map