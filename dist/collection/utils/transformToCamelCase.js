function transformToCamelCase({ value, isObject = false }) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (typeof value === 'string' && !isObject) {
    let camelCaseValue = regex.test(value)
      ? value
      : value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
    if (camelCaseValue === camelCaseValue.toUpperCase())
      camelCaseValue = camelCaseValue.toLowerCase();
    if (camelCaseValue[0] === camelCaseValue[0].toUpperCase())
      camelCaseValue = camelCaseValue.charAt(0).toLowerCase() + camelCaseValue.slice(1);
    return camelCaseValue;
  }
  if (value && isObject) {
    const camelCaseObj = {};
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      let camelCaseKey = regex.test(key)
        ? key
        : key.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_match, chr) => chr.toUpperCase());
      if (camelCaseKey === camelCaseKey.toUpperCase())
        camelCaseKey = camelCaseKey.toLowerCase();
      if (camelCaseKey[0] === camelCaseKey[0].toUpperCase()) {
        camelCaseKey = camelCaseKey.charAt(0).toLowerCase() + camelCaseKey.slice(1);
      }
      camelCaseObj[camelCaseKey] = value[key];
    }
    return camelCaseObj;
  }
  return value;
}
export default transformToCamelCase;
