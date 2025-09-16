import { S } from '#kit-temp';
import { type DocumentNode } from 'graphql';
export interface Ast extends DocumentNode {
    categories?: {
        name: string;
        types: string[];
    }[];
}
export declare const graphqlAst: S.declare<Ast, Ast, readonly [], never>;
//# sourceMappingURL=graphql-ast.d.ts.map