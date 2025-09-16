import { S } from '#kit-temp';
export declare const TypeAdded: S.TaggedStruct<"TYPE_ADDED", {
    name: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const TypeRemoved: S.TaggedStruct<"TYPE_REMOVED", {
    name: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const TypeKindChanged: S.TaggedStruct<"TYPE_KIND_CHANGED", {
    name: typeof S.String;
    oldKind: typeof S.String;
    newKind: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const TypeDescriptionChanged: S.TaggedStruct<"TYPE_DESCRIPTION_CHANGED", {
    name: typeof S.String;
    oldDescription: S.optional<typeof S.String>;
    newDescription: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const TypeDescriptionAdded: S.TaggedStruct<"TYPE_DESCRIPTION_ADDED", {
    name: typeof S.String;
    description: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const TypeDescriptionRemoved: S.TaggedStruct<"TYPE_DESCRIPTION_REMOVED", {
    name: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldAdded: S.TaggedStruct<"FIELD_ADDED", {
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
}>;
export declare const FieldRemoved: S.TaggedStruct<"FIELD_REMOVED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldTypeChanged: S.TaggedStruct<"FIELD_TYPE_CHANGED", {
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
}>;
export declare const FieldDeprecationAdded: S.TaggedStruct<"FIELD_DEPRECATION_ADDED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    reason: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldDeprecationRemoved: S.TaggedStruct<"FIELD_DEPRECATION_REMOVED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldDeprecationReasonChanged: S.TaggedStruct<"FIELD_DEPRECATION_REASON_CHANGED", {
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
}>;
export declare const FieldDeprecationReasonAdded: S.TaggedStruct<"FIELD_DEPRECATION_REASON_ADDED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    reason: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldDeprecationReasonRemoved: S.TaggedStruct<"FIELD_DEPRECATION_REASON_REMOVED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldDescriptionChanged: S.TaggedStruct<"FIELD_DESCRIPTION_CHANGED", {
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
}>;
export declare const FieldDescriptionAdded: S.TaggedStruct<"FIELD_DESCRIPTION_ADDED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    description: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldDescriptionRemoved: S.TaggedStruct<"FIELD_DESCRIPTION_REMOVED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldArgumentAdded: S.TaggedStruct<"FIELD_ARGUMENT_ADDED", {
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
}>;
export declare const FieldArgumentRemoved: S.TaggedStruct<"FIELD_ARGUMENT_REMOVED", {
    typeName: typeof S.String;
    fieldName: typeof S.String;
    argumentName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const FieldArgumentTypeChanged: S.TaggedStruct<"FIELD_ARGUMENT_TYPE_CHANGED", {
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
}>;
export declare const FieldArgumentDescriptionChanged: S.TaggedStruct<"FIELD_ARGUMENT_DESCRIPTION_CHANGED", {
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
}>;
export declare const FieldArgumentDefaultChanged: S.TaggedStruct<"FIELD_ARGUMENT_DEFAULT_CHANGED", {
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
}>;
export declare const EnumValueAdded: S.TaggedStruct<"ENUM_VALUE_ADDED", {
    enumName: typeof S.String;
    value: typeof S.String;
    isDeprecated: typeof S.Boolean;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const EnumValueRemoved: S.TaggedStruct<"ENUM_VALUE_REMOVED", {
    enumName: typeof S.String;
    value: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const EnumValueDescriptionChanged: S.TaggedStruct<"ENUM_VALUE_DESCRIPTION_CHANGED", {
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
}>;
export declare const EnumValueDeprecationAdded: S.TaggedStruct<"ENUM_VALUE_DEPRECATION_ADDED", {
    enumName: typeof S.String;
    value: typeof S.String;
    reason: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const EnumValueDeprecationRemoved: S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REMOVED", {
    enumName: typeof S.String;
    value: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const EnumValueDeprecationReasonChanged: S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_CHANGED", {
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
}>;
export declare const EnumValueDeprecationReasonAdded: S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_ADDED", {
    enumName: typeof S.String;
    value: typeof S.String;
    reason: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const EnumValueDeprecationReasonRemoved: S.TaggedStruct<"ENUM_VALUE_DEPRECATION_REASON_REMOVED", {
    enumName: typeof S.String;
    value: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const InputFieldAdded: S.TaggedStruct<"INPUT_FIELD_ADDED", {
    inputName: typeof S.String;
    fieldName: typeof S.String;
    isNullable: typeof S.Boolean;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const InputFieldRemoved: S.TaggedStruct<"INPUT_FIELD_REMOVED", {
    inputName: typeof S.String;
    fieldName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const InputFieldTypeChanged: S.TaggedStruct<"INPUT_FIELD_TYPE_CHANGED", {
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
}>;
export declare const InputFieldDescriptionAdded: S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_ADDED", {
    inputName: typeof S.String;
    fieldName: typeof S.String;
    description: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const InputFieldDescriptionRemoved: S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_REMOVED", {
    inputName: typeof S.String;
    fieldName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const InputFieldDescriptionChanged: S.TaggedStruct<"INPUT_FIELD_DESCRIPTION_CHANGED", {
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
}>;
export declare const InputFieldDefaultValueChanged: S.TaggedStruct<"INPUT_FIELD_DEFAULT_VALUE_CHANGED", {
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
}>;
export declare const UnionMemberAdded: S.TaggedStruct<"UNION_MEMBER_ADDED", {
    unionName: typeof S.String;
    memberName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const UnionMemberRemoved: S.TaggedStruct<"UNION_MEMBER_REMOVED", {
    unionName: typeof S.String;
    memberName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const ObjectTypeInterfaceAdded: S.TaggedStruct<"OBJECT_TYPE_INTERFACE_ADDED", {
    objectName: typeof S.String;
    interfaceName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const ObjectTypeInterfaceRemoved: S.TaggedStruct<"OBJECT_TYPE_INTERFACE_REMOVED", {
    objectName: typeof S.String;
    interfaceName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveAdded: S.TaggedStruct<"DIRECTIVE_ADDED", {
    name: typeof S.String;
    locations: S.Array$<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveRemoved: S.TaggedStruct<"DIRECTIVE_REMOVED", {
    name: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveDescriptionChanged: S.TaggedStruct<"DIRECTIVE_DESCRIPTION_CHANGED", {
    name: typeof S.String;
    oldDescription: S.optional<typeof S.String>;
    newDescription: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveLocationAdded: S.TaggedStruct<"DIRECTIVE_LOCATION_ADDED", {
    name: typeof S.String;
    location: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveLocationRemoved: S.TaggedStruct<"DIRECTIVE_LOCATION_REMOVED", {
    name: typeof S.String;
    location: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveArgumentAdded: S.TaggedStruct<"DIRECTIVE_ARGUMENT_ADDED", {
    directiveName: typeof S.String;
    argumentName: typeof S.String;
    type: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveArgumentRemoved: S.TaggedStruct<"DIRECTIVE_ARGUMENT_REMOVED", {
    directiveName: typeof S.String;
    argumentName: typeof S.String;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const DirectiveArgumentDescriptionChanged: S.TaggedStruct<"DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED", {
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
}>;
export declare const DirectiveArgumentDefaultValueChanged: S.TaggedStruct<"DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED", {
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
}>;
export declare const DirectiveArgumentTypeChanged: S.TaggedStruct<"DIRECTIVE_ARGUMENT_TYPE_CHANGED", {
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
}>;
export declare const SchemaQueryTypeChanged: S.TaggedStruct<"SCHEMA_QUERY_TYPE_CHANGED", {
    oldType: S.optional<typeof S.String>;
    newType: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const SchemaMutationTypeChanged: S.TaggedStruct<"SCHEMA_MUTATION_TYPE_CHANGED", {
    oldType: S.optional<typeof S.String>;
    newType: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const SchemaSubscriptionTypeChanged: S.TaggedStruct<"SCHEMA_SUBSCRIPTION_TYPE_CHANGED", {
    oldType: S.optional<typeof S.String>;
    newType: S.optional<typeof S.String>;
    message: typeof S.String;
    path: S.optional<typeof S.String>;
    criticality: S.Struct<{
        level: S.Literal<["BREAKING", "DANGEROUS", "NON_BREAKING"]>;
        reason: S.optional<typeof S.String>;
    }>;
}>;
export declare const Change: S.Union<[S.TaggedStruct<"TYPE_ADDED", {
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
}>]>;
export type Change = typeof Change.Type;
export declare const is: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_KIND_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldKind: string;
    readonly newKind: string;
} | {
    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_ADDED";
    readonly name: string;
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isDeprecated: boolean;
    readonly isSafe: boolean;
} | {
    readonly _tag: "FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isSafe: boolean;
    readonly oldType: string;
    readonly newType: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly type: string;
    readonly defaultValue?: unknown;
} | {
    readonly _tag: "FIELD_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
} | {
    readonly _tag: "ENUM_VALUE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly isDeprecated: boolean;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "INPUT_FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
    readonly isNullable: boolean;
} | {
    readonly _tag: "INPUT_FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly inputName: string;
} | {
    readonly _tag: "UNION_MEMBER_ADDED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "UNION_MEMBER_REMOVED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "DIRECTIVE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly locations: readonly string[];
} | {
    readonly _tag: "DIRECTIVE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly type: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
};
export declare const isTypeAdded: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
};
export declare const isTypeRemoved: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
};
export declare const isFieldAdded: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isDeprecated: boolean;
    readonly isSafe: boolean;
};
export declare const isFieldRemoved: (u: unknown, overrideOptions?: import("effect/SchemaAST").ParseOptions | number) => u is {
    readonly _tag: "FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
};
export declare const isBreaking: (change: Change) => boolean;
export declare const isDangerous: (change: Change) => boolean;
export declare const isSafe: (change: Change) => boolean;
export declare const decode: (i: {
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_KIND_CHANGED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly oldKind: string;
    readonly newKind: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_ADDED";
    readonly name: string;
    readonly description: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
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
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly isDeprecated: boolean;
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_REMOVED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
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
    readonly memberName: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly unionName: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "UNION_MEMBER_REMOVED";
    readonly memberName: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly unionName: string;
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
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly locations: readonly string[];
    readonly path?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly location: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
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
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_KIND_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldKind: string;
    readonly newKind: string;
} | {
    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_ADDED";
    readonly name: string;
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isDeprecated: boolean;
    readonly isSafe: boolean;
} | {
    readonly _tag: "FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isSafe: boolean;
    readonly oldType: string;
    readonly newType: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly type: string;
    readonly defaultValue?: unknown;
} | {
    readonly _tag: "FIELD_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
} | {
    readonly _tag: "ENUM_VALUE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly isDeprecated: boolean;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "INPUT_FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
    readonly isNullable: boolean;
} | {
    readonly _tag: "INPUT_FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly inputName: string;
} | {
    readonly _tag: "UNION_MEMBER_ADDED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "UNION_MEMBER_REMOVED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "DIRECTIVE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly locations: readonly string[];
} | {
    readonly _tag: "DIRECTIVE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly type: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
}, import("effect/ParseResult").ParseError, never>;
export declare const encode: (a: {
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_KIND_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldKind: string;
    readonly newKind: string;
} | {
    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_ADDED";
    readonly name: string;
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isDeprecated: boolean;
    readonly isSafe: boolean;
} | {
    readonly _tag: "FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isSafe: boolean;
    readonly oldType: string;
    readonly newType: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly type: string;
    readonly defaultValue?: unknown;
} | {
    readonly _tag: "FIELD_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
} | {
    readonly _tag: "ENUM_VALUE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly isDeprecated: boolean;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "INPUT_FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
    readonly isNullable: boolean;
} | {
    readonly _tag: "INPUT_FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly inputName: string;
} | {
    readonly _tag: "UNION_MEMBER_ADDED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "UNION_MEMBER_REMOVED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "DIRECTIVE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly locations: readonly string[];
} | {
    readonly _tag: "DIRECTIVE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly type: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
}, overrideOptions?: import("effect/SchemaAST").ParseOptions) => import("effect/Effect").Effect<{
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_KIND_CHANGED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly oldKind: string;
    readonly newKind: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_ADDED";
    readonly name: string;
    readonly description: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
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
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly isDeprecated: boolean;
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_REMOVED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly enumName: string;
    readonly value: string;
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
    readonly memberName: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly unionName: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "UNION_MEMBER_REMOVED";
    readonly memberName: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly unionName: string;
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
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly locations: readonly string[];
    readonly path?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly path?: string | undefined;
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
    readonly location: string;
    readonly path?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
    readonly name: string;
    readonly message: string;
    readonly criticality: {
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
        readonly reason?: string | undefined;
    };
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
}, import("effect/ParseResult").ParseError, never>;
/**
 * Pattern match on all change types with a default handler
 */
export declare const match: <$A>(change: Change) => {
    with: <Tag extends Change["_tag"]>(tag: Tag, handler: (change: Extract<Change, {
        _tag: Tag;
    }>) => $A) => $A | {
        with: any;
        otherwise: (defaultHandler: (change: Change) => $A) => $A;
    };
    otherwise: (defaultHandler: (change: Change) => $A) => $A;
};
/**
 * Group changes by category
 */
export declare const getCategory: (change: Change) => "type" | "field" | "enum" | "input" | "union" | "interface" | "directive" | "schema";
export declare const equivalence: import("effect/Equivalence").Equivalence<{
    readonly _tag: "TYPE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_KIND_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldKind: string;
    readonly newKind: string;
} | {
    readonly _tag: "TYPE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "TYPE_DESCRIPTION_ADDED";
    readonly name: string;
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "TYPE_DESCRIPTION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isDeprecated: boolean;
    readonly isSafe: boolean;
} | {
    readonly _tag: "FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly isSafe: boolean;
    readonly oldType: string;
    readonly newType: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly type: string;
    readonly defaultValue?: unknown;
} | {
    readonly _tag: "FIELD_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
} | {
    readonly _tag: "FIELD_ARGUMENT_DEFAULT_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly typeName: string;
    readonly fieldName: string;
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
} | {
    readonly _tag: "ENUM_VALUE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly isDeprecated: boolean;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_ADDED";
    readonly reason?: string | undefined;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldReason?: string | undefined;
    readonly newReason?: string | undefined;
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_ADDED";
    readonly reason: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "ENUM_VALUE_DEPRECATION_REASON_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly enumName: string;
    readonly value: string;
} | {
    readonly _tag: "INPUT_FIELD_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
    readonly isNullable: boolean;
} | {
    readonly _tag: "INPUT_FIELD_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldType: string;
    readonly newType: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_ADDED";
    readonly description: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly fieldName: string;
    readonly inputName: string;
} | {
    readonly _tag: "INPUT_FIELD_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly fieldName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly inputName: string;
} | {
    readonly _tag: "UNION_MEMBER_ADDED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "UNION_MEMBER_REMOVED";
    readonly memberName: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly unionName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "OBJECT_TYPE_INTERFACE_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly objectName: string;
    readonly interfaceName: string;
} | {
    readonly _tag: "DIRECTIVE_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly locations: readonly string[];
} | {
    readonly _tag: "DIRECTIVE_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
} | {
    readonly _tag: "DIRECTIVE_DESCRIPTION_CHANGED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_ADDED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_LOCATION_REMOVED";
    readonly name: string;
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly location: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_ADDED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly type: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_REMOVED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldDescription?: string | undefined;
    readonly newDescription?: string | undefined;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly argumentName: string;
    readonly oldDefault?: unknown;
    readonly newDefault?: unknown;
    readonly directiveName: string;
} | {
    readonly _tag: "DIRECTIVE_ARGUMENT_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType: string;
    readonly newType: string;
    readonly argumentName: string;
    readonly directiveName: string;
} | {
    readonly _tag: "SCHEMA_QUERY_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_MUTATION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
} | {
    readonly _tag: "SCHEMA_SUBSCRIPTION_TYPE_CHANGED";
    readonly path?: string | undefined;
    readonly message: string;
    readonly criticality: {
        readonly reason?: string | undefined;
        readonly level: "BREAKING" | "DANGEROUS" | "NON_BREAKING";
    };
    readonly oldType?: string | undefined;
    readonly newType?: string | undefined;
}>;
/**
 * Get the component group type for a change, used by the changelog UI
 */
export declare const getType: (change: Change) => "TypeOperation" | "TypeDescription" | "FieldOperation" | "FieldDescription" | "FieldDeprecation" | "FieldDeprecationReason" | "FieldArgument" | "FieldArgumentOperation" | "FieldArgumentDescription" | "EnumValueOperation" | "EnumValueDescription" | "EnumValueDeprecationReason" | "InputFieldOperation" | "InputFieldDescription" | "InputFieldDefaultValue" | "UnionMemberOperation" | "ObjectTypeInterfaceOperation" | "DirectiveOperation" | "DirectiveDescription" | "DirectiveLocationOperation" | "DirectiveArgument" | "DirectiveArgumentOperation" | "DirectiveArgumentDescription" | "SchemaRootType";
//# sourceMappingURL=change.d.ts.map