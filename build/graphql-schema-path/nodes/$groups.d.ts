import type { S } from '#kit-temp';
import type { ModuleIndex } from './$types.js';
import * as Argument from './argument.js';
import * as Field from './field.js';
import * as ResolvedType from './resolved-type.js';
import * as Root from './root.js';
import * as Type from './type.js';
export type $Any = S.Schema.Type<ModuleIndex[keyof ModuleIndex]['Schema']>;
export declare const All: (typeof Argument | typeof ResolvedType | typeof Field | typeof Type | typeof Root)[];
//# sourceMappingURL=$groups.d.ts.map