import { S } from '#kit-temp';
import { Version } from '#version';
import { HashSet } from 'effect';
declare const VersionCoverageUnversioned_base: S.TaggedClass<VersionCoverageUnversioned, "VersionCoverageUnversioned", {
    readonly _tag: S.tag<"VersionCoverageUnversioned">;
}>;
export declare class VersionCoverageUnversioned extends VersionCoverageUnversioned_base {
}
export declare const VersionCoverageOne: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>;
export declare const VersionCoverageSet: S.HashSet<S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>>;
/**
 * A selection of versions - either unversioned (applies to all), a single version, or a set of versions.
 * Used as keys in versioned documents to map version(s) to document content.
 */
export declare const VersionCoverage: S.Union<[typeof VersionCoverageUnversioned, S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>, S.HashSet<S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>>]>;
export type VersionCoverage = S.Schema.Type<typeof VersionCoverage>;
/**
 * Create an unversioned coverage that applies to all versions
 */
export declare const unversioned: () => VersionCoverage;
/**
 * Create a single version coverage
 */
export declare const single: (version: Version.Version) => VersionCoverage;
/**
 * Create a version set coverage
 */
export declare const set: (versions: Version.Version[]) => VersionCoverage;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom | VersionCoverageUnversioned | HashSet.HashSet<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom>;
export declare const isUnversioned: (coverage: VersionCoverage) => coverage is VersionCoverageUnversioned;
export declare const isSingle: (coverage: VersionCoverage) => coverage is Version.Version;
export declare const isSet: (coverage: VersionCoverage) => coverage is HashSet.HashSet<Version.Version>;
export declare const decode: (i: string | number | readonly (string | number)[] | {
    readonly _tag: "VersionCoverageUnversioned";
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom | VersionCoverageUnversioned | HashSet.HashSet<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom>, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: string | number | readonly (string | number)[] | {
    readonly _tag: "VersionCoverageUnversioned";
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom | VersionCoverageUnversioned | HashSet.HashSet<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom>;
export declare const encode: (a: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom | VersionCoverageUnversioned | HashSet.HashSet<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom>, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<string | number | readonly (string | number)[] | {
    readonly _tag: "VersionCoverageUnversioned";
}, import("effect/ParseResult").ParseError, never>;
export declare const encodeSync: (a: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom | VersionCoverageUnversioned | HashSet.HashSet<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom>, overrideOptions?: import("effect/SchemaAST").ParseOptions) => string | number | readonly (string | number)[] | {
    readonly _tag: "VersionCoverageUnversioned";
};
export declare const equivalence: import("effect/Equivalence").Equivalence<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom | VersionCoverageUnversioned | HashSet.HashSet<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom>>;
/**
 * Check if a version is contained in a selection
 */
export declare const contains: (versionCoverage: VersionCoverage, version: Version.Version) => boolean;
/**
 * Get display label for UI
 */
export declare const toLabel: (versionCoverage: VersionCoverage) => string;
/**
 * Get all versions from a selection
 */
export declare const toVersions: (versionCoverage: VersionCoverage) => Version.Version[];
/**
 * Get the latest (highest) version from a version coverage.
 * For single versions, returns the version itself.
 * For version sets, returns the maximum version according to Version ordering.
 *
 * @param versionCoverage - The version coverage to get the latest version from
 * @returns The latest version
 * @throws {Error} If the version set is empty or if called on unversioned coverage
 */
export declare const getLatest: (versionCoverage: VersionCoverage) => Version.Version;
/**
 * Check if a version coverage matches a specific version.
 * Unversioned always matches, single version must be equal, set must contain the version.
 */
export declare const matches: (coverage: VersionCoverage, version: Version.Version) => boolean;
export {};
//# sourceMappingURL=version-coverage.d.ts.map