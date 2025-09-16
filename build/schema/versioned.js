import { S } from '#kit-temp';
import { Order } from 'effect';
import { Revision } from '../revision/$.js';
import { SchemaDefinition } from '../schema-definition/$.js';
import { Version } from '../version/$.js';
export const Versioned = S.TaggedStruct('SchemaVersioned', {
    version: Version.Version,
    branchPoint: S.NullOr(S.Struct({
        schema: S.suspend(() => Versioned),
        revision: Revision.Revision,
    })),
    revisions: S.Array(Revision.Revision),
    definition: SchemaDefinition.SchemaDefinition,
    categories: S.optionalWith(S.Array(S.Struct({
        name: S.String,
        types: S.Array(S.String),
    })), { default: () => [] }),
});
// ============================================================================
// Constructors
// ============================================================================
export const make = Versioned.make;
// ============================================================================
// Type Guard
// ============================================================================
export const is = S.is(Versioned);
// ============================================================================
// Ordering
// ============================================================================
export const order = Order.mapInput(Version.order, (schema) => schema.version);
export const min = Order.min(order);
export const max = Order.max(order);
export const lessThan = Order.lessThan(order);
export const greaterThan = Order.greaterThan(order);
// ============================================================================
// Codecs
// ============================================================================
export const decode = S.decode(Versioned);
export const encode = S.encode(Versioned);
// ============================================================================
// Equivalence
// ============================================================================
export const equivalence = S.equivalence(Versioned);
//# sourceMappingURL=versioned.js.map