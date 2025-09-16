import type { GraphQLInputType } from 'graphql';
/**
 * Formats a GraphQL default value into a string representation.
 * Returns just the value part (e.g., "20", "true", '"hello"')
 *
 * @param value - The default value from a GraphQL argument or input field
 * @param type - The GraphQL input type of the field
 * @returns The formatted value string, or null if value is undefined
 */
export declare const formatDefaultValue: (value: unknown, type: GraphQLInputType) => string | null;
//# sourceMappingURL=format-default-value.d.ts.map