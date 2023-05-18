'use strict';

const index = require('./index-89e6f85c.js');

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('paycargo-checkout.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["paycargo-batch-cart.cjs",[[2,"paycargo-batch-cart",{"pcTransactions":[1,"pc-transactions"],"pcTransationIds":[1,"pc-transation-ids"],"developerToken":[1,"developer-token"],"idToken":[1,"id-token"],"visible":[1540]}]]],["paycargo-login.cjs",[[1,"paycargo-login",{"brand":[1],"type":[1],"redirectBackUrl":[1,"redirect-back-url"],"options":[1],"_options":[32]}]]],["loading-spinner_3.cjs",[[2,"paycargo-cart",{"options":[1],"developerToken":[1,"developer-token"],"pcData":[1,"pc-data"],"visible":[1540],"handleClose":[16],"regions":[32],"selectedRegion":[32],"bluesnapToken":[32],"setCCtype":[32],"userData":[32],"vendorDetails":[32],"transactionFees":[32],"uiCulture":[32],"errorMsg":[32],"isLoading":[32],"validCcn":[32],"validExp":[32],"validCvv":[32],"validForm":[32],"validTransaction":[32],"showApprovedNotification":[32],"transactionMessage":[32],"messageType":[32]}],[2,"loading-spinner"],[1,"notification-message",{"message":[1],"type":[1],"visible":[32]}]]]], options);
});
