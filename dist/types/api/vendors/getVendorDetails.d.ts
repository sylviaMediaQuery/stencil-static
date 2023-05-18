declare const getVendorsDetails: ({ apiHost, vendorId }: {
  apiHost: string;
  vendorId: number;
}) => Promise<any>;
export default getVendorsDetails;
