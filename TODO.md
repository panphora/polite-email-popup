// Main DOCS:

https://docs.google.com/document/d/1zBnJ2lj0PW0lkdfggaJytKFnDkggymcDGi4iG09FqPc/edit


// NEXT

*Polite Email Popup*
[√] Updating debug notice
[√] Trigger bottom bar when requirements are met
[√] Fix: trigger requirements should be checked immediately
[√] Style bottom bar for mobile
[√] Fix: bottom bar should appear below modal backdrop
[√] Added a bypass button to skip all requirements while debugging
[ ] Close bottom bar after clicking close button
[ ] Allow bottom bar form to submit email
[ ] If closed in past 2 days, don't open email forms again
[ ] Work on the README (stretch goal)

- style bottom bar for mobile
- create data watchers for bottom bar
- pop up bottom bar when requirements have been met
- keep track of
  - if the user saw the modal yet
  - if the user closed the modal
  - if the user closed the bottom bar
- dont trigger modal or bottom bar if
  - it was seen before (seen and page reload)
  - it was closed before
  - ^ wait a certain amount of time before this is reset
- make readme 
  - explain why it was created
    - makers need it
    - but you want to be polite
  - logo

// Additional important features

Don't pop up the modal or the bottom bar if users are coming from a newsletter
  - ability to pass in query string that determines if user is marked as a newsletter reader
  - store this isNewsletterReader boolean in localStorage database, so it's available on every page

