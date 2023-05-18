import { DevLoginInterface } from './interface';
declare const devLogin: ({ apiKey, apiSecret, apiHost }: DevLoginInterface) => Promise<any>;
export default devLogin;
