import { Effect } from 'effect'
import type { GraphQLSchema } from 'graphql'
import { GraphqlInspector } from '../dep/graphql-inspector/index.js'
import * as Change from './change.js'
import * as Criticality from './criticality.js'

// ============================================================================
// Field Path Parsing
// ============================================================================

/**
 * Parse a GraphQL Inspector path into structured fields
 * Examples:
 * - "TypeName" -> { typeName: "TypeName" }
 * - "TypeName.fieldName" -> { typeName: "TypeName", fieldName: "fieldName" }
 * - "TypeName.fieldName.argName" -> { typeName: "TypeName", fieldName: "fieldName", argumentName: "argName" }
 */
const parsePath = (path: string | undefined): { typeName?: string; fieldName?: string; argumentName?: string } => {
  if (!path) return {}

  const parts = path.split('.')
  const result: { typeName?: string; fieldName?: string; argumentName?: string } = {}

  if (parts[0]) result.typeName = parts[0]
  if (parts[1]) result.fieldName = parts[1]
  if (parts[2]) result.argumentName = parts[2]

  return result
}

// ============================================================================
// Criticality Mapping
// ============================================================================

/**
 * Map GraphQL Inspector criticality to lib format
 */
const mapCriticality = (criticality: GraphqlInspector.Core.Criticality): Criticality.Criticality => {
  return {
    level: criticality.level as 'BREAKING' | 'DANGEROUS' | 'NON_BREAKING',
    reason: criticality.reason,
  }
}

// ============================================================================
// Change Mapping
// ============================================================================

/**
 * Map a GraphQL Inspector change to lib Change type
 */
