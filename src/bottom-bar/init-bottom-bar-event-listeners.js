import temporaryGlobals from "../temporary-globals/temporary-globals";
import closeBottomBar from "./bottom-bar-actions/close-bottom-bar";
import {sendEmailToMailChimp} from "../integrations/mailchimp";

export default function initBottomBarEventListeners () {
  temporaryGlobals.BOTTOM_BAR_FORM_ELEM.addEventListener("submit", onSubmit);
  temporaryGlobals.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener('click', closeBottomBar);
}

function onSubmit (event) {
  event.preventDefault();

  closeBottomBar();

  // SPAM PREVENTION
  if (e.currentTarget.querySelector('.js-validate-not-robot').value !== '') {
    return;
  }

  // MAILCHIMP integration
  temporaryGlobals.mailchimpConfig = temporaryGlobals.mailchimpConfig || {};
  let {spamPreventionKey, formAction} = temporaryGlobals.mailchimpConfig;
  if (spamPreventionKey && formAction) {
    sendEmailToMailChimp({event, email, spamPreventionKey, formAction, userDefinedCallback});
  } else {
    userDefinedCallback({event});
  }
}

function userDefinedCallback ({event}) {
  // trigger onSubmit callback and pass in the user's email
  let emailInputElement = event.currentTarget.querySelector(temporaryGlobals.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);
  let email = emailInputElement.value;
  temporaryGlobals.onSubmit({event, email});
}


