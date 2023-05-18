import { h } from '@stencil/core';
export class LoadingSpinner {
  render() {
    return h("div", { class: "loader" });
  }
  static get is() { return "loading-spinner"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["./css/loading-spinner.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["./css/loading-spinner.css"]
    };
  }
}
