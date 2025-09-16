import { S } from '#kit-temp';
import * as Field from './field.js';
/**
 * GraphQL type segment in a schema path.
 * Represents a reference to a GraphQL type (Object, Interface, Union, Enum, Scalar, Input).
 */
export declare const graphqlKinds: readonly ["Object", "Interface", "Union", "Scalar", "Enum", "InputObject"];
export interface Type {
    _tag: 'GraphQLPathSegmentType';
    name: string;
    next?: TypeNext | undefined;
}
export type TypeNext = Field.Field;
export interface TypeEncoded {
    _tag: 'GraphQLPathSegmentType';
    name: string;
    next?: TypeNextEncoded | undefined;
}
export type TypeNextEncoded = Field.FieldEncoded;
export declare const Schema: S.TaggedStruct<"GraphQLPathSegmentType", {
    name: S.filter<S.filter<typeof S.String>>;
    next: S.optional<S.suspend<Field.Field, Field.FieldEncoded, never>>;
}>;
export declare const make: (props: {
    readonly _tag?: "GraphQLPathSegmentType";
    readonly name: string;
    readonly next?: Field.Field | undefined;
}, options?: S.MakeOptions) => {
    readonly _tag: "GraphQLPathSegmentType";
    readonly name: string;
    readonly next?: Field.Field | undefined;
};
//# sourceMappingURL=type.d.ts.map