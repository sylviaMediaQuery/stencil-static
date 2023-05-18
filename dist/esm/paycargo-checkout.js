import { p as promiseResolve, b as bootstrapLazy } from './index-5fefa18d.js';

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["paycargo-batch-cart",[[2,"paycargo-batch-cart",{"pcTransactions":[1,"pc-transactions"],"pcTransationIds":[1,"pc-transation-ids"],"developerToken":[1,"developer-token"],"idToken":[1,"id-token"],"visible":[1540]}]]],["paycargo-login",[[1,"paycargo-login",{"brand":[1],"type":[1],"redirectBackUrl":[1,"redirect-back-url"],"options":[1],"_options":[32]}]]],["loading-spinner_3",[[2,"paycargo-cart",{"options":[1],"developerToken":[1,"developer-token"],"pcData":[1,"pc-data"],"visible":[1540],"handleClose":[16],"regions":[32],"selectedRegion":[32],"bluesnapToken":[32],"setCCtype":[32],"userData":[32],"vendorDetails":[32],"transactionFees":[32],"uiCulture":[32],"errorMsg":[32],"isLoading":[32],"validCcn":[32],"validExp":[32],"validCvv":[32],"validForm":[32],"validTransaction":[32],"showApprovedNotification":[32],"transactionMessage":[32],"messageType":[32]}],[2,"loading-spinner"],[1,"notification-message",{"message":[1],"type":[1],"visible":[32]}]]]], options);
});
