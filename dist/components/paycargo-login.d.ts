import type { Components, JSX } from "../types/components";

interface PaycargoLogin extends Components.PaycargoLogin, HTMLElement {}
export const PaycargoLogin: {
  prototype: PaycargoLogin;
  new (): PaycargoLogin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
