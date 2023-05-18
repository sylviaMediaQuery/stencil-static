import { BusinessRulesInterface } from './interface';
interface BusinessRuleArguments {
  vendorName: string;
  payerName: string;
  type?: string;
  subcategory?: string;
  apiHost: string;
}
declare const getBusinessRules: ({ vendorName, payerName, type, subcategory, apiHost }: BusinessRuleArguments) => Promise<BusinessRulesInterface | null>;
export default getBusinessRules;
