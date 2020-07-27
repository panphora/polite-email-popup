let mailchimpCodeElem = document.querySelector(".mailchimp-config__code");
let mailchimpHiddenFormElem = document.querySelector(
  ".mailchimp-config__hidden-form"
);
let outputConfigCodeElem = document.querySelector(".output-config__code");

document.addEventListener("input", function (e) {
  if (event.target.closest(".js-popup-config-input")) {
    let { formAction, spamPreventionKey } = parseMailchimpConfig();
    let imageSrc = document.querySelector(".general-config__image-src").value;
    let headingText = document.querySelector(".general-config__heading-text")
      .value;
    let descriptionText = document.querySelector(
      ".general-config__description-text"
    ).value;
    let successMessage = document.querySelector(
      ".general-config__success-message"
    ).value;

    outputConfigCodeElem.value = createOutputConfig({
      imageSrc,
      headingText,
      descriptionText,
      successMessage,
      formAction,
      spamPreventionKey
    });

    mailchimpHiddenFormElem.innerHTML = "";
  }
});

function parseMailchimpConfig() {
  let codeString = mailchimpCodeElem.value;

  if (!codeString.trim()) {
    return {};
  }

  mailchimpHiddenFormElem.innerHTML = codeString;
  let formElem = mailchimpHiddenFormElem.querySelector(
    "#mc_embed_signup > form"
  );
  let spamPreventionInput = mailchimpHiddenFormElem.querySelector(
    "[aria-hidden='true'] input[type='text'][tabindex='-1']"
  );

  if (formElem && spamPreventionInput) {
    return {
      formAction: formElem.action,
      spamPreventionKey: spamPreventionInput.name
    };
  } else {
    alert(
      "Your Mailchimp form is missing either a <form> or a spam prevention input"
    );
    return {};
  }
}

function createOutputConfig({
  imageSrc = "",
  headingText = "",
  descriptionText = "",
  successMessage = "",
  formAction = "",
  spamPreventionKey = ""
} = {}) {
  return `<script src="https://cdn.jsdelivr.net/npm/polite-email-popup@0.6.0/dist/polite-email-popup.umd.js"><\/script>
<script>
  PoliteEmailPopup.contentWebsite({
    imageSrc: "${imageSrc}",
    headingText: "${headingText}",
    descriptionText: "${descriptionText}",
    successMessage: "${successMessage}",
    mailchimpConfig: {
      formAction: "${formAction}",
      spamPreventionKey: "${spamPreventionKey}"
    }
  });
<\/script>`;
}
