import axios from 'axios';
const getVendorsDetails = async ({ apiHost, vendorId }) => {
  var _a;
  try {
    const axiosConfig = {
      method: 'GET',
      url: `${apiHost}/shipAndPay/vendor/${vendorId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const resp = await axios(axiosConfig);
    const data = resp.data[0];
    if (((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      return data;
    }
    const vendors = data;
    return vendors;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      return {};
    }
    return {};
  }
};
export default getVendorsDetails;
