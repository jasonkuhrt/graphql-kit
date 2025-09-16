import { S } from '#kit-temp';
import * as Type from './type.js';
/**
 * The root GraphQL schema path structure.
 * Represents the starting point of a path traversal.
 */
export interface Root {
    _tag: 'GraphQLPathRoot';
    version?: string | undefined;
    next?: RootNext | undefined;
}
export type RootNext = Type.Type;
export interface RootEncoded {
    _tag: 'GraphQLPathRoot';
    version?: string | undefined;
    next?: RootNextEncoded | undefined;
}
export type RootNextEncoded = Type.TypeEncoded;
export declare const Schema: S.TaggedStruct<"GraphQLPathRoot", {
    version: S.optional<typeof S.String>;
    next: S.optional<S.suspend<Type.Type, Type.TypeEncoded, never>>;
}>;
export declare const make: (props: void | {
    readonly _tag?: "GraphQLPathRoot";
    readonly version?: string | undefined;
    readonly next?: Type.Type | undefined;
}, options?: S.MakeOptions) => {
    readonly _tag: "GraphQLPathRoot";
    readonly version?: string | undefined;
    readonly next?: Type.Type | undefined;
};
//# sourceMappingURL=root.d.ts.map