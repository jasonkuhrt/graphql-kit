/**
 * GraphQL type guard utilities for checking and narrowing GraphQL types.
 * This module provides type-safe helper functions for working with GraphQL types.
 */
import type { GraphQLEnumType, GraphQLField as GraphQLField_graphql, GraphQLInputField, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLNamedType, GraphQLObjectType, GraphQLOutputType, GraphQLScalarType, GraphQLSchema, GraphQLUnionType } from 'graphql';
export * as Schema from './schema.js';
export declare namespace Groups {
    type Describable = GraphQLNamedType | GraphQLField;
    type Named = GraphQLNamedType;
}
export type GraphQLOutputField<$Source = any, $Context = any, $Args = any> = GraphQLField_graphql<$Source, $Context, $Args>;
export type GraphQLField<$Source = any, $Context = any, $Args = any> = GraphQLOutputField<$Source, $Context, $Args> | GraphQLInputField;
export declare const isOutputField: (field: GraphQLField) => field is GraphQLOutputField;
export declare const isInputField: (field: GraphQLField) => field is GraphQLInputField;
export declare const isEntrypointType: (type: GraphQLNamedType) => type is GraphQLObjectType;
/**
 * Checks if a GraphQLOutputType is expandable (object or interface type).
 * This handles unwrapping non-null and list types to check the underlying named type.
 *
 * @param type - The GraphQL output type to check
 * @returns True if the unwrapped type is either an object or interface type
 */
export declare const isExpandableType: (type: GraphQLOutputType) => boolean;
export declare const isUsingInputArgumentPattern: (field: GraphQLOutputField) => boolean;
export declare const getIAP: (field: GraphQLOutputField) => GraphQLInputObjectType | null;
export declare const getKindMap: (schema: GraphQLSchema) => KindMap;
export interface KindMap {
    index: {
        Root: {
            query: GraphQLObjectType | null;
            mutation: GraphQLObjectType | null;
            subscription: GraphQLObjectType | null;
        };
        OutputObject: Record<string, GraphQLObjectType>;
        InputObject: Record<string, GraphQLInputObjectType>;
        Interface: Record<string, GraphQLInterfaceType>;
        Union: Record<string, GraphQLUnionType>;
        Enum: Record<string, GraphQLEnumType>;
        ScalarCustom: Record<string, GraphQLScalarType>;
        ScalarStandard: Record<string, GraphQLScalarType>;
    };
    list: {
        Root: GraphQLObjectType[];
        OutputObject: GraphQLObjectType[];
        InputObject: GraphQLInputObjectType[];
        Interface: GraphQLInterfaceType[];
        Union: GraphQLUnionType[];
        Enum: GraphQLEnumType[];
        ScalarCustom: GraphQLScalarType[];
        ScalarStandard: GraphQLScalarType[];
    };
}
export declare const standardScalarTypeNames: {
    String: string;
    ID: string;
    Int: string;
    Float: string;
    Boolean: string;
};
export declare const isScalarTypeCustom: (node: GraphQLScalarType) => boolean;
//# sourceMappingURL=grafaid.d.ts.map