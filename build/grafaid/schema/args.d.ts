import { type GraphQLArgument } from 'graphql';
export declare const isAllArgsNonNullType: (args: readonly GraphQLArgument[]) => boolean;
export declare const isAllArgsNullable: (args: readonly GraphQLArgument[]) => boolean;
export declare const analyzeArgsNullability: (args: readonly GraphQLArgument[]) => {
    hasAny: boolean;
    isAllNullable: boolean;
    required: number;
    optional: number;
    total: number;
};
//# sourceMappingURL=args.d.ts.map