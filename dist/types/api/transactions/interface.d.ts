export interface GetTransactionFeesInterface {
  transactionId?: number | null;
  payerId?: number | null;
  vendorId?: number | null;
  paymentMethod: string | null;
  total?: number | null;
  numberOfTransactions?: number | null;
  apiHost: string;
  developerToken: string | null;
  idToken: string | null;
  oneTimePayment: boolean;
}
export interface TransactionFeesInterface {
  amount: number;
  annualFee: number;
  asOf: string | Date;
  bBatchFlatFee: boolean;
  batchApprovalMinimumCount: number | null;
  carrierFee: number;
  currency: string;
  financeFee: number;
  payerId: number;
  processingFee: number;
  totalWithFees: number;
  transactionFee: number;
  transactionFeeIfBatchMinNotMet: number | null;
  vendorId: number;
}
