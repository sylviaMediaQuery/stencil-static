import axios from 'axios';
const shipAndPayOneTimePayment = async ({ userData, transactionData, creditCardData, apiHost }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const axiosConfig = {
    method: 'POST',
    url: `${apiHost}/shipandpay/onetimepayment`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      userData: Object.assign(Object.assign({}, userData), { first_name: userData.firstName, last_name: userData.lastName, user_email: userData.email, login: userData.email, name: userData.companyName, accountType: 'CREDITCARD', shipandpay: 1 }),
      transactionData: Object.assign(Object.assign({}, transactionData), { makePayment: true, paymentType: 'CREDITCARD' }),
      creditCardData
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    console.log({ apiHost });
    if (!data.result || ((_a = data === null || data === void 0 ? void 0 : data.result) === null || _a === void 0 ? void 0 : _a.code) !== 200) {
      console.log('data: ', data);
      return { success: false, approvalResponse: (_c = (_b = data === null || data === void 0 ? void 0 : data.result) === null || _b === void 0 ? void 0 : _b.msg) !== null && _c !== void 0 ? _c : data.msg };
    }
    const paymentResult = { success: true, approvalResponse: data };
    return paymentResult;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const message = ((_f = (_e = (_d = error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.msg) || ((_g = error.response) === null || _g === void 0 ? void 0 : _g.data) || error.message;
      console.log({ error: message, title: 'Error OneTimePayment' });
      return { success: false, approvalResponse: message };
    }
    console.log({ error, title: 'Error OneTimePayment' });
    return { success: false, approvalResponse: JSON.stringify(error) };
  }
};
export default shipAndPayOneTimePayment;
