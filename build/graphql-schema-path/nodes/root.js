import { S } from '#kit-temp';
import * as Field from './field.js';
import * as Type from './type.js';
// ============================================================================
// Schema
// ============================================================================
export const Schema = S.TaggedStruct('GraphQLPathRoot', {
    version: S.optional(S.String),
    next: S.optional(S.suspend(() => Type.Schema)),
});
// ============================================================================
// Constructors
// ============================================================================
export const make = Schema.make;
//# sourceMappingURL=root.js.map