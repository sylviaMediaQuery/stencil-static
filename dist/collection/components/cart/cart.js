import { h } from '@stencil/core';
import config from '../../config/config';
import getBluesnapToken from '../../api/bluesnap/getBluesnapToken';
import getRegions from '../../api/countries/getRegions';
import getVendorsDetails from '../../api/vendors/getVendorDetails';
import getTransactionFees from '../../api/transactions/getTransactionFees';
import getUiCultureByRegion from '../../api/countries/getUiCulture';
import getBusinessRules from '../../api/businessRules/getBusinessRules';
import oneTimePayment from '../../api/shipandpay/shipAndPayOneTimePayment';
import currencyFormatter from '../../utils/currencyFormatter';
import loadBluesnapHostedFields from '../../utils/loadBluesnapHostedFields';
import state from '../../store/store';
let bluesnapObj;
export class PayCargoCartComponent {
  constructor() {
    this._defaultFields = {
      direction: 'Inbound',
      paymentDueDate: new Date(),
      hasArrived: 'Y'
    };
    this.regions = [];
    this.selectedRegion = 'US';
    this.bluesnapToken = '';
    this.setCCtype = '';
    this.userData = {
      registerAs: 'payer',
      firstName: '',
      lastName: '',
      email: '',
      address: 'paycargo-cart',
      city: 'paycargo-cart',
      zip: '',
      state: 'FL',
      country: 'US',
      phone: '',
      region: '',
      currency: '',
      timeZone: '',
      accountType: 'CREDITCARD'
    };
    this.vendorDetails = null;
    this.isLoading = false;
    this.showApprovedNotification = false;
    this.transactionMessage = '';
    this.messageType = 'success';
    this.setBluesnapInputErrors = (input, value) => {
      this[input] = value;
      console.log(this[input]);
    };
    this.setApiHost = async (data) => {
      var _a;
      if (typeof data === 'string') {
        let configObj = Object.assign({}, JSON.parse(data));
        configObj.apiHost = (_a = config.apiHostsOptions[configObj === null || configObj === void 0 ? void 0 : configObj.env]) !== null && _a !== void 0 ? _a : config.apiHostsOptions['dev'];
        let key;
        for (key in configObj) {
          state[key] = configObj[key];
        }
      }
    };
    this.getFees = async () => {
      let { vendorId, total, transactionId } = this._pcData;
      console.log('STATE', state);
      this.transactionFees = await getTransactionFees({
        vendorId,
        total,
        transactionId,
        payerId: (state === null || state === void 0 ? void 0 : state.idToken) && state.idToken !== '' ? null : 1,
        paymentMethod: 'CREDITCARD',
        idToken: (state === null || state === void 0 ? void 0 : state.idToken) && state.idToken !== '' ? state.idToken : '',
        developerToken: state.developerToken,
        apiHost: state.apiHost,
        oneTimePayment: (state === null || state === void 0 ? void 0 : state.idToken) === '' ? true : false
      });
      console.log({ value: state.idToken, type: typeof state.idToken, compare: '' === state.idToken });
      console.log({ fees: this.transactionFees });
    };
    this.getVendorRules = async () => {
      console.log('in GETTING VENDOR RULES', { ccn: this.validCcn, cvv: this.validCvv, exp: this.validExp });
      console.log({ vendorName: this.vendorDetails.name });
      this.businessRules = await getBusinessRules({
        vendorName: this.vendorDetails.name,
        payerName: 'PayCargoCart',
        type: this._pcData.type,
        subcategory: this._pcData.subcategory,
        apiHost: state.apiHost
      });
      const { patterns, required, labels } = this.businessRules;
      const transactionRootKeys = Object.keys(this._pcData);
      const uncheckedKeys = [];
      console.log('CHECKING BUSINESS RULES');
      console.log({ transactionRootKeys, patterns, required, labels });
      transactionRootKeys.map(key => {
        if (!patterns)
          return (this.validTransaction = true);
        if (patterns && patterns[key] && patterns[key].hasOwnProperty('regex')) {
          // console.log("KEY", this._pcData[key].toString())
          const regexStr = patterns[key].regex.replace('/\\/', '//');
          const regexExp = new RegExp(regexStr.slice(1, -1));
          const transactionProp = this._pcData[key].toString();
          // console.log("Number", this._pcData[key].toString())
          // console.log({regexExp})
          if (!regexExp.test(transactionProp)) {
            // console.log("transaction key being checked", this._pcData[key].toString())
            console.log({ reg: patterns[key].regex, key: key || key, error: 'Invalid' });
            console.log('transaction is invalid in !regexExp');
            this.validTransaction = false;
          }
          else if (required && required[key]) {
            console.log('Transaction property required and validated.');
            this.validTransaction = true;
            if (this._pcData[key] === '') {
              console.log(`Transaction missing required field: ${labels[key]}`);
              this.validTransaction = false;
            }
          }
        }
        else {
          this.validTransaction = true;
          uncheckedKeys.push(key);
        }
      });
      console.log({ uncheckedKeys });
      console.log('BIZNAZ RULE', this.businessRules);
      if (!this.validTransaction)
        this.errorMsg = 'Something went wrong with this transaction. Please contact the carrier.';
      console.log('VALID TRANSACTION', this.validTransaction);
      console.log('ERROR MESSAGE', this.errorMsg);
    };
    this.clearForm = () => {
      document.querySelector('form').reset();
      const bluesnapInputFields = document.querySelectorAll('div.input-field');
      bluesnapInputFields.forEach(inputField => {
        console.log({ inputField });
        if (inputField.classList.contains('hosted-field-valid'))
          inputField.classList.remove('hosted-field-valid');
        if (inputField.classList.contains('hosted-field-invalid'))
          inputField.classList.remove('hosted-field-invalid');
      });
      console.log('form cleared');
    };
    this.close = () => {
      this.cancel.emit({
        cancel: true,
        msg: 'Closed by user.'
      });
      console.log('stencil side of handleClose');
      this.clearForm();
      this.handleClose();
      this.visible = false;
      console.log(this.validCcn, this.validCvv, this.validExp, this.validForm, this.validTransaction);
    };
  }
  developerTokenHandler(token) {
    if (!state.developerToken)
      state.developerToken = token;
    else if (state.developerToken !== token) {
      state.developerToken = token;
    }
    console.log('dev:', token);
  }
  async dataDidChangeHandler(newValue) {
    if (typeof newValue === 'string') {
      console.log('newValue', JSON.parse(newValue));
      this._pcData = Object.assign(Object.assign(Object.assign({}, this._defaultFields), this._pcData), JSON.parse(newValue));
    }
    else {
      this._pcData = Object.assign(Object.assign({}, this._pcData), newValue);
    }
    console.log('PC DATA', this._pcData);
    console.log('in DATA DID CHANGE HANDLER', { CCN: this.validCcn, CVV: this.validCvv, EXP: this.validExp });
    const vendorId = this._pcData.vendorId;
    if (vendorId) {
      const details = await getVendorsDetails({ apiHost: state.apiHost, vendorId: this._pcData.vendorId });
      if (details === null || details === void 0 ? void 0 : details.vendorId) {
        this.vendorDetails = details;
        if (this.selectedRegion !== this.vendorDetails.region && this.vendorDetails.region) {
          this.selectedRegion = this.vendorDetails.region;
          this.bluesnapToken = await getBluesnapToken({ apiHost: state.apiHost, region: this.selectedRegion.toUpperCase() });
          bluesnapObj = loadBluesnapHostedFields(this.bluesnapToken, this.setCCtype, this.visible, this.setBluesnapInputErrors);
        }
        this.getFees();
        this.getVendorRules();
      }
    }
  }
  async loadBluesnapFieldsHandler(visible) {
    var _a;
    if (visible) {
      if (((_a = this.vendorDetails) === null || _a === void 0 ? void 0 : _a.region) && this.selectedRegion !== this.vendorDetails.region) {
        this.selectedRegion = this.vendorDetails.region;
      }
      this.bluesnapToken = await getBluesnapToken({ apiHost: state.apiHost, region: this.selectedRegion.toUpperCase() });
      bluesnapObj = loadBluesnapHostedFields(this.bluesnapToken, this.setCCtype, this.visible, this.setBluesnapInputErrors);
    }
    else {
      console.log({ visible });
      loadBluesnapHostedFields(this.bluesnapToken, this.setCCtype, this.visible, this.setBluesnapInputErrors);
    }
    console.log('loading bluesnap');
    console.log('in LOADING BLUESNAP', { ccn: this.validCcn, cvv: this.validCvv, exp: this.validExp, visible: this.visible });
  }
  componentWillLoad() {
    console.log('in COMPONENT WILL LOAD', { CCN: this.validCcn, CVV: this.validCvv, EXP: this.validExp });
    (async () => {
      var _a;
      try {
        await this.setApiHost(this.options);
        const regionsResp = await getRegions({ apiHost: state.apiHost });
        this.regions = [...regionsResp];
        this.uiCulture = await getUiCultureByRegion({ region: this.selectedRegion, apiHost: state.apiHost });
        const bluesnapHost = (_a = config.bluesnapURL[state === null || state === void 0 ? void 0 : state.env]) !== null && _a !== void 0 ? _a : config.bluesnapURL['dev'];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `${bluesnapHost}`;
        script.async = true;
        script.onload = async () => {
          const region = this.selectedRegion;
          //const now = moment()
          this.bluesnapToken = await getBluesnapToken({ apiHost: state.apiHost, region: region.toUpperCase() });
          //setBluesnap({ token, exp: now.add(10, 'minutes') })
          bluesnapObj = loadBluesnapHostedFields(this.bluesnapToken, this.setCCtype, this.visible, this.setBluesnapInputErrors);
          //setLoading(false)
        };
        document.body.appendChild(script);
      }
      catch (e) {
        console.log('error getting regions : ', e);
      }
    })();
  }
  handleChange(event) {
    console.log('userData', this.userData);
    const element = event.target;
    const { name, value } = element;
    this.userData = Object.assign(Object.assign({}, this.userData), { [name]: value });
    console.log('userData again', this.userData);
  }
  setRegion(event) {
    const element = event.target;
    this.selectedRegion = element.value;
    this.userData.region = element.value;
  }
  getCurrency(regions, regionId) {
    const selectedRegion = regions.filter(region => region.regionId === regionId)[0];
    return selectedRegion.defaultCurrencyId;
  }
  async checkout(event) {
    event.preventDefault();
    this.isLoading = true;
    console.log('THIS', this);
    const completePaymentObj = {
      creditCardData: {
        pfToken: this.bluesnapToken,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        currency: this.getCurrency(this.regions, this.selectedRegion),
        amount: this._pcData.total,
        zip: this.userData.zip,
        region: this.selectedRegion,
        email: this.userData.email
      },
      token: '',
      //transactionId: transactionData.transactionId,
      paymentType: 'CREDITCARD',
      transactionData: this._pcData,
      userData: Object.assign(Object.assign({}, this.userData), { currency: this.getCurrency(this.regions, this.selectedRegion), region: this.selectedRegion })
    };
    try {
      await bluesnapObj.hostedPaymentFieldsSubmitData(async (callback) => {
        if (callback.error != null) {
          const errorArray = callback.error;
          for (let i = 0; i <= errorArray.length; i += 1) {
            console.info(`Received error: tagId=${errorArray[i].tagId},
                          errorCode=${errorArray[i].errorCode},
                          errorDescription=${errorArray[i].errorDescription}`);
          }
          this.isLoading = false;
          return Promise.reject(errorArray);
        }
        const { success, approvalResponse } = await oneTimePayment({
          userData: completePaymentObj.userData,
          transactionData: completePaymentObj.transactionData,
          creditCardData: completePaymentObj.creditCardData,
          apiHost: state.apiHost
        });
        this.isLoading = false;
        console.log({ success, approvalResponse });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.transactionMessage = 'Transaction Successfully Complete!';
        this.messageType = 'success';
        if (!success && typeof approvalResponse === 'string') {
          this.errorMsg = approvalResponse;
        }
        else {
          this.errorMsg = '';
          this.onSuccess.emit();
          console.log({ success, data: approvalResponse });
          this.showApprovedNotification = true;
          this.close();
        }
      });
    }
    catch (error) {
      console.warn({ error }, 'error submitting bluesnap hosted fields');
      this.isLoading = false;
      this.onSuccess.emit({ success: false, data: { msg: 'blah blah' } });
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (h("div", null, h("div", { id: "paycargo-checkout", class: this.visible ? 'wrapper show' : 'wrapper' }, h("div", { class: "modal" }, h("div", null, " ", this.showApprovedNotification && (h("notification-message", { message: "Transaction Approved!", type: "success" }))), h("nav", { class: "navbar-items" }, h("div", { class: "navbar-logo" }), h("div", { class: "close" }, h("button", { class: "close-button", onClick: () => this.close() }, h("img", { src: "https://d169y5idz4jz14.cloudfront.net/Assets/Icons/exit_icon_white.svg", alt: "exit" })))), h("div", { class: "transaction-container" }, this._pcData && (h("table", { class: "" }, h("thead", null, h("tr", null, h("th", { colSpan: 1, class: "border-bottom text-left", id: "payment-summary" }, "Payment Summary"), h("th", { colSpan: 2, class: "type-number border-bottom text-right blue-text" }, `${this._pcData.type.toUpperCase()}: #${this._pcData.number}`)), h("tr", { style: { height: '30px' } }, h("th", { colSpan: 1, class: "text-left", id: "vendor-line" }, "Vendor"), h("th", { colSpan: 2, class: "text-right blue-text" }, (_a = this.vendorDetails) === null || _a === void 0 ? void 0 : _a.name))), h("tbody", null, h("tr", null, h("td", { class: "border-bottom" }, " Item "), h("td", { class: "border-bottom text-right" }, " Rate "), h("td", { class: "border-bottom text-right" }, " Amount ")), h("tr", null, h("td", { class: "gray-text" }, " PayCargo Transaction "), h("td", { class: "text-right gray-text" }, ((_b = this.transactionFees) === null || _b === void 0 ? void 0 : _b.amount)
      ? currencyFormatter({ uiCulture: this.uiCulture, number: this.transactionFees.amount })
      : ''), h("td", { class: "text-right gray-text" }, ((_c = this.transactionFees) === null || _c === void 0 ? void 0 : _c.amount)
      ? currencyFormatter({ uiCulture: this.uiCulture, number: this.transactionFees.amount })
      : '')), h("tr", null, h("td", { class: "gray-text" }, " Shipper Fee "), h("td", { class: "text-right gray-text" }, ((_d = this.transactionFees) === null || _d === void 0 ? void 0 : _d.transactionFee)
      ? currencyFormatter({ uiCulture: this.uiCulture, number: this.transactionFees.transactionFee })
      : ''), h("td", { class: "text-right gray-text" }, ((_e = this.transactionFees) === null || _e === void 0 ? void 0 : _e.transactionFee)
      ? currencyFormatter({ uiCulture: this.uiCulture, number: this.transactionFees.transactionFee })
      : '')), h("tr", null, h("td", { class: "text-right", colSpan: 2 }, "Subtotal"), h("td", { class: "text-right" }, ((_f = this.transactionFees) === null || _f === void 0 ? void 0 : _f.transactionFee) && ((_g = this.transactionFees) === null || _g === void 0 ? void 0 : _g.amount)
      ? currencyFormatter({
        uiCulture: this.uiCulture,
        number: this.transactionFees.transactionFee + this.transactionFees.amount
      })
      : '')), h("tr", null, h("td", { class: "border-bottom text-left orange-text" }, " Credit Card Processing Fee "), h("td", { class: "border-bottom text-right orange-text" }, ' ', `3.5% x ${((_h = this.transactionFees) === null || _h === void 0 ? void 0 : _h.transactionFee) && ((_j = this.transactionFees) === null || _j === void 0 ? void 0 : _j.amount)
      ? currencyFormatter({
        uiCulture: this.uiCulture,
        number: this.transactionFees.transactionFee + this.transactionFees.amount
      })
      : ''}`, ' '), h("td", { class: "border-bottom text-right orange-text" }, ((_k = this.transactionFees) === null || _k === void 0 ? void 0 : _k.processingFee)
      ? currencyFormatter({ uiCulture: this.uiCulture, number: this.transactionFees.processingFee })
      : '')), h("tr", null, h("td", { colSpan: 2, class: "text-right blue-text" }, ' ', "Total:", ' '), h("td", { class: "text-right blue-text" }, ((_l = this.transactionFees) === null || _l === void 0 ? void 0 : _l.totalWithFees)
      ? currencyFormatter({ uiCulture: this.uiCulture, number: this.transactionFees.totalWithFees })
      : '')))))), h("div", { class: "bluesnap-container" }, h("div", { class: "card" }, h("form", { onSubmit: event => this.checkout(event),
      // onChange={() => this.validateForm()}
      id: "ccForm" }, h("div", { class: "row" }, h("div", { class: "form-group" }, h("div", null, h("div", { class: "label gray-text" }, h("label", { class: "required", htmlFor: "email" }, "Email")), h("input", { type: "email", id: "email", name: "email", class: "input", value: this.userData.email, onInput: event => this.handleChange(event), placeholder: "janedoe@email.com", required: true })))), h("div", { class: "row" }, h("div", { class: "name-container" }, h("div", { class: "form-group" }, h("div", { class: "label gray-text" }, h("label", { class: "required", htmlFor: "first-name" }, "First Name")), h("input", { required: true, class: "input", id: "first-name", name: "firstName", type: "text", value: this.userData.firstName, onInput: event => this.handleChange(event), placeholder: "Jane" })), h("div", { class: "form-group" }, h("div", { class: "label gray-text" }, h("label", { class: "required", htmlFor: "last-name" }, "Last Name")), h("input", { required: true, id: "last-name", class: "input", name: "lastName", type: "text", value: this.userData.lastName, onInput: event => this.handleChange(event), placeholder: "Doe" })))), h("div", { class: "row" }, h("div", { class: "name-container" }, h("div", { class: "form-group" }, h("div", { class: "label" }, h("label", { htmlFor: "phone", class: "required" }, "Phone")), h("input", { required: true, class: "input", id: "phone", name: "phone", type: "tel", value: this.userData.phone, onInput: event => this.handleChange(event), placeholder: "(123) 456-7890", minlength: "10", maxlength: "10" })), h("div", { class: "form-group" }, h("div", { class: "label" }, h("label", { htmlFor: "zip", class: "required" }, "Region")), h("div", { class: "" }, h("select", { class: "input-field", id: "regions", required: true, onChange: event => this.setRegion(event), disabled: true }, this.regions.map(({ regionId, regionName, defaultCurrencyId }) => {
      return (h("option", { selected: regionId === this.selectedRegion, value: regionId, key: regionId }, `${regionName} - ${defaultCurrencyId}`));
    }))))), h("div", { class: "row" }, h("div", { class: "form-group" }, h("div", { class: "label" }, h("label", { htmlFor: "company-name" }, " Company name ")), h("input", { class: "input", type: "text", id: "company-name", name: "companyName", value: this.userData.companyName, onInput: event => this.handleChange(event), placeholder: "Jane Doe Company" }))), h("div", { class: "form-group", id: "card-info-container" }, h("label", { id: "card-information", class: "required" }, "Credit Card Information"), h("div", { id: "pc-ccn", "data-bluesnap": "ccn", class: "input-field" }), h("div", { class: "cc-info-container" }, h("div", { id: "pc-exp", "data-bluesnap": "exp", class: "input-field" }), h("div", { id: "pc-cvv", "data-bluesnap": "cvv", class: "input-field" }), h("div", null, h("input", { id: "zip", name: "zip", required: true, type: "text", placeholder: "ZIP", value: this.userData.zip, onInput: event => this.handleChange(event), class: "input-field", minlength: "5", maxlength: "5" }))))), h("div", { class: "row", id: "errorMsg-and-button" }, h("div", { class: "text-left m-t-10" }, this.errorMsg && h("div", { class: "error" }, this.errorMsg)), h("div", { class: "text-right m-t-10" }, h("button", { class: "pc-payment-button", type: "submit", disabled: !this.validCcn || !this.validExp || !this.validCvv || !this.validTransaction }, this.isLoading ? h("loading-spinner", null) : 'Complete Payment'))))))))));
  }
  static get is() { return "paycargo-cart"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["cart.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cart.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Options"
        },
        "attribute": "options",
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
      "pcData": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TransactionInterface | string",
          "resolved": "TransactionInterface | string",
          "references": {
            "TransactionInterface": {
              "location": "import",
              "path": "./interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "PcData"
        },
        "attribute": "pc-data",
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
      },
      "handleClose": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Function",
          "resolved": "Function",
          "references": {
            "Function": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
  static get states() {
    return {
      "regions": {},
      "selectedRegion": {},
      "bluesnapToken": {},
      "setCCtype": {},
      "userData": {},
      "vendorDetails": {},
      "transactionFees": {},
      "uiCulture": {},
      "errorMsg": {},
      "isLoading": {},
      "validCcn": {},
      "validExp": {},
      "validCvv": {},
      "validForm": {},
      "validTransaction": {},
      "showApprovedNotification": {},
      "transactionMessage": {},
      "messageType": {}
    };
  }
  static get events() {
    return [{
        "method": "cancel",
        "name": "paycargoCartClose",
        "bubbles": true,
        "cancelable": false,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{\n    cancel: boolean\n    msg: string\n  }",
          "resolved": "{ cancel: boolean; msg: string; }",
          "references": {}
        }
      }, {
        "method": "onSuccess",
        "name": "paycargoPaymentSuccess",
        "bubbles": true,
        "cancelable": false,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{\n    success: boolean\n    data: any\n  }",
          "resolved": "{ success: boolean; data: any; }",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "developerToken",
        "methodName": "developerTokenHandler"
      }, {
        "propName": "pcData",
        "methodName": "dataDidChangeHandler"
      }, {
        "propName": "visible",
        "methodName": "loadBluesnapFieldsHandler"
      }];
  }
}
