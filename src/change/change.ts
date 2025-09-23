import { S } from '#dep/effect'
import { Criticality } from './criticality.js'

// ============================================================================
// Base Change Schema
// ============================================================================

const changeBaseFields = {
  message: S.String,
  path: S.optional(S.String),
  criticality: Criticality,
}

// ============================================================================
// Type Changes
// ============================================================================

export class TypeAdded extends S.TaggedClass<TypeAdded>('TypeAdded')('TYPE_ADDED', {
  ...changeBaseFields,
  name: S.String,
}) {}

export class TypeRemoved extends S.TaggedClass<TypeRemoved>('TypeRemoved')('TYPE_REMOVED', {
  ...changeBaseFields,
  name: S.String,
}) {}

export class TypeKindChanged extends S.TaggedClass<TypeKindChanged>('TypeKindChanged')('TYPE_KIND_CHANGED', {
  ...changeBaseFields,
  name: S.String,
  oldKind: S.String,
  newKind: S.String,
}) {}

export class TypeDescriptionChanged
  extends S.TaggedClass<TypeDescriptionChanged>('TypeDescriptionChanged')('TYPE_DESCRIPTION_CHANGED', {
    ...changeBaseFields,
    name: S.String,
    oldDescription: S.optional(S.String),
    newDescription: S.optional(S.String),
  })
{}

export class TypeDescriptionAdded
  extends S.TaggedClass<TypeDescriptionAdded>('TypeDescriptionAdded')('TYPE_DESCRIPTION_ADDED', {
    ...changeBaseFields,
    name: S.String,
    description: S.String,
  })
{}

export class TypeDescriptionRemoved
  extends S.TaggedClass<TypeDescriptionRemoved>('TypeDescriptionRemoved')('TYPE_DESCRIPTION_REMOVED', {
    ...changeBaseFields,
    name: S.String,
  })
{}

// ============================================================================
// Field Changes
// ============================================================================

export class FieldAdded extends S.TaggedClass<FieldAdded>('FieldAdded')('FIELD_ADDED', {
  ...changeBaseFields,
  typeName: S.String,
  fieldName: S.String,
  isDeprecated: S.Boolean,
  isSafe: S.Boolean,
}) {}

export class FieldRemoved extends S.TaggedClass<FieldRemoved>('FieldRemoved')('FIELD_REMOVED', {
  ...changeBaseFields,
  typeName: S.String,
  fieldName: S.String,
}) {}

export class FieldTypeChanged extends S.TaggedClass<FieldTypeChanged>('FieldTypeChanged')('FIELD_TYPE_CHANGED', {
  ...changeBaseFields,
  typeName: S.String,
  fieldName: S.String,
  oldType: S.String,
  newType: S.String,
  isSafe: S.Boolean,
}) {}

export class FieldDeprecationAdded
  extends S.TaggedClass<FieldDeprecationAdded>('FieldDeprecationAdded')('FIELD_DEPRECATION_ADDED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    reason: S.optional(S.String),
  })
{}

export class FieldDeprecationRemoved
  extends S.TaggedClass<FieldDeprecationRemoved>('FieldDeprecationRemoved')('FIELD_DEPRECATION_REMOVED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
  })
{}

export class FieldDeprecationReasonChanged
  extends S.TaggedClass<FieldDeprecationReasonChanged>('FieldDeprecationReasonChanged')(
    'FIELD_DEPRECATION_REASON_CHANGED',
    {
      ...changeBaseFields,
      typeName: S.String,
      fieldName: S.String,
      oldReason: S.optional(S.String),
      newReason: S.optional(S.String),
    },
  )
{}

export class FieldDeprecationReasonAdded
  extends S.TaggedClass<FieldDeprecationReasonAdded>('FieldDeprecationReasonAdded')('FIELD_DEPRECATION_REASON_ADDED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    reason: S.String,
  })
{}

export class FieldDeprecationReasonRemoved
  extends S.TaggedClass<FieldDeprecationReasonRemoved>('FieldDeprecationReasonRemoved')(
    'FIELD_DEPRECATION_REASON_REMOVED',
    {
      ...changeBaseFields,
      typeName: S.String,
      fieldName: S.String,
    },
  )
{}

