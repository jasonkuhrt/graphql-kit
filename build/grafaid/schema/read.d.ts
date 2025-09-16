import { FileSystem } from '@effect/platform/FileSystem';
import { Fs } from '@wollybeard/kit';
import { Effect } from 'effect';
import { type GraphQLSchema } from 'graphql';
export declare const read: (sdlFilePath: string) => Effect.Effect<null | Fs.File<GraphQLSchema>, Error, FileSystem>;
//# sourceMappingURL=read.d.ts.map