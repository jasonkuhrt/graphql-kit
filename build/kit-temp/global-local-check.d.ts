import { FileSystem } from '@effect/platform';
import { Effect } from 'effect';
interface GlobalLocalCheckOptions {
    /**
     * The package name to check for (e.g., 'polen', 'eslint', etc.)
     */
    packageName: string;
    /**
     * The current executable path (typically process.argv[1])
     */
    currentExecutablePath: string;
    /**
     * The flag name to bypass the check (default: '--allow-global')
     */
    allowGlobalFlag?: string;
    /**
     * Custom error message template
     */
    errorMessageTemplate?: {
        title?: string;
        explanation?: string;
        solutions?: string[];
        bypassInstructions?: string;
    };
}
/**
 * Check if a globally installed package is being run in a project that has the package installed locally.
 * This helps prevent version conflicts and confusion.
 *
 * @example
 * ```typescript
 * // In your CLI entry point
 * await Effect.runPromise(
 *   Effect.provide(
 *     checkGlobalVsLocal({
 *       packageName: 'my-cli',
 *       currentExecutablePath: process.argv[1]
 *     }),
 *     NodeFileSystem.layer
 *   )
 * )
 * ```
 */
export declare const checkGlobalVsLocal: (options: GlobalLocalCheckOptions) => Effect.Effect<void, Error, FileSystem.FileSystem>;
/**
 * Legacy Promise-based wrapper for backward compatibility.
 * @deprecated Use the Effect-based version with appropriate Effect runtime
 */
export declare function checkGlobalVsLocalAsync(options: GlobalLocalCheckOptions): Promise<void>;
export {};
//# sourceMappingURL=global-local-check.d.ts.map