export class FieldDescriptionChanged
  extends S.TaggedClass<FieldDescriptionChanged>('FieldDescriptionChanged')('FIELD_DESCRIPTION_CHANGED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    oldDescription: S.optional(S.String),
    newDescription: S.optional(S.String),
  })
{}

export class FieldDescriptionAdded
  extends S.TaggedClass<FieldDescriptionAdded>('FieldDescriptionAdded')('FIELD_DESCRIPTION_ADDED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    description: S.String,
  })
{}

export class FieldDescriptionRemoved
  extends S.TaggedClass<FieldDescriptionRemoved>('FieldDescriptionRemoved')('FIELD_DESCRIPTION_REMOVED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
  })
{}

// ============================================================================
// Field Argument Changes
// ============================================================================

export class FieldArgumentAdded
  extends S.TaggedClass<FieldArgumentAdded>('FieldArgumentAdded')('FIELD_ARGUMENT_ADDED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    argumentName: S.String,
    type: S.String,
    defaultValue: S.optional(S.Unknown),
  })
{}

export class FieldArgumentRemoved
  extends S.TaggedClass<FieldArgumentRemoved>('FieldArgumentRemoved')('FIELD_ARGUMENT_REMOVED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    argumentName: S.String,
  })
{}

export class FieldArgumentTypeChanged
  extends S.TaggedClass<FieldArgumentTypeChanged>('FieldArgumentTypeChanged')('FIELD_ARGUMENT_TYPE_CHANGED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    argumentName: S.String,
    oldType: S.String,
    newType: S.String,
  })
{}

export class FieldArgumentDescriptionChanged
  extends S.TaggedClass<FieldArgumentDescriptionChanged>('FieldArgumentDescriptionChanged')(
    'FIELD_ARGUMENT_DESCRIPTION_CHANGED',
    {
      ...changeBaseFields,
      typeName: S.String,
      fieldName: S.String,
      argumentName: S.String,
      oldDescription: S.optional(S.String),
      newDescription: S.optional(S.String),
    },
  )
{}

export class FieldArgumentDefaultChanged
  extends S.TaggedClass<FieldArgumentDefaultChanged>('FieldArgumentDefaultChanged')('FIELD_ARGUMENT_DEFAULT_CHANGED', {
    ...changeBaseFields,
    typeName: S.String,
    fieldName: S.String,
    argumentName: S.String,
    oldDefault: S.optional(S.Unknown),
    newDefault: S.optional(S.Unknown),
  })
{}

// ============================================================================
// Enum Changes
// ============================================================================

export class EnumValueAdded extends S.TaggedClass<EnumValueAdded>('EnumValueAdded')('ENUM_VALUE_ADDED', {
  ...changeBaseFields,
  enumName: S.String,
  value: S.String,
  isDeprecated: S.Boolean,
}) {}

export class EnumValueRemoved extends S.TaggedClass<EnumValueRemoved>('EnumValueRemoved')('ENUM_VALUE_REMOVED', {
  ...changeBaseFields,
  enumName: S.String,
  value: S.String,
}) {}

export class EnumValueDescriptionChanged
  extends S.TaggedClass<EnumValueDescriptionChanged>('EnumValueDescriptionChanged')('ENUM_VALUE_DESCRIPTION_CHANGED', {
    ...changeBaseFields,
    enumName: S.String,
    value: S.String,
    oldDescription: S.optional(S.String),
    newDescription: S.optional(S.String),
  })
{}

export class EnumValueDeprecationAdded
  extends S.TaggedClass<EnumValueDeprecationAdded>('EnumValueDeprecationAdded')('ENUM_VALUE_DEPRECATION_ADDED', {
    ...changeBaseFields,
    enumName: S.String,
    value: S.String,
    reason: S.optional(S.String),
  })
{}

export class EnumValueDeprecationRemoved
  extends S.TaggedClass<EnumValueDeprecationRemoved>('EnumValueDeprecationRemoved')('ENUM_VALUE_DEPRECATION_REMOVED', {
    ...changeBaseFields,
    enumName: S.String,
    value: S.String,
  })
{}

