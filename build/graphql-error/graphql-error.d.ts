import { S } from '#kit-temp';
/**
 * GraphQL source location information
 */
export declare const Location: S.Struct<{
    line: typeof S.Number;
    column: typeof S.Number;
}>;
/**
 * GraphQL error structure
 */
export declare const GraphQLError: S.Struct<{
    message: typeof S.String;
    locations: S.optional<S.Array$<S.Struct<{
        line: typeof S.Number;
        column: typeof S.Number;
    }>>>;
}>;
/**
 * Context for GraphQL validation errors
 */
export declare const ValidationContext: S.Struct<{
    example: S.Struct<{
        id: typeof S.String;
        path: typeof S.String;
    }>;
    version: typeof S.String;
    errors: S.Array$<S.Struct<{
        message: typeof S.String;
        locations: S.optional<S.Array$<S.Struct<{
            line: typeof S.Number;
            column: typeof S.Number;
        }>>>;
    }>>;
}>;
export type Location = typeof Location.Type;
export type GraphQLError = typeof GraphQLError.Type;
export type ValidationContext = typeof ValidationContext.Type;
export declare const make: (props: {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
}, options?: S.MakeOptions) => {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
};
export declare const makeLocation: (props: {
    readonly line: number;
    readonly column: number;
}, options?: S.MakeOptions) => {
    readonly line: number;
    readonly column: number;
};
export declare const makeValidationContext: (props: {
    readonly errors: readonly {
        readonly message: string;
        readonly locations?: readonly {
            readonly line: number;
            readonly column: number;
        }[] | undefined;
    }[];
    readonly version: string;
    readonly example: {
        readonly path: string;
        readonly id: string;
    };
}, options?: S.MakeOptions) => {
    readonly errors: readonly {
        readonly message: string;
        readonly locations?: readonly {
            readonly line: number;
            readonly column: number;
        }[] | undefined;
    }[];
    readonly version: string;
    readonly example: {
        readonly path: string;
        readonly id: string;
    };
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
};
export declare const isLocation: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly line: number;
    readonly column: number;
};
export declare const isValidationContext: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly errors: readonly {
        readonly message: string;
        readonly locations?: readonly {
            readonly line: number;
            readonly column: number;
        }[] | undefined;
    }[];
    readonly version: string;
    readonly example: {
        readonly path: string;
        readonly id: string;
    };
};
export declare const decode: (i: {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
}, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
};
export declare const encode: (a: {
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly message: string;
    readonly locations?: readonly {
        readonly line: number;
        readonly column: number;
    }[] | undefined;
}, import("effect/ParseResult").ParseError, never>;
//# sourceMappingURL=graphql-error.d.ts.map