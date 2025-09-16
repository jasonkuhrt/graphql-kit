import type { GraphQLInterfaceType } from 'graphql';
import type { Schema } from '../schema.js';
import * as Type from '../type.js';
import type { KindMap } from './__.js';
export declare const Name: {
    Root: "Root";
    ScalarCustom: "ScalarCustom";
    ScalarStandard: "ScalarStandard";
    Enum: "Enum";
    InputObject: "InputObject";
    OutputObject: "OutputObject";
    Interface: "Interface";
    Union: "Union";
};
export type KindName = keyof KindMap[`list`];
export declare const getKindMap: (schema: Schema) => KindMap;
export declare const hasCustomScalars: (typeMapByKind: KindMap) => boolean;
export declare const getInterfaceImplementors: (typeMap: KindMap, interfaceTypeSearch: GraphQLInterfaceType) => (GraphQLInterfaceType | Type.Object<any, any>)[];
//# sourceMappingURL=_.d.ts.map