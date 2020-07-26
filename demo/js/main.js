import PoliteEmailPopup from "../../dist/polite-email-popup.modern.js";

// PoliteEmailForms.contentWebsite();
// PoliteEmailForms.marketingWebsite();

// PoliteEmailPopup.contentWebsite({
//   showDebugNotice: true, // remove in production
//   beSlightlyMoreAggressive: false,
//   imageSrc: "/demo/images/remake-logo-icon.svg",
//   headingText: "Sign up for Remake's newsletter",
//   descriptionText: "Follow Remake's progress as we change web development",
//   successMessage: "Thank you signing up!",
//   mainButtonText: "Sign up",
//   closeButtonText: "Close",
//   onSubmit: function ({event, email}) {
//     console.log("FORM SUBMITTED", event, email);
//   }
// });

PoliteEmailPopup.contentWebsite({
  imageSrc: "https://websharebox.s3.amazonaws.com/placeholder-logo.png",
  headingText: "Sign up for our newsletter",
  descriptionText: "Follow us to receive valuable tips and insider knowledge.",
  successMessage: "Thank you for signing up!",
  mailchimpConfig: {
    formAction: "https://artisfy.us8.list-manage.com/subscribe/post?u=8c105c744b1173122d5fdf4e0&id=3782d45537",
    spamPreventionKey: "b_8c105c744b1173122d5fdf4e0_3782d45537"
  },
  onSubmit: function ({event, email, success}) {
    console.log("FORM SUBMITTED", event, email, success);
  }
});





