import axios from 'axios';
const getBluesnapToken = async ({ apiHost, region }) => {
  var _a;
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/creditCard/bluesnapToken/${region}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      //handleError({ error: 'Could not retrieve bluesnap token', title: '' })
      return data;
    }
    const bluesnapToken = data.pfToken;
    return bluesnapToken;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      //const { message } = error
      //handleError({ error: message, title: 'Error retrieving Bluesnap token.' })
      return [];
    }
    //handleError({ error, title: 'Error retrieving luesnap token.' })
    return [];
  }
};
export default getBluesnapToken;
