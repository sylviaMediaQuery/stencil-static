import { OneTimePaymentInterface, ApprovalResponseInterface } from './interface';
declare const shipAndPayOneTimePayment: ({ userData, transactionData, creditCardData, apiHost }: OneTimePaymentInterface) => Promise<{
  success: boolean;
  approvalResponse: ApprovalResponseInterface | string | null;
}>;
export default shipAndPayOneTimePayment;