export class EnumValueDeprecationReasonChanged
  extends S.TaggedClass<EnumValueDeprecationReasonChanged>('EnumValueDeprecationReasonChanged')(
    'ENUM_VALUE_DEPRECATION_REASON_CHANGED',
    {
      ...changeBaseFields,
      enumName: S.String,
      value: S.String,
      oldReason: S.optional(S.String),
      newReason: S.optional(S.String),
    },
  )
{}

export class EnumValueDeprecationReasonAdded
  extends S.TaggedClass<EnumValueDeprecationReasonAdded>('EnumValueDeprecationReasonAdded')(
    'ENUM_VALUE_DEPRECATION_REASON_ADDED',
    {
      ...changeBaseFields,
      enumName: S.String,
      value: S.String,
      reason: S.String,
    },
  )
{}

export class EnumValueDeprecationReasonRemoved
  extends S.TaggedClass<EnumValueDeprecationReasonRemoved>('EnumValueDeprecationReasonRemoved')(
    'ENUM_VALUE_DEPRECATION_REASON_REMOVED',
    {
      ...changeBaseFields,
      enumName: S.String,
      value: S.String,
    },
  )
{}

// ============================================================================
// Input Field Changes
// ============================================================================

export class InputFieldAdded extends S.TaggedClass<InputFieldAdded>('InputFieldAdded')('INPUT_FIELD_ADDED', {
  ...changeBaseFields,
  inputName: S.String,
  fieldName: S.String,
  isNullable: S.Boolean,
}) {}

export class InputFieldRemoved extends S.TaggedClass<InputFieldRemoved>('InputFieldRemoved')('INPUT_FIELD_REMOVED', {
  ...changeBaseFields,
  inputName: S.String,
  fieldName: S.String,
}) {}

export class InputFieldTypeChanged
  extends S.TaggedClass<InputFieldTypeChanged>('InputFieldTypeChanged')('INPUT_FIELD_TYPE_CHANGED', {
    ...changeBaseFields,
    inputName: S.String,
    fieldName: S.String,
    oldType: S.String,
    newType: S.String,
  })
{}

export class InputFieldDescriptionAdded
  extends S.TaggedClass<InputFieldDescriptionAdded>('InputFieldDescriptionAdded')('INPUT_FIELD_DESCRIPTION_ADDED', {
    ...changeBaseFields,
    inputName: S.String,
    fieldName: S.String,
    description: S.String,
  })
{}

export class InputFieldDescriptionRemoved
  extends S.TaggedClass<InputFieldDescriptionRemoved>('InputFieldDescriptionRemoved')(
    'INPUT_FIELD_DESCRIPTION_REMOVED',
    {
      ...changeBaseFields,
      inputName: S.String,
      fieldName: S.String,
    },
  )
{}

export class InputFieldDescriptionChanged
  extends S.TaggedClass<InputFieldDescriptionChanged>('InputFieldDescriptionChanged')(
    'INPUT_FIELD_DESCRIPTION_CHANGED',
    {
      ...changeBaseFields,
      inputName: S.String,
      fieldName: S.String,
      oldDescription: S.optional(S.String),
      newDescription: S.optional(S.String),
    },
  )
{}

export class InputFieldDefaultValueChanged
  extends S.TaggedClass<InputFieldDefaultValueChanged>('InputFieldDefaultValueChanged')(
    'INPUT_FIELD_DEFAULT_VALUE_CHANGED',
    {
      ...changeBaseFields,
      inputName: S.String,
      fieldName: S.String,
      oldDefault: S.optional(S.Unknown),
      newDefault: S.optional(S.Unknown),
    },
  )
{}

// ============================================================================
// Union Changes
// ============================================================================

export class UnionMemberAdded extends S.TaggedClass<UnionMemberAdded>('UnionMemberAdded')('UNION_MEMBER_ADDED', {
  ...changeBaseFields,
  unionName: S.String,
  memberName: S.String,
}) {}

export class UnionMemberRemoved
  extends S.TaggedClass<UnionMemberRemoved>('UnionMemberRemoved')('UNION_MEMBER_REMOVED', {
    ...changeBaseFields,
    unionName: S.String,
    memberName: S.String,
  })
{}

