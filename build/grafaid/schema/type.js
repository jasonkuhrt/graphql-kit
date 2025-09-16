import { isNamedType } from 'graphql';
// dprint-ignore
export { GraphQLEnumType as Enum, isEnumType as isEnum, GraphQLInputObjectType as InputObject, isInputObjectType as isInputObject, GraphQLInterfaceType as Interface, isInterfaceType as isInterface, GraphQLList as List, isListType as isList, GraphQLNonNull as NonNull, isNonNullType as isNonNull, GraphQLObjectType as Object, isObjectType as isObject, GraphQLScalarType as Scalar, isScalarType as isScalar, GraphQLUnionType as Union, isUnionType as isUnion, GraphQLDirective as Directive, isDirective, getNamedType as getNamed, } from 'graphql';
export const isOutputField = (value) => {
    return typeof value === 'object' && value !== null && 'args' in value && 'type' in value && 'name' in value;
};
export const isArgument = (value) => {
    return typeof value === 'object' && value !== null
        && 'name' in value && 'type' in value
        && 'defaultValue' in value && !('args' in value);
};
export const isInputField = (value) => {
    return typeof value === 'object' && value !== null
        && 'name' in value && 'type' in value
        && 'defaultValue' in value && !('args' in value);
};
export const isRoot = (map, type) => {
    return isNamedType(type) && map.list.some(_ => _.name.canonical === type.name);
};
//# sourceMappingURL=type.js.map