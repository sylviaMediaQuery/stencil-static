import { r as registerInstance, h, c as createEvent } from './index-5fefa18d.js';
import { c as config } from './config-64880a20.js';
import { s as state } from './store-18012089.js';

const loadingSpinnerCss = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.table{display:table}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.sc-loading-spinner,.sc-loading-spinner:after,.sc-loading-spinner:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-loading-spinner:after,.sc-loading-spinner:before{--tw-content:\"\"}html.sc-loading-spinner{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body.sc-loading-spinner{line-height:inherit;margin:0}hr.sc-loading-spinner{border-top-width:1px;color:inherit;height:0}abbr.sc-loading-spinner:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1.sc-loading-spinner,h2.sc-loading-spinner,h3.sc-loading-spinner,h4.sc-loading-spinner,h5.sc-loading-spinner,h6.sc-loading-spinner{font-size:inherit;font-weight:inherit}a.sc-loading-spinner{color:inherit;text-decoration:inherit}b.sc-loading-spinner,strong.sc-loading-spinner{font-weight:bolder}code.sc-loading-spinner,kbd.sc-loading-spinner,pre.sc-loading-spinner,samp.sc-loading-spinner{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small.sc-loading-spinner{font-size:80%}sub.sc-loading-spinner,sup.sc-loading-spinner{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-loading-spinner{bottom:-.25em}sup.sc-loading-spinner{top:-.5em}table.sc-loading-spinner{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-loading-spinner,input.sc-loading-spinner,optgroup.sc-loading-spinner,select.sc-loading-spinner,textarea.sc-loading-spinner{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-loading-spinner,select.sc-loading-spinner{text-transform:none}[type=button].sc-loading-spinner,[type=reset].sc-loading-spinner,[type=submit].sc-loading-spinner,button.sc-loading-spinner{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-loading-spinner:-moz-focusring{outline:auto}.sc-loading-spinner:-moz-ui-invalid{box-shadow:none}progress.sc-loading-spinner{vertical-align:baseline}.sc-loading-spinner::-webkit-inner-spin-button,.sc-loading-spinner::-webkit-outer-spin-button{height:auto}[type=search].sc-loading-spinner{-webkit-appearance:textfield;outline-offset:-2px}.sc-loading-spinner::-webkit-search-decoration{-webkit-appearance:none}.sc-loading-spinner::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-loading-spinner{display:list-item}blockquote.sc-loading-spinner,dd.sc-loading-spinner,dl.sc-loading-spinner,fieldset.sc-loading-spinner,figure.sc-loading-spinner,h1.sc-loading-spinner,h2.sc-loading-spinner,h3.sc-loading-spinner,h4.sc-loading-spinner,h5.sc-loading-spinner,h6.sc-loading-spinner,hr.sc-loading-spinner,p.sc-loading-spinner,pre.sc-loading-spinner{margin:0}fieldset.sc-loading-spinner,legend.sc-loading-spinner{padding:0}menu.sc-loading-spinner,ol.sc-loading-spinner,ul.sc-loading-spinner{list-style:none;margin:0;padding:0}textarea.sc-loading-spinner{resize:vertical}input.sc-loading-spinner::-moz-placeholder,textarea.sc-loading-spinner::-moz-placeholder{color:#9ca3af;opacity:1}input.sc-loading-spinner::placeholder,textarea.sc-loading-spinner::placeholder{color:#9ca3af;opacity:1}[role=button].sc-loading-spinner,button.sc-loading-spinner{cursor:pointer}.sc-loading-spinner:disabled{cursor:default}audio.sc-loading-spinner,canvas.sc-loading-spinner,embed.sc-loading-spinner,iframe.sc-loading-spinner,img.sc-loading-spinner,object.sc-loading-spinner,svg.sc-loading-spinner,video.sc-loading-spinner{display:block;vertical-align:middle}img.sc-loading-spinner,video.sc-loading-spinner{height:auto;max-width:100%}[hidden].sc-loading-spinner{display:none}.sc-loading-spinner::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.transform.sc-loading-spinner{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border.sc-loading-spinner{border-width:1px}.loader.sc-loading-spinner{animation:spin .8s linear infinite;border:3px solid rgba(250,252,253,.5);border-radius:50%;border-top-color:#fafcfd;height:30px;width:30px}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";

const LoadingSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { class: "loader" });
  }
};
LoadingSpinner.style = loadingSpinnerCss;

