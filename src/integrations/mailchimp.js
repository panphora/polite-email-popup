export function sendEmailToMailChimp ({event, email, spamPreventionKey, formAction}) {
  // Get url for mailchimp
  let url = (formAction || "").replace('/post?', '/post-json?');

  // Add form data to object
  let data = '';
  let inputs = event.currentTarget.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
  }

  // Add Mailchimps spam prevention key to data
  data += '&' + spamPreventionKey + '=' + "";

  // Create & add post script to the DOM
  let script = document.createElement('script');
  script.src = url + data + "&c=mailchimpCallback";
  document.body.appendChild(script);

  // Callback function
  let callback = 'mailchimpCallback';
  window[callback] = function(res) {

    // Remove post script from the DOM
    delete window[callback];
    document.body.removeChild(script);

    // Display response message
    if (res.result === "success") {
      console.log("SUCCESS", res);
    } else {
      console.log("ERROR", res);
    }

  };
}
