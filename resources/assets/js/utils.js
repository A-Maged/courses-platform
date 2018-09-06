export function getNestedProp(obj, keysArr) {
    if (keysArr.length === 0) return obj;

    if (!Array.isArray(keysArr)) keysArr = keysArr.split('.');

    let newObj = obj[keysArr.shift()];

    return getNestedProp(newObj, keysArr);
}
