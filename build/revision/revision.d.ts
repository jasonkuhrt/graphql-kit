import { S } from '#kit-temp';
import { Order } from 'effect';
export declare const Revision: S.Struct<{
    _tag: S.tag<"Revision">;
} & {
    date: any;
    changes: S.Array$<any>;
}>;
export type Revision = typeof Revision.Type;
/**
 * Create a Revision instance with validation
 */
export declare const make: (props: any, options?: S.MakeOptions) => any;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is any;
export declare const order: Order.Order<Revision>;
export declare const min: {
    (that: any): (self: any) => any;
    (self: any, that: any): any;
};
export declare const max: {
    (that: any): (self: any) => any;
    (self: any, that: any): any;
};
export declare const lessThan: {
    (that: any): (self: any) => boolean;
    (self: any, that: any): boolean;
};
export declare const greaterThan: {
    (that: any): (self: any) => boolean;
    (self: any, that: any): boolean;
};
export declare const decode: (i: {
    readonly [x: string]: any;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<any, import("effect/ParseResult").ParseError, any>;
export declare const decodeSync: (i: {
    readonly [x: string]: any;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => any;
export declare const encode: (a: any, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly [x: string]: any;
}, import("effect/ParseResult").ParseError, any>;
export declare const equivalence: import("effect/Equivalence").Equivalence<any>;
//# sourceMappingURL=revision.d.ts.map