const mapChange = (change: GraphqlInspector.Core.Change): Change.Change | null => {
  const base = {
    message: change.message,
    path: change.path,
    criticality: mapCriticality(change.criticality),
  }

  switch (change.type) {
    // Type changes
    case 'TYPE_ADDED':
      return new Change.TypeAdded({
        ...base,
        name: change.path || '',
      })

    case 'TYPE_REMOVED':
      return new Change.TypeRemoved({
        ...base,
        name: change.path || '',
      })

    case 'TYPE_KIND_CHANGED': {
      return new Change.TypeKindChanged({
        ...base,
        name: change.path || '',
        oldKind: change.meta.oldKind,
        newKind: change.meta.newKind,
      })
    }

    case 'TYPE_DESCRIPTION_CHANGED': {
      return new Change.TypeDescriptionChanged({
        ...base,
        name: change.path || '',
        oldDescription: change.meta.oldTypeDescription ?? undefined,
        newDescription: change.meta.newTypeDescription ?? undefined,
      })
    }

    case 'TYPE_DESCRIPTION_ADDED': {
      return new Change.TypeDescriptionAdded({
        ...base,
        name: change.path || '',
        description: change.meta.addedTypeDescription ?? '',
      })
    }

    case 'TYPE_DESCRIPTION_REMOVED':
      return new Change.TypeDescriptionRemoved({
        ...base,
        name: change.path || '',
      })

    // Field changes
    case 'FIELD_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldAdded({
        ...base,
        typeName,
        fieldName,
        isDeprecated: change.meta.isFieldDeprecated ?? false,
        isSafe: true, // GraphQL Inspector doesn't provide isSafeToAdd, default to true
      })
    }

    case 'FIELD_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldRemoved({
        ...base,
        typeName,
        fieldName,
      })
    }

    case 'FIELD_TYPE_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldTypeChanged({
        ...base,
        typeName,
        fieldName,
        oldType: change.meta.oldFieldType,
        newType: change.meta.newFieldType,
        isSafe: change.meta.isSafeFieldTypeChange,
      })
    }

    case 'FIELD_DEPRECATION_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDeprecationAdded({
        ...base,
        typeName,
        fieldName,
        reason: change.meta.deprecationReason ?? undefined,
      })
    }

    case 'FIELD_DEPRECATION_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDeprecationRemoved({
        ...base,
        typeName,
        fieldName,
      })
    }

    case 'FIELD_DEPRECATION_REASON_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDeprecationReasonChanged({
        ...base,
        typeName,
        fieldName,
        oldReason: change.meta.oldDeprecationReason ?? undefined,
        newReason: change.meta.newDeprecationReason ?? undefined,
      })
    }

    case 'FIELD_DEPRECATION_REASON_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDeprecationReasonAdded({
        ...base,
        typeName,
        fieldName,
        reason: change.meta.addedDeprecationReason ?? '',
      })
    }

    case 'FIELD_DEPRECATION_REASON_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDeprecationReasonRemoved({
        ...base,
        typeName,
        fieldName,
      })
    }

    case 'FIELD_DESCRIPTION_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDescriptionChanged({
        ...base,
        typeName,
        fieldName,
        oldDescription: change.meta.oldFieldDescription ?? undefined,
        newDescription: change.meta.newFieldDescription ?? undefined,
      })
    }

    case 'FIELD_DESCRIPTION_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDescriptionAdded({
        ...base,
        typeName,
        fieldName,
        description: change.meta.addedFieldDescription ?? '',
      })
    }

    case 'FIELD_DESCRIPTION_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.FieldDescriptionRemoved({
        ...base,
        typeName,
        fieldName,
      })
    }

    // Field argument changes
    case 'FIELD_ARGUMENT_ADDED': {
      const { typeName = '', fieldName = '', argumentName = '' } = parsePath(change.path)
      return new Change.FieldArgumentAdded({
        ...base,
        typeName,
        fieldName,
        argumentName,
        type: change.meta.addedFieldArgumentType ?? '',
        defaultValue: change.meta.addedFieldArgumentDefaultValue,
      })
    }

    case 'FIELD_ARGUMENT_REMOVED': {
      const { typeName = '', fieldName = '', argumentName = '' } = parsePath(change.path)
      return new Change.FieldArgumentRemoved({
        ...base,
        typeName,
        fieldName,
        argumentName,
      })
    }

    case 'FIELD_ARGUMENT_TYPE_CHANGED': {
      const { typeName = '', fieldName = '', argumentName = '' } = parsePath(change.path)
      return new Change.FieldArgumentTypeChanged({
        ...base,
        typeName,
        fieldName,
        argumentName,
        oldType: change.meta.oldArgumentType,
        newType: change.meta.newArgumentType,
      })
    }

    case 'FIELD_ARGUMENT_DESCRIPTION_CHANGED': {
      const { typeName = '', fieldName = '', argumentName = '' } = parsePath(change.path)
      return new Change.FieldArgumentDescriptionChanged({
        ...base,
        typeName,
        fieldName,
        argumentName,
        oldDescription: change.meta.oldDescription ?? undefined,
        newDescription: change.meta.newDescription ?? undefined,
      })
    }

    case 'FIELD_ARGUMENT_DEFAULT_CHANGED': {
      const { typeName = '', fieldName = '', argumentName = '' } = parsePath(change.path)
      return new Change.FieldArgumentDefaultChanged({
        ...base,
        typeName,
        fieldName,
        argumentName,
        oldDefault: change.meta.oldDefaultValue,
        newDefault: change.meta.newDefaultValue,
      })
    }

    // Enum changes
    case 'ENUM_VALUE_ADDED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.EnumValueAdded({
        ...base,
        enumName: typeName,
        value: change.meta.addedEnumValueName ?? '',
        isDeprecated: false, // GraphQL Inspector doesn't provide this info
      })
    }

    case 'ENUM_VALUE_REMOVED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.EnumValueRemoved({
        ...base,
        enumName: typeName,
        value: change.meta.removedEnumValueName ?? '',
      })
    }

    case 'ENUM_VALUE_DESCRIPTION_CHANGED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.EnumValueDescriptionChanged({
        ...base,
        enumName: typeName,
        value: change.meta.enumValueName ?? '',
        oldDescription: change.meta.oldEnumValueDescription ?? undefined,
        newDescription: change.meta.newEnumValueDescription ?? undefined,
      })
    }

    case 'ENUM_VALUE_DEPRECATION_REASON_ADDED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.EnumValueDeprecationReasonAdded({
        ...base,
        enumName: typeName,
        value: change.meta.enumValueName ?? '',
        reason: change.meta.addedValueDeprecationReason ?? '',
      })
    }

    case 'ENUM_VALUE_DEPRECATION_REASON_CHANGED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.EnumValueDeprecationReasonChanged({
        ...base,
        enumName: typeName,
        value: change.meta.enumValueName ?? '',
        oldReason: change.meta.oldEnumValueDeprecationReason ?? undefined,
        newReason: change.meta.newEnumValueDeprecationReason ?? undefined,
      })
    }

    case 'ENUM_VALUE_DEPRECATION_REASON_REMOVED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.EnumValueDeprecationReasonRemoved({
        ...base,
        enumName: typeName,
        value: change.meta.enumValueName ?? '',
      })
    }

    // Input field changes
    case 'INPUT_FIELD_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldAdded({
        ...base,
        inputName: typeName,
        fieldName,
        isNullable: change.meta.isAddedInputFieldTypeNullable ?? true,
      })
    }

    case 'INPUT_FIELD_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldRemoved({
        ...base,
        inputName: typeName,
        fieldName,
      })
    }

    case 'INPUT_FIELD_TYPE_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldTypeChanged({
        ...base,
        inputName: typeName,
        fieldName,
        oldType: change.meta.oldInputFieldType ?? '',
        newType: change.meta.newInputFieldType ?? '',
      })
    }

    case 'INPUT_FIELD_DESCRIPTION_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldDescriptionAdded({
        ...base,
        inputName: typeName,
        fieldName,
        description: change.meta.addedInputFieldDescription ?? '',
      })
    }

    case 'INPUT_FIELD_DESCRIPTION_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldDescriptionRemoved({
        ...base,
        inputName: typeName,
        fieldName,
      })
    }

    case 'INPUT_FIELD_DESCRIPTION_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldDescriptionChanged({
        ...base,
        inputName: typeName,
        fieldName,
        oldDescription: change.meta.oldInputFieldDescription ?? undefined,
        newDescription: change.meta.newInputFieldDescription ?? undefined,
      })
    }

    case 'INPUT_FIELD_DEFAULT_VALUE_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.InputFieldDefaultValueChanged({
        ...base,
        inputName: typeName,
        fieldName,
        oldDefault: change.meta.oldInputFieldDefaultValue,
        newDefault: change.meta.newInputFieldDefaultValue,
      })
    }

    // Union changes
    case 'UNION_MEMBER_ADDED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.UnionMemberAdded({
        ...base,
        unionName: typeName,
        memberName: change.meta.addedUnionMemberTypeName ?? '',
      })
    }

    case 'UNION_MEMBER_REMOVED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.UnionMemberRemoved({
        ...base,
        unionName: typeName,
        memberName: change.meta.removedUnionMemberTypeName ?? '',
      })
    }

    // Interface changes
    case 'OBJECT_TYPE_INTERFACE_ADDED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.ObjectTypeInterfaceAdded({
        ...base,
        objectName: typeName,
        interfaceName: change.meta.addedInterfaceName ?? '',
      })
    }

    case 'OBJECT_TYPE_INTERFACE_REMOVED': {
      const { typeName = '' } = parsePath(change.path)
      return new Change.ObjectTypeInterfaceRemoved({
        ...base,
        objectName: typeName,
        interfaceName: change.meta.removedInterfaceName ?? '',
      })
    }

    // Directive changes
    case 'DIRECTIVE_ADDED': {
      return new Change.DirectiveAdded({
        ...base,
        name: change.meta.addedDirectiveName ?? '',
        locations: [], // GraphQL Inspector doesn't provide locations in meta
      })
    }

    case 'DIRECTIVE_REMOVED': {
      return new Change.DirectiveRemoved({
        ...base,
        name: change.meta.removedDirectiveName ?? '',
      })
    }

    case 'DIRECTIVE_DESCRIPTION_CHANGED': {
      return new Change.DirectiveDescriptionChanged({
        ...base,
        name: change.meta.directiveName ?? '',
        oldDescription: change.meta.oldDirectiveDescription ?? undefined,
        newDescription: change.meta.newDirectiveDescription ?? undefined,
      })
    }

    case 'DIRECTIVE_LOCATION_ADDED': {
      return new Change.DirectiveLocationAdded({
        ...base,
        name: change.meta.directiveName ?? '',
        location: change.meta.addedDirectiveLocation ?? '',
      })
    }

    case 'DIRECTIVE_LOCATION_REMOVED': {
      return new Change.DirectiveLocationRemoved({
        ...base,
        name: change.meta.directiveName ?? '',
        location: change.meta.removedDirectiveLocation ?? '',
      })
    }

    case 'DIRECTIVE_ARGUMENT_ADDED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.DirectiveArgumentAdded({
        ...base,
        directiveName: change.meta.directiveName ?? typeName,
        argumentName: change.meta.addedDirectiveArgumentName ?? fieldName,
        type: '', // GraphQL Inspector doesn't provide type in meta
      })
    }

    case 'DIRECTIVE_ARGUMENT_REMOVED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.DirectiveArgumentRemoved({
        ...base,
        directiveName: change.meta.directiveName ?? typeName,
        argumentName: change.meta.removedDirectiveArgumentName ?? fieldName,
      })
    }

    case 'DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.DirectiveArgumentDescriptionChanged({
        ...base,
        directiveName: change.meta.directiveName ?? typeName,
        argumentName: change.meta.directiveArgumentName ?? fieldName,
        oldDescription: change.meta.oldDirectiveArgumentDescription ?? undefined,
        newDescription: change.meta.newDirectiveArgumentDescription ?? undefined,
      })
    }

    case 'DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.DirectiveArgumentDefaultValueChanged({
        ...base,
        directiveName: change.meta.directiveName ?? typeName,
        argumentName: change.meta.directiveArgumentName ?? fieldName,
        oldDefault: change.meta.oldDirectiveArgumentDefaultValue,
        newDefault: change.meta.newDirectiveArgumentDefaultValue,
      })
    }

    case 'DIRECTIVE_ARGUMENT_TYPE_CHANGED': {
      const { typeName = '', fieldName = '' } = parsePath(change.path)
      return new Change.DirectiveArgumentTypeChanged({
        ...base,
        directiveName: change.meta.directiveName ?? typeName,
        argumentName: change.meta.directiveArgumentName ?? fieldName,
        oldType: change.meta.oldDirectiveArgumentType ?? '',
        newType: change.meta.newDirectiveArgumentType ?? '',
      })
    }

    // Schema changes
    case 'SCHEMA_QUERY_TYPE_CHANGED': {
      return new Change.SchemaQueryTypeChanged({
        ...base,
        oldType: change.meta.oldQueryTypeName ?? undefined,
        newType: change.meta.newQueryTypeName ?? undefined,
      })
    }

    case 'SCHEMA_MUTATION_TYPE_CHANGED': {
      return new Change.SchemaMutationTypeChanged({
        ...base,
        oldType: change.meta.oldMutationTypeName ?? undefined,
        newType: change.meta.newMutationTypeName ?? undefined,
      })
    }

    case 'SCHEMA_SUBSCRIPTION_TYPE_CHANGED': {
      return new Change.SchemaSubscriptionTypeChanged({
        ...base,
        oldType: change.meta.oldSubscriptionTypeName ?? undefined,
        newType: change.meta.newSubscriptionTypeName ?? undefined,
      })
    }

    // Directive usage changes - not yet implemented in lib
    default:
      // TODO: Add support for directive usage changes when needed
      return null
  }
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Calculate the changeset between two GraphQL schemas
 */
export const calcChangeset = (parameters: {
  after: GraphQLSchema
  before: GraphQLSchema
}): Effect.Effect<Change.Change[], Error> =>
  Effect.gen(function*() {
    const inspectorChanges = yield* Effect.tryPromise({
      try: () => GraphqlInspector.Core.diff(parameters.before, parameters.after),
      catch: (error) => new Error(`Failed to calculate changeset: ${error}`),
    })

    const mappedChanges: Change.Change[] = []
    for (const change of inspectorChanges) {
      const mapped = mapChange(change)
      if (mapped) {
        mappedChanges.push(mapped)
      }
    }

    return mappedChanges
  })
