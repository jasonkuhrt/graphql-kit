import { createFromObjectType } from './RootDetails.js';
import { StandardRootTypeNameEnum } from './StandardRootTypeName.js';
export const getRootTypeMap = (schema) => {
    const objectTypeQuery = schema.getQueryType() ?? null;
    const objectTypeMutation = schema.getMutationType() ?? null;
    const objectTypeSubscription = schema.getSubscriptionType() ?? null;
    const types = {
        Query: objectTypeQuery,
        Mutation: objectTypeMutation,
        Subscription: objectTypeSubscription,
    };
    const fromStandard = {
        Query: objectTypeQuery?.name ?? null,
        Mutation: objectTypeMutation?.name ?? null,
        Subscription: objectTypeSubscription?.name ?? null,
    };
    const fromActual = {};
    const list = [];
    const map = {
        list,
        types,
        names: {
            fromStandard,
            fromActual,
        },
    };
    if (objectTypeQuery?.name) {
        fromActual[objectTypeQuery.name] = StandardRootTypeNameEnum.Query;
        list.push(createFromObjectType(objectTypeQuery, StandardRootTypeNameEnum.Query));
    }
    if (objectTypeMutation?.name) {
        fromActual[objectTypeMutation.name] = StandardRootTypeNameEnum.Mutation;
        list.push(createFromObjectType(objectTypeMutation, StandardRootTypeNameEnum.Mutation));
    }
    if (objectTypeSubscription?.name) {
        fromActual[objectTypeSubscription.name] = StandardRootTypeNameEnum.Subscription;
        list.push(createFromObjectType(objectTypeSubscription, StandardRootTypeNameEnum.Subscription));
    }
    return map;
};
//# sourceMappingURL=RootTypeMap.js.map