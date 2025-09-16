import { S } from '#kit-temp';
import { Schema } from '#schema/$';
import { VersionCoverage } from '#version-coverage';
import { Version } from '#version/$';
import { Either, HashMap, Option } from 'effect';
import * as Unversioned from './unversioned.js';
import * as Versioned from './versioned.js';
export * as Unversioned from './unversioned.js';
export * as Versioned from './versioned.js';
declare const VersionNotFoundInCatalogError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => import("effect/Cause").YieldableError & {
    readonly _tag: "VersionNotFoundInCatalogError";
} & Readonly<A>;
/**
 * Error thrown when a version is not found in the catalog
 */
export declare class VersionNotFoundInCatalogError extends VersionNotFoundInCatalogError_base<{
    readonly version: string;
    readonly reason: string;
}> {
}
declare const EmptyCatalogError_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => import("effect/Cause").YieldableError & {
    readonly _tag: "EmptyCatalogError";
} & Readonly<A>;
/**
 * Error thrown when a catalog has no entries
 */
export declare class EmptyCatalogError extends EmptyCatalogError_base<{
    readonly reason: string;
}> {
}
export declare const Catalog: S.Union<[S.Struct<{
    _tag: S.tag<"CatalogVersioned">;
} & {
    entries: S.HashMap<S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof import("../version/integer.ts").Integer, typeof import("../version/semver.ts").Semver, typeof import("../version/date.ts").Date, typeof import("../version/custom.ts").Custom]>, never>, S.TaggedStruct<"SchemaVersioned", {
        version: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof import("../version/integer.ts").Integer, typeof import("../version/semver.ts").Semver, typeof import("../version/date.ts").Date, typeof import("../version/custom.ts").Custom]>, never>;
        branchPoint: S.NullOr<S.Struct<{
            schema: S.suspend<import("../schema/versioned.ts").Versioned, import("../schema/versioned.ts").VersionedEncoded, never>;
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
}>, S.Struct<{
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
}>]>;
export type Catalog = typeof Catalog.Type;
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").Versioned;
            readonly revision: any;
        } | null;
    }>;
};
export declare const fold: <$A>(onVersioned: (catalog: Versioned.Versioned) => $A, onUnversioned: (catalog: Unversioned.Unversioned) => $A) => (catalog: Catalog) => $A;
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").VersionedEncoded;
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").Versioned;
            readonly revision: any;
        } | null;
    }>;
}, import("effect/ParseResult").ParseError, any>;
export declare const decodeSync: (i: {
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").VersionedEncoded;
            readonly revision: {
                readonly [x: string]: any;
            };
        } | null;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    }])[];
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => {
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").Versioned;
            readonly revision: any;
        } | null;
    }>;
};
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").Versioned;
            readonly revision: any;
        } | null;
    }>;
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").VersionedEncoded;
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
export declare const encodeSync: (a: {
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").Versioned;
            readonly revision: any;
        } | null;
    }>;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => {
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly {
            readonly [x: string]: any;
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").VersionedEncoded;
            readonly revision: {
                readonly [x: string]: any;
            };
        } | null;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    }])[];
};
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
} | {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver, {
        readonly _tag: "SchemaVersioned";
        readonly revisions: readonly any[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
        readonly version: import("../version/custom.ts").Custom | import("../version/date.ts").Date | import("../version/integer.ts").Integer | import("../version/semver.ts").Semver;
        readonly branchPoint: {
            readonly schema: import("../schema/versioned.ts").Versioned;
            readonly revision: any;
        } | null;
    }>;
}>;
/**
 * Get the number of versions in a catalog.
 * For versioned catalogs, this is the number of entries.
 * For unversioned catalogs, this is always 1.
 */
export declare const getVersionCount: (catalog: Catalog) => number;
/**
 * Get the version string from a schema.
 * Returns the stringified version for versioned schemas, or '__UNVERSIONED__' for unversioned schemas.
 */
export declare const getSchemaVersionString: (schema: Schema.Schema) => string;
/**
 * Get the version string from a schema.
 * Returns the stringified version for versioned schemas, or '__UNVERSIONED__' for unversioned schemas.
 */
export declare const getLatest: (catalog: Catalog) => Schema.Schema;
/**
 * Get the latest version identifier from a catalog.
 * Returns the version for versioned catalogs, or none for unversioned catalogs.
 */
export declare const getLatestVersion: (catalog?: Catalog) => Option.Option<Version.Version>;
/**
 * Resolve schema from catalog for a given version coverage.
 *
 * @param catalog - The schema catalog
 * @param versionCoverage - The version coverage to use (optional, defaults to latest)
 * @returns Either with the resolved schema or error
 */
export declare const resolveCatalogSchemaEither: (catalog: Catalog, versionCoverage?: VersionCoverage.VersionCoverage | null) => Either.Either<Schema.Schema, VersionNotFoundInCatalogError | EmptyCatalogError>;
/**
 * Resolve schema from catalog for a given version coverage.
 *
 * @param catalog - The schema catalog
 * @param versionCoverage - The version coverage to use (optional, defaults to latest)
 * @returns The resolved schema
 * @throws {Error} If catalog is versioned but version is not found
 * @deprecated Use resolveCatalogSchemaEither which returns Either
 */
export declare const resolveCatalogSchema: (catalog: Catalog, versionCoverage?: VersionCoverage.VersionCoverage | null) => Schema.Schema;
//# sourceMappingURL=catalog.d.ts.map