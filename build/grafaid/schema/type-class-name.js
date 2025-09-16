import { GraphQLEnumType, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLUnionType, isEnumType, isInputObjectType, isInterfaceType, isObjectType, isScalarType, isUnionType, } from 'graphql';
export const TypeClassNameEnum = {
    Scalar: `GraphQLScalarType`,
    Object: `GraphQLObjectType`,
    Interface: `GraphQLInterfaceType`,
    Union: `GraphQLUnionType`,
    Enum: `GraphQLEnumType`,
    InputObject: `GraphQLInputObjectType`,
    List: `GraphQLList`,
    NonNull: `GraphQLNonNull`,
};
export const typeClassToName = (node) => {
    switch (true) {
        case isObjectType(node):
            return TypeClassNameEnum.Object;
        case isInputObjectType(node):
            return TypeClassNameEnum.InputObject;
        case isUnionType(node):
            return TypeClassNameEnum.Union;
        case isInterfaceType(node):
            return TypeClassNameEnum.Interface;
        case isEnumType(node):
            return TypeClassNameEnum.Enum;
        case isScalarType(node):
            return TypeClassNameEnum.Scalar;
        default:
            throw new Error(`Unknown node kind: ${String(node)}`);
    }
};
export const namedTypeClassNameToClassMap = {
    [TypeClassNameEnum.Scalar]: GraphQLScalarType,
    [TypeClassNameEnum.Object]: GraphQLObjectType,
    [TypeClassNameEnum.Interface]: GraphQLInterfaceType,
    [TypeClassNameEnum.Union]: GraphQLUnionType,
    [TypeClassNameEnum.Enum]: GraphQLEnumType,
    [TypeClassNameEnum.InputObject]: GraphQLInputObjectType,
};
export const typeClassNameToClassMap = {
    [TypeClassNameEnum.NonNull]: GraphQLNonNull,
    [TypeClassNameEnum.List]: GraphQLList,
    ...namedTypeClassNameToClassMap,
};
//# sourceMappingURL=type-class-name.js.map