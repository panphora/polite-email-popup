// Main DOCS:

https://docs.google.com/document/d/1zBnJ2lj0PW0lkdfggaJytKFnDkggymcDGi4iG09FqPc/edit


// NEXT

*Polite Email Popup*
[ ] openModal is being called when it shouldn't be
    - after opening the modal, keeping it open, and doing an exit intent
    - after bypassing requirements, closing the modal, and doing an exit intent
[ ] Fix: bug with bypassing requirements after modal closed
    steps
    - reset data
    - bypass requirements
    - trigger modal
    - close modal
    - bypass requirements
    !!! - can't trigger modal again until after refresh
[ ] Fix: can't scroll the page
    - reset data
    - bypass requirements
    - trigger modal
    - close modal
    - bypass requirements
    !!! - can't scroll the page
[ ] Fix: bug with modal triggering even with no time on page
    - bypass requirements
    - refresh page
    - trigger modal instantly (without scrolling)
[ ] Work on the README (stretch goal)
    - explain why it was created
      - makers need it
      - but you want to be polite
[ ] Research Mailchimp/Convertkit/Email Octopus integrations


// Additional important features

Don't pop up the modal or the bottom bar if users are coming from a newsletter
  - ability to pass in query string that determines if user is marked as a newsletter reader
  - store this isNewsletterReader boolean in localStorage database, so it's available on every page

