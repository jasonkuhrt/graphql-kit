import { GraphQLEnumType, GraphQLInputObjectType, GraphQLInterfaceType, GraphQLList, type GraphQLNamedType, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLUnionType } from 'graphql';
export declare const TypeClassNameEnum: {
    readonly Scalar: "GraphQLScalarType";
    readonly Object: "GraphQLObjectType";
    readonly Interface: "GraphQLInterfaceType";
    readonly Union: "GraphQLUnionType";
    readonly Enum: "GraphQLEnumType";
    readonly InputObject: "GraphQLInputObjectType";
    readonly List: "GraphQLList";
    readonly NonNull: "GraphQLNonNull";
};
export declare namespace TypeClassName {
    type Scalar = typeof TypeClassNameEnum.Scalar;
    type Object = typeof TypeClassNameEnum.Object;
    type Interface = typeof TypeClassNameEnum.Interface;
    type Union = typeof TypeClassNameEnum.Union;
    type Enum = typeof TypeClassNameEnum.Enum;
    type InputObject = typeof TypeClassNameEnum.InputObject;
    type List = typeof TypeClassNameEnum.List;
    type NonNull = typeof TypeClassNameEnum.NonNull;
}
export type TypeClassName = TypeClassName.Scalar | TypeClassName.Object | TypeClassName.Interface | TypeClassName.Union | TypeClassName.Enum | TypeClassName.InputObject | TypeClassName.List | TypeClassName.NonNull;
export type TypeClassToName<$C> = $C extends GraphQLScalarType ? TypeClassName.Scalar : $C extends GraphQLObjectType ? TypeClassName.Object : $C extends GraphQLInterfaceType ? TypeClassName.Interface : $C extends GraphQLUnionType ? TypeClassName.Union : $C extends GraphQLEnumType ? TypeClassName.Enum : $C extends GraphQLInputObjectType ? TypeClassName.InputObject : $C extends GraphQLList<any> ? TypeClassName.List : $C extends GraphQLNonNull<any> ? TypeClassName.NonNull : never;
export declare const typeClassToName: <$Node extends GraphQLNamedType>(node: $Node) => TypeClassToName<$Node>;
export declare const namedTypeClassNameToClassMap: {
    readonly GraphQLScalarType: typeof GraphQLScalarType;
    readonly GraphQLObjectType: typeof GraphQLObjectType;
    readonly GraphQLInterfaceType: typeof GraphQLInterfaceType;
    readonly GraphQLUnionType: typeof GraphQLUnionType;
    readonly GraphQLEnumType: typeof GraphQLEnumType;
    readonly GraphQLInputObjectType: typeof GraphQLInputObjectType;
};
export declare const typeClassNameToClassMap: {
    readonly GraphQLScalarType: typeof GraphQLScalarType;
    readonly GraphQLObjectType: typeof GraphQLObjectType;
    readonly GraphQLInterfaceType: typeof GraphQLInterfaceType;
    readonly GraphQLUnionType: typeof GraphQLUnionType;
    readonly GraphQLEnumType: typeof GraphQLEnumType;
    readonly GraphQLInputObjectType: typeof GraphQLInputObjectType;
    readonly GraphQLNonNull: typeof GraphQLNonNull;
    readonly GraphQLList: typeof GraphQLList;
};
//# sourceMappingURL=type-class-name.d.ts.map