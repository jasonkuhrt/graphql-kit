import { FileSystem } from '@effect/platform';
import { Effect } from 'effect';
import type { ResolveHookContext } from 'node:module';
export declare const arrayEquals: (a: any[], b: any[]) => boolean;
export declare const ensureOptionalAbsoluteWithCwd: (pathExp: string | undefined) => string;
export declare const ensureOptionalAbsolute: (pathExp: string | undefined, basePathExp: string) => string;
export declare const assertPathAbsolute: (pathExpression: string) => void;
export declare const assertOptionalPathAbsolute: (pathExpression: string | undefined, message?: string) => void;
export declare const pickFirstPathExisting: (paths: string[]) => Effect.Effect<string | undefined, Error, FileSystem.FileSystem>;
export declare const isSpecifierFromPackage: (specifier: string, packageName: string) => boolean;
export interface ImportEvent {
    specifier: string;
    context: ResolveHookContext;
}
export type ObjPolicyFilter<$Object extends object, $Key extends Keyof<$Object>, Mode extends `allow` | `deny`> = Mode extends `allow` ? Pick<$Object, Extract<$Key, keyof $Object>> : Omit<$Object, Extract<$Key, keyof $Object>>;
/**
 * Like keyof but returns PropertyKey for object
 */
type Keyof<$Object extends object> = object extends $Object ? PropertyKey : (keyof $Object);
/**
 * Filter object properties based on a policy mode and set of keys
 *
 * @param mode - 'allow' to keep only specified keys, 'deny' to remove specified keys
 * @param obj - The object to filter
 * @param keys - The keys to process
 * @returns A filtered object with proper type inference
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 *
 * // Allow mode: keep only 'a' and 'c'
 * objPolicyFilter('allow', obj, ['a', 'c']) // { a: 1, c: 3 }
 *
 * // Deny mode: remove 'a' and 'c'
 * objPolicyFilter('deny', obj, ['a', 'c']) // { b: 2 }
 * ```
 */
export declare const objPolicyFilter: <obj extends object, keyUnion extends Keyof<obj>, mode extends `allow` | `deny`>(mode: mode, obj: obj, keys: readonly keyUnion[]) => ObjPolicyFilter<obj, keyUnion, mode>;
/**
 * Filter an object using a predicate function
 *
 * @param obj - The object to filter
 * @param predicate - Function that returns true to keep a key/value pair
 * @returns A new object with only the key/value pairs where predicate returned true
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 * objFilter(obj, (k, v) => v > 1) // { b: 2, c: 3 }
 * objFilter(obj, k => k !== 'b') // { a: 1, c: 3 }
 * ```
 */
export declare const objFilter: <T extends object>(obj: T, predicate: (key: keyof T, value: T[keyof T], obj: T) => boolean) => Partial<T>;
export declare const ObjPick: <T extends object, K extends keyof T>(obj: T, keys: readonly K[]) => Pick<T, K>;
export declare const ObjOmit: <T extends object, K extends keyof T>(obj: T, keys: readonly K[]) => Omit<T, K>;
export declare const ObjPartition: <T extends object, K extends keyof T>(obj: T, keys: readonly K[]) => {
    omitted: Omit<T, K>;
    picked: Pick<T, K>;
};
export declare const ensureEnd: (string: string, ending: string) => string;
/**
 * Create a generic cache with clear interface
 */
export declare const createCache: <$T>() => {
    has: (key: string) => boolean;
    get: (key: string) => $T | undefined;
    set: (key: string, value: $T) => Map<string, $T>;
    clear: () => void;
};
export declare const ResponseInternalServerError: () => Response;
/**
 * Execute an operation on multiple items, continuing even if some fail
 * Effect-based version with proper error handling and concurrency control
 */
export declare const tryCatchMany: <item, result, E = never, R = never>(items: readonly item[], operation: (item: item) => Effect.Effect<result, E, R>) => Effect.Effect<[result[], (Error & {
    context: {
        item: item;
    };
})[], {
    success: boolean;
}], never, R>;
/**
 * Legacy Promise-based wrapper for backward compatibility
 * @deprecated Use the Effect-based version
 */
export declare function tryCatchManyAsync<item, result>(items: item[], operation: (item: item) => Promise<result>): Promise<[result[], (Error & {
    context: {
        item: item;
    };
})[]]>;
/**
 * Type-level helper to check if two types are exactly the same (invariant).
 */
