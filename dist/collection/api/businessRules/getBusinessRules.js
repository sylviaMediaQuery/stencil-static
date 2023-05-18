import axios from 'axios';
import transformToCamelCase from '../../utils/transformToCamelCase';
const getBusinessRules = async ({ vendorName, payerName, type, subcategory, apiHost }) => {
  var _a;
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/businessRules`,
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      vendorName,
      payerName,
      type,
      subcategory
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      console.log({ error: resp.data.result.msg, title: '' });
      return null;
    }
    const rootKeys = Object.keys(data.data);
    let rules;
    rootKeys.map((key, index) => {
      if (index === 0)
        rules = Object.assign(Object.assign({}, rules), { [`${key}`]: transformToCamelCase({ value: data.data[key], isObject: true }) });
      else
        rules[`${key}`] = transformToCamelCase({ value: data.data[key], isObject: true });
    });
    return rules;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      console.log({ error: message, title: 'Error retrieving Business Rules' });
      return null;
    }
    console.log({ error, title: 'Error retrieving Business Rules' });
    return null;
  }
};
export default getBusinessRules;
