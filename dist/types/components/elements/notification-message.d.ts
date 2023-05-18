export declare class NotificationMessage {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
  componentWillLoad(): void;
  render(): any;
}
