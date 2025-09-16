import { Grafaid } from '../grafaid/$.js';
import { FileSystem } from '@effect/platform/FileSystem';
import { Fs } from '@wollybeard/kit';
import { neverCase } from '@wollybeard/kit/language';
import { Effect } from 'effect';
export const load = (source) => Effect.gen(function* () {
    switch (source.type) {
        case `introspect`: {
            // TODO: Re-enable when graffle is properly installed and working
            return yield* Effect.fail(new Error(`Schema introspection is temporarily disabled. Graffle dependency needs to be fixed.`));
            // const graffle = Graffle
            //   .create()
            //   .use(Introspection())
            //   .transport({
            //     url: source.url,
            //     headers: source.headers || {},
            //   })
            // const introspectionResult = yield* Effect.tryPromise({
            //   try: () => (graffle as any).introspect(),
            //   catch: (error) => new Error(`Failed to introspect schema: ${error}`),
            // })
            // if (!introspectionResult) {
            //   return yield* Effect.fail(new Error(`Failed to introspect schema.`))
            // }
            // return Grafaid.Schema.fromIntrospectionQuery(introspectionResult as any)
        }
        case `sdl`: {
            if (URL.canParse(source.pathOrUrl)) {
                const response = yield* Effect.tryPromise({
                    try: () => fetch(source.pathOrUrl),
                    catch: (error) => new Error(`Failed to fetch SDL from ${source.pathOrUrl}: ${error}`),
                });
                if (!response.ok) {
                    return yield* Effect.fail(new Error(`Failed to download SDL from ${source.pathOrUrl}. Status: ${String(response.status)}`));
                }
                const sdlContent = yield* Effect.tryPromise({
                    try: () => response.text(),
                    catch: (error) => new Error(`Failed to read response text: ${error}`),
                });
                const ast = yield* Grafaid.Parse.parseSchema(sdlContent, { source: source.pathOrUrl });
                return yield* Grafaid.Schema.fromAST(ast);
            }
            else {
                const fs = yield* FileSystem;
                const sdlContent = yield* fs.readFileString(source.pathOrUrl).pipe(Effect.mapError((error) => new Error(`Failed to read SDL from ${source.pathOrUrl}: ${error}`)));
                const ast = yield* Grafaid.Parse.parseSchema(sdlContent, { source: source.pathOrUrl });
                return yield* Grafaid.Schema.fromAST(ast);
            }
        }
        case `name`: {
            switch (source.name) {
                case `github`: {
                    return yield* load({ type: `sdl`, pathOrUrl: `https://docs.github.com/public/fpt/schema.docs.graphql` });
                }
                case `hive`: {
                    return yield* load({ type: `introspect`, url: `https://api.graphql-hive.com/graphql` });
                }
                default:
                    return neverCase(source.name);
            }
        }
        default:
            return neverCase(source);
    }
});
//# sourceMappingURL=graphql-schema-loader.js.map