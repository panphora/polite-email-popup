// Main DOCS:

https://docs.google.com/document/d/1zBnJ2lj0PW0lkdfggaJytKFnDkggymcDGi4iG09FqPc/edit


// NEXT

*Polite Email Popup*
[x] Work on the README (stretch goal)
    - explain why it was created
      - makers need it
      - but you want to be polite
[ ] Close bottom bar if modal was submitted
[ ] Close modal if bottom bar was submitted 
[ ] I think yes: close bottom bar/modal if modal/bottom bar was closed
[ ] Either show success message after form is submitted or submit the form NOT through Ajax and let the email marketing service take care of the redirect
[ ] Research Mailchimp AJAX integration
[ ] Research ConvertKit AJAX integration 


// Additional important features

Don't pop up the modal or the bottom bar if users are coming from a newsletter
  - ability to pass in query string that determines if user is marked as a newsletter reader
  - store this isNewsletterReader boolean in localStorage database, so it's available on every page

