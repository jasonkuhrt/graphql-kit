import type { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { type RootDetails } from './RootDetails.js';
import { type StandardRootTypeName } from './StandardRootTypeName.js';
export interface RootTypeMap {
    list: RootDetails[];
    types: {
        Query: null | GraphQLObjectType;
        Mutation: null | GraphQLObjectType;
        Subscription: null | GraphQLObjectType;
    };
    names: {
        fromStandard: {
            Query: null | string;
            Mutation: null | string;
            Subscription: null | string;
        };
        fromActual: Record<string, StandardRootTypeName>;
    };
}
export declare const getRootTypeMap: (schema: GraphQLSchema) => RootTypeMap;
//# sourceMappingURL=RootTypeMap.d.ts.map