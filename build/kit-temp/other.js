//
//
//
//
//
// Holding Module for Missing @wollybeard/kit Functionality
//
// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//
// Code here is meant to be migrated eventually to @wollybeard/kit.
//
//
//
import { FileSystem } from '@effect/platform';
import { Arr, Err, Fs, Http, Path, Undefined } from '@wollybeard/kit';
import { dump } from '@wollybeard/kit/debug';
import { Effect } from 'effect';
export const arrayEquals = (a, b) => {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
};
export const ensureOptionalAbsoluteWithCwd = (pathExp) => {
    if (Undefined.is(pathExp))
        return process.cwd();
    return Path.ensureAbsolute(pathExp, process.cwd());
};
export const ensureOptionalAbsolute = (pathExp, basePathExp) => {
    assertPathAbsolute(basePathExp);
    if (Undefined.is(pathExp))
        return basePathExp;
    return Path.ensureAbsolute(pathExp, basePathExp);
};
export const assertPathAbsolute = (pathExpression) => {
    if (Path.isAbsolute(pathExpression))
        return;
    throw new Error(`Path must be absolute: ${pathExpression}`);
};
export const assertOptionalPathAbsolute = (pathExpression, message) => {
    if (Undefined.is(pathExpression))
        return;
    if (Path.isAbsolute(pathExpression))
        return;
    const message_ = message ?? `Path must be absolute: ${pathExpression}`;
    throw new Error(message_);
};
export const pickFirstPathExisting = (paths) => Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    // Check each path for existence
    const checks = yield* Effect.all(paths.map(path => fs.exists(path).pipe(Effect.map(exists => exists ? path : undefined), Effect.mapError(error => new Error(`Failed to check path existence: ${path} - ${error}`)))));
    // Return the first existing path
    return checks.find(maybePath => maybePath !== undefined);
});
export const isSpecifierFromPackage = (specifier, packageName) => {
    return specifier === packageName || specifier.startsWith(packageName + `/`);
};
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
export const objPolicyFilter = (mode, obj, keys) => {
    const result = mode === `deny` ? { ...obj } : {};
    if (mode === `allow`) {
        // For allow mode, only add specified keys that are own properties
        for (const key of keys) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                // @ts-expect-error
                result[key] = obj[key];
            }
        }
    }
    else {
        // For deny mode, remove specified keys
        for (const key of keys) {
            delete result[key];
        }
    }
    return result;
};
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
export const objFilter = (obj, predicate) => {
    const result = {};
    // Use Object.keys to get all enumerable own properties
    // This matches the behavior of for...in but only for own properties
    for (const key of Object.keys(obj)) {
        if (predicate(key, obj[key], obj)) {
            result[key] = obj[key];
        }
    }
    return result;
};
export const ObjPick = (obj, keys) => {
    return objPolicyFilter(`allow`, obj, keys);
};
export const ObjOmit = (obj, keys) => {
    return objPolicyFilter(`deny`, obj, keys);
};
export const ObjPartition = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (key in acc.omitted) {
            // @ts-expect-error omitted already at type level
            delete acc.omitted[key];
            acc.picked[key] = obj[key];
        }
        return acc;
    }, {
        omitted: { ...obj },
        picked: {},
    });
};
export const ensureEnd = (string, ending) => {
    if (string.endsWith(ending))
        return string;
    return string + ending;
};
/**
 * Create a generic cache with clear interface
 */
export const createCache = () => {
    const cache = new Map();
    return {
        has: (key) => cache.has(key),
        get: (key) => cache.get(key),
        set: (key, value) => cache.set(key, value),
        clear: () => cache.clear(),
    };
};
export const ResponseInternalServerError = () => new Response(null, {
    status: Http.Status.InternalServerError.code,
    statusText: Http.Status.InternalServerError.description,
});
/**
 * Execute an operation on multiple items, continuing even if some fail
 * Effect-based version with proper error handling and concurrency control
 */
