export declare const StandardRootTypeNameEnum: {
    readonly Query: "Query";
    readonly Mutation: "Mutation";
    readonly Subscription: "Subscription";
};
export declare namespace StandardRootTypeName {
    type Query = typeof StandardRootTypeNameEnum.Query;
    type Mutation = typeof StandardRootTypeNameEnum.Mutation;
    type Subscription = typeof StandardRootTypeNameEnum.Subscription;
}
export type StandardRootTypeName = StandardRootTypeName.Query | StandardRootTypeName.Mutation | StandardRootTypeName.Subscription;
//# sourceMappingURL=StandardRootTypeName.d.ts.map