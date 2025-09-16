import type { FormattedExecutionResult, GraphQLFormattedError } from 'graphql';
export interface RequestConfig {
    query: string;
    variables?: Record<string, unknown>;
    operationName?: string;
}
export declare const parseExecutionResult: (result: unknown) => FormattedExecutionResult;
export declare const getRequestEncodeSearchParameters: (request: RequestConfig) => Record<string, string>;
export type getRequestEncodeSearchParameters = typeof getRequestEncodeSearchParameters;
export declare const postRequestEncodeBody: (input: RequestConfig) => string;
export type postRequestEncodeBody = typeof postRequestEncodeBody;
export declare const isFormattedError: (error: unknown) => error is GraphQLFormattedError;
//# sourceMappingURL=http.d.ts.map