// ============================================================================
// Interface Changes
// ============================================================================

export class ObjectTypeInterfaceAdded
  extends S.TaggedClass<ObjectTypeInterfaceAdded>('ObjectTypeInterfaceAdded')('OBJECT_TYPE_INTERFACE_ADDED', {
    ...changeBaseFields,
    objectName: S.String,
    interfaceName: S.String,
  })
{}

export class ObjectTypeInterfaceRemoved
  extends S.TaggedClass<ObjectTypeInterfaceRemoved>('ObjectTypeInterfaceRemoved')('OBJECT_TYPE_INTERFACE_REMOVED', {
    ...changeBaseFields,
    objectName: S.String,
    interfaceName: S.String,
  })
{}

// ============================================================================
// Directive Changes
// ============================================================================

export class DirectiveAdded extends S.TaggedClass<DirectiveAdded>('DirectiveAdded')('DIRECTIVE_ADDED', {
  ...changeBaseFields,
  name: S.String,
  locations: S.Array(S.String),
}) {}

export class DirectiveRemoved extends S.TaggedClass<DirectiveRemoved>('DirectiveRemoved')('DIRECTIVE_REMOVED', {
  ...changeBaseFields,
  name: S.String,
}) {}

export class DirectiveDescriptionChanged
  extends S.TaggedClass<DirectiveDescriptionChanged>('DirectiveDescriptionChanged')('DIRECTIVE_DESCRIPTION_CHANGED', {
    ...changeBaseFields,
    name: S.String,
    oldDescription: S.optional(S.String),
    newDescription: S.optional(S.String),
  })
{}

export class DirectiveLocationAdded
  extends S.TaggedClass<DirectiveLocationAdded>('DirectiveLocationAdded')('DIRECTIVE_LOCATION_ADDED', {
    ...changeBaseFields,
    name: S.String,
    location: S.String,
  })
{}

export class DirectiveLocationRemoved
  extends S.TaggedClass<DirectiveLocationRemoved>('DirectiveLocationRemoved')('DIRECTIVE_LOCATION_REMOVED', {
    ...changeBaseFields,
    name: S.String,
    location: S.String,
  })
{}

export class DirectiveArgumentAdded
  extends S.TaggedClass<DirectiveArgumentAdded>('DirectiveArgumentAdded')('DIRECTIVE_ARGUMENT_ADDED', {
    ...changeBaseFields,
    directiveName: S.String,
    argumentName: S.String,
    type: S.String,
  })
{}

export class DirectiveArgumentRemoved
  extends S.TaggedClass<DirectiveArgumentRemoved>('DirectiveArgumentRemoved')('DIRECTIVE_ARGUMENT_REMOVED', {
    ...changeBaseFields,
    directiveName: S.String,
    argumentName: S.String,
  })
{}

export class DirectiveArgumentDescriptionChanged
  extends S.TaggedClass<DirectiveArgumentDescriptionChanged>('DirectiveArgumentDescriptionChanged')(
    'DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED',
    {
      ...changeBaseFields,
      directiveName: S.String,
      argumentName: S.String,
      oldDescription: S.optional(S.String),
      newDescription: S.optional(S.String),
    },
  )
{}

export class DirectiveArgumentDefaultValueChanged
  extends S.TaggedClass<DirectiveArgumentDefaultValueChanged>('DirectiveArgumentDefaultValueChanged')(
    'DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED',
    {
      ...changeBaseFields,
      directiveName: S.String,
      argumentName: S.String,
      oldDefault: S.optional(S.Unknown),
      newDefault: S.optional(S.Unknown),
    },
  )
{}

export class DirectiveArgumentTypeChanged
  extends S.TaggedClass<DirectiveArgumentTypeChanged>('DirectiveArgumentTypeChanged')(
    'DIRECTIVE_ARGUMENT_TYPE_CHANGED',
    {
      ...changeBaseFields,
      directiveName: S.String,
      argumentName: S.String,
      oldType: S.String,
      newType: S.String,
    },
  )
{}

