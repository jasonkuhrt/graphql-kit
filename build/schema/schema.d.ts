import { S } from '#kit-temp';
import * as Versioned from './versioned.js';
export * as Unversioned from './unversioned.js';
export * as Versioned from './versioned.js';
export declare const Schema: S.Union<[S.TaggedStruct<"SchemaVersioned", {
    version: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof import("../version/integer.ts").Integer, typeof import("../version/semver.ts").Semver, typeof import("../version/date.ts").Date, typeof import("../version/custom.ts").Custom]>, never>;
    branchPoint: S.NullOr<S.Struct<{
        schema: S.suspend<Versioned.Versioned, Versioned.VersionedEncoded, never>;
        revision: S.Struct<{
            _tag: S.tag<"Revision">;
        } & {
            date: any;
            changes: S.Array$<any>;
        }>;
    }>>;
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
}>, S.Struct<{
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
}>]>;
export type Schema = typeof Schema.Type;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "SchemaUnversioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
} | {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
    readonly branchPoint: {
        readonly schema: Versioned.Versioned;
        readonly revision: any;
    } | null;
};
export declare const decode: (i: {
    readonly _tag: "SchemaUnversioned";
    readonly revisions: readonly {
        readonly [x: string]: any;
    }[];
    readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
    readonly categories?: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[] | undefined;
} | {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly {
        readonly [x: string]: any;
    }[];
    readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
    readonly version: string | number;
    readonly branchPoint: {
        readonly schema: Versioned.VersionedEncoded;
        readonly revision: {
            readonly [x: string]: any;
        };
    } | null;
    readonly categories?: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[] | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "SchemaUnversioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
} | {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
    readonly branchPoint: {
        readonly schema: Versioned.Versioned;
        readonly revision: any;
    } | null;
}, import("effect/ParseResult").ParseError, any>;
export declare const encode: (a: {
    readonly _tag: "SchemaUnversioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
} | {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
    readonly branchPoint: {
        readonly schema: Versioned.Versioned;
        readonly revision: any;
    } | null;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "SchemaUnversioned";
    readonly revisions: readonly {
        readonly [x: string]: any;
    }[];
    readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
    readonly categories?: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[] | undefined;
} | {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly {
        readonly [x: string]: any;
    }[];
    readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
    readonly version: string | number;
    readonly branchPoint: {
        readonly schema: Versioned.VersionedEncoded;
        readonly revision: {
            readonly [x: string]: any;
        };
    } | null;
    readonly categories?: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[] | undefined;
}, import("effect/ParseResult").ParseError, any>;
export declare const equivalence: import("effect/Equivalence").Equivalence<{
    readonly _tag: "SchemaUnversioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
} | {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
    readonly branchPoint: {
        readonly schema: Versioned.Versioned;
        readonly revision: any;
    } | null;
}>;
export declare const getVersion: (schema: Schema) => import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver | undefined;
//# sourceMappingURL=schema.d.ts.map