import { FileSystem } from '@effect/platform';
import { Effect, Equivalence, Schema as S } from 'effect';
export interface ResourceConfig<$A, $I> {
    /**
     * A descriptive name for the resource
     */
    name: string;
    /**
     * The file path (relative to the directory parameter in read/write)
     */
    path: string;
    /**
     * The Effect Schema for encoding/decoding
     */
    schema: S.Schema<$A, $I>;
}
export interface Resource<$A, $I> {
    /**
     * Read and decode the resource from a directory
     */
    read: (directory: string) => Effect.Effect<$A, ResourceError, FileSystem.FileSystem>;
    /**
     * Encode and write the resource to a directory
     */
    write: (data: $A, directory: string) => Effect.Effect<void, ResourceError, FileSystem.FileSystem>;
}
declare const FileNotFound_base: S.TaggedErrorClass<FileNotFound, "FileNotFound", {
    readonly _tag: S.tag<"FileNotFound">;
} & {
    path: typeof S.String;
    message: typeof S.String;
}>;
/**
 * Errors that can occur during resource operations
 */
export declare class FileNotFound extends FileNotFound_base {
}
declare const ReadError_base: S.TaggedErrorClass<ReadError, "ReadError", {
    readonly _tag: S.tag<"ReadError">;
} & {
    path: typeof S.String;
    message: typeof S.String;
}>;
export declare class ReadError extends ReadError_base {
}
declare const WriteError_base: S.TaggedErrorClass<WriteError, "WriteError", {
    readonly _tag: S.tag<"WriteError">;
} & {
    path: typeof S.String;
    message: typeof S.String;
}>;
export declare class WriteError extends WriteError_base {
}
declare const ParseError_base: S.TaggedErrorClass<ParseError, "ParseError", {
    readonly _tag: S.tag<"ParseError">;
} & {
    path: typeof S.String;
    message: typeof S.String;
}>;
export declare class ParseError extends ParseError_base {
}
declare const EncodeError_base: S.TaggedErrorClass<EncodeError, "EncodeError", {
    readonly _tag: S.tag<"EncodeError">;
} & {
    message: typeof S.String;
}>;
export declare class EncodeError extends EncodeError_base {
}
export type ResourceError = FileNotFound | ReadError | WriteError | ParseError | EncodeError;
/**
 * Create a new Resource with the given configuration
 *
 * @example
 * ```ts
 * const manifest = Resource.create({
 *   name: 'my-manifest',
 *   path: 'manifest.json',
 *   schema: S.Struct({
 *     version: S.String,
 *     items: S.Array(S.String)
 *   })
 * })
 *
 * // Read from directory
 * const result = await manifest.read('./my-dir')
 * if (Either.isRight(result)) {
 *   console.log(result.right)
 * }
 * ```
 */
export declare const create: <A, I = A>(config: ResourceConfig<A, I>) => Resource<A, I>;
/**
 * Equivalence for ResourceError
 */
export declare const ResourceErrorEquivalence: Equivalence.Equivalence<ResourceError>;
export declare const isFileNotFound: (error: ResourceError) => error is FileNotFound;
export declare const isReadError: (error: ResourceError) => error is ReadError;
export declare const isWriteError: (error: ResourceError) => error is WriteError;
export declare const isParseError: (error: ResourceError) => error is ParseError;
export declare const isEncodeError: (error: ResourceError) => error is EncodeError;
export declare const isResourceError: (u: unknown) => u is ResourceError;
/**
 * Schema for ResourceError union
 */
export declare const ResourceErrorSchema: S.Union<[typeof FileNotFound, typeof ReadError, typeof WriteError, typeof ParseError, typeof EncodeError]>;
/**
 * Decode a value to ResourceError
 */
export declare const decodeResourceError: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<FileNotFound | ReadError | WriteError | ParseError | EncodeError, import("effect/ParseResult").ParseError, never>;
/**
 * Decode a value to ResourceError synchronously
 */
export declare const decodeResourceErrorSync: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions) => FileNotFound | ReadError | WriteError | ParseError | EncodeError;
/**
 * Encode a ResourceError
 */
export declare const encodeResourceError: (a: FileNotFound | ReadError | WriteError | ParseError | EncodeError, overrideOptions?: import("effect/SchemaAST").ParseOptions) => Effect.Effect<{
    readonly _tag: "FileNotFound";
    readonly path: string;
    readonly message: string;
} | {
    readonly _tag: "ReadError";
    readonly path: string;
    readonly message: string;
} | {
    readonly _tag: "WriteError";
    readonly path: string;
    readonly message: string;
} | {
    readonly _tag: "ParseError";
    readonly path: string;
    readonly message: string;
} | {
    readonly _tag: "EncodeError";
    readonly message: string;
}, import("effect/ParseResult").ParseError, never>;
export {};
//# sourceMappingURL=resource.d.ts.map