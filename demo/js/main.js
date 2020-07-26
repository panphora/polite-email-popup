import PoliteEmailPopup from "../../dist/polite-email-popup.modern.js";

// PoliteEmailForms.contentWebsite();
// PoliteEmailForms.marketingWebsite();

// PoliteEmailPopup.contentWebsite({
//   showDebugNotice: true, // remove in production
//   beSlightlyMoreAggressive: false,
//   imageSrc: "/demo/images/remake-logo-icon.svg",
//   headingText: "Sign up for Remake's newsletter",
//   descriptionText: "Follow Remake's progress as we change web development",
//   showFormSubmissionNotices: true,
//   successMessage: "Thank you signing up!",
//   failureMessage: "Sorry, sign up failed...",
//   mainButtonText: "Sign up",
//   closeButtonText: "Close",
//   mailchimpConfig: {
//     formAction: undefined, // Your Mailchimp form's action
//     spamPreventionKey: undefined // Your Mailchimp form's spam prevention key
//   },
//   onSubmit: function ({event, email}) {
//     console.log("FORM SUBMITTED", event, email);
//   }
// });

PoliteEmailPopup.contentWebsite({
  showDebugNotice: true, // remove in production
  beSlightlyMoreAggressive: false,
  imageSrc: "https://websharebox.s3.amazonaws.com/placeholder-logo.png",
  headingText: "Sign up for our newsletter",
  descriptionText: "Follow us to receive valuable tips and insider knowledge.",
  mainButtonText: "Sign up",
  successMessage: "Thank you for signing up!",
  failureMessage: "Sorry, sign up failed...",
  mailchimpConfig: {
    formAction: "https://artisfy.us8.list-manage.com/subscribe/post?u=8c105c744b1173122d5fdf4e0&id=3782d45537",
    spamPreventionKey: "b_8c105c744b1173122d5fdf4e0_3782d45537"
  },
  onSubmit: function ({event, email, success}) {
    console.log("FORM SUBMITTED", event, email, success);
  }
});





