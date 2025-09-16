import { getNamedType, isInputObjectType, isInterfaceType, isNamedType, isObjectType, } from 'graphql';
import * as Types from './type.js';
export const isMemberable = (value) => {
    return Types.isEnum(value) || Types.isUnion(value);
};
export const isArgable = (value) => {
    return Types.isDirective(value) || Types.isOutputField(value);
};
export const isTypable = (value) => {
    return Types.isArgument(value) || Types.isInputField(value) || Types.isOutputField(value);
};
export const getTypeableNamedType = (value) => {
    return getNamedType(value.type);
};
export const isInput = (value) => {
    return Types.isEnum(value) || Types.isScalar(value) || Types.isInputObject(value);
};
export const isOutput = (value) => {
    return Types.isEnum(value) || Types.isScalar(value) || Types.isInterface(value)
        || Types.isUnion(value) || Types.isObject(value);
};
export const isNamed = (type) => {
    return isNamedType(type);
};
export const isFielded = (type) => {
    return isFieldedOutput(type) || isFieldedInput(type);
};
export const isFieldedOutput = (type) => {
    return isInterfaceType(type) || isObjectType(type);
};
export const isFieldedInput = (type) => {
    return isInputObjectType(type);
};
export const isDirectiveable = (value) => {
    return Types.isObject(value)
        || Types.isInterface(value)
        || Types.isUnion(value)
        || Types.isScalar(value)
        || Types.isEnum(value)
        || Types.isInputObject(value)
        || Types.isOutputField(value)
        || Types.isInputField(value)
        || Types.isArgument(value);
};
//# sourceMappingURL=types-like.js.map