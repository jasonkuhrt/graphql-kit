import { Effect } from 'effect';
import type { GraphQLSchema } from 'graphql';
import * as Change from './change.js';
/**
 * Calculate the changeset between two GraphQL schemas
 */
export declare const calcChangeset: (parameters: {
    after: GraphQLSchema;
    before: GraphQLSchema;
}) => Effect.Effect<Change.Change[], Error>;
//# sourceMappingURL=calc-changeset.d.ts.map