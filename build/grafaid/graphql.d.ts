import type { GraphQLNamedType, GraphQLScalarType } from 'graphql';
import type { KindMap } from './schema/schema.js';
export { type ExecutionResult, type FormattedExecutionResult, GraphQLError, type GraphQLFormattedError as FormattedExecutionResultError, } from 'graphql';
export * from './_Nodes.js';
export declare const StandardScalarTypeNames: {
    String: string;
    ID: string;
    Int: string;
    Float: string;
    Boolean: string;
};
export type StandardScalarTypeNames = keyof typeof StandardScalarTypeNames;
export declare const StandardScalarTypeTypeScriptMapping: {
    String: "string";
    ID: "string";
    Int: "number";
    Float: "number";
    Boolean: "boolean";
};
export declare const isStandardScalarType: (type: GraphQLScalarType) => boolean;
/**
 * Groups
 */
export declare const getTypeAndKind: (node: GraphQLNamedType) => {
    typeName: string;
    kindName: KindMap.KindName;
};
//# sourceMappingURL=graphql.d.ts.map