import { TypeClassNameEnum, typeClassToName } from './type-class-name.js';
export const TypeKindNameEnum = {
    Scalar: `Scalar`,
    Object: `Object`,
    Interface: `Interface`,
    Union: `Union`,
    Enum: `Enum`,
    InputObject: `InputObject`,
    List: `List`,
    NonNull: `NonNull`,
};
export const typeKindFromClass = (typeClass) => {
    const typeClassName = typeClassToName(typeClass);
    const kindName = typeClassNameToKindMap[typeClassName];
    return kindName;
};
export const typeClassNameToKindMap = {
    [TypeClassNameEnum.Scalar]: TypeKindNameEnum.Scalar,
    [TypeClassNameEnum.Object]: TypeKindNameEnum.Object,
    [TypeClassNameEnum.Interface]: TypeKindNameEnum.Interface,
    [TypeClassNameEnum.Union]: TypeKindNameEnum.Union,
    [TypeClassNameEnum.Enum]: TypeKindNameEnum.Enum,
    [TypeClassNameEnum.InputObject]: TypeKindNameEnum.InputObject,
    [TypeClassNameEnum.List]: TypeKindNameEnum.List,
    [TypeClassNameEnum.NonNull]: TypeKindNameEnum.NonNull,
};
//# sourceMappingURL=type-kind-name.js.map