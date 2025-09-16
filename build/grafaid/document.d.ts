import { type ArgumentNode, type BooleanValueNode, type DirectiveNode, type DocumentNode, type EnumValueNode, type FieldNode, type FloatValueNode, type FragmentSpreadNode, type InlineFragmentNode, type IntValueNode, type ListValueNode, type NamedTypeNode, type NameNode, type NullValueNode, type ObjectFieldNode, type ObjectValueNode, type OperationDefinitionNode, type SelectionSetNode, type StringValueNode, type TypeNode, type ValueNode, type VariableDefinitionNode, type VariableNode } from 'graphql';
import type { HasRequiredKeys } from 'type-fest';
import { Kind } from './document/kind.js';
export { OperationType } from './schema/OperationType/__.js';
export type { ArgumentNode, BooleanValueNode, DefinitionNode, DirectiveNode, DocumentNode, FieldNode, FloatValueNode, FragmentSpreadNode, InlineFragmentNode, IntValueNode, ListValueNode, NameNode, NullValueNode, ObjectFieldNode, ObjectValueNode, OperationDefinitionNode, OperationTypeDefinitionNode, SelectionNode, SelectionSetNode, StringValueNode, ValueNode, VariableDefinitionNode, VariableNode, } from 'graphql';
export { OperationTypeNode } from './document/OperationTypeNode.js';
export { Kind } from './document/kind.js';
export type $Any = DirectiveNode | NameNode | ValueNode | VariableDefinitionNode | SelectionSetNode | InlineFragmentNode | OperationDefinitionNode | NamedTypeNode | FieldNode | FragmentSpreadNode | DocumentNode | ArgumentNode | EnumValueNode | ListValueNode | NullValueNode | ObjectValueNode | ObjectFieldNode | VariableNode | StringValueNode | IntValueNode | FloatValueNode | BooleanValueNode;
export declare namespace $KindGroups {
    type StandardScalar = typeof Kind.STRING | typeof Kind.INT | typeof Kind.BOOLEAN | typeof Kind.FLOAT;
}
export type Constructor<$Node> = (...input: HasRequiredKeys<Omit<$Node, `kind`>> extends true ? [Omit<$Node, `kind`>] : [] | [Omit<$Node, `kind`>]) => $Node;
export declare const Directive: Constructor<DirectiveNode>;
export declare const Name: Constructor<NameNode>;
export declare const Value: (value: ValueNode) => ValueNode;
export declare const Argument: Constructor<ArgumentNode>;
export declare const Document: Constructor<DocumentNode>;
export declare const isDocumentNode: (value: unknown) => value is DocumentNode;
export declare const OperationDefinition: Constructor<OperationDefinitionNode>;
export declare const isOperationDefinitionNode: (value: unknown) => value is OperationDefinitionNode;
export declare const SelectionSet: Constructor<SelectionSetNode>;
export declare const VariableDefinition: Constructor<VariableDefinitionNode>;
export declare const InlineFragment: Constructor<InlineFragmentNode>;
export declare const NamedType: Constructor<NamedTypeNode>;
export declare const isNamedType: (value: unknown) => value is NamedTypeNode;
export declare const Field: Constructor<FieldNode>;
export declare const EnumValue: Constructor<EnumValueNode>;
export declare const IntValue: Constructor<IntValueNode>;
export declare const FloatValue: Constructor<FloatValueNode>;
export declare const StringValue: Constructor<StringValueNode>;
export declare const BooleanValue: Constructor<BooleanValueNode>;
export declare const Variable: Constructor<VariableNode>;
export declare const ListValue: Constructor<ListValueNode>;
export declare const NullValue: Constructor<NullValueNode>;
export declare const ObjectValue: Constructor<ObjectValueNode>;
export declare const ObjectField: Constructor<ObjectFieldNode>;
export declare const RootTypeToOperationType: {
    readonly Query: import("graphql").OperationTypeNode.QUERY;
    readonly Mutation: import("graphql").OperationTypeNode.MUTATION;
    readonly Subscription: import("graphql").OperationTypeNode.SUBSCRIPTION;
};
export type RootTypeNameToOperationName = typeof RootTypeToOperationType;
export declare const OperationTypeToAccessKind: {
    readonly query: "read";
    readonly mutation: "write";
    readonly subscription: "read";
};
export declare const getNamedType: (type: TypeNode) => NamedTypeNode;
/**
 * Get the _type_ (query, mutation, subscription) of operation a request will execute as.
 *
 * Compares the given operation name with document contents.
 *
 * If document is string then regular expressions are used to extract the operation type
 * to avoid document encode/decode performance costs.
 */
//# sourceMappingURL=document.d.ts.map