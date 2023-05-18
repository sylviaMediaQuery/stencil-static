import { GetTransactionFeesInterface } from './interface';
declare const getTransactionFees: ({ transactionId, payerId, vendorId, paymentMethod, numberOfTransactions, total, apiHost, developerToken, idToken, oneTimePayment }: GetTransactionFeesInterface) => Promise<any>;
export default getTransactionFees;
