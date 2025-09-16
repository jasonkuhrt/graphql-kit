import { S } from '#kit-temp';
import { Either, HashMap } from 'effect';
import { Schema } from '../schema/$.js';
import { Version } from '../version/$.js';
import { EmptyCatalogError } from './catalog.js';
export declare const Versioned: S.Struct<{
    _tag: S.tag<"CatalogVersioned">;
} & {
    entries: S.HashMap<S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>, S.TaggedStruct<"SchemaVersioned", {
        version: S.transformOrFail<S.Union<[typeof S.String, typeof S.Number]>, S.Union<[typeof Version.IntegerVersion.Integer, typeof Version.SemverVersion.Semver, typeof Version.DateVersion.Date, typeof Version.CustomVersion.Custom]>, never>;
        branchPoint: S.NullOr<S.Struct<{
            schema: S.suspend<Schema.Versioned.Versioned, Schema.Versioned.VersionedEncoded, never>;
            revision: S.Struct<{
                _tag: S.tag<"Revision">;
            } & {
                date: S.brand<S.refine<string, typeof S.String>, "DateOnly">;
                changes: S.Array$<S.Union<[S.TaggedStruct<"TYPE_ADDED", {
                    name: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"TYPE_REMOVED", {
                    name: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"TYPE_KIND_CHANGED", {
                    name: typeof S.String;
                    oldKind: typeof S.String;
                    newKind: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"TYPE_DESCRIPTION_CHANGED", {
                    name: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"TYPE_DESCRIPTION_ADDED", {
                    name: typeof S.String;
                    description: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"TYPE_DESCRIPTION_REMOVED", {
                    name: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_ADDED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    isDeprecated: typeof S.Boolean;
                    isSafe: typeof S.Boolean;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_REMOVED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_TYPE_CHANGED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    oldType: typeof S.String;
                    newType: typeof S.String;
                    isSafe: typeof S.Boolean;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DEPRECATION_ADDED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    reason: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DEPRECATION_REMOVED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DEPRECATION_REASON_CHANGED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    oldReason: S.optional<typeof S.String>;
                    newReason: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DEPRECATION_REASON_ADDED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    reason: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DEPRECATION_REASON_REMOVED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DESCRIPTION_CHANGED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DESCRIPTION_ADDED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    description: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_DESCRIPTION_REMOVED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_ARGUMENT_ADDED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    argumentName: typeof S.String;
                    type: typeof S.String;
                    defaultValue: S.optional<typeof S.Unknown>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_ARGUMENT_REMOVED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    argumentName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_ARGUMENT_TYPE_CHANGED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    argumentName: typeof S.String;
                    oldType: typeof S.String;
                    newType: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_ARGUMENT_DESCRIPTION_CHANGED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    argumentName: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"FIELD_ARGUMENT_DEFAULT_CHANGED", {
                    typeName: typeof S.String;
                    fieldName: typeof S.String;
                    argumentName: typeof S.String;
                    oldDefault: S.optional<typeof S.Unknown>;
                    newDefault: S.optional<typeof S.Unknown>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_ADDED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    isDeprecated: typeof S.Boolean;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_REMOVED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_DESCRIPTION_CHANGED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_ADDED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    reason: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REMOVED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_CHANGED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    oldReason: S.optional<typeof S.String>;
                    newReason: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_ADDED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    reason: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_REMOVED", {
                    enumName: typeof S.String;
                    value: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_ADDED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    isNullable: typeof S.Boolean;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_REMOVED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_TYPE_CHANGED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    oldType: typeof S.String;
                    newType: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_ADDED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    description: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_REMOVED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_CHANGED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"INPUT_FIELD_DEFAULT_VALUE_CHANGED", {
                    inputName: typeof S.String;
                    fieldName: typeof S.String;
                    oldDefault: S.optional<typeof S.Unknown>;
                    newDefault: S.optional<typeof S.Unknown>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"UNION_MEMBER_ADDED", {
                    unionName: typeof S.String;
                    memberName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"UNION_MEMBER_REMOVED", {
                    unionName: typeof S.String;
                    memberName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"OBJECT_TYPE_INTERFACE_ADDED", {
                    objectName: typeof S.String;
                    interfaceName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"OBJECT_TYPE_INTERFACE_REMOVED", {
                    objectName: typeof S.String;
                    interfaceName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_ADDED", {
                    name: typeof S.String;
                    locations: S.Array$<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_REMOVED", {
                    name: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_DESCRIPTION_CHANGED", {
                    name: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_LOCATION_ADDED", {
                    name: typeof S.String;
                    location: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_LOCATION_REMOVED", {
                    name: typeof S.String;
                    location: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_ADDED", {
                    directiveName: typeof S.String;
                    argumentName: typeof S.String;
                    type: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_REMOVED", {
                    directiveName: typeof S.String;
                    argumentName: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED", {
                    directiveName: typeof S.String;
                    argumentName: typeof S.String;
                    oldDescription: S.optional<typeof S.String>;
                    newDescription: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED", {
                    directiveName: typeof S.String;
                    argumentName: typeof S.String;
                    oldDefault: S.optional<typeof S.Unknown>;
                    newDefault: S.optional<typeof S.Unknown>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_TYPE_CHANGED", {
                    directiveName: typeof S.String;
                    argumentName: typeof S.String;
                    oldType: typeof S.String;
                    newType: typeof S.String;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"SCHEMA_QUERY_TYPE_CHANGED", {
                    oldType: S.optional<typeof S.String>;
                    newType: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"SCHEMA_MUTATION_TYPE_CHANGED", {
                    oldType: S.optional<typeof S.String>;
                    newType: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>, S.TaggedStruct<"SCHEMA_SUBSCRIPTION_TYPE_CHANGED", {
                    oldType: S.optional<typeof S.String>;
                    newType: S.optional<typeof S.String>;
                    message: typeof S.String;
                    path: S.optional<typeof S.String>;
                    criticality: S.Struct<{
                        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                        reason: S.optional<typeof S.String>;
                    }>;
                }>]>>;
            }>;
        }>>;
        revisions: S.Array$<S.Struct<{
            _tag: S.tag<"Revision">;
        } & {
            date: S.brand<S.refine<string, typeof S.String>, "DateOnly">;
            changes: S.Array$<S.Union<[S.TaggedStruct<"TYPE_ADDED", {
                name: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"TYPE_REMOVED", {
                name: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"TYPE_KIND_CHANGED", {
                name: typeof S.String;
                oldKind: typeof S.String;
                newKind: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"TYPE_DESCRIPTION_CHANGED", {
                name: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"TYPE_DESCRIPTION_ADDED", {
                name: typeof S.String;
                description: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"TYPE_DESCRIPTION_REMOVED", {
                name: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_ADDED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                isDeprecated: typeof S.Boolean;
                isSafe: typeof S.Boolean;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_REMOVED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_TYPE_CHANGED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                oldType: typeof S.String;
                newType: typeof S.String;
                isSafe: typeof S.Boolean;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DEPRECATION_ADDED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                reason: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DEPRECATION_REMOVED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DEPRECATION_REASON_CHANGED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                oldReason: S.optional<typeof S.String>;
                newReason: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DEPRECATION_REASON_ADDED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                reason: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DEPRECATION_REASON_REMOVED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DESCRIPTION_CHANGED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DESCRIPTION_ADDED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                description: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_DESCRIPTION_REMOVED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_ARGUMENT_ADDED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                argumentName: typeof S.String;
                type: typeof S.String;
                defaultValue: S.optional<typeof S.Unknown>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_ARGUMENT_REMOVED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                argumentName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_ARGUMENT_TYPE_CHANGED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                argumentName: typeof S.String;
                oldType: typeof S.String;
                newType: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_ARGUMENT_DESCRIPTION_CHANGED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                argumentName: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"FIELD_ARGUMENT_DEFAULT_CHANGED", {
                typeName: typeof S.String;
                fieldName: typeof S.String;
                argumentName: typeof S.String;
                oldDefault: S.optional<typeof S.Unknown>;
                newDefault: S.optional<typeof S.Unknown>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_ADDED", {
                enumName: typeof S.String;
                value: typeof S.String;
                isDeprecated: typeof S.Boolean;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_REMOVED", {
                enumName: typeof S.String;
                value: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_DESCRIPTION_CHANGED", {
                enumName: typeof S.String;
                value: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_ADDED", {
                enumName: typeof S.String;
                value: typeof S.String;
                reason: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REMOVED", {
                enumName: typeof S.String;
                value: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_CHANGED", {
                enumName: typeof S.String;
                value: typeof S.String;
                oldReason: S.optional<typeof S.String>;
                newReason: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_ADDED", {
                enumName: typeof S.String;
                value: typeof S.String;
                reason: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_REMOVED", {
                enumName: typeof S.String;
                value: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_ADDED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                isNullable: typeof S.Boolean;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_REMOVED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_TYPE_CHANGED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                oldType: typeof S.String;
                newType: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_ADDED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                description: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_REMOVED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_CHANGED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"INPUT_FIELD_DEFAULT_VALUE_CHANGED", {
                inputName: typeof S.String;
                fieldName: typeof S.String;
                oldDefault: S.optional<typeof S.Unknown>;
                newDefault: S.optional<typeof S.Unknown>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"UNION_MEMBER_ADDED", {
                unionName: typeof S.String;
                memberName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"UNION_MEMBER_REMOVED", {
                unionName: typeof S.String;
                memberName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"OBJECT_TYPE_INTERFACE_ADDED", {
                objectName: typeof S.String;
                interfaceName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"OBJECT_TYPE_INTERFACE_REMOVED", {
                objectName: typeof S.String;
                interfaceName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_ADDED", {
                name: typeof S.String;
                locations: S.Array$<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_REMOVED", {
                name: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_DESCRIPTION_CHANGED", {
                name: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_LOCATION_ADDED", {
                name: typeof S.String;
                location: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_LOCATION_REMOVED", {
                name: typeof S.String;
                location: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_ADDED", {
                directiveName: typeof S.String;
                argumentName: typeof S.String;
                type: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_REMOVED", {
                directiveName: typeof S.String;
                argumentName: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED", {
                directiveName: typeof S.String;
                argumentName: typeof S.String;
                oldDescription: S.optional<typeof S.String>;
                newDescription: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED", {
                directiveName: typeof S.String;
                argumentName: typeof S.String;
                oldDefault: S.optional<typeof S.Unknown>;
                newDefault: S.optional<typeof S.Unknown>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"DIRECTIVE_ARGUMENT_TYPE_CHANGED", {
                directiveName: typeof S.String;
                argumentName: typeof S.String;
                oldType: typeof S.String;
                newType: typeof S.String;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"SCHEMA_QUERY_TYPE_CHANGED", {
                oldType: S.optional<typeof S.String>;
                newType: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"SCHEMA_MUTATION_TYPE_CHANGED", {
                oldType: S.optional<typeof S.String>;
                newType: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>, S.TaggedStruct<"SCHEMA_SUBSCRIPTION_TYPE_CHANGED", {
                oldType: S.optional<typeof S.String>;
                newType: S.optional<typeof S.String>;
                message: typeof S.String;
                path: S.optional<typeof S.String>;
                criticality: S.Struct<{
                    level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
                    reason: S.optional<typeof S.String>;
                }>;
            }>]>>;
        }>>;
        definition: S.transformOrFail<S.declare<import("../schema-definition/graphql-ast.ts").Ast, import("../schema-definition/graphql-ast.ts").Ast, readonly [], never>, S.instanceOf<import("graphql").GraphQLSchema>, never>;
        categories: S.optionalWith<S.Array$<S.Struct<{
            name: typeof S.String;
            types: S.Array$<typeof S.String>;
        }>>, {
            default: () => never[];
        }>;
    }>>;
}>;
export type Versioned = typeof Versioned.Type;
export declare const make: (props: {
    readonly _tag?: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom, {
        readonly _tag: "SchemaVersioned";
        readonly version: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string & import("effect/Brand").Brand<"DateOnly">;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly inputName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string & import("effect/Brand").Brand<"DateOnly">;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly inputName: string;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    }>;
}, options?: S.MakeOptions) => {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom, {
        readonly _tag: "SchemaVersioned";
        readonly version: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string & import("effect/Brand").Brand<"DateOnly">;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly inputName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string & import("effect/Brand").Brand<"DateOnly">;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly inputName: string;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    }>;
};
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom, {
        readonly _tag: "SchemaVersioned";
        readonly version: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string & import("effect/Brand").Brand<"DateOnly">;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly inputName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string & import("effect/Brand").Brand<"DateOnly">;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly inputName: string;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    }>;
};
export declare const decode: (i: {
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.VersionedEncoded;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly reason?: string | undefined;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly path?: string | undefined;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly reason?: string | undefined;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly path?: string | undefined;
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly path?: string | undefined;
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly path?: string | undefined;
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly reason?: string | undefined;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly path?: string | undefined;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly reason?: string | undefined;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly path?: string | undefined;
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly path?: string | undefined;
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly path?: string | undefined;
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    }])[];
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom, {
        readonly _tag: "SchemaVersioned";
        readonly version: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string & import("effect/Brand").Brand<"DateOnly">;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly inputName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string & import("effect/Brand").Brand<"DateOnly">;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly inputName: string;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    }>;
}, import("effect/ParseResult").ParseError, never>;
export declare const encode: (a: {
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom, {
        readonly _tag: "SchemaVersioned";
        readonly version: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string & import("effect/Brand").Brand<"DateOnly">;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly inputName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string & import("effect/Brand").Brand<"DateOnly">;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly inputName: string;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    }>;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "CatalogVersioned";
    readonly entries: readonly (readonly [string | number, {
        readonly _tag: "SchemaVersioned";
        readonly version: string | number;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.VersionedEncoded;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly reason?: string | undefined;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly path?: string | undefined;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly path?: string | undefined;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly reason?: string | undefined;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly path?: string | undefined;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                    readonly path?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly path?: string | undefined;
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly path?: string | undefined;
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly path?: string | undefined;
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly reason?: string | undefined;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly path?: string | undefined;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly path?: string | undefined;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly reason?: string | undefined;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly path?: string | undefined;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
                readonly path?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly path?: string | undefined;
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly path?: string | undefined;
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly path?: string | undefined;
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("../schema-definition/graphql-ast.ts").Ast;
        readonly categories?: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[] | undefined;
    }])[];
}, import("effect/ParseResult").ParseError, never>;
export declare const equivalence: import("effect/Equivalence").Equivalence<{
    readonly _tag: "CatalogVersioned";
    readonly entries: HashMap.HashMap<Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom, {
        readonly _tag: "SchemaVersioned";
        readonly version: Version.IntegerVersion.Integer | Version.SemverVersion.Semver | Version.DateVersion.Date | Version.CustomVersion.Custom;
        readonly branchPoint: {
            readonly schema: Schema.Versioned.Versioned;
            readonly revision: {
                readonly _tag: "Revision";
                readonly date: string & import("effect/Brand").Brand<"DateOnly">;
                readonly changes: readonly ({
                    readonly _tag: "TYPE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_KIND_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldKind: string;
                    readonly newKind: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isDeprecated: boolean;
                    readonly isSafe: boolean;
                } | {
                    readonly _tag: "FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly isSafe: boolean;
                    readonly oldType: string;
                    readonly newType: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly type: string;
                    readonly defaultValue?: unknown;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                } | {
                    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly typeName: string;
                    readonly fieldName: string;
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                } | {
                    readonly _tag: "ENUM_VALUE_ADDED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly isDeprecated: boolean;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                    readonly reason?: string | undefined;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldReason?: string | undefined;
                    readonly newReason?: string | undefined;
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                    readonly reason: string;
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                    readonly value: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly enumName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                    readonly isNullable: boolean;
                } | {
                    readonly _tag: "INPUT_FIELD_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldType: string;
                    readonly newType: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                    readonly description: string;
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly fieldName: string;
                    readonly inputName: string;
                } | {
                    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly fieldName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly inputName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "UNION_MEMBER_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly unionName: string;
                    readonly memberName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly objectName: string;
                    readonly interfaceName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly locations: readonly string[];
                } | {
                    readonly _tag: "DIRECTIVE_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                } | {
                    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly name: string;
                    readonly location: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly type: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldDescription?: string | undefined;
                    readonly newDescription?: string | undefined;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly argumentName: string;
                    readonly oldDefault?: unknown;
                    readonly newDefault?: unknown;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType: string;
                    readonly newType: string;
                    readonly argumentName: string;
                    readonly directiveName: string;
                } | {
                    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                } | {
                    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                    readonly message: string;
                    readonly path?: string | undefined;
                    readonly criticality: {
                        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                        readonly reason?: string | undefined;
                    };
                    readonly oldType?: string | undefined;
                    readonly newType?: string | undefined;
                })[];
            };
        } | null;
        readonly revisions: readonly {
            readonly _tag: "Revision";
            readonly date: string & import("effect/Brand").Brand<"DateOnly">;
            readonly changes: readonly ({
                readonly _tag: "TYPE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_KIND_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldKind: string;
                readonly newKind: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "TYPE_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isDeprecated: boolean;
                readonly isSafe: boolean;
            } | {
                readonly _tag: "FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly isSafe: boolean;
                readonly oldType: string;
                readonly newType: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly type: string;
                readonly defaultValue?: unknown;
            } | {
                readonly _tag: "FIELD_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
            } | {
                readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly typeName: string;
                readonly fieldName: string;
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
            } | {
                readonly _tag: "ENUM_VALUE_ADDED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly isDeprecated: boolean;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
                readonly reason?: string | undefined;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldReason?: string | undefined;
                readonly newReason?: string | undefined;
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
                readonly reason: string;
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
                readonly value: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly enumName: string;
            } | {
                readonly _tag: "INPUT_FIELD_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
                readonly isNullable: boolean;
            } | {
                readonly _tag: "INPUT_FIELD_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldType: string;
                readonly newType: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
                readonly description: string;
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly fieldName: string;
                readonly inputName: string;
            } | {
                readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly fieldName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly inputName: string;
            } | {
                readonly _tag: "UNION_MEMBER_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "UNION_MEMBER_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly unionName: string;
                readonly memberName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly objectName: string;
                readonly interfaceName: string;
            } | {
                readonly _tag: "DIRECTIVE_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly locations: readonly string[];
            } | {
                readonly _tag: "DIRECTIVE_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
            } | {
                readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly name: string;
                readonly location: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly type: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldDescription?: string | undefined;
                readonly newDescription?: string | undefined;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly argumentName: string;
                readonly oldDefault?: unknown;
                readonly newDefault?: unknown;
                readonly directiveName: string;
            } | {
                readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType: string;
                readonly newType: string;
                readonly argumentName: string;
                readonly directiveName: string;
            } | {
                readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            } | {
                readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
                readonly message: string;
                readonly path?: string | undefined;
                readonly criticality: {
                    readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
                    readonly reason?: string | undefined;
                };
                readonly oldType?: string | undefined;
                readonly newType?: string | undefined;
            })[];
        }[];
        readonly definition: import("graphql").GraphQLSchema;
        readonly categories: readonly {
            readonly name: string;
            readonly types: readonly string[];
        }[];
    }>;
}>;
/**
 * Get the latest schema from a versioned catalog.
 * The latest version is determined by Version.max comparison.
 *
 * @param catalog - The versioned catalog
 * @returns Either with the latest schema or EmptyCatalogError
 */
export declare const getLatest: (catalog: Versioned) => Either.Either<Schema.Versioned.Versioned, EmptyCatalogError>;
export declare const getOldestOrThrow: (catalog: Versioned) => Schema.Versioned.Versioned;
/**
 * Get the latest schema definition from a versioned catalog.
 * The latest version is determined by Version.max comparison.
 *
 * @param catalog - The versioned catalog
 * @returns The GraphQL schema definition of the latest version
 * @throws {Error} If the catalog has no entries
 * @deprecated Use getLatest which returns Either
 */
export declare const getLatestOrThrow: (catalog: Versioned) => Schema.Versioned.Versioned;
/**
 * Get all schemas sorted by version (newest first)
 */
export declare const getAll: (catalog: Versioned) => Schema.Versioned.Versioned[];
/**
 * Get all versions sorted (newest first)
 */
export declare const getVersions: (catalog: Versioned) => Version.Version[];
//# sourceMappingURL=versioned.d.ts.map