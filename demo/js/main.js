import PoliteEmailPopup from "../../dist/polite-email-popup.modern.js";

// PoliteEmailForms.contentWebsite();
// PoliteEmailForms.marketingWebsite();

PoliteEmailPopup.contentWebsite({
  showDebugNotice: true, // remove in production
  imageSrc: "/demo/images/remake-logo-icon.svg",
  headingText: "Sign up for Remake's newsletter",
  descriptionText: "Let's Remake web development so anyone can build web apps!",
  onSubmit: function ({event, email}) {
    console.log("FORM SUBMITTED", event, email);
  }
});