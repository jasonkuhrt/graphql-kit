import { Grafaid } from '#grafaid';
import type { GraphQLSchema } from 'graphql';
export declare const GraphqlSchema: import("../resolver-builder/define.js").Definition<{
    context: {
        schema: GraphQLSchema;
    };
    nodes: {
        GraphQLPathSegmentArgument: Grafaid.Schema.Type.Argument;
        GraphQLPathSegmentField: Grafaid.Schema.TypesLike.Field;
        GraphQLPathSegmentType: Grafaid.Schema.TypesLike.Named;
        GraphQLPathSegmentResolvedType: Grafaid.Schema.TypesLike.Named;
    };
}>;
//# sourceMappingURL=graphql-schema.d.ts.map