import { Grafaid } from '../grafaid/$.js';
import { FileSystem } from '@effect/platform/FileSystem';
import { Effect } from 'effect';
export type SchemaPointer = {
    type: `introspect`;
    url: string;
    headers?: Record<string, string> | undefined;
} | {
    type: `sdl`;
    pathOrUrl: string;
} | {
    type: `name`;
    name: `github` | `hive`;
};
export declare const load: (source: SchemaPointer) => Effect.Effect<Grafaid.Schema.Schema, Error, FileSystem>;
//# sourceMappingURL=graphql-schema-loader.d.ts.map