import temporaryGlobals from "../temporary-globals/temporary-globals";
import {showSuccessMessage, showErrorMessage} from "../helpers/notifications";

export function sendEmailToMailChimp ({event, email, spamPreventionKey, formAction}) {
  // Get url for mailchimp
  let url = (formAction || "").replace('/post?', '/post-json?');

  // Add form data to object
  let data = '';
  let inputs = event.currentTarget.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
  }

  // Add Mailchimps spam prevention key to data (key should be set to an empty string)
  data += '&' + spamPreventionKey + '=' + "";

  // Create & add post script to the DOM
  let script = document.createElement('script');
  script.src = url + data + "&c=mailchimpCallback";
  document.body.appendChild(script);

  // Callback function
  let callback = 'mailchimpCallback';
  window[callback] = function(res) {

    // Remove script from the DOM after it's called
    delete window[callback];
    document.body.removeChild(script);

    // Display notices
    if (temporaryGlobals.showFormSubmissionNotices) {
      if (res.result === "success") {
        showSuccessMessage(temporaryGlobals.successMessage);
      } else {
        showErrorMessage(temporaryGlobals.failureMessage);
      } 
    }

    // Call user defined onSubmit callback
    if (res.result === "success") {
      temporaryGlobals.onSubmit({event, email, success: true});
    } else {
      temporaryGlobals.onSubmit({event, email, success: false});
    }

  };
}
