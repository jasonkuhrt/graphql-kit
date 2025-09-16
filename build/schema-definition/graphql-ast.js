import { S } from '#kit-temp';
import {} from 'graphql';
const GraphQLIsDocumentNode = (input) => typeof input === 'object'
    && input !== null
    && 'kind' in input
    && input.kind === 'Document';
export const graphqlAst = S.declare(GraphQLIsDocumentNode, {
    identifier: 'GraphQLDocumentNode',
    title: 'GraphQL AST',
    description: 'GraphQL Abstract Syntax Tree',
});
//# sourceMappingURL=graphql-ast.js.map