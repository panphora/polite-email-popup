import initEmailForms from "./init-email-forms";
import globals from "./helpers/globals";

function contentWebsite (options) {
  options.websiteType = globals.WEBSITE_TYPES.CONTENT;
  initEmailForms(options);
}

function marketingWebsite (options) {
  options.websiteType = globals.WEBSITE_TYPES.MARKETING;
  initEmailForms(options);
}

export default {
  contentWebsite,
  marketingWebsite
}