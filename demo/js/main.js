import PoliteEmailForms from "../../dist/polite-newsletter-forms.modern.js";

// PoliteEmailForms.contentWebsite();
// PoliteEmailForms.marketingWebsite();

PoliteEmailForms.contentWebsite({
  showDebugNotice: true, // remove in production
  imageSrc: "/demo/images/remake-logo-icon.svg",
  headingText: "Sign up for updates",
  descriptionText: "Get the latest news about Remake’s progress and features.",
  onSubmit: function ({event, email}) {
    console.log("FORM SUBMITTED", event, email);
  }
});