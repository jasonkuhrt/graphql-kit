import { Catalog } from '#catalog/$';
import { Change } from '#change/$';
import { Revision } from '#revision/$';
import { Schema } from '#schema/$';
import { Option } from 'effect';
/**
 * A change entry tracking when a type or field was modified
 */
export interface ChangeEntry {
    /** The change that occurred */
    change: Change.Change;
    /** The revision containing this change */
    revision: Revision.Revision;
    /** The schema this change belongs to */
    schema: Schema.Schema;
}
/**
 * Lifecycles is a simple index mapping type names to their change history
 */
export type Lifecycles = Record<string, ChangeEntry[]>;
/**
 * Represents when a type or field was introduced
 */
export type Since = {
    _tag: 'initial';
} | {
    _tag: 'added';
    revision: Revision.Revision;
    change: Change.Change;
    schema: Schema.Schema;
};
/**
 * Build lifecycle data from a single schema
 */
export declare const createFromSchema: (schema: Schema.Schema) => Lifecycles;
/**
 * Build lifecycle data from a catalog
 */
export declare const create: (catalog: Catalog.Catalog) => Lifecycles;
/**
 * Get when a type was introduced (initial or added)
 */
export declare const getTypeSince: (lifecycles: Lifecycles, typeName: string, currentSchema?: Schema.Schema) => Since | undefined;
/**
 * Get the date when a type was added
 * Shows when the type was first introduced via TYPE_ADDED change
 * Returns undefined if type existed from initial schema (no TYPE_ADDED change)
 */
export declare const getTypeAddedDate: (lifecycles: Lifecycles, typeName: string, currentVersion?: string) => Date | undefined;
/**
 * Get the date when a type was removed
 * For reference docs: Returns undefined if type exists in current version (no removal badge should be shown)
 * For changelog: Shows removal date if it happened in any version
 */
export declare const getTypeRemovedDate: (lifecycles: Lifecycles, typeName: string, currentSchema?: Schema.Schema) => Date | undefined;
/**
 * Check if a type is currently available (not removed)
 */
export declare const isTypeCurrentlyAvailable: (lifecycles: Lifecycles, typeName: string) => boolean;
/**
 * Get when a field was introduced (initial or added)
 */
export declare const getFieldSince: (lifecycles: Lifecycles, typeName: string, fieldName: string, currentSchema?: Schema.Schema) => Since | undefined;
/**
 * Get the date when a field was added
 * Shows when the field was first introduced via FIELD_ADDED change
 * Returns undefined if field existed from initial schema (no FIELD_ADDED change)
 */
export declare const getFieldAddedDate: (lifecycles: Lifecycles, typeName: string, fieldName: string, currentSchema?: Schema.Schema) => Date | undefined;
/**
 * Get the date when a field was removed
 * For reference docs: Returns undefined if field exists in current version (no removal badge should be shown)
 * For changelog: Shows removal date if it happened in any version
 */
export declare const getFieldRemovedDate: (lifecycles: Lifecycles, typeName: string, fieldName: string, currentSchema?: Schema.Schema) => Date | undefined;
/**
 * Check if a field is currently available (not removed)
 */
export declare const isFieldCurrentlyAvailable: (lifecycles: Lifecycles, typeName: string, fieldName: string) => boolean;
/**
 * Get field lifecycle info (for compatibility with existing UI code)
 */
export declare const getFieldLifecycle: (lifecycles: Lifecycles, typeName: string, fieldName: string) => Option.Option<{
    events: ChangeEntry[];
}>;
/**
 * Get type lifecycle info (for compatibility with existing UI code)
 */
export declare const getTypeLifecycle: (lifecycles: Lifecycles, typeName: string) => Option.Option<{
    events: ChangeEntry[];
}>;
//# sourceMappingURL=lifecycles.d.ts.map