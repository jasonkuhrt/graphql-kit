import { S } from '#kit-temp';
declare const Semver_base: S.TaggedClass<Semver, "VersionSemver", {
    readonly _tag: S.tag<"VersionSemver">;
} & {
    value: typeof S.String;
}>;
export declare class Semver extends Semver_base {
}
export declare const make: <C extends new (...args: Array<any>) => any>(this: C, ...args: ConstructorParameters<C>) => InstanceType<C>;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is Semver;
export declare const decode: (i: {
    readonly _tag: "VersionSemver";
    readonly value: string;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<Semver, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: {
    readonly _tag: "VersionSemver";
    readonly value: string;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Semver;
export declare const encode: (a: Semver, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "VersionSemver";
    readonly value: string;
}, import("effect/ParseResult").ParseError, never>;
export declare const equivalence: import("effect/Equivalence").Equivalence<Semver>;
export {};
//# sourceMappingURL=semver.d.ts.map