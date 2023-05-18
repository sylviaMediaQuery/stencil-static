import axios from 'axios';
const devLogin = async ({ apiKey, apiSecret, apiHost }) => {
  var _a, _b, _c;
  const axiosConfig = {
    method: 'POST',
    url: `${apiHost}/developer/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      apiKey,
      apiSecret
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    console.log('data', data);
    if (!!data.token) {
      return data.token;
    }
    return null;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const message = ((_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.msg) || error.message;
      console.log('dev login Error', message);
      return null;
    }
    return null;
  }
};
export default devLogin;
