import type { GraphQLField, GraphQLOutputField } from '#grafaid-old';
import { type GraphQLArgument, type GraphQLInputField } from 'graphql';
import type { RootTypeMap } from './RootTypeMap.js';
export { GraphQLEnumType as Enum, isEnumType as isEnum, GraphQLInputObjectType as InputObject, isInputObjectType as isInputObject, GraphQLInterfaceType as Interface, isInterfaceType as isInterface, GraphQLList as List, isListType as isList, GraphQLNonNull as NonNull, isNonNullType as isNonNull, GraphQLObjectType as Object, isObjectType as isObject, GraphQLScalarType as Scalar, isScalarType as isScalar, GraphQLUnionType as Union, isUnionType as isUnion, GraphQLDirective as Directive, isDirective, type GraphQLInputField as InputField, type GraphQLArgument as Argument, getNamedType as getNamed, } from 'graphql';
export type OutputField<TSource = any, TContext = any, TArgs = any> = GraphQLOutputField<TSource, TContext, TArgs>;
export declare const isOutputField: (value: unknown) => value is GraphQLField;
export declare const isArgument: (value: unknown) => value is GraphQLArgument;
export declare const isInputField: (value: unknown) => value is GraphQLInputField;
export declare const isRoot: (map: RootTypeMap, type: unknown) => boolean;
//# sourceMappingURL=type.d.ts.map