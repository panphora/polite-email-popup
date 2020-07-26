import PoliteEmailPopup from "../../dist/polite-email-popup.modern.js";

// PoliteEmailForms.contentWebsite();
// PoliteEmailForms.marketingWebsite();

PoliteEmailPopup.contentWebsite({
  showDebugNotice: true, // remove in production
  beSlightlyMoreAggressive: false,
  imageSrc: "/demo/images/remake-logo-icon.svg",
  headingText: "Sign up for Remake's newsletter",
  descriptionText: "Follow Remake's progress as we change web development",
  successMessage: "Thank you signing up!",
  mainButtonText: "Sign up",
  closeButtonText: "Close",
  onSubmit: function ({event, email}) {
    console.log("FORM SUBMITTED", event, email);
  }
});