// ============================================================================
// Schema Changes
// ============================================================================

export class SchemaQueryTypeChanged
  extends S.TaggedClass<SchemaQueryTypeChanged>('SchemaQueryTypeChanged')('SCHEMA_QUERY_TYPE_CHANGED', {
    ...changeBaseFields,
    oldType: S.optional(S.String),
    newType: S.optional(S.String),
  })
{}

export class SchemaMutationTypeChanged
  extends S.TaggedClass<SchemaMutationTypeChanged>('SchemaMutationTypeChanged')('SCHEMA_MUTATION_TYPE_CHANGED', {
    ...changeBaseFields,
    oldType: S.optional(S.String),
    newType: S.optional(S.String),
  })
{}

export class SchemaSubscriptionTypeChanged
  extends S.TaggedClass<SchemaSubscriptionTypeChanged>('SchemaSubscriptionTypeChanged')(
    'SCHEMA_SUBSCRIPTION_TYPE_CHANGED',
    {
      ...changeBaseFields,
      oldType: S.optional(S.String),
      newType: S.optional(S.String),
    },
  )
{}

// ============================================================================
// Schema
// ============================================================================

export const Change = S.Union(
  // Type changes
  TypeAdded,
  TypeRemoved,
  TypeKindChanged,
  TypeDescriptionChanged,
  TypeDescriptionAdded,
  TypeDescriptionRemoved,
  // Field changes
  FieldAdded,
  FieldRemoved,
  FieldTypeChanged,
  FieldDeprecationAdded,
  FieldDeprecationRemoved,
  FieldDeprecationReasonChanged,
  FieldDeprecationReasonAdded,
  FieldDeprecationReasonRemoved,
  FieldDescriptionChanged,
  FieldDescriptionAdded,
  FieldDescriptionRemoved,
  // Field argument changes
  FieldArgumentAdded,
  FieldArgumentRemoved,
  FieldArgumentTypeChanged,
  FieldArgumentDescriptionChanged,
  FieldArgumentDefaultChanged,
  // Enum changes
  EnumValueAdded,
  EnumValueRemoved,
  EnumValueDescriptionChanged,
  EnumValueDeprecationAdded,
  EnumValueDeprecationRemoved,
  EnumValueDeprecationReasonChanged,
  EnumValueDeprecationReasonAdded,
  EnumValueDeprecationReasonRemoved,
  // Input field changes
  InputFieldAdded,
  InputFieldRemoved,
  InputFieldTypeChanged,
  InputFieldDescriptionAdded,
  InputFieldDescriptionRemoved,
  InputFieldDescriptionChanged,
  InputFieldDefaultValueChanged,
  // Union changes
  UnionMemberAdded,
  UnionMemberRemoved,
  // Interface changes
  ObjectTypeInterfaceAdded,
  ObjectTypeInterfaceRemoved,
  // Directive changes
  DirectiveAdded,
  DirectiveRemoved,
  DirectiveDescriptionChanged,
  DirectiveLocationAdded,
  DirectiveLocationRemoved,
  DirectiveArgumentAdded,
  DirectiveArgumentRemoved,
  DirectiveArgumentDescriptionChanged,
  DirectiveArgumentDefaultValueChanged,
  DirectiveArgumentTypeChanged,
  // Schema changes
  SchemaQueryTypeChanged,
  SchemaMutationTypeChanged,
  SchemaSubscriptionTypeChanged,
).annotations({
  identifier: 'Change',
  title: 'Schema Change',
  description: 'A change detected between two schemas',
})

// ============================================================================
// Type
// ============================================================================

export type Change = typeof Change.Type

// ============================================================================
// Constructors
// ============================================================================

// Note: These schemas don't export make functions individually.
// Use `new ClassName({...})` to create instances.

// ============================================================================
// Type Guard
// ============================================================================

export const is = S.is(Change)

// Type-specific guards
export const isTypeAdded = S.is(TypeAdded)
export const isTypeRemoved = S.is(TypeRemoved)
export const isFieldAdded = S.is(FieldAdded)
export const isFieldRemoved = S.is(FieldRemoved)

// Criticality guards
export const isBreaking = (change: Change): boolean => change.criticality.isBreaking

