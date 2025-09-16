import { S } from '#kit-temp';
import * as Argument from './argument.js';
import * as ResolvedType from './resolved-type.js';
/**
 * GraphQL field segment in a schema path.
 */
export declare const graphqlKind: "Field";
export interface Field {
    _tag: 'GraphQLPathSegmentField';
    name: string;
    next?: FieldNext | undefined;
}
export type FieldNext = Field | Argument.Argument | ResolvedType.ResolvedType;
export interface FieldEncoded {
    _tag: 'GraphQLPathSegmentField';
    name: string;
    next?: FieldNextEncoded | undefined;
}
export type FieldNextEncoded = FieldEncoded | Argument.ArgumentEncoded | ResolvedType.ResolvedTypeEncoded;
export declare const Schema: S.TaggedStruct<"GraphQLPathSegmentField", {
    name: S.filter<S.filter<typeof S.String>>;
    next: S.optional<S.suspend<FieldNext, FieldNextEncoded, never>>;
}>;
export declare const make: (props: {
    readonly _tag?: "GraphQLPathSegmentField";
    readonly name: string;
    readonly next?: FieldNext | undefined;
}, options?: S.MakeOptions) => {
    readonly _tag: "GraphQLPathSegmentField";
    readonly name: string;
    readonly next?: FieldNext | undefined;
};
//# sourceMappingURL=field.d.ts.map