import { S } from '#kit-temp';
import { Equivalence, Match, Order, ParseResult } from 'effect';
import { DateOnly } from '../date-only/$.js';
import { Semver as SemverLib } from '../semver/$.js';
import * as CustomVersion from './custom.js';
import * as DateVersion from './date.js';
import * as IntegerVersion from './integer.js';
import * as SemverVersion from './semver.js';
// Re-export member modules as namespaces
export { CustomVersion, DateVersion, IntegerVersion, SemverVersion };
// ============================================================================
// Schema
// ============================================================================
const VersionUnion = S.Union(IntegerVersion.Integer, SemverVersion.Semver, DateVersion.Date, CustomVersion.Custom);
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
export const Version = S.transformOrFail(S.Union(S.String, S.Number), VersionUnion, {
    strict: true,
    decode: (input, _, ast) => {
        // Try parsing as integer first
        if (typeof input === 'number' && Number.isInteger(input)) {
            return ParseResult.succeed(new IntegerVersion.Integer({ value: input }));
        }
        // Try parsing string as integer
        if (typeof input === 'string') {
            const parsed = Number(input);
            if (Number.isInteger(parsed) && parsed.toString() === input) {
                return ParseResult.succeed(new IntegerVersion.Integer({ value: parsed }));
            }
        }
        // For string inputs, continue with existing logic
        if (typeof input === 'string') {
            // Try parsing as semver
            try {
                SemverLib.decodeSync(input); // Validate it's a valid semver
                return ParseResult.succeed(new SemverVersion.Semver({ value: input }));
            }
            catch {
                // Not a semver, continue
            }
            // Try parsing as ISO date
            try {
                const dateOnly = DateOnly.decodeSync(input);
                return ParseResult.succeed(new DateVersion.Date({ value: dateOnly }));
            }
            catch {
                // Not an ISO date, continue
            }
            // Fall back to custom version
            return ParseResult.succeed(new CustomVersion.Custom({ value: input }));
        }
        return ParseResult.fail(new ParseResult.Type(ast, input));
    },
    encode: (version) => {
        switch (version._tag) {
            case 'VersionInteger':
                return ParseResult.succeed(version.value);
            case 'VersionSemver':
                return ParseResult.succeed(version.value);
            case 'VersionDate':
                return ParseResult.succeed(version.value);
            case 'VersionCustom':
                return ParseResult.succeed(version.value);
        }
    },
});
// ============================================================================
// Constructors
// ============================================================================
// Note: No make constructor for transform schemas - use fromString instead
// ============================================================================
// Ordering
// ============================================================================
/**
 * Order versions with type precedence: Integer > Semver > Date > Custom
 * Within each type, use natural ordering
 */
export const order = Order.make((a, b) => {
    // Different types - use type precedence
    if (a._tag !== b._tag) {
        const typeOrder = { VersionInteger: 0, VersionSemver: 1, VersionDate: 2, VersionCustom: 3 };
        const diff = typeOrder[a._tag] - typeOrder[b._tag];
        return diff < 0 ? -1 : diff > 0 ? 1 : 0;
    }
    // Same type - use type-specific ordering
    switch (a._tag) {
        case 'VersionInteger':
            return Order.number(a.value, b.value);
        case 'VersionSemver': {
            const semverA = SemverLib.decodeSync(a.value);
            const semverB = SemverLib.decodeSync(b.value);
            return SemverLib.order(semverA, semverB);
        }
        case 'VersionDate':
            return DateOnly.order(a.value, b.value);
        case 'VersionCustom':
            return Order.string(a.value, b.value);
    }
});
export const min = Order.min(order);
export const max = Order.max(order);
export const lessThan = Order.lessThan(order);
export const greaterThan = Order.greaterThan(order);
// ============================================================================
// Equivalence
// ============================================================================
export const equivalence = Equivalence.make((a, b) => {
    if (a._tag !== b._tag)
        return false;
    switch (a._tag) {
        case 'VersionInteger':
            return a.value === b.value;
        case 'VersionSemver': {
            const semverA = SemverLib.decodeSync(a.value);
            const semverB = SemverLib.decodeSync(b.value);
            return SemverLib.equivalence(semverA, semverB);
        }
        case 'VersionDate':
            return DateOnly.equivalence(a.value, b.value);
        case 'VersionCustom':
            return a.value === b.value;
    }
});
// ============================================================================
// Type Guard
// ============================================================================
export const is = S.is(Version);
// ============================================================================
// Codec
// ============================================================================
export const decode = S.decode(Version);
export const decodeSync = S.decodeSync(Version);
export const encode = S.encode(Version);
// ============================================================================
// Importers
// ============================================================================
export const fromString = S.decodeSync(Version);
/**
 * Create a semver version
 */
export const fromSemver = (semver) => S.decodeSync(SemverVersion.Semver)({ _tag: 'VersionSemver', value: semver.version.toString() });
/**
 * Create a date version
 */
export const fromDateOnly = (date) => S.decodeSync(DateVersion.Date)({ _tag: 'VersionDate', value: date });
/**
 * Create an integer version
 */
export const fromInteger = (value) => S.decodeSync(IntegerVersion.Integer)({ _tag: 'VersionInteger', value });
/**
 * Create a custom version
 */
export const fromCustom = (value) => S.decodeSync(CustomVersion.Custom)({ _tag: 'VersionCustom', value });
// ============================================================================
// Domain Logic
// ============================================================================
/**
 * Synchronously encode a version to its string representation
 */
export const encodeSync = (version) => {
    switch (version._tag) {
        case 'VersionInteger':
            return version.value.toString();
        case 'VersionSemver':
            return version.value;
        case 'VersionDate':
            return version.value;
        case 'VersionCustom':
            return version.value;
    }
};
//# sourceMappingURL=version.js.map