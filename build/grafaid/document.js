import {} from 'graphql';
import { Kind } from './document/kind.js';
import { OperationTypeNode } from './document/OperationTypeNode.js';
// import type { RequestDocumentNodeInput } from './request.js'
export { OperationType } from './schema/OperationType/__.js';
export { OperationTypeNode } from './document/OperationTypeNode.js';
export { Kind } from './document/kind.js';
export const Directive = directive => {
    return {
        kind: Kind.DIRECTIVE,
        ...directive,
    };
};
export const Name = name => {
    return {
        kind: Kind.NAME,
        ...name,
    };
};
export const Value = (value) => {
    return value;
};
export const Argument = argument => {
    return {
        kind: Kind.ARGUMENT,
        ...argument,
    };
};
export const Document = document => {
    return {
        kind: Kind.DOCUMENT,
        ...document,
    };
};
export const isDocumentNode = (value) => {
    return typeof value === `object` && value !== null && `kind` in value
        && value.kind === Kind.DOCUMENT;
};
export const OperationDefinition = operationDefinition => {
    return {
        kind: Kind.OPERATION_DEFINITION,
        ...operationDefinition,
    };
};
export const isOperationDefinitionNode = (value) => {
    return typeof value === `object` && value !== null && `kind` in value
        && value.kind === Kind.OPERATION_DEFINITION;
};
export const SelectionSet = selectionSet => {
    return {
        kind: Kind.SELECTION_SET,
        ...selectionSet,
    };
};
export const VariableDefinition = variableDefinition => {
    return {
        kind: Kind.VARIABLE_DEFINITION,
        ...variableDefinition,
    };
};
export const InlineFragment = inlineFragment => {
    return {
        kind: Kind.INLINE_FRAGMENT,
        ...inlineFragment,
    };
};
export const NamedType = namedType => {
    return {
        kind: Kind.NAMED_TYPE,
        ...namedType,
    };
};
export const isNamedType = (value) => {
    return typeof value === `object` && value !== null && `kind` in value
        && value.kind === Kind.NAMED_TYPE;
};
export const Field = field => {
    return {
        kind: Kind.FIELD,
        ...field,
    };
};
export const EnumValue = enumValue => {
    return {
        kind: Kind.ENUM,
        ...enumValue,
    };
};
export const IntValue = intValue => {
    return {
        kind: Kind.INT,
        ...intValue,
    };
};
export const FloatValue = floatValue => {
    return {
        kind: Kind.FLOAT,
        ...floatValue,
    };
};
export const StringValue = stringValue => {
    return {
        kind: Kind.STRING,
        ...stringValue,
    };
};
export const BooleanValue = booleanValue => {
    return {
        kind: Kind.BOOLEAN,
        ...booleanValue,
    };
};
export const Variable = variable => {
    return {
        kind: Kind.VARIABLE,
        ...variable,
    };
};
export const ListValue = listValue => {
    return {
        kind: Kind.LIST,
        ...listValue,
    };
};
export const NullValue = () => {
    return {
        kind: Kind.NULL,
    };
};
export const ObjectValue = objectValue => {
    return {
        kind: Kind.OBJECT,
        ...objectValue,
    };
};
export const ObjectField = objectField => {
    return {
        kind: Kind.OBJECT_FIELD,
        ...objectField,
    };
};
export const RootTypeToOperationType = {
    Query: OperationTypeNode.QUERY,
    Mutation: OperationTypeNode.MUTATION,
    Subscription: OperationTypeNode.SUBSCRIPTION,
};
export const OperationTypeToAccessKind = {
    query: `read`,
    mutation: `write`,
    subscription: `read`,
};
// export const print = (document: TypedDocument.TypedDocumentLike): string => {
//   const documentUntyped = TypedDocument.unType(document)
//   return isString(documentUntyped) ? documentUntyped : graphqlWebPrint(documentUntyped)
// }
export const getNamedType = (type) => {
    if (type.kind === Kind.NAMED_TYPE)
        return type;
    return getNamedType(type.type);
};
// export const getOperationDefinition = (
//   request: RequestDocumentNodeInput,
// ): OperationDefinitionNode | null => {
//   for (const node of request.query.definitions) {
//     const opDefNode = isOperationDefinitionNode(node) ? node : null
//     if (!request.operationName) return opDefNode
//     if (opDefNode?.name?.value === request.operationName) return opDefNode
//   }
//   return null
// }
// const definedOperationPattern = new RegExp(`^\\b(${Object.values(OperationTypeNode).join(`|`)})\\b`)
/**
 * Get the _type_ (query, mutation, subscription) of operation a request will execute as.
 *
 * Compares the given operation name with document contents.
 *
 * If document is string then regular expressions are used to extract the operation type
 * to avoid document encode/decode performance costs.
 */
// export const getOperationType = (request: RequestInput): OperationTypeNode | null => {
//   // return null
//   const { operationName, query: document } = request
//   const documentUntyped = TypedDocument.unType(document)
//   if (!isString(documentUntyped)) {
//     const operationDefinition = getOperationDefinition({ query: documentUntyped, operationName })
//     if (operationDefinition) return operationDefinition.operation
//     throw new Error(`Could not parse operation type from document.`)
//   }
//   const definedOperations = documentUntyped.split(/[{}\n]+/).map(s => s.trim()).map(line => {
//     const match = line.match(definedOperationPattern)
//     if (!match) return null
//     return {
//       line,
//       operationType: match[0] as OperationTypeNode,
//     }
//   }).filter(_ => _ !== null)
//   // Handle obviously invalid cases that are zero cost to compute.
//   // The given operation name will not match to anything.
//   if (definedOperations.length > 1 && !request.operationName) return null
//   // An operation name is required but was not given.
//   if (definedOperations.length === 0 && request.operationName) return null
//   // Handle optimistically assumed valid case short circuits.
//   if (definedOperations.length === 0) {
//     // Assume that the implicit query syntax is being used.
//     // This is a non-validated optimistic approach for performance, not aimed at correctness.
//     // For example its not checked if the document is actually of the syntactic form `{ ... }`
//     return OperationTypeNode.QUERY
//   }
//   // Continue to the full search.
//   const definedOperationToAnalyze = operationName
//     ? definedOperations.find(o => o.line.includes(operationName))
//     : definedOperations[0]
//   // Invalid: The given operation name does not show up in the document.
//   if (!definedOperationToAnalyze) return null
//   return definedOperationToAnalyze.operationType
// }
//# sourceMappingURL=document.js.map