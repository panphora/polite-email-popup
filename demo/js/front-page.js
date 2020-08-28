let formElem = document.querySelector("#email-sign-up");
let formButtonElem = document.querySelector("#email-sign-up button");

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  
  formButtonElem.disabled = true;
  formButtonElem.innerHTML = "Submitting...";

  fetch("https://formspree.io/mwkrdlbp", {
    method: "post",
    body: new FormData(formElem),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    formElem.classList.add("email-submitted");
    formElem.innerHTML = "Thank you for subscribing! 👍";
  })
  .catch(res => {
    formElem.classList.add("email-submitted");
    formElem.innerHTML = "Sorry, your sign up didn't work... 😕";
  });
});