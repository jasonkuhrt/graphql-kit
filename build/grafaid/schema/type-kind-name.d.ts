import type { GraphQLNamedType } from 'graphql';
import { type TypeClassToName } from './type-class-name.js';
export declare const TypeKindNameEnum: {
    readonly Scalar: "Scalar";
    readonly Object: "Object";
    readonly Interface: "Interface";
    readonly Union: "Union";
    readonly Enum: "Enum";
    readonly InputObject: "InputObject";
    readonly List: "List";
    readonly NonNull: "NonNull";
};
export declare namespace TypeKindName {
    type Enum = typeof TypeKindNameEnum.Enum;
    type InputObject = typeof TypeKindNameEnum.InputObject;
    type List = typeof TypeKindNameEnum.List;
    type NonNull = typeof TypeKindNameEnum.NonNull;
    type Object = typeof TypeKindNameEnum.Object;
    type Interface = typeof TypeKindNameEnum.Interface;
    type Union = typeof TypeKindNameEnum.Union;
    type Scalar = typeof TypeKindNameEnum.Scalar;
}
export type TypeKindName = TypeKindName.Enum | TypeKindName.InputObject | TypeKindName.List | TypeKindName.NonNull | TypeKindName.Object | TypeKindName.Interface | TypeKindName.Union | TypeKindName.Scalar;
export declare const typeKindFromClass: <$TypeClass extends GraphQLNamedType>(typeClass: $TypeClass) => TypeClassNameToKindMap[TypeClassToName<$TypeClass>];
export declare const typeClassNameToKindMap: {
    GraphQLScalarType: "Scalar";
    GraphQLObjectType: "Object";
    GraphQLInterfaceType: "Interface";
    GraphQLUnionType: "Union";
    GraphQLEnumType: "Enum";
    GraphQLInputObjectType: "InputObject";
    GraphQLList: "List";
    GraphQLNonNull: "NonNull";
};
export type TypeClassNameToKindMap = typeof typeClassNameToKindMap;
//# sourceMappingURL=type-kind-name.d.ts.map