import { h } from '@stencil/core';
import state from '../../store/store';
export class PayCargoBatchCartComponent {
  constructor() {
    // PRIVATE
    this.close = (type = 'cancel') => {
      this.cancel.emit(type);
      this.visible = false;
    };
  }
  // WATCH
  developerTokenHandler(token) {
    if (!state.developerToken)
      state.developerToken = token;
    else if (state.developerToken !== token) {
      state.developerToken = token;
    }
    console.log('dev:', token);
  }
  idTokenHandler(token) {
    if (!state.idToken)
      state.idToken = token;
    else if (state.idToken !== token) {
      state.idToken = token;
    }
    // if (state.idToken) this.getFees()
  }
  render() {
    return (h("div", { id: "paycargo-checkout", class: this.visible ? 'wrapper show' : 'wrapper' }, h("div", { class: "modal" }, h("div", null, h("nav", { class: "navbar-items" }, h("div", { class: "navbar-logo" }), h("h1", { class: "title" }, " PayCargo Batch Cart "), h("div", { class: "close" }, h("button", { class: "close-button", onClick: () => this.close() }, "x"))), h("div", { class: "container mx-auto" }, h("div", { class: "columns-2 gap-4" }, h("div", null, h("table", null, h("thead", null, h("tr", null, h("th", null, "Transaction Summary"), h("th", { colSpan: 2 }, " Invoice #: 12345 6")), h("tr", null, h("th", null, "Vendor"), h("th", { colSpan: 2 }, "Test Vendor")), h("tr", null, h("th", { colSpan: 3, class: "text-left" }, "Payment Summary"))), h("tbody", null, h("tr", null, h("td", null, "Item"), h("td", null, "Rate"), h("td", null, "Amount")), h("tr", null, h("td", null, "PayCargo Transaction"), h("td", null, " 12.00 "), h("td", null, " $12.00 ")), h("tr", null), h("tr", null), h("tr", null), h("tr", null), h("tr", null)))), h("div", null, h("p", null, "Payment Options"))))))));
  }
  static get is() { return "paycargo-batch-cart"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["batch.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["batch.css"]
    };
  }
  static get properties() {
    return {
      "pcTransactions": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TransactionInterface[] | string",
          "resolved": "TransactionInterface[] | string",
          "references": {
            "TransactionInterface": {
              "location": "import",
              "path": "../cart/interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "pc-transactions",
        "reflect": false
      },
      "pcTransationIds": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "number[] | string",
          "resolved": "number[] | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "pc-transation-ids",
        "reflect": false
      },
      "developerToken": {
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
        "attribute": "developer-token",
        "reflect": false
      },
      "idToken": {
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
        "attribute": "id-token",
        "reflect": false
      },
      "visible": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "visible",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "cancel",
        "name": "cancel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "developerToken",
        "methodName": "developerTokenHandler"
      }, {
        "propName": "idToken",
        "methodName": "idTokenHandler"
      }];
  }
}