export type IsExact<$T, $U> = $T extends $U ? $U extends $T ? true : false : false;
export type ExtendsExact<$Input, $Constraint> = $Input extends $Constraint ? $Constraint extends $Input ? $Input : never : never;
/**
 * Split an array into chunks of specified size
 *
 * @param array - The array to chunk
 * @param size - The size of each chunk
 * @returns Array of chunks
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunk(['a', 'b', 'c'], 3) // [['a', 'b', 'c']]
 * ```
 */
export declare const chunk: <T>(array: readonly T[], size: number) => T[][];
export interface EffectParallelOptions {
    /**
     * Maximum number of items to process concurrently
     * @default 10
     */
    concurrency?: number | 'unbounded';
    /**
     * If true, stops processing on first error
     * If false, continues processing all items even if some fail
     * @default false
     */
    failFast?: boolean;
    /**
     * Size of batches to process items in
     * If not specified, all items are processed with the specified concurrency
     */
    batchSize?: number;
}
export interface EffectParallelResult<$T, $R> {
    /** Successfully processed results */
    results: $R[];
    /** Errors that occurred during processing */
    errors: (Error & {
        item: $T;
    })[];
    /** Whether all items were processed successfully */
    success: boolean;
}
/** @deprecated Use EffectParallelOptions */
export type AsyncParallelOptions = EffectParallelOptions;
/** @deprecated Use EffectParallelResult */
export type AsyncParallelResult<$T, $R> = EffectParallelResult<$T, $R>;
/**
 * Process items in parallel with configurable options using Effect
 *
 * @param items - Items to process
 * @param operation - Effect function to apply to each item (with optional index)
 * @param options - Configuration options
 * @returns Results and errors from processing
 *
 * @example
 * ```ts
 * const items = [1, 2, 3, 4, 5]
 * const result = await Effect.runPromise(
 *   effectParallel(items, (n, index) => Effect.succeed(n * 2), {
 *     concurrency: 2,
 *     batchSize: 3,
 *     failFast: false
 *   })
 * )
 * // result.results: [2, 4, 6, 8, 10]
 * // result.errors: []
 * // result.success: true
 * ```
 */
export declare const effectParallel: <T, R, E = never, Context = never>(items: readonly T[], operation: (item: T, index: number) => Effect.Effect<R, E, Context>, options?: EffectParallelOptions) => Effect.Effect<EffectParallelResult<T, R>, never, Context>;
/**
 * Legacy Promise-based version for backward compatibility
 * @deprecated Use effectParallel with Effect.runPromise
 */
export declare const asyncParallel: <T, R>(items: readonly T[], operation: (item: T, index: number) => Promise<R>, options?: AsyncParallelOptions) => Promise<AsyncParallelResult<T, R>>;
/**
 * Reduce an array asynchronously with context, processing each item in sequence
 *
 * @param items - Array of items to process
 * @param reducer - Async function that takes accumulator, current item, and context
 * @param initial - Initial value for the accumulator
 * @param context - Context object passed to each reducer call
 * @returns Final accumulated value
 *
 * @example
 * ```ts
 * const transformers = [transformer1, transformer2]
 * const ctx = { request: req, response: res }
 * const result = await asyncReduceWithContext(
 *   transformers,
 *   async (html, transformer) => transformer(html, ctx),
 *   initialHtml,
 *   ctx
 * )
 * ```
 */
export declare const asyncReduce: <T, R, C>(items: readonly T[], reducer: (accumulator: R, current: T, context: C, index: number) => Promise<R> | R, initial: R, context: C) => Promise<R>;
/**
 * Curried version of asyncReduceWithContext for functions that transform a value with context
 *
 * @param transformers - Array of transformer functions that take value and context
 * @returns A function that takes an initial value and context, and applies all transformers
 *
 * @example
 * ```ts
 * const transformers = [
 *   (html, ctx) => html.replace('{{url}}', ctx.req.url),
 *   async (html, ctx) => await ctx.minify(html),
 * ]
 * const applyTransforms = asyncReduceWithContextWith(transformers)
 * const finalHtml = await applyTransforms(initialHtml, ctx)
 * ```
 */
