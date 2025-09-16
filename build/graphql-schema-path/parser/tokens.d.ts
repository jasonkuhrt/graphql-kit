import { S } from '#kit-temp';
/**
 * Token types for the GraphQL schema path tokenizer
 */
export declare const TokenType: S.Enums<{
    readonly NAME: "NAME";
    readonly VERSION: "VERSION";
    readonly DOT: "DOT";
    readonly DOLLAR: "DOLLAR";
    readonly HASH: "HASH";
    readonly COLON: "COLON";
    readonly EOF: "EOF";
}>;
export type TokenType = S.Schema.Type<typeof TokenType>;
export declare const NameToken: S.TaggedStruct<"NAME", {
    display: S.PropertySignature<":", "name", never, ":", "name", true, never>;
    value: typeof S.String;
    pos: typeof S.Number;
}>;
export declare const VersionToken: S.TaggedStruct<"VERSION", {
    display: S.PropertySignature<":", "version", never, ":", "version", true, never>;
    value: typeof S.String;
    pos: typeof S.Number;
}>;
export declare const DotToken: S.TaggedStruct<"DOT", {
    display: S.PropertySignature<":", ".", never, ":", ".", true, never>;
    pos: typeof S.Number;
}>;
export declare const DollarToken: S.TaggedStruct<"DOLLAR", {
    display: S.PropertySignature<":", "$", never, ":", "$", true, never>;
    pos: typeof S.Number;
}>;
export declare const HashToken: S.TaggedStruct<"HASH", {
    display: S.PropertySignature<":", "#", never, ":", "#", true, never>;
    pos: typeof S.Number;
}>;
export declare const ColonToken: S.TaggedStruct<"COLON", {
    display: S.PropertySignature<":", ":", never, ":", ":", true, never>;
    pos: typeof S.Number;
}>;
export declare const EOFToken: S.TaggedStruct<"EOF", {
    display: S.PropertySignature<":", "EOF", never, ":", "EOF", true, never>;
    pos: typeof S.Number;
}>;
export declare const Token: S.Union<[S.TaggedStruct<"NAME", {
    display: S.PropertySignature<":", "name", never, ":", "name", true, never>;
    value: typeof S.String;
    pos: typeof S.Number;
}>, S.TaggedStruct<"VERSION", {
    display: S.PropertySignature<":", "version", never, ":", "version", true, never>;
    value: typeof S.String;
    pos: typeof S.Number;
}>, S.TaggedStruct<"DOT", {
    display: S.PropertySignature<":", ".", never, ":", ".", true, never>;
    pos: typeof S.Number;
}>, S.TaggedStruct<"DOLLAR", {
    display: S.PropertySignature<":", "$", never, ":", "$", true, never>;
    pos: typeof S.Number;
}>, S.TaggedStruct<"HASH", {
    display: S.PropertySignature<":", "#", never, ":", "#", true, never>;
    pos: typeof S.Number;
}>, S.TaggedStruct<"COLON", {
    display: S.PropertySignature<":", ":", never, ":", ":", true, never>;
    pos: typeof S.Number;
}>, S.TaggedStruct<"EOF", {
    display: S.PropertySignature<":", "EOF", never, ":", "EOF", true, never>;
    pos: typeof S.Number;
}>]>;
export type Token = S.Schema.Type<typeof Token>;
export type NameToken = S.Schema.Type<typeof NameToken>;
export type VersionToken = S.Schema.Type<typeof VersionToken>;
export type DotToken = S.Schema.Type<typeof DotToken>;
export type DollarToken = S.Schema.Type<typeof DollarToken>;
export type HashToken = S.Schema.Type<typeof HashToken>;
export type ColonToken = S.Schema.Type<typeof ColonToken>;
export type EOFToken = S.Schema.Type<typeof EOFToken>;
export declare const makeNameToken: (props: {
    readonly _tag?: "NAME";
    readonly value: string;
    readonly display?: "name";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "NAME";
    readonly value: string;
    readonly display: "name";
    readonly pos: number;
};
export declare const makeVersionToken: (props: {
    readonly _tag?: "VERSION";
    readonly value: string;
    readonly display?: "version";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "VERSION";
    readonly value: string;
    readonly display: "version";
    readonly pos: number;
};
export declare const makeDotToken: (props: {
    readonly _tag?: "DOT";
    readonly display?: ".";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "DOT";
    readonly display: ".";
    readonly pos: number;
};
export declare const makeDollarToken: (props: {
    readonly _tag?: "DOLLAR";
    readonly display?: "$";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "DOLLAR";
    readonly display: "$";
    readonly pos: number;
};
export declare const makeHashToken: (props: {
    readonly _tag?: "HASH";
    readonly display?: "#";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "HASH";
    readonly display: "#";
    readonly pos: number;
};
export declare const makeColonToken: (props: {
    readonly _tag?: "COLON";
    readonly display?: ":";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "COLON";
    readonly display: ":";
    readonly pos: number;
};
export declare const makeEOFToken: (props: {
    readonly _tag?: "EOF";
    readonly display?: "EOF";
    readonly pos: number;
}, options?: S.MakeOptions) => {
    readonly _tag: "EOF";
    readonly display: "EOF";
    readonly pos: number;
};
export declare const isNameToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "NAME";
    readonly value: string;
    readonly display: "name";
    readonly pos: number;
};
export declare const isVersionToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "VERSION";
    readonly value: string;
    readonly display: "version";
    readonly pos: number;
};
export declare const isDotToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "DOT";
    readonly display: ".";
    readonly pos: number;
};
export declare const isDollarToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "DOLLAR";
    readonly display: "$";
    readonly pos: number;
};
export declare const isHashToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "HASH";
    readonly display: "#";
    readonly pos: number;
};
export declare const isColonToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "COLON";
    readonly display: ":";
    readonly pos: number;
};
export declare const isEOFToken: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "EOF";
    readonly display: "EOF";
    readonly pos: number;
};
//# sourceMappingURL=tokens.d.ts.map