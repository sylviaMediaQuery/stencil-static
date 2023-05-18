import axios from 'axios';
const defaultUiCulture = {
  currency: 'USD',
  currencySign: '$',
  dateFormat: 'MM/DD/YYYY',
  datetimeFormat: 'MM/DD/YYYY h:mm A z',
  datepickerFormat: 'mm/dd/yyyy',
  timeZone: 'EST',
  dateTimeWithZone: 'LLL z',
  momentTZ: 'America/New_York'
};
const getUiCultureByRegion = async ({ region, apiHost }) => {
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/countries/uiCulture/${region}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (!resp.data.currency) {
      console.log({ error: 'Error retrieving uiCulture.' });
      return data;
    }
    const uiCulture = data;
    return uiCulture;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      console.log({ error: message, title: 'Error retrieving uiCulture' });
      return defaultUiCulture;
    }
    console.log({ error, title: 'Error retrieving uiCulture' });
    return defaultUiCulture;
  }
};
export default getUiCultureByRegion;
