import { type GraphQLObjectType, type GraphQLSchema } from 'graphql';
import * as TypesLike from './types-like.js';
/**
 * Get a type from the schema by name, throwing if not found.
 */
export declare const getTypeOrThrow: (schema: GraphQLSchema, typeName: string) => TypesLike.Named;
/**
 * Get a fielded type (Object, Interface) from the schema by name, throwing if not found or wrong kind.
 */
export declare const getFieldedTypeOrThrow: (schema: GraphQLSchema, typeName: string) => TypesLike.Fielded;
/**
 * Get an object type from the schema by name, throwing if not found or wrong kind.
 */
export declare const getObjectTypeOrThrow: (schema: GraphQLSchema, typeName: string) => GraphQLObjectType;
//# sourceMappingURL=helpers.d.ts.map