import { RootTypeToOperationType } from '../document.js';
import {} from './StandardRootTypeName.js';
export const createFromObjectType = (objectType, standardName) => {
    return {
        name: {
            canonical: objectType.name,
            standard: standardName,
            alias: null,
        },
        type: objectType,
        operationType: RootTypeToOperationType[standardName],
    };
};
export const createFromObjectTypeAndMapOrThrow = (objectType, rootTypeMap) => {
    const standardName = rootTypeMap.names.fromActual[objectType.name];
    if (!standardName) {
        throw new Error(`Given object type does not map to any of the root type names: ${objectType.name}`);
    }
    return createFromObjectType(objectType, standardName);
};
//# sourceMappingURL=RootDetails.js.map