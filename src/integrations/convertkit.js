import temporaryGlobals from "../temporary-globals/temporary-globals";
import {showSuccessMessage, showErrorMessage} from "../helpers/notifications";

export function sendEmailToConvertKit ({event, email, formAction}) {
  mailchimpAjax({event, email, formAction});
}

function generateUserId (e) {
  return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUserId);
};

function getUserId () {
  let storedUserId = window.localStorage.getItem("ckid");
  
  if (!storedUserId) {
    let newUserId = generateUserId();
    window.localStorage.setItem("ckid", newUserId);
    return newUserId;
  } else {
    return storedUserId;
  }
};

function mailchimpCallback ({event, email, success, message}) {
  if (success) {
    if (temporaryGlobals.showFormSubmissionNotices) {
      showSuccessMessage(temporaryGlobals.successMessage);
    }
  } else {
    if (temporaryGlobals.showFormSubmissionNotices) {
      showErrorMessage(temporaryGlobals.failureMessage);
    }
  }

  temporaryGlobals.onSubmit({event, email, success, message});
}

function mailchimpAjax ({event, email, formAction}) {
  let formDataObj = new FormData();
  // formDataObj.append("fields[first_name]", "mop");
  formDataObj.append("email_address", email);
  formDataObj.append("token", "");
  formDataObj.append("user", getUserId());
  formDataObj.append("referrer", document.referrer);

  fetch(formAction, {
    method: "POST",
    body: formDataObj,
    headers: {
      "Accept": "application/json"
    }
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === "success") {
      console.log("success");
      mailchimpCallback({event, email, success: true});
    } else {
      if (res.errors.fields.includes("email_address")) {
        console.log("error:", "Invalid email address");
        mailchimpCallback({event, email, success: false, message: "Invalid email address"});
      } else {
        console.log("error:", "Failed to subscribe");
        mailchimpCallback({event, email, success: false});
      }
    }
  })
  .catch(err => {
    mailchimpCallback({event, email, success: false});
  });

}













