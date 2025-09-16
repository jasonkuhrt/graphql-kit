import { neverCase } from '@wollybeard/kit/language';
import { isEnumType, isInputObjectType, isInterfaceType, isObjectType, isScalarType, isUnionType } from 'graphql';
import { isScalarTypeCustom } from './schema/schema.js';
export { GraphQLError, } from 'graphql';
export * from './_Nodes.js';
export const StandardScalarTypeNames = {
    String: `String`,
    ID: `ID`,
    Int: `Int`,
    Float: `Float`,
    Boolean: `Boolean`,
};
const TypeScriptPrimitiveTypeNames = {
    string: `string`,
    number: `number`,
    boolean: `boolean`,
};
export const StandardScalarTypeTypeScriptMapping = {
    String: `string`,
    ID: `string`,
    Int: `number`,
    Float: `number`,
    Boolean: `boolean`,
};
export const isStandardScalarType = (type) => {
    return type.name in StandardScalarTypeNames;
};
/**
 * Groups
 */
export const getTypeAndKind = (node) => {
    const typeName = node.name;
    let kindName;
    if (isScalarType(node)) {
        kindName = isScalarTypeCustom(node) ? `ScalarCustom` : `ScalarStandard`;
    }
    else if (isUnionType(node)) {
        kindName = `Union`;
    }
    else if (isInterfaceType(node)) {
        kindName = `Interface`;
    }
    else if (isObjectType(node)) {
        kindName = `OutputObject`;
    }
    else if (isInputObjectType(node)) {
        kindName = `InputObject`;
    }
    else if (isEnumType(node)) {
        kindName = `Enum`;
    }
    else {
        return neverCase(node);
    }
    return { typeName, kindName };
};
//# sourceMappingURL=graphql.js.map