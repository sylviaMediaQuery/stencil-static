import { UserDataInterface, TransactionInterface } from '../../components/cart/interface';
export interface CreditcardDataInterface {
  pfToken?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  currency?: string | null;
  amount?: number | null;
  zip?: string | number | null;
  region?: string | null;
  email?: string | null;
}
export interface OneTimePaymentInterface {
  userData: UserDataInterface;
  transactionData: TransactionInterface[] | TransactionInterface;
  creditCardData: CreditcardDataInterface;
  apiHost: string;
}
export interface ApprovalResponseInterface {
  annualFee: number;
  approvalDate: Date | string;
  approvalDateUTC: Date | string;
  currency: string;
  customerRefNumber: string | null;
  financeFee: number;
  number: string;
  payerId: number;
  payerName: string;
  processingFee: number;
  relatedBol: string | null;
  totalAmount: number;
  transactionFee: number;
  transactionId: number;
  type: string;
  userEmail: string;
  vendorId: number;
  vendorName: string;
}
export interface PaymentInfoInterface {
  creditCardData: CreditcardDataInterface;
  token: string | null;
  paymentType: string;
  transactionData?: TransactionInterface[] | TransactionInterface;
  userData: UserDataInterface;
}
