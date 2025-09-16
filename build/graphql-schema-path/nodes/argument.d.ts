import { S } from '#kit-temp';
import * as Field from './field.js';
import * as ResolvedType from './resolved-type.js';
/**
 * GraphQL argument segment in a schema path.
 */
export declare const graphqlKind: "Argument";
export interface Argument {
    _tag: 'GraphQLPathSegmentArgument';
    name: string;
    next?: ArgumentNext | undefined;
}
export type ArgumentNext = Field.Field | ResolvedType.ResolvedType;
export interface ArgumentEncoded {
    _tag: 'GraphQLPathSegmentArgument';
    name: string;
    next?: ArgumentNextEncoded | undefined;
}
export type ArgumentNextEncoded = Field.FieldEncoded | ResolvedType.ResolvedTypeEncoded;
export declare const Schema: S.TaggedStruct<"GraphQLPathSegmentArgument", {
    name: S.filter<S.filter<typeof S.String>>;
    next: S.optional<S.suspend<ArgumentNext, ArgumentNextEncoded, never>>;
}>;
export declare const make: (props: {
    readonly _tag?: "GraphQLPathSegmentArgument";
    readonly name: string;
    readonly next?: ArgumentNext | undefined;
}, options?: S.MakeOptions) => {
    readonly _tag: "GraphQLPathSegmentArgument";
    readonly name: string;
    readonly next?: ArgumentNext | undefined;
};
//# sourceMappingURL=argument.d.ts.map