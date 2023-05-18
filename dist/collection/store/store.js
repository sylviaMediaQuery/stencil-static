import { createStore } from '@stencil/store';
const { state } = createStore({
  env: '',
  apiKey: '',
  apiSecret: '',
  developerToken: '',
  apiHost: '',
  idToken: '',
  appHost: '',
  code: '',
  originURL: '',
  batch: 'false'
});
export default state;
