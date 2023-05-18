import { UiCultureInterface } from '../api/countries/interface';
declare const currencyFormatter: ({ uiCulture, number }: {
  uiCulture: UiCultureInterface;
  number: number;
}) => string;
export default currencyFormatter;
