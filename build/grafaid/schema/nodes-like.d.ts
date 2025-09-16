import type { GraphQLArgument, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLNamedType } from 'graphql';
import type { Fielded } from './types-like.js';
export type Field = GraphQLField<any, any> | GraphQLInputField;
export declare const isField: (value: object) => value is GraphQLField<any, any> | InputField;
export declare const getFields: (type: Fielded) => Field[];
export type Describable = GraphQLNamedType | Field;
export type Deprecatable = GraphQLEnumValue | Field;
export declare const isDeprecatable: (node: object) => node is Deprecatable;
export type InputField = GraphQLArgument | GraphQLInputField;
export declare const isInputField: (value: object) => value is InputField;
//# sourceMappingURL=nodes-like.d.ts.map