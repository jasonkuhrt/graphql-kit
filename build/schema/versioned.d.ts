import { S } from '#kit-temp';
import type { ObjReplace } from '#kit-temp/other';
import { Order } from 'effect';
import { Revision } from '../revision/$.js';
import { SchemaDefinition } from '../schema-definition/$.js';
import { Version } from '../version/$.js';
export interface BranchPoint {
    readonly schema: Versioned;
    readonly revision: Revision.Revision;
}
export interface BranchPointEncoded {
    readonly schema: VersionedEncoded;
    readonly revision: Revision.Revision;
}
export interface Versioned {
    readonly _tag: 'SchemaVersioned';
    readonly version: Version.Version;
    readonly branchPoint: BranchPoint | null;
    readonly revisions: ReadonlyArray<Revision.Revision>;
    readonly definition: SchemaDefinition.SchemaDefinition;
    readonly categories: ReadonlyArray<{
        readonly name: string;
        readonly types: ReadonlyArray<string>;
    }>;
}
export interface VersionedEncoded extends ObjReplace<Versioned, {
    readonly version: S.Schema.Encoded<typeof Version.Version>;
    readonly branchPoint: BranchPointEncoded | null;
    readonly revisions: ReadonlyArray<S.Schema.Encoded<typeof Revision.Revision>>;
    readonly definition: S.Schema.Encoded<typeof SchemaDefinition.SchemaDefinition>;
}> {
}
export declare const Versioned: S.TaggedStruct<"SchemaVersioned", {
    version: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>;
    branchPoint: S.NullOr<S.Struct<{
        schema: S.suspend<Versioned, VersionedEncoded, never>;
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
}>;
export declare const make: (props: {
    readonly _tag?: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories?: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
    readonly branchPoint: {
        readonly schema: Versioned;
        readonly revision: any;
    } | null;
}, options?: S.MakeOptions) => {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
    readonly branchPoint: {
        readonly schema: Versioned;
        readonly revision: any;
    } | null;
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
    readonly branchPoint: {
        readonly schema: Versioned;
        readonly revision: any;
    } | null;
};
export declare const order: Order.Order<Versioned>;
export declare const min: {
    (that: Versioned): (self: Versioned) => Versioned;
    (self: Versioned, that: Versioned): Versioned;
};
export declare const max: {
    (that: Versioned): (self: Versioned) => Versioned;
    (self: Versioned, that: Versioned): Versioned;
};
export declare const lessThan: {
    (that: Versioned): (self: Versioned) => boolean;
    (self: Versioned, that: Versioned): boolean;
};
export declare const greaterThan: {
    (that: Versioned): (self: Versioned) => boolean;
    (self: Versioned, that: Versioned): boolean;
};
export declare const decode: (i: {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly {
        readonly [x: string]: any;
    }[];
    readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
    readonly version: string | number;
    readonly branchPoint: {
        readonly schema: VersionedEncoded;
        readonly revision: {
            readonly [x: string]: any;
        };
    } | null;
    readonly categories?: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[] | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
    readonly branchPoint: {
        readonly schema: Versioned;
        readonly revision: any;
    } | null;
}, import("effect/ParseResult").ParseError, any>;
export declare const encode: (a: {
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
    readonly branchPoint: {
        readonly schema: Versioned;
        readonly revision: any;
    } | null;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly {
        readonly [x: string]: any;
    }[];
    readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
    readonly version: string | number;
    readonly branchPoint: {
        readonly schema: VersionedEncoded;
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
    readonly _tag: "SchemaVersioned";
    readonly revisions: readonly any[];
    readonly definition: import("graphql").GraphQLSchema;
    readonly categories: readonly {
        readonly name: string;
        readonly types: readonly string[];
    }[];
    readonly version: Version.CustomVersion.Custom | Version.DateVersion.Date | Version.IntegerVersion.Integer | Version.SemverVersion.Semver;
    readonly branchPoint: {
        readonly schema: Versioned;
        readonly revision: any;
    } | null;
}>;
//# sourceMappingURL=versioned.d.ts.map