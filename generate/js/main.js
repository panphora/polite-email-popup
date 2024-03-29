new ClipboardJS('.copy-code-button');

let mailchimpCodeElem = document.querySelector(".mailchimp-config__code");
let mailchimpHiddenFormElem = document.querySelector(
  ".mailchimp-config__hidden-form"
);
let outputConfigElem = document.querySelector(".output-config");
let outputConfigCodeElem = document.querySelector(".output-config__code");

document.addEventListener("click", function (e) {
  if (event.target.closest(".generate-code-button")) {
    let { formAction, spamPreventionKey, isMailchimp, isConvertKit } = parseMailchimpConfig();

    let typeOfWebsite = document.querySelector('input[name="type-of-website"]:checked').value;
    let imageSrc = document.querySelector(".general-config__image-src").value;
    let headingText = document.querySelector(".general-config__heading-text").value;
    let descriptionText = document.querySelector(".general-config__description-text").value;
    let mainButtonText = document.querySelector(".general-config__main-button-text").value;
    let successMessage = document.querySelector(".general-config__success-message").value;
    let failureMessage = document.querySelector(".general-config__failure-message").value;
    let beSlightlyMoreAggressive = document.querySelector("#be-slightly-more-aggressive").checked;
    let showDebugNotice = document.querySelector("#show-debug-notice").checked;

    outputConfigCodeElem.value = createOutputConfig({
      showDebugNotice,
      typeOfWebsite,
      imageSrc,
      headingText,
      descriptionText,
      mainButtonText,
      successMessage,
      failureMessage,
      beSlightlyMoreAggressive,

      isMailchimp,
      isConvertKit,
      formAction,
      spamPreventionKey
    });

    outputConfigElem.classList.remove("hide");
    outputConfigElem.scrollIntoView({behavior: "smooth"});
  }
});

function parseMailchimpConfig() {
  let codeString = mailchimpCodeElem.value;

  if (!codeString.trim()) {
    return {};
  }

  mailchimpHiddenFormElem.innerHTML = codeString;

  let isMailchimp = mailchimpHiddenFormElem.querySelector("#mc_embed_signup");
  let isConvertKit = mailchimpHiddenFormElem.querySelector(".formkit-form");

  if (isMailchimp) {
    let formElem = mailchimpHiddenFormElem.querySelector("#mc_embed_signup > form");
    let spamPreventionInput = mailchimpHiddenFormElem.querySelector("[aria-hidden='true'] input[type='text'][tabindex='-1']");

    if (formElem && formElem.action && spamPreventionInput) {
      return {
        isMailchimp: true,
        formAction: formElem.action,
        spamPreventionKey: spamPreventionInput.name
      };
    } else {
      alert("Your Mailchimp form is missing either a <form> 'action' attribute or a spam prevention input");
      return {};
    }
  } else if (isConvertKit) {
    let formElem = mailchimpHiddenFormElem.querySelector("form.formkit-form");

    if (formElem && formElem.action) {
      return {
        isConvertKit: true,
        formAction: formElem.action
      }
    } else {
      alert("Your ConvertKit form is missing a <form> element or a <form> 'action' attribute");
      return {};
    }
  }

  return {};

  // mailchimpHiddenFormElem.innerHTML = "";
}

function createOutputConfig({
  typeOfWebsite = "",
  imageSrc = "",
  headingText = "",
  descriptionText = "",
  mainButtonText = "",
  successMessage = "",
  failureMessage = "",
  showDebugNotice = false,
  beSlightlyMoreAggressive = false,

  isMailchimp = false,
  isConvertKit = false,
  formAction = "",
  spamPreventionKey = ""
} = {}) {
  return `<script src="https://cdn.jsdelivr.net/npm/polite-email-popup@0.9.3/dist/polite-email-popup.umd.js"><\/script>
<script>
  PoliteEmailPopup.${typeOfWebsite === "content" ? "contentWebsite" : "marketingWebsite"}({
    ${showDebugNotice ? "showDebugNotice: true," : ""}
    ${beSlightlyMoreAggressive ? "beSlightlyMoreAggressive: true," : ""}
    ${imageSrc ? `imageSrc: "${imageSrc}",` : ""}
    ${headingText ? `headingText: "${headingText}",` : ""}
    ${descriptionText ? `descriptionText: "${descriptionText}",` : ""}
    ${mainButtonText ? `mainButtonText: "${mainButtonText}",` : ""}
    ${successMessage ? `successMessage: "${successMessage}",` : ""}
    ${failureMessage ? `failureMessage: "${failureMessage}",` : ""}
    ${(isMailchimp) ? `mailchimpConfig: {
      formAction: "${formAction}",
      spamPreventionKey: "${spamPreventionKey}"
    },` : ""}
    ${(isConvertKit) ? `convertKitConfig: {
      formAction: "${formAction}"
    },` : ""}
    onSubmit: function ({event, email, success}) {
      // Add any custom code here, like a Google Analytics event
      // that you want to trigger every time a user submits their email
    }
  });
<\/script>`.replace(/\n\s*\n/g, "\n"); // remove empty lines
}


