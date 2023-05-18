import { EventEmitter } from '../../stencil-public-runtime';
import { RegionInterface, UiCultureInterface } from '../../api/countries/interface';
import { UserDataInterface, TransactionInterface } from './interface';
import { VendorDetailsInterface } from '../../api/vendors/interface';
import { TransactionFeesInterface } from '../../api/transactions/interface';
export declare class PayCargoCartComponent {
  private _defaultFields;
  private _pcData;
  private businessRules;
  private cancel;
  onSuccess: EventEmitter<{
    success: boolean;
    data: any;
  }>;
  /**
   * Options
   */
  options: string;
  developerToken: string;
  /**
   * PcData
   */
  pcData: TransactionInterface | string;
  visible: boolean;
  handleClose: Function;
  regions: RegionInterface[];
  selectedRegion: string;
  bluesnapToken: string;
  setCCtype: string;
  userData: UserDataInterface;
  vendorDetails: VendorDetailsInterface | null;
  transactionFees: TransactionFeesInterface;
  uiCulture: UiCultureInterface;
  errorMsg: string;
  isLoading: boolean;
  validCcn: boolean;
  validExp: boolean;
  validCvv: boolean;
  validForm: boolean;
  validTransaction: boolean;
  showApprovedNotification: boolean;
  transactionMessage: string;
  messageType: 'success' | 'error' | 'info';
  developerTokenHandler(token: string): void;
  dataDidChangeHandler(newValue: TransactionInterface | string): Promise<void>;
  loadBluesnapFieldsHandler(visible: boolean): Promise<void>;
  private setBluesnapInputErrors;
  private setApiHost;
  componentWillLoad(): void;
  handleChange(event: Event): void;
  setRegion(event: Event): void;
  private getCurrency;
  private checkout;
  private getFees;
  private getVendorRules;
  clearForm: () => void;
  close: () => void;
  render(): any;
}
