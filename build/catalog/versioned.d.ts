import { S } from '#kit-temp';
import { Either, HashMap } from 'effect';
import { Schema } from '../schema/$.js';
import { Version } from '../version/$.js';
import { EmptyCatalogError } from './catalog.js';
export declare const Versioned: S.Struct<{
    _tag: S.tag<"CatalogVersioned">;
} & {
    entries: S.HashMap<S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>, S.TaggedStruct<"SchemaVersioned", {
        version: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>;
        branchPoint: S.NullOr<S.Struct<{
            schema: S.suspend<Schema.Versioned.Versioned, Schema.Versioned.VersionedEncoded, never>;
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
    }>>;
}>;
export type Versioned = typeof Versioned.Type;
export declare const make: (props: {
    readonly _tag?: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: any;
        } | null;
    }>;
}, options?: S.MakeOptions) => {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: any;
        } | null;
    }>;
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: any;
        } | null;
    }>;
};
export declare const decode: (i: {
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.VersionedEncoded;
            readonly revision: {
                readonly [x: string]: any;
            };
        } | null;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    }])[];
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: any;
        } | null;
    }>;
}, import("effect/ParseResult").ParseError, any>;
export declare const encode: (a: {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: any;
        } | null;
    }>;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.VersionedEncoded;
            readonly revision: {
                readonly [x: string]: any;
            };
        } | null;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    }])[];
}, import("effect/ParseResult").ParseError, any>;
export declare const equivalence: import("effect/Equivalence").Equivalence<{
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: any;
        } | null;
    }>;
}>;
/**
 * Get the latest schema from a versioned catalog.
 * The latest version is determined by Version.max comparison.
 *
 * @param catalog - The versioned catalog
 * @returns Either with the latest schema or EmptyCatalogError
 */
export declare const getLatest: (catalog: Versioned) => Either.Either<Schema.Versioned.Versioned, EmptyCatalogError>;
export declare const getOldestOrThrow: (catalog: Versioned) => Schema.Versioned.Versioned;
/**
 * Get the latest schema definition from a versioned catalog.
 * The latest version is determined by Version.max comparison.
 *
 * @param catalog - The versioned catalog
 * @returns The GraphQL schema definition of the latest version
 * @throws {Error} If the catalog has no entries
 * @deprecated Use getLatest which returns Either
 */
export declare const getLatestOrThrow: (catalog: Versioned) => Schema.Versioned.Versioned;
/**
 * Get all schemas sorted by version (newest first)
 */
export declare const getAll: (catalog: Versioned) => Schema.Versioned.Versioned[];
/**
 * Get all versions sorted (newest first)
 */
export declare const getVersions: (catalog: Versioned) => Version.Version[];
//# sourceMappingURL=versioned.d.ts.map