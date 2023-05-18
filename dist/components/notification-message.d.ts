import type { Components, JSX } from "../types/components";

interface NotificationMessage extends Components.NotificationMessage, HTMLElement {}
export const NotificationMessage: {
  prototype: NotificationMessage;
  new (): NotificationMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
