import axios from 'axios';
const getRegions = async ({ apiHost }) => {
  var _a, _b;
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/countries/regions`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const data = ((_a = resp.data) === null || _a === void 0 ? void 0 : _a.result) || [];
    if (((_b = resp.data) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      //handleError({ error: `Received ${resp.data.length} regions.`, title: '' })
      return data;
    }
    const regions = data.sort((x, y) => {
      if (x.regionId === 'US')
        return -1;
      if (y.regionId === 'US')
        return 1;
      return 0;
    });
    return regions;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      console.log({ message });
      //handleError({ error: message, title: 'Error retrieving regions' })
      return [];
    }
    //handleError({ error, title: 'Error retrieving regions' })
    return [];
  }
};
export default getRegions;
