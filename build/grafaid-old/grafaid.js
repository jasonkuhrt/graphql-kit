/**
 * GraphQL type guard utilities for checking and narrowing GraphQL types.
 * This module provides type-safe helper functions for working with GraphQL types.
 */
import { Arr } from '@wollybeard/kit';
import { getNamedType, isEnumType, isInputObjectType, isInterfaceType, isNonNullType, isObjectType, isScalarType, isUnionType, } from 'graphql';
export * as Schema from './schema.js';
export const isOutputField = (field) => {
    return `args` in field;
};
export const isInputField = (field) => {
    return !isOutputField(field);
};
export const isEntrypointType = (type) => [`Query`, `Mutation`, `Subscription`].includes(type.name) && isObjectType(type);
/**
 * Checks if a GraphQLOutputType is expandable (object or interface type).
 * This handles unwrapping non-null and list types to check the underlying named type.
 *
 * @param type - The GraphQL output type to check
 * @returns True if the unwrapped type is either an object or interface type
 */
export const isExpandableType = (type) => {
    const namedType = getNamedType(type);
    return isObjectType(namedType) || isInterfaceType(namedType);
};
// export type TypeWithFields = OutputTypeWithFields | InputTypeWithFields
// export type InputTypeWithFields = GraphQLInputObjectType
// export type OutputTypeWithFields = GraphQLInterfaceType | GraphQLObjectType
// export const isOutputTypeWithFields = (type: GraphQLNamedType): type is OutputTypeWithFields => {
//   return isInterfaceType(type) || isObjectType(type)
// }
// export const isInputTypeWithFields = (type: GraphQLNamedType): type is InputTypeWithFields => {
//   return isInputObjectType(type)
// }
// export const isTypeWithFields = (type: GraphQLNamedType): type is TypeWithFields => {
//   return isOutputTypeWithFields(type) || isInputTypeWithFields(type)
// }
export const isUsingInputArgumentPattern = (field) => {
    if (field.args.length !== 1)
        return false;
    const arg = field.args[0];
    if (arg.name !== `input`)
        return false;
    if (isInputObjectType(arg))
        return true;
    if (isNonNullType(arg.type) && isInputObjectType(arg.type.ofType))
        return true;
    return false;
};
export const getIAP = (field) => {
    if (!isUsingInputArgumentPattern(field))
        return null;
    // IAP could be non-null or nullable so need to unwrap case of it being non-null
    return getNamedType(field.args[0].type);
};
// export const getFields = (type: TypeWithFields): (GraphQLOutputField | GraphQLInputField)[] => {
//   return Object.values(type.getFields())
// }
export const getKindMap = (schema) => {
    const queryType = schema.getQueryType() ?? null;
    const mutationType = schema.getMutationType() ?? null;
    const subscriptionType = schema.getSubscriptionType() ?? null;
    const rootTypeNames = [queryType?.name, mutationType?.name, subscriptionType?.name].filter(_ => _ !== undefined);
    const typeMap = schema.getTypeMap();
    const typeMapValues = Object.values(typeMap);
    const kindMap = {
        index: {
            Root: {
                query: queryType,
                mutation: mutationType,
                subscription: subscriptionType,
            },
            OutputObject: {},
            InputObject: {},
            Interface: {},
            Union: {},
            Enum: {},
            ScalarCustom: {},
            ScalarStandard: {},
        },
        list: {
            Root: [queryType, mutationType, subscriptionType].filter(_ => _ !== null),
            OutputObject: [],
            InputObject: [],
            Interface: [],
            Union: [],
            Enum: [],
            ScalarCustom: [],
            ScalarStandard: [],
        },
    };
    for (const type of typeMapValues) {
        if (type.name.startsWith(`__`))
            continue;
        switch (true) {
            case isScalarType(type):
                if (isScalarTypeCustom(type)) {
                    kindMap.list.ScalarCustom.push(type);
                    kindMap.index.ScalarCustom[type.name] = type;
                }
                else {
                    kindMap.list.ScalarStandard.push(type);
                    kindMap.index.ScalarStandard[type.name] = type;
                }
                break;
            case isEnumType(type):
                kindMap.list.Enum.push(type);
                kindMap.index.Enum[type.name] = type;
                break;
            case isInputObjectType(type):
                kindMap.list.InputObject.push(type);
                kindMap.index.InputObject[type.name] = type;
                break;
            case isInterfaceType(type):
                kindMap.list.Interface.push(type);
                kindMap.index.Interface[type.name] = type;
                break;
            case isObjectType(type):
                if (!Arr.includesUnknown(rootTypeNames, type.name)) {
                    kindMap.list.OutputObject.push(type);
                    kindMap.index.OutputObject[type.name] = type;
                }
                break;
            case isUnionType(type):
                kindMap.list.Union.push(type);
                kindMap.index.Union[type.name] = type;
                break;
            default:
                // skip
                break;
        }
    }
    return kindMap;
};
export const standardScalarTypeNames = {
    String: `String`,
    ID: `ID`,
    Int: `Int`,
    Float: `Float`,
    Boolean: `Boolean`,
};
export const isScalarTypeCustom = (node) => {
    return !(node.name in standardScalarTypeNames);
};
//# sourceMappingURL=grafaid.js.map