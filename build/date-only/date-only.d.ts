import { S } from '#kit-temp';
import { Order } from 'effect';
export declare const DateOnly: S.brand<S.refine<string, typeof S.String>, "DateOnly">;
export type DateOnly = typeof DateOnly.Type;
export declare const make: (a: string, options?: S.MakeOptions) => string & import("effect/Brand").Brand<"DateOnly">;
export declare const order: Order.Order<DateOnly>;
export declare const min: {
    (that: string & import("effect/Brand").Brand<"DateOnly">): (self: string & import("effect/Brand").Brand<"DateOnly">) => string & import("effect/Brand").Brand<"DateOnly">;
    (self: string & import("effect/Brand").Brand<"DateOnly">, that: string & import("effect/Brand").Brand<"DateOnly">): string & import("effect/Brand").Brand<"DateOnly">;
};
export declare const max: {
    (that: string & import("effect/Brand").Brand<"DateOnly">): (self: string & import("effect/Brand").Brand<"DateOnly">) => string & import("effect/Brand").Brand<"DateOnly">;
    (self: string & import("effect/Brand").Brand<"DateOnly">, that: string & import("effect/Brand").Brand<"DateOnly">): string & import("effect/Brand").Brand<"DateOnly">;
};
export declare const lessThan: {
    (that: string & import("effect/Brand").Brand<"DateOnly">): (self: string & import("effect/Brand").Brand<"DateOnly">) => boolean;
    (self: string & import("effect/Brand").Brand<"DateOnly">, that: string & import("effect/Brand").Brand<"DateOnly">): boolean;
};
export declare const greaterThan: {
    (that: string & import("effect/Brand").Brand<"DateOnly">): (self: string & import("effect/Brand").Brand<"DateOnly">) => boolean;
    (self: string & import("effect/Brand").Brand<"DateOnly">, that: string & import("effect/Brand").Brand<"DateOnly">): boolean;
};
export declare const equivalence: import("effect/Equivalence").Equivalence<string & import("effect/Brand").Brand<"DateOnly">>;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is string & import("effect/Brand").Brand<"DateOnly">;
export declare const decode: (i: string, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<string & import("effect/Brand").Brand<"DateOnly">, import("effect/ParseResult").ParseError, never>;
export declare const decodeSync: (i: string, overrideOptions?: import("effect/SchemaAST").ParseOptions) => string & import("effect/Brand").Brand<"DateOnly">;
export declare const encode: (a: string & import("effect/Brand").Brand<"DateOnly">, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<string, import("effect/ParseResult").ParseError, never>;
export declare const fromDate: (date: Date) => DateOnly;
export declare const toDate: (date: DateOnly) => Date;
/**
 * Get the year from a date
 */
export declare const getYear: (date: DateOnly) => number;
/**
 * Get the month from a date (1-12)
 */
export declare const getMonth: (date: DateOnly) => number;
/**
 * Get the day from a date (1-31)
 */
export declare const getDay: (date: DateOnly) => number;
/**
 * Calculate the number of days between two dates
 * @param from - The starting date
 * @param to - The ending date
 * @returns Number of days between the dates (positive if to > from, negative otherwise)
 */
export declare const getDaysBetween: (from: DateOnly, to: DateOnly) => number;
//# sourceMappingURL=date-only.d.ts.map