export declare const asyncReduceWith: <T, C>(transformers: readonly ((value: T, context: C) => Promise<T> | T)[], context: C) => (initial: T) => Promise<T>;
/**
 * Create a branded type that provides nominal typing in TypeScript.
 *
 * Branded types allow you to create distinct types from primitives or other types,
 * preventing accidental mixing of values that are structurally identical but
 * semantically different.
 *
 * @template $BaseType - The underlying type to brand (e.g., string, number)
 * @template $BrandName - A unique string literal to distinguish this brand
 *
 * @example
 * ```ts
 * // Create distinct ID types that can't be mixed
 * type UserId = Brand<string, 'UserId'>
 * type PostId = Brand<string, 'PostId'>
 *
 * function getUser(id: UserId) { ... }
 *
 * const userId = 'u123' as UserId
 * const postId = 'p456' as PostId
 *
 * getUser(userId)  // ✓ OK
 * getUser(postId)  // ✗ Type error - can't use PostId where UserId expected
 * ```
 *
 * @example
 * ```ts
 * // Brand primitive types for domain modeling
 * type Email = Brand<string, 'Email'>
 * type Url = Brand<string, 'Url'>
 * type PositiveNumber = Brand<number, 'PositiveNumber'>
 * ```
 */
export type Brand<$BaseType, $BrandName extends string> = $BaseType & {
    readonly __brand: $BrandName;
};
/**
 * Helper function to create a branded value.
 *
 * This is a simple type assertion helper. For runtime validation,
 * combine with validation functions or schemas.
 *
 * @template $BaseType - The underlying type to brand
 * @template $BrandName - The brand name to apply
 * @param value - The value to brand
 * @returns The value with the brand type applied
 *
 * @example
 * ```ts
 * type UserId = Brand<string, 'UserId'>
 *
 * // Simple branding (no runtime validation)
 * const id = brand<string, 'UserId'>('u123')
 *
 * // With validation (recommended)
 * function createUserId(value: string): UserId {
 *   if (!value.startsWith('u')) {
 *     throw new Error('User IDs must start with "u"')
 *   }
 *   return brand<string, 'UserId'>(value)
 * }
 * ```
 */
export declare const brand: <$BaseType, $BrandName extends string>(value: $BaseType) => Brand<$BaseType, $BrandName>;
/**
 * Shallow merge objects while omitting undefined values.
 *
 * This utility simplifies the common pattern of conditionally spreading objects
 * to avoid including undefined values that would override existing values.
 *
 * @param objects - Objects to merge (later objects override earlier ones). Undefined objects are ignored.
 * @returns Merged object with undefined values omitted
 *
 * @example
 * ```ts
 * // Instead of:
 * const overrides = {
 *   ...(value1 ? { key1: value1 } : {}),
 *   ...(value2 ? { key2: value2 } : {}),
 * }
 *
 * // Use:
 * const overrides = mergeShallow({
 *   key1: value1,
 *   key2: value2,
 * })
 *
 * // Example with config merging:
 * const config = mergeShallow(
 *   defaultConfig,
 *   userConfig,
 *   { debug: args.debug, base: args.base }
 * )
 * // undefined values in the last object won't override earlier values
 * ```
 */
export declare const spreadShallow: <T extends object>(...objects: (T | undefined)[]) => T;
export type NonEmptyArray<$T> = [$T, ...$T[]];
/**
 * Extract primitive fields that can be used in dehydrated forms
 */
export type PrimitiveFieldKeys<$T> = {
    [K in keyof $T]: $T[K] extends string | number | boolean | bigint | null | undefined ? K : $T[K] extends Date ? K : never;
}[keyof $T];
export type Case<$Result extends true> = $Result;
export type CaseTrue<$Result extends true> = $Result;
export type CaseFalse<$Result extends false> = $Result;
export type CaseNumber<$Result extends number> = $Result;
export type CaseString<$Result extends string> = $Result;
export type CaseBigint<$Result extends bigint> = $Result;
export type CaseNever<$Result extends never> = $Result;
export type ObjReplace<$Object1, $Object2> = Omit<$Object1, keyof $Object2> & $Object2;
export declare const zz: (...args: any[]) => void;
export declare const zd: (...args: any) => void;
/**
 * Filter object properties by key pattern matching
 *
 * @param obj - The object to filter
 * @param predicate - Function that returns true to keep a key
 * @returns A new object with only the key/value pairs where key predicate returned true
 *
 * @example
 * ```ts
 * const props = { 'data-type': 'button', 'data-current': true, onClick: fn, className: 'btn' }
 * const dataAttrs = pickMatching(props, key => key.startsWith('data-'))
 * // { 'data-type': 'button', 'data-current': true }
 * ```
 */
export declare const pickMatching: <T extends object>(obj: T, predicate: (key: keyof T) => boolean) => Partial<T>;
export {};
//# sourceMappingURL=other.d.ts.map