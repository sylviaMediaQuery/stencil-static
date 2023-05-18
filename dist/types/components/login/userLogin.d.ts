import { EventEmitter } from '../../stencil-public-runtime';
export declare class PayCargoLoginComponent {
  brand: string;
  type: string;
  redirectBackUrl: string;
  options: string;
  _options: {
    env: string;
    code: string;
    originURL: string;
  };
  loginResponse: EventEmitter<{
    success: boolean;
    data: {
      idToken: string;
    };
  }>;
  private openIframe;
  render(): any;
}
