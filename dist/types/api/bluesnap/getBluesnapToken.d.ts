declare const getBluesnapToken: ({ apiHost, region }: {
  apiHost: string;
  region: string;
}) => Promise<any>;
export default getBluesnapToken;
