import { isOutputField } from './typeGuards.js';
export const isField = (value) => {
    return isOutputField(value) || isInputField(value);
};
export const getFields = (type) => {
    return Object.values(type.getFields());
};
export const isDeprecatable = (node) => {
    return `deprecationReason` in node;
};
export const isInputField = (value) => {
    return `defaultValue` in value;
};
//# sourceMappingURL=nodes-like.js.map