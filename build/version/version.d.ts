import { S } from '#kit-temp';
import { Equivalence, Order, ParseResult } from 'effect';
import { DateOnly } from '../date-only/$.js';
import { Semver as SemverLib } from '../semver/$.js';
import * as CustomVersion from './custom.js';
import * as DateVersion from './date.js';
import * as IntegerVersion from './integer.js';
import * as SemverVersion from './semver.js';
export { CustomVersion, DateVersion, IntegerVersion, SemverVersion };
/**
 * Schema for version identifiers that supports multiple formats:
 *
 * - **Integer**: Simple numeric versions (1, 2, 3) - most common for GraphQL APIs
 * - **Semver**: Semantic versions (1.0.0, 2.1.3) - typically not useful for GraphQL APIs since
 *   patch/minor changes are usually realized as revisions rather than new versions
 * - **Date**: ISO date versions (2024-01-15) - useful for time-based releases
 * - **Custom**: Arbitrary string versions for any other format
 *
 * Parsing priority: Integer > Semver > Date > Custom
 */
export declare const Version: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof IntegerVersion.Integer, typeof SemverVersion.Semver, typeof DateVersion.Date, typeof CustomVersion.Custom]>, never>;
export type Version = typeof Version.Type;
/**
 * Order versions with type precedence: Integer > Semver > Date > Custom
 * Within each type, use natural ordering
 */
export declare const order: Order.Order<Version>;
export declare const min: {
    (that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver) => CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
    (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver, that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
};
export declare const max: {
    (that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver) => CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
    (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver, that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
};
export declare const lessThan: {
    (that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver) => boolean;
    (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver, that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): boolean;
};
export declare const greaterThan: {
    (that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver) => boolean;
    (self: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver, that: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver): boolean;
};
export declare const equivalence: Equivalence.Equivalence<Version>;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
export declare const decode: (i: string | number, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver, ParseResult.ParseError, never>;
export declare const decodeSync: (i: string | number, overrideOptions?: import("effect/SchemaAST").ParseOptions) => CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
export declare const encode: (a: CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<string | number, ParseResult.ParseError, never>;
export declare const fromString: (i: string | number, overrideOptions?: import("effect/SchemaAST").ParseOptions) => CustomVersion.Custom | DateVersion.Date | IntegerVersion.Integer | SemverVersion.Semver;
/**
 * Create a semver version
 */
export declare const fromSemver: (semver: SemverLib.Semver) => Version;
/**
 * Create a date version
 */
export declare const fromDateOnly: (date: DateOnly.DateOnly) => Version;
/**
 * Create an integer version
 */
export declare const fromInteger: (value: number) => Version;
/**
 * Create a custom version
 */
export declare const fromCustom: (value: string) => Version;
/**
 * Synchronously encode a version to its string representation
 */
export declare const encodeSync: (version: Version) => string;
//# sourceMappingURL=version.d.ts.map