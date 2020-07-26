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
  if (event.currentTarget.querySelector('.js-validate-not-robot').value !== '') {
    return;
  }

  let emailInputElement = event.currentTarget.querySelector(temporaryGlobals.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);
  let email = emailInputElement.value;

  // MAILCHIMP integration
  let {spamPreventionKey, formAction} = temporaryGlobals.mailchimpConfig;
  if (spamPreventionKey && formAction) {
    sendEmailToMailChimp({event, email, spamPreventionKey, formAction});
  } else {
    temporaryGlobals.onSubmit({event, email});
  }
}


