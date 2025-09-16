import type { GraphQLObjectType } from 'graphql';
import { type OperationType } from '../document.js';
import type { RootTypeMap } from './RootTypeMap.js';
import { type StandardRootTypeName } from './StandardRootTypeName.js';
/**
 * Details about if and how the root type name has been customized in this schema.
 */
export interface RootDetails {
    name: {
        /**
         * If alias present then the alias, otherwise the standard.
         */
        canonical: string;
        /**
         * The standard name for this root type.
         */
        standard: StandardRootTypeName;
        /**
         * The custom name given for this root type in this schema, if any.
         */
        alias: string | null;
    };
    type: GraphQLObjectType;
    operationType: OperationType;
}
export declare const createFromObjectType: (objectType: GraphQLObjectType, standardName: StandardRootTypeName) => RootDetails;
export declare const createFromObjectTypeAndMapOrThrow: (objectType: GraphQLObjectType, rootTypeMap: RootTypeMap) => RootDetails;
//# sourceMappingURL=RootDetails.d.ts.map