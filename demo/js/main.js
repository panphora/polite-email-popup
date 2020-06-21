import PoliteEmailPopup from "../../dist/polite-email-popup.modern.js";

// PoliteEmailForms.contentWebsite();
// PoliteEmailForms.marketingWebsite();

PoliteEmailPopup.contentWebsite({
  showDebugNotice: true, // remove in production
  imageSrc: "/demo/images/remake-logo-icon.svg",
  headingText: "Sign up for updates",
  descriptionText: "Get the latest news about Remake’s progress and features.",
  onSubmit: function ({event, email}) {
    console.log("FORM SUBMITTED", event, email);
  }
});