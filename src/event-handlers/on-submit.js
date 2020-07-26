import temporaryGlobals from "../temporary-globals/temporary-globals";
import {sendEmailToMailChimp} from "../integrations/mailchimp";
import closeBottomBar from "../bottom-bar/bottom-bar-actions/close-bottom-bar";
import closeModal from "../modal/modal-actions/close-modal";
import {showSuccessMessage, showErrorMessage} from "../helpers/notifications";

export function onSubmit (event) {
  event.preventDefault();

  if (event.currentTarget.closest(".bottom-bar")) {
    closeBottomBar();
  } else if (event.currentTarget.closest(".email-modal")) {
    closeModal();
  }

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
    if (temporaryGlobals.showFormSubmissionNotices) {
      showSuccessMessage();
    }
    temporaryGlobals.onSubmit({event, email});
  }
}