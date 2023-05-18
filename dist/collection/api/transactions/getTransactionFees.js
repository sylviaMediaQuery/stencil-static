import axios from 'axios';
const getTransactionFees = async ({ transactionId = null, payerId = null, vendorId = null, paymentMethod, numberOfTransactions = null, total = null, apiHost, developerToken, idToken, oneTimePayment = true }) => {
  var _a, _b, _c, _d;
  const url = oneTimePayment || !developerToken ? `${apiHost}/shipandpay/fees` : `${apiHost}/transaction/fees`;
  const axiosConfig = {
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${developerToken}`
    },
    params: {
      paymentType: paymentMethod,
      id_token: idToken || null,
      payerId,
      vendorId,
      total,
      transactionId,
      numberOfTransactions
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (!data.result || ((_a = data === null || data === void 0 ? void 0 : data.result) === null || _a === void 0 ? void 0 : _a.code) !== 200) {
      return data;
    }
    const transactionFees = data.data;
    return transactionFees;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const message = ((_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.msg) || error.message;
      console.log('getFees Error', message);
      return null;
    }
    return null;
  }
};
export default getTransactionFees;
