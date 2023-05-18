import { h } from '@stencil/core';
import config from '../../config/config';
import state from '../../store/store';
let windowlogin;
export class PayCargoLoginComponent {
  constructor() {
    this.brand = '';
    this.type = '';
    this.redirectBackUrl = '';
    this.openIframe = () => {
      var _a;
      if (typeof this.options === 'string' && this.options.length > 0) {
        let configObj = Object.assign({}, JSON.parse(this.options));
        this._options = configObj;
        let key;
        for (key in configObj) {
          state[key] = configObj[key];
        }
      }
      const appURL = (_a = config.appHostsOptions[state.env]) !== null && _a !== void 0 ? _a : config.appHostsOptions['dev'];
      const url = `${appURL}?brand=${state.code}&type=id_token&redirect_url=${this._options.originURL}`;
      windowlogin = window.open(url, 'PayCargo Login', 'height=200, width=200');
      const setParentWindowInterval = setInterval(() => {
        windowlogin.postMessage('paycargo-login', appURL);
      }, 2000);
      window.addEventListener('message', event => {
        var _a, _b;
        if (event.origin !== appURL)
          return;
        if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.parentWindowSet)
          return clearInterval(setParentWindowInterval);
        if (!!((_b = event.data) === null || _b === void 0 ? void 0 : _b.idToken)) {
          const { idToken } = event.data;
          state['idToken'] = idToken;
          windowlogin.close();
          this.loginResponse.emit({ success: true, data: { idToken } });
        }
      }, false);
    };
  }
  render() {
    return (h("button", { id: "paycargo-login-button", onClick: this.openIframe }, "Login to PayCargo"));
  }
  static get is() { return "paycargo-login"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["login.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["login.css"]
    };
  }
  static get properties() {
    return {
      "brand": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "brand",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "''"
      },
      "redirectBackUrl": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "redirect-back-url",
        "reflect": false,
        "defaultValue": "''"
      },
      "options": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "options",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "_options": {}
    };
  }
  static get events() {
    return [{
        "method": "loginResponse",
        "name": "paycargoLogin",
        "bubbles": true,
        "cancelable": false,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{\n    success: boolean\n    data: { idToken: string }\n  }",
          "resolved": "{ success: boolean; data: { idToken: string; }; }",
          "references": {}
        }
      }];
  }
}
