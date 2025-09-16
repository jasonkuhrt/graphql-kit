import { S } from '#kit-temp';
/**
 * GraphQL resolved type segment in a schema path.
 * Represents the final type resolution in a field path.
 *
 * This is a terminal node - it has no next segment.
 * Used to indicate "resolve to the actual type" in paths like:
 * - User.posts# (resolve the type of posts field)
 */
export interface ResolvedType {
    _tag: 'GraphQLPathSegmentResolvedType';
    next?: undefined;
}
export interface ResolvedTypeEncoded {
    _tag: 'GraphQLPathSegmentResolvedType';
    next?: undefined;
}
export declare const Schema: S.TaggedStruct<"GraphQLPathSegmentResolvedType", {
    next: S.optional<typeof S.Undefined>;
}>;
export declare const make: (props: void | {
    readonly _tag?: "GraphQLPathSegmentResolvedType";
    readonly next?: undefined;
}, options?: S.MakeOptions) => {
    readonly _tag: "GraphQLPathSegmentResolvedType";
    readonly next?: undefined;
};
//# sourceMappingURL=resolved-type.d.ts.map