export const isDangerous = (change: Change): boolean => change.criticality.isDangerous

export const isSafe = (change: Change): boolean => change.criticality.isSafe

// ============================================================================
// Codec
// ============================================================================

export const decode = S.decode(Change)
export const encode = S.encode(Change)

// ============================================================================
// Pattern Matching
// ============================================================================

/**
 * Pattern match on all change types with a default handler
 */
export const match = <$A>(change: Change) => ({
  with: <Tag extends Change['_tag']>(
    tag: Tag,
    handler: (change: Extract<Change, { _tag: Tag }>) => $A,
  ): $A | { with: any; otherwise: (defaultHandler: (change: Change) => $A) => $A } => {
    if (change._tag === tag) {
      return handler(change as Extract<Change, { _tag: Tag }>)
    }
    return {
      with: (nextTag: any, nextHandler: any) => match(change).with(nextTag, nextHandler),
      otherwise: (defaultHandler: (change: Change) => $A) => defaultHandler(change),
    }
  },
  otherwise: (defaultHandler: (change: Change) => $A): $A => defaultHandler(change),
})

/**
 * Group changes by category
 */
export const getCategory = (
  change: Change,
): 'type' | 'field' | 'enum' | 'input' | 'union' | 'interface' | 'directive' | 'schema' => {
  const tag = change._tag
  if (tag.startsWith('TYPE_')) return 'type'
  if (tag.startsWith('FIELD_')) return 'field'
  if (tag.startsWith('ENUM_')) return 'enum'
  if (tag.startsWith('INPUT_')) return 'input'
  if (tag.startsWith('UNION_')) return 'union'
  if (tag.startsWith('OBJECT_TYPE_INTERFACE_')) return 'interface'
  if (tag.startsWith('DIRECTIVE_')) return 'directive'
  if (tag.startsWith('SCHEMA_')) return 'schema'
  return 'type' // fallback
}

// ============================================================================
// Equivalence
// ============================================================================

export const equivalence = S.equivalence(Change)

// ============================================================================
// Group Classification
// ============================================================================

/**
 * Get the component group type for a change, used by the changelog UI
 */
