/**
 * GraphQL kinds - fundamental taxonomy of GraphQL schema elements.
 */
/**
 * Node kinds - elements that can contain other elements or exist within the schema structure.
 */
export declare const Node: {
    readonly Schema: "Schema";
    readonly Field: "Field";
    readonly Argument: "Argument";
    readonly Directive: "Directive";
    readonly InputField: "InputField";
    readonly EnumValue: "EnumValue";
};
export type Node = typeof Node[keyof typeof Node];
/**
 * Type kinds - the named types in a GraphQL schema.
 */
export declare const Type: {
    readonly Object: "Object";
    readonly Interface: "Interface";
    readonly Union: "Union";
    readonly Scalar: "Scalar";
    readonly Enum: "Enum";
    readonly InputObject: "InputObject";
};
export type Type = typeof Type[keyof typeof Type];
/**
 * All GraphQL kinds combined.
 */
export declare const Kinds: {
    readonly Object: "Object";
    readonly Interface: "Interface";
    readonly Union: "Union";
    readonly Scalar: "Scalar";
    readonly Enum: "Enum";
    readonly InputObject: "InputObject";
    readonly Schema: "Schema";
    readonly Field: "Field";
    readonly Argument: "Argument";
    readonly Directive: "Directive";
    readonly InputField: "InputField";
    readonly EnumValue: "EnumValue";
};
export type Kind = Node | Type;
/**
 * Groups of kinds that share common characteristics.
 * These are useful for validation and type guards.
 */
export declare const Like: {
    /**
     * All named types in GraphQL.
     */
    readonly Named: readonly ["Object", "Interface", "Union", "Scalar", "Enum", "InputObject"];
    /**
     * Types that can have fields.
     */
    readonly Fielded: readonly ["Object", "Interface"];
    /**
     * Types that can have arguments (fields and directives).
     */
    readonly Argable: readonly ["Field", "Directive"];
    /**
     * Types that are output types (can be used as field return types).
     */
    readonly Output: readonly ["Object", "Interface", "Union", "Scalar", "Enum"];
    /**
     * Types that are input types (can be used as argument types).
     */
    readonly Input: readonly ["Scalar", "Enum", "InputObject"];
    /**
     * Types that are abstract (need concrete implementations).
     */
    readonly Abstract: readonly ["Interface", "Union"];
    /**
     * Types that are concrete (can be instantiated).
     */
    readonly Concrete: readonly ["Object", "Scalar", "Enum", "InputObject"];
};
export type Like = typeof Like;
export type LikeNamed = typeof Like.Named[number];
export type LikeFielded = typeof Like.Fielded[number];
export type LikeArgable = typeof Like.Argable[number];
export type LikeOutput = typeof Like.Output[number];
export type LikeInput = typeof Like.Input[number];
export type LikeAbstract = typeof Like.Abstract[number];
export type LikeConcrete = typeof Like.Concrete[number];
/**
 * Type-level mapping of what kinds can be parents of other kinds.
 * This encodes the fundamental containment rules of GraphQL.
 */
export interface ParentKindMap {
    Field: 'Object' | 'Interface';
    Argument: 'Field' | 'Directive';
    InputField: 'InputObject';
    EnumValue: 'Enum';
    Object: 'Schema';
    Interface: 'Schema';
    Union: 'Schema';
    Scalar: 'Schema';
    Enum: 'Schema';
    InputObject: 'Schema';
}
/**
 * Type helper to get valid parent kinds for a child kind.
 */
export type ParentKindsOf<K extends keyof ParentKindMap> = ParentKindMap[K];
/**
 * Runtime mapping of valid parent kinds for each kind.
 * Uses const assertion with satisfies to ensure type safety.
 */
export declare const ParentKinds: {
    readonly Field: readonly ["Object", "Interface"];
    readonly Argument: readonly ["Field", "Directive"];
    readonly InputField: readonly ["InputObject"];
    readonly EnumValue: readonly ["Enum"];
    readonly Object: readonly ["Schema"];
    readonly Interface: readonly ["Schema"];
    readonly Union: readonly ["Schema"];
    readonly Scalar: readonly ["Schema"];
    readonly Enum: readonly ["Schema"];
    readonly InputObject: readonly ["Schema"];
};
/**
 * Get valid parent kinds for a child kind.
 * Strongly typed overloads provide compile-time safety when the kind is known.
 */
export declare function getParentKinds<K extends keyof ParentKindMap>(childKind: K): typeof ParentKinds[K];
export declare function getParentKinds(childKind: string): readonly string[] | undefined;
/**
 * Type-level mapping of what kinds can contain other kinds.
 * The inverse of ParentKindMap.
 */
export interface ChildKindMap {
    Schema: 'Object' | 'Interface' | 'Union' | 'Scalar' | 'Enum' | 'InputObject';
    Object: 'Field';
    Interface: 'Field';
    Field: 'Argument';
    Directive: 'Argument';
    InputObject: 'InputField';
    Enum: 'EnumValue';
}
export type ChildKindsOf<K extends keyof ChildKindMap> = ChildKindMap[K];
/**
 * Runtime mapping of what kinds can be children of each kind.
 */
export declare const ChildKinds: {
    readonly Schema: readonly ["Object", "Interface", "Union", "Scalar", "Enum", "InputObject"];
    readonly Object: readonly ["Field"];
    readonly Interface: readonly ["Field"];
    readonly Field: readonly ["Argument"];
    readonly Directive: readonly ["Argument"];
    readonly InputObject: readonly ["InputField"];
    readonly Enum: readonly ["EnumValue"];
};
/**
 * Get valid child kinds for a parent kind.
 */
export declare function getChildKinds<K extends keyof ChildKindMap>(parentKind: K): typeof ChildKinds[K];
export declare function getChildKinds(parentKind: string): readonly string[] | undefined;
//# sourceMappingURL=kinds.d.ts.map