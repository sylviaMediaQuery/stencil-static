export declare type EnvironmentTypes = 'local' | 'development' | 'test';
export interface ConfigInterface {
  env: EnvironmentTypes;
  apiKey: string;
  apiSecret: string;
  developerToken: string;
  apiHost: string;
  idToken: string;
  appHost: string;
  code: string;
  originURL: string;
  batch: string;
}
declare const state: {
  env: string;
  apiKey: string;
  apiSecret: string;
  developerToken: string;
  apiHost: string;
  idToken: string;
  appHost: string;
  code: string;
  originURL: string;
  batch: string;
};
export default state;
