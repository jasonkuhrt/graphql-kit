import { S } from '#kit-temp';
import { ParseResult } from 'effect';
import { GraphQLSchema } from 'graphql';
export declare const SchemaDefinition: S.transformOrFail<S.declare<import("./graphql-ast.js").Ast, import("./graphql-ast.js").Ast, readonly [], never>, S.instanceOf<GraphQLSchema>, never>;
export type SchemaDefinition = typeof SchemaDefinition.Type;
export declare const sdl: {
    decode: (i: string, overrideOptions?: import("effect/SchemaAST").ParseOptions) => GraphQLSchema;
    encode: (a: GraphQLSchema, overrideOptions?: import("effect/SchemaAST").ParseOptions) => string;
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is GraphQLSchema;
export declare const decode: (i: import("./graphql-ast.js").Ast, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<GraphQLSchema, ParseResult.ParseError, never>;
export declare const decodeSync: (i: import("./graphql-ast.js").Ast, overrideOptions?: import("effect/SchemaAST").ParseOptions) => GraphQLSchema;
export declare const encode: (a: GraphQLSchema, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<import("./graphql-ast.js").Ast, ParseResult.ParseError, never>;
export declare const isEmpty: (schema: SchemaDefinition) => boolean;
export declare const equivalence: import("effect/Equivalence").Equivalence<GraphQLSchema>;
//# sourceMappingURL=schema-definition.d.ts.map