import type { Components, JSX } from "../types/components";

interface PaycargoCart extends Components.PaycargoCart, HTMLElement {}
export const PaycargoCart: {
  prototype: PaycargoCart;
  new (): PaycargoCart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