const notificationMessageCss = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.static{position:static}.absolute{position:absolute}.flex{display:flex}.table{display:table}.hidden{display:none}.border{border-width:1px}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)} /*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}.notification{align-items:center;background-color:#fff;border:2px solid #000;bottom:50%;display:flex;height:50%;justify-content:center;left:25%;position:absolute;right:25%;top:50%;width:50%;z-index:10}";

const NotificationMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
NotificationMessage.style = notificationMessageCss;

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};

var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional$1 = config.transitional || transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional$1.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel_1('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitional,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  var context = this || defaults_1;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel_1('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

var data = {
  "version": "0.26.1"
};

var VERSION = data.version;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

var validator = {
  assertOptions: assertOptions,
  validators: validators$1
};

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;
axios$1.VERSION = data.version;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

const getBluesnapToken = async ({ apiHost, region }) => {
  var _a;
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/creditCard/bluesnapToken/${region}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      //handleError({ error: 'Could not retrieve bluesnap token', title: '' })
      return data;
    }
    const bluesnapToken = data.pfToken;
    return bluesnapToken;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      //const { message } = error
      //handleError({ error: message, title: 'Error retrieving Bluesnap token.' })
      return [];
    }
    //handleError({ error, title: 'Error retrieving luesnap token.' })
    return [];
  }
};

const getRegions = async ({ apiHost }) => {
  var _a, _b;
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/countries/regions`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const data = ((_a = resp.data) === null || _a === void 0 ? void 0 : _a.result) || [];
    if (((_b = resp.data) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      //handleError({ error: `Received ${resp.data.length} regions.`, title: '' })
      return data;
    }
    const regions = data.sort((x, y) => {
      if (x.regionId === 'US')
        return -1;
      if (y.regionId === 'US')
        return 1;
      return 0;
    });
    return regions;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      console.log({ message });
      //handleError({ error: message, title: 'Error retrieving regions' })
      return [];
    }
    //handleError({ error, title: 'Error retrieving regions' })
    return [];
  }
};

const getVendorsDetails = async ({ apiHost, vendorId }) => {
  var _a;
  try {
    const axiosConfig = {
      method: 'GET',
      url: `${apiHost}/shipAndPay/vendor/${vendorId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const resp = await axios(axiosConfig);
    const data = resp.data[0];
    if (((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      return data;
    }
    const vendors = data;
    return vendors;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      return {};
    }
    return {};
  }
};

const getTransactionFees = async ({ transactionId = null, payerId = null, vendorId = null, paymentMethod, numberOfTransactions = null, total = null, apiHost, developerToken, idToken, oneTimePayment = true }) => {
  var _a, _b, _c, _d;
  const url = oneTimePayment || !developerToken ? `${apiHost}/shipandpay/fees` : `${apiHost}/transaction/fees`;
  const axiosConfig = {
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${developerToken}`
    },
    params: {
      paymentType: paymentMethod,
      id_token: idToken || null,
      payerId,
      vendorId,
      total,
      transactionId,
      numberOfTransactions
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (!data.result || ((_a = data === null || data === void 0 ? void 0 : data.result) === null || _a === void 0 ? void 0 : _a.code) !== 200) {
      return data;
    }
    const transactionFees = data.data;
    return transactionFees;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const message = ((_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.result) === null || _d === void 0 ? void 0 : _d.msg) || error.message;
      console.log('getFees Error', message);
      return null;
    }
    return null;
  }
};

const defaultUiCulture = {
  currency: 'USD',
  currencySign: '$',
  dateFormat: 'MM/DD/YYYY',
  datetimeFormat: 'MM/DD/YYYY h:mm A z',
  datepickerFormat: 'mm/dd/yyyy',
  timeZone: 'EST',
  dateTimeWithZone: 'LLL z',
  momentTZ: 'America/New_York'
};
const getUiCultureByRegion = async ({ region, apiHost }) => {
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/countries/uiCulture/${region}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (!resp.data.currency) {
      console.log({ error: 'Error retrieving uiCulture.' });
      return data;
    }
    const uiCulture = data;
    return uiCulture;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      console.log({ error: message, title: 'Error retrieving uiCulture' });
      return defaultUiCulture;
    }
    console.log({ error, title: 'Error retrieving uiCulture' });
    return defaultUiCulture;
  }
};

function transformToCamelCase({ value, isObject = false }) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (typeof value === 'string' && !isObject) {
    let camelCaseValue = regex.test(value)
      ? value
      : value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
    if (camelCaseValue === camelCaseValue.toUpperCase())
      camelCaseValue = camelCaseValue.toLowerCase();
    if (camelCaseValue[0] === camelCaseValue[0].toUpperCase())
      camelCaseValue = camelCaseValue.charAt(0).toLowerCase() + camelCaseValue.slice(1);
    return camelCaseValue;
  }
  if (value && isObject) {
    const camelCaseObj = {};
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      let camelCaseKey = regex.test(key)
        ? key
        : key.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_match, chr) => chr.toUpperCase());
      if (camelCaseKey === camelCaseKey.toUpperCase())
        camelCaseKey = camelCaseKey.toLowerCase();
      if (camelCaseKey[0] === camelCaseKey[0].toUpperCase()) {
        camelCaseKey = camelCaseKey.charAt(0).toLowerCase() + camelCaseKey.slice(1);
      }
      camelCaseObj[camelCaseKey] = value[key];
    }
    return camelCaseObj;
  }
  return value;
}

const getBusinessRules = async ({ vendorName, payerName, type, subcategory, apiHost }) => {
  var _a;
  const axiosConfig = {
    method: 'GET',
    url: `${apiHost}/businessRules`,
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      vendorName,
      payerName,
      type,
      subcategory
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    if (((_a = resp.data) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      console.log({ error: resp.data.result.msg, title: '' });
      return null;
    }
    const rootKeys = Object.keys(data.data);
    let rules;
    rootKeys.map((key, index) => {
      if (index === 0)
        rules = Object.assign(Object.assign({}, rules), { [`${key}`]: transformToCamelCase({ value: data.data[key], isObject: true }) });
      else
        rules[`${key}`] = transformToCamelCase({ value: data.data[key], isObject: true });
    });
    return rules;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message } = error;
      console.log({ error: message, title: 'Error retrieving Business Rules' });
      return null;
    }
    console.log({ error, title: 'Error retrieving Business Rules' });
    return null;
  }
};

const shipAndPayOneTimePayment = async ({ userData, transactionData, creditCardData, apiHost }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const axiosConfig = {
    method: 'POST',
    url: `${apiHost}/shipandpay/onetimepayment`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      userData: Object.assign(Object.assign({}, userData), { first_name: userData.firstName, last_name: userData.lastName, user_email: userData.email, login: userData.email, name: userData.companyName, accountType: 'CREDITCARD', shipandpay: 1 }),
      transactionData: Object.assign(Object.assign({}, transactionData), { makePayment: true, paymentType: 'CREDITCARD' }),
      creditCardData
    }
  };
  try {
    const resp = await axios.request(axiosConfig);
    const { data } = resp;
    console.log({ apiHost });
    if (!data.result || ((_a = data === null || data === void 0 ? void 0 : data.result) === null || _a === void 0 ? void 0 : _a.code) !== 200) {
      console.log('data: ', data);
      return { success: false, approvalResponse: (_c = (_b = data === null || data === void 0 ? void 0 : data.result) === null || _b === void 0 ? void 0 : _b.msg) !== null && _c !== void 0 ? _c : data.msg };
    }
    const paymentResult = { success: true, approvalResponse: data };
    return paymentResult;
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const message = ((_f = (_e = (_d = error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.msg) || ((_g = error.response) === null || _g === void 0 ? void 0 : _g.data) || error.message;
      console.log({ error: message, title: 'Error OneTimePayment' });
      return { success: false, approvalResponse: message };
    }
    console.log({ error, title: 'Error OneTimePayment' });
    return { success: false, approvalResponse: JSON.stringify(error) };
  }
};

const currencyFormatter = ({ uiCulture, number }) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: (uiCulture === null || uiCulture === void 0 ? void 0 : uiCulture.currency) || 'USD'
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers,
  // but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
}).format(number);

const loadBluesnapHostedFields = (bluesnapToken, setCcType, visible, setBluesnapInputErrors) => {
  const bluesnapObj = window.bluesnap;
  function changeImpactedElement(tagId, removeClass, addClass) {
    const ccInputElement = document.querySelector(`[data-bluesnap="${tagId}"]`);
    if (removeClass && ccInputElement.classList.contains(removeClass))
      ccInputElement.classList.remove(removeClass);
    if (addClass)
      ccInputElement.classList.add(addClass);
    return ccInputElement;
  }
  const bsObj = {
    token: bluesnapToken,
    onFieldEventHandler: {
      /* OPTIONAL */ setupComplete() {
        setBluesnapInputErrors('validCcn', false);
        setBluesnapInputErrors('validCvv', false);
        setBluesnapInputErrors('validExp', false);
      },
      /* OPTIONAL */ threeDsChallengeExecuted() {
        console.warn('threeDsChallengeExecuted');
      },
      // tagId returns: "ccn", "cvv", "exp"
      onFocus(tagId) { console.log("onFocus happening", tagId); },
      onBlur(tagId) {
        console.log("onBlur happening", tagId);
      },
      onError(tagId, /*errorCode: string,*/ errorDescription) {
        if (visible) {
          console.log("onError is happening");
          switch (tagId) {
            case 'cvv':
              setBluesnapInputErrors('validCvv', false);
              break;
            case 'exp':
              setBluesnapInputErrors('validExp', false);
              break;
            case 'ccn':
              setBluesnapInputErrors('validCcn', false);
              break;
          }
          changeImpactedElement(tagId, 'hosted-field-valid', 'hosted-field-invalid');
        }
      },
      /* errorCode returns:
              "10" --> invalidCcNumber, invalidExpDate, invalidCvv Dependent on the tagId;
              "22013" --> "CC type is not supported by the merchant";
              "14040" --> " Token is expired";
              "14041" --> " Could not find token";
              "14042" --> " Token is not associated with a payment method,
              please verify your client integration or contact BlueSnap support";
              "400" --> "Session expired please refresh page to continue";
              "403", "404", "500" --> "Internal server error please try again later";
             */
      /* errorDescription is optional. Returns BlueSnap's standard error description */
      onType(tagId, cardType, cardData) {
        console.log("onType is happening");
        console.info({ tagId, cardData, cardType }, 'BlueSnap CC Type');
        if (setCcType)
          setCcType(cardType);
        /* cardType will give card type, and only applies to ccn:
         * AMEX, VISA, MASTERCARD, AMEX, DISCOVER, DINERS, JCB */
        if (cardData != null) {
          /* cardData is an optional parameter which will provide ccType,
           * last4Digits, issuingCountry, isRegulatedCard, cardSubType,
           * binCategory and ccBin details (only applies to ccn) in a JsonObject */
          console.info({ cardData }, 'carddata');
        }
      },
      // Will trigger when shopper presses enter while inside one of the inputs
      onEnter() { console.log("onEnter Happening"); },
      onValid(tagId) {
        if (visible) {
          console.log("onValid is happening");
          switch (tagId) {
            case 'cvv':
              setBluesnapInputErrors('validCvv', true);
              break;
            case 'exp':
              setBluesnapInputErrors('validExp', true);
              break;
            case 'ccn':
              setBluesnapInputErrors('validCcn', true);
              break;
          }
          changeImpactedElement(tagId, 'hosted-field-invalid', 'hosted-field-valid');
        }
      } // tagId: unknown, Handle a change in validation
    },
    /* example:
        style: {
            "Selector": {
                "Property": "Value",
                "Property2": "Value2"
            },
            "Selector2": {
                "Property": "Value"
            }
        }, */
    style: {
      ':focus': {
        // style for all input elements on focus event
        color: 'black'
      },
      input: {
        // style for all input elements
        color: 'black'
      },
      '.invalid': {
        // style for all input elements when invalid
        color: '#FE4A49'
        // 'border-color': 'red'
      }
    },
    ccnPlaceHolder: '1234 1234 1234 1234',
    cvvPlaceHolder: 'CVV',
    expPlaceHolder: 'MM/YY' // for example
  };
  // Run the following command after Document Object Model (DOM) is fully loaded
  bluesnapObj.hostedPaymentFieldsCreate(bsObj);
  return bluesnapObj;
};