export const getType = (
  change: Change,
):
  | 'TypeOperation'
  | 'TypeDescription'
  | 'FieldOperation'
  | 'FieldDescription'
  | 'FieldDeprecation'
  | 'FieldDeprecationReason'
  | 'FieldArgument'
  | 'FieldArgumentOperation'
  | 'FieldArgumentDescription'
  | 'EnumValueOperation'
  | 'EnumValueDescription'
  | 'EnumValueDeprecationReason'
  | 'InputFieldOperation'
  | 'InputFieldDescription'
  | 'InputFieldDefaultValue'
  | 'UnionMemberOperation'
  | 'ObjectTypeInterfaceOperation'
  | 'DirectiveOperation'
  | 'DirectiveDescription'
  | 'DirectiveLocationOperation'
  | 'DirectiveArgument'
  | 'DirectiveArgumentOperation'
  | 'DirectiveArgumentDescription'
  | 'SchemaRootType' =>
{
  const tag = change._tag

  // Type changes
  if (tag === 'TYPE_ADDED' || tag === 'TYPE_REMOVED' || tag === 'TYPE_KIND_CHANGED') {
    return 'TypeOperation'
  }
  if (tag === 'TYPE_DESCRIPTION_CHANGED' || tag === 'TYPE_DESCRIPTION_ADDED' || tag === 'TYPE_DESCRIPTION_REMOVED') {
    return 'TypeDescription'
  }

  // Field changes
  if (tag === 'FIELD_ADDED' || tag === 'FIELD_REMOVED' || tag === 'FIELD_TYPE_CHANGED') {
    return 'FieldOperation'
  }
  if (tag === 'FIELD_DESCRIPTION_CHANGED' || tag === 'FIELD_DESCRIPTION_ADDED' || tag === 'FIELD_DESCRIPTION_REMOVED') {
    return 'FieldDescription'
  }
  if (tag === 'FIELD_DEPRECATION_ADDED' || tag === 'FIELD_DEPRECATION_REMOVED') {
    return 'FieldDeprecation'
  }
  if (
    tag === 'FIELD_DEPRECATION_REASON_CHANGED' || tag === 'FIELD_DEPRECATION_REASON_ADDED'
    || tag === 'FIELD_DEPRECATION_REASON_REMOVED'
  ) {
    return 'FieldDeprecationReason'
  }

  // Field argument changes
  if (tag === 'FIELD_ARGUMENT_ADDED' || tag === 'FIELD_ARGUMENT_REMOVED') {
    return 'FieldArgument'
  }
  if (tag === 'FIELD_ARGUMENT_TYPE_CHANGED' || tag === 'FIELD_ARGUMENT_DEFAULT_CHANGED') {
    return 'FieldArgumentOperation'
  }
  if (tag === 'FIELD_ARGUMENT_DESCRIPTION_CHANGED') {
    return 'FieldArgumentDescription'
  }

  // Enum changes
  if (tag === 'ENUM_VALUE_ADDED' || tag === 'ENUM_VALUE_REMOVED') {
    return 'EnumValueOperation'
  }
  if (tag === 'ENUM_VALUE_DESCRIPTION_CHANGED') {
    return 'EnumValueDescription'
  }
  if (
    tag === 'ENUM_VALUE_DEPRECATION_REASON_CHANGED' || tag === 'ENUM_VALUE_DEPRECATION_REASON_ADDED'
    || tag === 'ENUM_VALUE_DEPRECATION_REASON_REMOVED'
  ) {
    return 'EnumValueDeprecationReason'
  }

  // Input field changes
  if (tag === 'INPUT_FIELD_ADDED' || tag === 'INPUT_FIELD_REMOVED' || tag === 'INPUT_FIELD_TYPE_CHANGED') {
    return 'InputFieldOperation'
  }
  if (
    tag === 'INPUT_FIELD_DESCRIPTION_ADDED' || tag === 'INPUT_FIELD_DESCRIPTION_REMOVED'
    || tag === 'INPUT_FIELD_DESCRIPTION_CHANGED'
  ) {
    return 'InputFieldDescription'
  }
  if (tag === 'INPUT_FIELD_DEFAULT_VALUE_CHANGED') {
    return 'InputFieldDefaultValue'
  }

  // Union changes
  if (tag === 'UNION_MEMBER_ADDED' || tag === 'UNION_MEMBER_REMOVED') {
    return 'UnionMemberOperation'
  }

  // Interface changes
  if (tag === 'OBJECT_TYPE_INTERFACE_ADDED' || tag === 'OBJECT_TYPE_INTERFACE_REMOVED') {
    return 'ObjectTypeInterfaceOperation'
  }

  // Directive changes
  if (tag === 'DIRECTIVE_ADDED' || tag === 'DIRECTIVE_REMOVED') {
    return 'DirectiveOperation'
  }
  if (tag === 'DIRECTIVE_DESCRIPTION_CHANGED') {
    return 'DirectiveDescription'
  }
  if (tag === 'DIRECTIVE_LOCATION_ADDED' || tag === 'DIRECTIVE_LOCATION_REMOVED') {
    return 'DirectiveLocationOperation'
  }
  if (tag === 'DIRECTIVE_ARGUMENT_ADDED' || tag === 'DIRECTIVE_ARGUMENT_REMOVED') {
    return 'DirectiveArgument'
  }
  if (tag === 'DIRECTIVE_ARGUMENT_TYPE_CHANGED' || tag === 'DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED') {
    return 'DirectiveArgumentOperation'
  }
  if (tag === 'DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED') {
    return 'DirectiveArgumentDescription'
  }

  // Schema changes
  if (
    tag === 'SCHEMA_QUERY_TYPE_CHANGED' || tag === 'SCHEMA_MUTATION_TYPE_CHANGED'
    || tag === 'SCHEMA_SUBSCRIPTION_TYPE_CHANGED'
  ) {
    return 'SchemaRootType'
  }

  // This should never happen with our current change types
  // Throwing an error to catch any unmapped change types during development
  throw new Error(`Unknown change type: ${tag}`)
}
