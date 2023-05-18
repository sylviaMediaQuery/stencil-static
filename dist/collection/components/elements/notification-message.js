import { h } from '@stencil/core';
export class NotificationMessage {
  constructor() {
    this.message = '';
    this.type = 'success';
    this.visible = false;
  }
  componentWillLoad() {
    this.visible = true;
    setTimeout(() => this.visible = false, 7000);
  }
  render() {
    return h("div", { class: `notification ${this.type} ${this.visible ? 'show' : 'hide'}` }, this.message);
  }
  static get is() { return "notification-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./css/notification-message.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["./css/notification-message.css"]
    };
  }
  static get properties() {
    return {
      "message": {
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
        "attribute": "message",
        "reflect": false,
        "defaultValue": "''"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'success' | 'error' | 'info'",
          "resolved": "\"error\" | \"info\" | \"success\"",
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
        "defaultValue": "'success'"
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
}
