export const mapValues = (obj, fn) => {
    return Object.fromEntries(Object.entries(obj).map((k, v) => [k, fn(v, k)]));
};
//# sourceMappingURL=ob.js.map