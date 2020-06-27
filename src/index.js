import initEmailForms from "./init-email-forms";

function contentWebsite (options) {
  options.websiteType = "content";
  initEmailForms(options);
}

function marketingWebsite (options) {
  options.websiteType = "marketing";
  initEmailForms(options);
}

export default {
  contentWebsite,
  marketingWebsite
}