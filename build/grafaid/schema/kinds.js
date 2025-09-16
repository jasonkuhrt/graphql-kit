/**
 * GraphQL kinds - fundamental taxonomy of GraphQL schema elements.
 */
// ============================================================================
// Node Kinds
// ============================================================================
/**
 * Node kinds - elements that can contain other elements or exist within the schema structure.
 */
export const Node = {
    Schema: 'Schema',
    Field: 'Field',
    Argument: 'Argument',
    Directive: 'Directive',
    InputField: 'InputField',
    EnumValue: 'EnumValue',
};
// ============================================================================
// Type Kinds
// ============================================================================
/**
 * Type kinds - the named types in a GraphQL schema.
 */
export const Type = {
    Object: 'Object',
    Interface: 'Interface',
    Union: 'Union',
    Scalar: 'Scalar',
    Enum: 'Enum',
    InputObject: 'InputObject',
};
// ============================================================================
// All Kinds
// ============================================================================
/**
 * All GraphQL kinds combined.
 */
export const Kinds = {
    ...Node,
    ...Type,
};
// ============================================================================
// Kind Groups (Like)
// ============================================================================
/**
 * Groups of kinds that share common characteristics.
 * These are useful for validation and type guards.
 */
export const Like = {
    /**
     * All named types in GraphQL.
     */
    Named: [Type.Object, Type.Interface, Type.Union, Type.Scalar, Type.Enum, Type.InputObject],
    /**
     * Types that can have fields.
     */
    Fielded: [Type.Object, Type.Interface],
    /**
     * Types that can have arguments (fields and directives).
     */
    Argable: [Node.Field, Node.Directive],
    /**
     * Types that are output types (can be used as field return types).
     */
    Output: [Type.Object, Type.Interface, Type.Union, Type.Scalar, Type.Enum],
    /**
     * Types that are input types (can be used as argument types).
     */
    Input: [Type.Scalar, Type.Enum, Type.InputObject],
    /**
     * Types that are abstract (need concrete implementations).
     */
    Abstract: [Type.Interface, Type.Union],
    /**
     * Types that are concrete (can be instantiated).
     */
    Concrete: [Type.Object, Type.Scalar, Type.Enum, Type.InputObject],
};
// ============================================================================
// Parent Kind Mapping (Runtime)
// ============================================================================
/**
 * Runtime mapping of valid parent kinds for each kind.
 * Uses const assertion with satisfies to ensure type safety.
 */
export const ParentKinds = {
    // Node kinds
    Field: ['Object', 'Interface'],
    Argument: ['Field', 'Directive'],
    InputField: ['InputObject'],
    EnumValue: ['Enum'],
    // Type kinds
    Object: ['Schema'],
    Interface: ['Schema'],
    Union: ['Schema'],
    Scalar: ['Schema'],
    Enum: ['Schema'],
    InputObject: ['Schema'],
};
export function getParentKinds(childKind) {
    return ParentKinds[childKind];
}
// ============================================================================
// Child Kind Mapping (Runtime)
// ============================================================================
/**
 * Runtime mapping of what kinds can be children of each kind.
 */
export const ChildKinds = {
    Schema: ['Object', 'Interface', 'Union', 'Scalar', 'Enum', 'InputObject'],
    Object: ['Field'],
    Interface: ['Field'],
    Field: ['Argument'],
    Directive: ['Argument'],
    InputObject: ['InputField'],
    Enum: ['EnumValue'],
};
export function getChildKinds(parentKind) {
    return ChildKinds[parentKind];
}
//# sourceMappingURL=kinds.js.map