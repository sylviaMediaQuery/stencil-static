import { TransactionInterface } from '../cart/interface';
export declare class PayCargoBatchCartComponent {
  pcTransactions: TransactionInterface[] | string;
  pcTransationIds: number[] | string;
  developerToken: string;
  idToken: string;
  visible: boolean;
  private close;
  private cancel;
  developerTokenHandler(token: string): void;
  idTokenHandler(token: string): void;
  render(): any;
}
