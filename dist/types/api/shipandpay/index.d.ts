declare const _default: {
  oneTimePayment: ({ userData, transactionData, creditCardData, apiHost }: import("./interface").OneTimePaymentInterface) => Promise<{
    success: boolean;
    approvalResponse: string | import("./interface").ApprovalResponseInterface;
  }>;
};
export default _default;
