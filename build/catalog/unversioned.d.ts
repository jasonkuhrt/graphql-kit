import { S } from '#kit-temp';
export declare const Unversioned: S.Struct<{
    _tag: S.tag<"CatalogUnversioned">;
} & {
    schema: S.Struct<{
        _tag: S.tag<"SchemaUnversioned">;
    } & {
        revisions: S.Array$<S.Struct<{
            _tag: S.tag<"Revision">;
        } & {
            date: any;
            changes: S.Array$<any>;
        }>>;
        definition: S.transformOrFail<S.declare<import("../schema-definition/graphql-ast.ts").Ast, import("../schema-definition/graphql-ast.ts").Ast, readonly [], never>, S.instanceOf<import("graphql").GraphQLSchema>, never>;
        categories: S.optionalWith<S.Array$<S.Struct<{
            name: typeof S.String;
            types: S.Array$<typeof S.String>;
        }>>, {
            default: () => never[];
        }>;
    }>;
}>;
export type Unversioned = typeof Unversioned.Type;
export declare const make: (props: {
    readonly _tag?: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    };
}, options?: S.MakeOptions) => {
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    };
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    };
};
export declare const decode: (i: {
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    };
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    };
}, import("effect/ParseResult").ParseError, any>;
export declare const encode: (a: {
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    };
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    };
}, import("effect/ParseResult").ParseError, any>;
export declare const equivalence: import("effect/Equivalence").Equivalence<{
    readonly _tag: "CatalogUnversioned";
    readonly schema: {
        readonly _tag: "SchemaUnversioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    };
}>;
//# sourceMappingURL=unversioned.d.ts.map