const cartCss = "/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.static{position:static}.absolute{position:absolute}.relative{position:relative}.block{display:block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.uppercase{text-transform:uppercase}.outline{outline-style:solid}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.sc-paycargo-cart,.sc-paycargo-cart:after,.sc-paycargo-cart:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-paycargo-cart:after,.sc-paycargo-cart:before{--tw-content:\"\"}html.sc-paycargo-cart{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body.sc-paycargo-cart{line-height:inherit;margin:0}hr.sc-paycargo-cart{border-top-width:1px;color:inherit;height:0}abbr.sc-paycargo-cart:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1.sc-paycargo-cart,h2.sc-paycargo-cart,h3.sc-paycargo-cart,h4.sc-paycargo-cart,h5.sc-paycargo-cart,h6.sc-paycargo-cart{font-size:inherit;font-weight:inherit}a.sc-paycargo-cart{color:inherit;text-decoration:inherit}b.sc-paycargo-cart,strong.sc-paycargo-cart{font-weight:bolder}code.sc-paycargo-cart,kbd.sc-paycargo-cart,pre.sc-paycargo-cart,samp.sc-paycargo-cart{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small.sc-paycargo-cart{font-size:80%}sub.sc-paycargo-cart,sup.sc-paycargo-cart{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-paycargo-cart{bottom:-.25em}sup.sc-paycargo-cart{top:-.5em}table.sc-paycargo-cart{border-collapse:collapse;border-color:inherit;text-indent:0;width:100%}button.sc-paycargo-cart,input.sc-paycargo-cart,optgroup.sc-paycargo-cart,select.sc-paycargo-cart,textarea.sc-paycargo-cart{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-paycargo-cart,select.sc-paycargo-cart{text-transform:none}[type=button].sc-paycargo-cart,[type=reset].sc-paycargo-cart,[type=submit].sc-paycargo-cart,button.sc-paycargo-cart{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-paycargo-cart:-moz-focusring{outline:auto}.sc-paycargo-cart:-moz-ui-invalid{box-shadow:none}progress.sc-paycargo-cart{vertical-align:baseline}.sc-paycargo-cart::-webkit-inner-spin-button,.sc-paycargo-cart::-webkit-outer-spin-button{height:auto}[type=search].sc-paycargo-cart{-webkit-appearance:textfield;outline-offset:-2px}.sc-paycargo-cart::-webkit-search-decoration{-webkit-appearance:none}.sc-paycargo-cart::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-paycargo-cart{display:list-item}blockquote.sc-paycargo-cart,dd.sc-paycargo-cart,dl.sc-paycargo-cart,fieldset.sc-paycargo-cart,figure.sc-paycargo-cart,h1.sc-paycargo-cart,h2.sc-paycargo-cart,h3.sc-paycargo-cart,h4.sc-paycargo-cart,h5.sc-paycargo-cart,h6.sc-paycargo-cart,hr.sc-paycargo-cart,p.sc-paycargo-cart,pre.sc-paycargo-cart{margin:0}fieldset.sc-paycargo-cart,legend.sc-paycargo-cart{padding:0}menu.sc-paycargo-cart,ol.sc-paycargo-cart,ul.sc-paycargo-cart{list-style:none;margin:0;padding:0}textarea.sc-paycargo-cart{resize:vertical}input.sc-paycargo-cart::-moz-placeholder,textarea.sc-paycargo-cart::-moz-placeholder{color:#9ca3af;opacity:1}input.sc-paycargo-cart::placeholder,textarea.sc-paycargo-cart::placeholder{color:#9ca3af;opacity:1}[role=button].sc-paycargo-cart,button.sc-paycargo-cart{cursor:pointer}.sc-paycargo-cart:disabled{cursor:default}audio.sc-paycargo-cart,canvas.sc-paycargo-cart,embed.sc-paycargo-cart,iframe.sc-paycargo-cart,img.sc-paycargo-cart,object.sc-paycargo-cart,svg.sc-paycargo-cart,video.sc-paycargo-cart{display:block;vertical-align:middle}img.sc-paycargo-cart,video.sc-paycargo-cart{height:auto;max-width:100%}[hidden].sc-paycargo-cart{display:none}.sc-paycargo-cart::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.visible.sc-paycargo-cart{visibility:visible}.absolute.sc-paycargo-cart{position:absolute}.relative.sc-paycargo-cart{position:relative}.block.sc-paycargo-cart{display:block}.flex.sc-paycargo-cart{display:flex}.table.sc-paycargo-cart{display:table}.grid.sc-paycargo-cart{display:grid}.hidden.sc-paycargo-cart{display:none}.flex-grow.sc-paycargo-cart{flex-grow:1}.transform.sc-paycargo-cart{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border.sc-paycargo-cart{border-width:1px}.text-left.sc-paycargo-cart{text-align:left}.text-center.sc-paycargo-cart{text-align:center}.text-right.sc-paycargo-cart{text-align:right}.uppercase.sc-paycargo-cart{text-transform:uppercase}.outline.sc-paycargo-cart{outline-style:solid}.transition.sc-paycargo-cart{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.container.sc-paycargo-cart{width:100%}@media (min-width:640px){.container.sc-paycargo-cart{max-width:640px}}@media (min-width:768px){.container.sc-paycargo-cart{max-width:768px}}@media (min-width:1024px){.container.sc-paycargo-cart{max-width:1024px}}@media (min-width:1280px){.container.sc-paycargo-cart{max-width:1280px}}@media (min-width:1536px){.container.sc-paycargo-cart{max-width:1536px}}@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200.sc-paycargo-cart;300.sc-paycargo-cart;400.sc-paycargo-cart;500.sc-paycargo-cart;600.sc-paycargo-cart;700.sc-paycargo-cart;800.sc-paycargo-cart;900&display=swap\").sc-paycargo-cart;.sc-paycargo-cart{color:#141414;font-family:Inter,sans-serif,Arial;margin:0;padding:0}.blue-text.sc-paycargo-cart{color:#0094d9}.gray-text.sc-paycargo-cart{color:#797979}.orange-text.sc-paycargo-cart{color:#f89334}.border-bottom.sc-paycargo-cart{border-bottom:1px solid #e0e0e0}.wrapper.sc-paycargo-cart{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;left:0;position:absolute;top:0;transform:scale(1.1);transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s;visibility:hidden;width:100vw;z-index:2}.show.sc-paycargo-cart{opacity:1;transform:scale(1);transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s;visibility:visible!important}.modal.sc-paycargo-cart{background-color:#fff;border-radius:5px;display:grid;font-size:16px;grid-template-areas:\"header header\" \"transaction bluesnap\";grid-template-columns:50% 50%;grid-template-rows:82px auto;max-height:85%;max-width:75%;overflow-y:auto;position:absolute}.navbar-items.sc-paycargo-cart{align-items:center;background-image:linear-gradient(90deg,#054f6f,#082841);display:flex;grid-area:header;height:82px;width:100%;z-index:6}div.navbar-logo.sc-paycargo-cart{background:url(https://d169y5idz4jz14.cloudfront.net/Assets/PayCargo%20White%20Logo.svg);background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;color:#fff;cursor:pointer;height:75px;left:85px;margin-left:0;position:absolute;width:185px}.transaction-container.sc-paycargo-cart{display:grid;grid-area:transaction;padding:7% 5% 7% 10%}#payment-summary.sc-paycargo-cart{font-size:25px;padding-bottom:20px}#vendor-line.sc-paycargo-cart{padding-top:15px}.bluesnap-container.sc-paycargo-cart{background-color:#fbfbfb;display:grid;grid-area:bluesnap;line-height:2;padding:7% 10%}#pc-ccn.sc-paycargo-cart,#pc-cvv.sc-paycargo-cart,#pc-exp.sc-paycargo-cart,#zip.sc-paycargo-cart{border:2px solid;font-size:12px;height:35px}.card.sc-paycargo-cart .row.sc-paycargo-cart .form-group.sc-paycargo-cart input.sc-paycargo-cart,.input-field.sc-paycargo-cart{background-color:#fff;border:1px solid #ebebeb!important;border-radius:3px;height:50px;padding:10px;position:relative;width:100%;z-index:3}.input-container.sc-paycargo-cart{width:100%}.card.sc-paycargo-cart .row.sc-paycargo-cart .form-group.sc-paycargo-cart select.sc-paycargo-cart:disabled{background-color:#fbfbfb}.label.sc-paycargo-cart{font-size:12px;left:10px;line-height:16px;position:relative;top:9px;z-index:4}.name-container.sc-paycargo-cart{display:grid;grid-template-columns:50% 50%}#card-info-container.sc-paycargo-cart{padding-bottom:35px;padding-top:10px}#card-information.sc-paycargo-cart{font-size:14px;font-weight:700}#pc-ccn.sc-paycargo-cart{background:url(https://d169y5idz4jz14.cloudfront.net/Assets/visa.svg),url(https://d169y5idz4jz14.cloudfront.net/Assets/logos_mastercard.svg),url(https://d169y5idz4jz14.cloudfront.net/Assets/discover_card-alt.svg),url(https://d169y5idz4jz14.cloudfront.net/Assets/American-Express-Color%202.svg);background-color:#fff;background-position:73%,79%,93%,98%;background-repeat:no-repeat;position:relative}#pc-cvv.sc-paycargo-cart{background:url(https://d169y5idz4jz14.cloudfront.net/Assets/Card%20Icon.svg);background-color:#fff;background-position:95%;background-repeat:no-repeat}.required.sc-paycargo-cart:after{color:#fe4a49;content:\" *\"}.error.sc-paycargo-cart{color:#fe4a49}.hosted-field-valid.sc-paycargo-cart{border-color:#14ba57!important}.hosted-field-invalid.sc-paycargo-cart{border-color:#fe4a49!important}.cc-info-container.sc-paycargo-cart{display:grid;grid-template-columns:1fr 1fr 1fr}button.pc-payment-button.sc-paycargo-cart{background-color:#57c436}button.pc-payment-button.sc-paycargo-cart,button.pc-payment-button.sc-paycargo-cart:disabled{align-items:center;color:#fff;display:flex;font-size:14px;height:48px;justify-content:center;line-height:25px;width:100%}button.pc-payment-button.sc-paycargo-cart:disabled{background-color:#d6d6d6;border:#797979}button.close-button.sc-paycargo-cart{box-shadow:none}div.close.sc-paycargo-cart{position:absolute;right:53px}#errorMsg-and-button.sc-paycargo-cart{justify-content:space-between}.static.sc-paycargo-cart{position:static}.filter.sc-paycargo-cart{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}";

let bluesnapObj;
const PayCargoCartComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cancel = createEvent(this, "paycargoCartClose", 6);
    this.onSuccess = createEvent(this, "paycargoPaymentSuccess", 6);
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
        const { success, approvalResponse } = await shipAndPayOneTimePayment({
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
  static get watchers() { return {
    "developerToken": ["developerTokenHandler"],
    "pcData": ["dataDidChangeHandler"],
    "visible": ["loadBluesnapFieldsHandler"]
  }; }
};
PayCargoCartComponent.style = cartCss;

export { LoadingSpinner as loading_spinner, NotificationMessage as notification_message, PayCargoCartComponent as paycargo_cart };
