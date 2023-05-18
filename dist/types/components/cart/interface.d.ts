export interface UserDataInterface {
  registerAs: string;
  firstName: string;
  lastName: string;
  email: string;
  companyName?: string;
  ein?: string;
  firmsCode?: string;
  address: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  region: string;
  currency: string;
  timeZone: string;
  thirdPartyName?: string;
  accountType: 'OVERNIGHT' | 'CREDITCARD' | 'Prepaid' | 'UNREGISTERED' | 'CROSSACCOUNT';
}
export interface TransactionInterface {
  [key: string]: string | number | Date | null | undefined;
  type: string;
  transactionId?: number | null;
  vendorId: number | null;
  vendorName?: string;
  payerId: number | null;
  payerName?: string;
  bolLink: string;
  parentTransactionNumber: string;
  shipperReferenceNumber: string;
  number: string;
  customerReferenceNumber: string;
  direction: 'Inbound' | 'Outbound';
  status: string;
  transDirectionName: string;
  subcategory: string;
  paymentDueDate: Date;
  total: number | null;
  notes: string | null;
  hasArrived: 'Y' | 'N';
}
