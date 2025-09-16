import type { GraphQLInputObjectType } from 'graphql';
import { type GraphQLField, type GraphQLScalarType } from 'graphql';
export declare const isScalarTypeCustom: (node: GraphQLScalarType) => boolean;
export declare const isScalarTypeAndCustom: (node: unknown) => node is GraphQLScalarType;
export declare const isAllInputObjectFieldsNullable: (node: GraphQLInputObjectType) => boolean;
export declare const isOutputField: (value: object) => value is GraphQLField<any, any>;
//# sourceMappingURL=typeGuards.d.ts.map