export const tryCatchMany = (items, operation) => Effect.gen(function* () {
    const results = yield* Effect.all(items.map(item => Effect.gen(function* () {
        const result = yield* Effect.either(operation(item));
        if (result._tag === 'Left') {
            const error = result.left instanceof Error ? result.left : new Error(String(result.left));
            const enhancedError = error;
            enhancedError.context = { item };
            return enhancedError;
        }
        return result.right;
    })), { concurrency: 'unbounded' });
    // Manually partition results to ensure proper typing
    const successes = [];
    const failures = [];
    for (const result of results) {
        if (result instanceof Error) {
            failures.push(result);
        }
        else {
            successes.push(result);
        }
    }
    return [successes, failures, { success: failures.length === 0 }];
});
/**
 * Legacy Promise-based wrapper for backward compatibility
 * @deprecated Use the Effect-based version
 */
export async function tryCatchManyAsync(items, operation) {
    const effectOperation = (item) => Effect.tryPromise(() => operation(item));
    const [results, errors] = await Effect.runPromise(tryCatchMany(items, effectOperation));
    return [results, errors];
}
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
export const chunk = (array, size) => {
    if (size <= 0)
        throw new Error(`Chunk size must be greater than 0`);
    if (array.length === 0)
        return [];
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};
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
export const effectParallel = (items, operation, options = {}) => Effect.gen(function* () {
    const { concurrency = 10, failFast = false, batchSize } = options;
    if (items.length === 0) {
        return { results: [], errors: [], success: true };
    }
    const allResults = [];
    const allErrors = [];
    // If batchSize is specified, process in batches
    if (batchSize !== undefined) {
        const batches = chunk(items, batchSize);
        let globalIndex = 0;
        for (const batch of batches) {
            const batchResult = yield* processEffectBatch(batch, operation, concurrency, failFast, globalIndex);
            allResults.push(...batchResult.results);
            allErrors.push(...batchResult.errors);
            globalIndex += batch.length;
            if (failFast && batchResult.errors.length > 0) {
                break;
            }
        }
    }
    else {
        // Process all items with specified concurrency
        const result = yield* processEffectBatch(items, operation, concurrency, failFast, 0);
        allResults.push(...result.results);
        allErrors.push(...result.errors);
    }
    return {
        results: allResults,
        errors: allErrors,
        success: allErrors.length === 0,
    };
});
/**
 * Legacy Promise-based version for backward compatibility
 * @deprecated Use effectParallel with Effect.runPromise
 */
export const asyncParallel = async (items, operation, options = {}) => {
    const effectOperation = (item, index) => Effect.tryPromise(() => operation(item, index));
    return Effect.runPromise(effectParallel(items, effectOperation, options));
};
/**
 * Process a batch of items with limited concurrency using Effect
 */
const processEffectBatch = (items, operation, concurrency, failFast, startIndex = 0) => Effect.gen(function* () {
    const results = [];
    const errors = [];
    if (concurrency === 'unbounded') {
        // Process all items concurrently without limit
        const itemEffects = items.map((item, index) => Effect.gen(function* () {
            const globalIndex = startIndex + index;
            const result = yield* Effect.either(operation(item, globalIndex));
            if (result._tag === 'Left') {
                const error = result.left instanceof Error ? result.left : new Error(String(result.left));
                const enhancedError = error;
                enhancedError.item = item;
                return { success: false, error: enhancedError, item };
            }
            return { success: true, result: result.right, item };
        }));
        const chunkResults = yield* Effect.all(itemEffects, { concurrency: 'unbounded' });
        for (const itemResult of chunkResults) {
            if (itemResult.success) {
                results.push(itemResult.result);
            }
            else {
                errors.push(itemResult.error);
                if (failFast) {
                    return { results, errors, success: false };
                }
            }
        }
    }
    else {
        // Process items in chunks based on concurrency limit
        const chunks = chunk(items, concurrency);
        let currentIndex = startIndex;
        for (const chunkItems of chunks) {
            const itemEffects = chunkItems.map((item, chunkIndex) => Effect.gen(function* () {
                const globalIndex = currentIndex + chunkIndex;
                const result = yield* Effect.either(operation(item, globalIndex));
                if (result._tag === 'Left') {
                    const error = result.left instanceof Error ? result.left : new Error(String(result.left));
                    const enhancedError = error;
                    enhancedError.item = item;
                    return { success: false, error: enhancedError, item };
                }
                return { success: true, result: result.right, item };
            }));
            currentIndex += chunkItems.length;
            const chunkResults = yield* Effect.all(itemEffects, { concurrency: 'unbounded' });
            for (const itemResult of chunkResults) {
                if (itemResult.success) {
                    results.push(itemResult.result);
                }
                else {
                    errors.push(itemResult.error);
                    if (failFast) {
                        return { results, errors, success: false };
                    }
                }
            }
        }
    }
    return { results, errors, success: errors.length === 0 };
});
/**
 * Legacy Promise-based batch processor for backward compatibility
 * @deprecated Use processEffectBatch
 */
