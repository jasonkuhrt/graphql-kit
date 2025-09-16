import { isNonNullType, isScalarType } from 'graphql';
import { standardScalarTypeNames } from './scalars.js';
export const isScalarTypeCustom = (node) => {
    return !(node.name in standardScalarTypeNames);
};
export const isScalarTypeAndCustom = (node) => {
    return isScalarType(node) && isScalarTypeCustom(node);
};
export const isAllInputObjectFieldsNullable = (node) => {
    return Object.values(node.getFields()).some(_ => !isNonNullType(_.type));
};
export const isOutputField = (value) => {
    return `args` in value;
};
//# sourceMappingURL=typeGuards.js.map