export interface BusinessRulesInterface {
  tooltips: Tooltips;
  labels: Labels;
  visible: Visible;
  options: Options;
  patterns: Patterns;
  masks: Masks;
  capitalize: Capitalize;
  disables: Disables;
  required: Required;
  awb: Awb;
  calcfields?: null;
  fieldValue: FieldValue;
  lineValues: LineValues[] | [];
  cargoSpotOptions?: null;
  iCargoOptions: ICargoOptions | null;
  minMaxValues: MinMaxValues;
  quantityRequirement?: null;
  showTime?: boolean | null;
}
interface MinMaxValues {
  payment_date?: MinOrMax;
  arrival_date?: MinOrMax;
  departure_date?: MinOrMax;
}
interface MinOrMax {
  maxValue?: string;
  minValue?: string;
}
interface Tooltips {
  carrier?: Tooltip;
  transaction_type_name?: Tooltip;
  transaction_sub_category?: Tooltip;
  number?: Tooltip;
  shipper_reference_number?: Tooltip;
  parent_transaction_number?: Tooltip;
  customer_reference_number?: Tooltip;
  shipper?: Tooltip;
  departure_date?: Tooltip;
  arrival_date?: Tooltip;
  payment_date?: Tooltip;
  direction?: Tooltip;
  has_arrived?: Tooltip;
  status?: Tooltip;
  payer_reference_number?: Tooltip;
  vendor_reference_number?: Tooltip;
  description?: Tooltip;
  total_amount?: Tooltip;
  bol_link?: Tooltip;
}
interface Tooltip {
  tooltip: {
    message: string;
  };
}
interface Labels {
  carrier: string;
  transaction_type_name: string;
  transaction_sub_category: string;
  number: string;
  shipper_reference_number: string;
  parent_transaction_number: string;
  customer_reference_number: string;
  shipper: string;
  departure_date: string;
  arrival_date: string;
  payment_date: string;
  direction: string;
  has_arrived: string;
  status: string;
  payer_reference_number: string;
  vendor_reference_number: string;
  description: string;
  total_amount: string;
  external_link: string;
  bol_link: string;
}
interface Visible {
  transaction_type_name?: boolean;
  transaction_sub_category?: boolean;
  number?: boolean;
  shipper_reference_number?: boolean;
  parent_transaction_number?: boolean;
  customer_reference_number?: boolean;
  departure_date?: boolean;
  arrival_date?: boolean;
  payment_date?: boolean;
  direction?: boolean;
  has_arrived?: boolean;
  status?: boolean;
  payer_reference_number?: boolean;
  vendor_reference_number?: boolean;
  description?: boolean;
  total_amount?: boolean;
  external_link?: string;
}
export interface HasArrived {
  label: string;
  value: string;
  checkbox?: boolean;
}
interface Options {
  transaction_type_name?: TransactionTypeNameEntity[] | null;
  trans_direction_name?: TransDirectionNameEntity[] | null;
  transaction_sub_category?: string[] | null;
  payer_reference_number?: string[] | null;
  parent_transaction_number?: string[] | null;
  has_arrived?: HasArrived[] | null;
  shipper?: ShipperHQ;
  bol_link?: string[] | null;
}
interface ShipperHQ {
  unselectHQ: boolean;
}
interface TransDirectionNameEntity {
  label: string;
  value: string;
  selected: boolean;
}
export interface TransactionTypeNameEntity {
  label: string;
  value: string;
  disabled?: boolean;
}
interface Patterns {
  customer_reference_number?: RegexAndMask;
  transaction_sub_category?: RegexAndMask;
  number?: RegexAndMask;
  parent_transaction_number?: RegexAndMask;
  payer_reference_number?: RegexAndMask;
  vendor_reference_number?: RegexAndMask;
  total_amount?: RegexAndMask;
  bol_link?: RegexAndMask;
  shipper_reference_number?: RegexAndMask;
  description?: RegexAndMask;
  mask?: Masks;
}
interface Masks {
  customer_reference_number?: string;
  transaction_sub_category?: string;
  number?: string;
  parent_transaction_number?: string;
  payer_reference_number?: string;
  vendor_reference_number?: string;
  total_amount?: string;
  bol_link?: string;
  shipper_reference_number?: string;
  description?: string;
}
interface RegexAndMask {
  regex?: RegExp | undefined;
  mask?: string;
}
interface Capitalize {
  customer_reference_number?: boolean;
  transaction_sub_category?: boolean;
  number?: boolean;
  parent_transaction_number?: boolean;
  payer_reference_number?: boolean;
  vendor_reference_number?: boolean;
  bol_link?: boolean;
  shipper_reference_number?: boolean;
  description?: boolean;
}
interface Required {
  attachments?: true;
  customer_reference_number?: boolean;
  bol_link?: boolean;
  transaction_type_name?: boolean;
  number?: boolean;
  carrier?: boolean;
  transaction_sub_category?: boolean;
  shipper_reference_number?: boolean;
  parent_transaction_number?: boolean;
  payment_date?: boolean;
  total_amount?: boolean;
  departure_date?: boolean;
  arrival_date?: boolean;
  direction?: boolean;
  has_arrived?: boolean;
  description?: boolean;
}
interface Disables {
  customer_reference_number?: boolean;
  bol_link?: boolean;
  transaction_type_name?: boolean;
  number?: boolean;
  carrier?: boolean;
  transaction_sub_category?: boolean;
  shipper_reference_number?: boolean;
  parent_transaction_number?: boolean;
  payment_date?: boolean;
  total_amount?: boolean;
  departure_date?: boolean;
  arrival_date?: boolean;
  direction?: boolean;
  has_arrived?: boolean;
  description?: boolean;
}
interface Awb {
  number?: boolean;
}
interface FieldValue {
  total_amount?: string;
  payment_date?: string;
  arrival_date?: string;
  number?: string;
  notes?: string;
  transaction_type_name?: string;
}
interface LineValues {
  DESCRIPTION: string;
  QUANTITY: number;
  UNIT_PRICE: number;
  AMOUNT: number;
  disabledAmount?: boolean | null;
  disabled?: boolean | null;
}
interface ICargoOptions {
  isApprovable?: boolean;
}
export {};