const processBatch = async (items, operation, concurrency, failFast, startIndex = 0) => {
    const effectOperation = (item, index) => Effect.tryPromise(() => operation(item, index));
    return Effect.runPromise(processEffectBatch(items, effectOperation, concurrency, failFast, startIndex));
};
// /**
//  * Reduce an array asynchronously, processing each item in sequence
//  *
//  * @param items - Array of items to process
//  * @param reducer - Async function that takes accumulator and current item
//  * @param initial - Initial value for the accumulator
//  * @returns Final accumulated value
//  *
//  * @example
//  * ```ts
//  * const numbers = [1, 2, 3, 4]
//  * const sum = await asyncReduce(numbers, async (acc, n) => acc + n, 0)
//  * // sum: 10
//  *
//  * const transforms = [addHeader, addFooter, minify]
//  * const html = await asyncReduce(transforms, async (html, transform) => transform(html), initialHtml)
//  * ```
//  */
// export const asyncReduce = async <T, R>(
//   items: readonly T[],
//   reducer: (accumulator: R, current: T, index: number) => Promise<R> | R,
//   initial: R,
// ): Promise<R> => {
//   let result = initial
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i]!
//     result = await reducer(result, item, i)
//   }
//   return result
// }
// /**
//  * Curried version of asyncReduce for functions that transform a value
//  *
//  * @param transformers - Array of transformer functions
//  * @returns A function that takes an initial value and applies all transformers
//  *
//  * @example
//  * ```ts
//  * const transformers = [addHeader, addFooter, minify]
//  * const applyTransforms = asyncReduceWith(transformers)
//  * const finalHtml = await applyTransforms(initialHtml)
//  *
//  * // For simple pipelines where each function transforms the same type
//  * const htmlPipeline = asyncReduceWith([
//  *   (html) => html.replace('foo', 'bar'),
//  *   async (html) => await prettify(html),
//  *   (html) => html.trim()
//  * ])
//  * ```
//  */
// export const asyncReduceWith = <T>(
//   transformers: readonly ((value: T) => Promise<T> | T)[],
// ) => {
//   return async (initial: T): Promise<T> => {
//     return asyncReduce(transformers, (value, transform) => transform(value), initial)
//   }
// }
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
export const asyncReduce = async (items, reducer, initial, context) => {
    let result = initial;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        result = await reducer(result, item, context, i);
    }
    return result;
};
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
export const asyncReduceWith = (transformers, context) => {
    return async (initial) => {
        return asyncReduce(transformers, (value, transform, ctx) => transform(value, ctx), initial, context);
    };
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
export const brand = (value) => {
    return value;
};
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
export const spreadShallow = (...objects) => {
    const result = {};
    for (const obj of objects) {
        if (obj === undefined)
            continue;
        for (const key in obj) {
            // Protect against prototype pollution by skipping dangerous keys
            if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
                continue;
            }
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                if (value !== undefined) {
                    result[key] = value;
                }
            }
        }
    }
    return result;
};
export const zz = (...args) => {
    console.log('---------------------------------------------');
    console.log(...args);
    console.log('---------------------------------------------');
};
export const zd = (...args) => {
    console.log('---------------------------------------------');
    args.forEach(dump);
    console.log('---------------------------------------------');
};
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
export const pickMatching = (obj, predicate) => {
    const result = {};
    for (const key of Object.keys(obj)) {
        if (predicate(key)) {
            result[key] = obj[key];
        }
    }
    return result;
};
//# sourceMappingURL=other.js.map