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
          (function (tagId) {
            switch (tagId) {
              case 'invalidCcNumber':
                return 'Invalid credit card number.';
              case 'invalidExpDate':
                return 'Invalid exp. date.';
              case 'invalidCvv':
                return 'Invalid CVV';
              case 'invalidInput':
                return 'invalid';
            }
          })(errorDescription);
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
export default loadBluesnapHostedFields;
