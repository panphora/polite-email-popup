# A Polite Exit Intent Email Sign Up Modal

A customizeable and accessible email sign up form that pops up as a modal and along a bottom bar.

### Reason

Businesses need to make money and grow their audience, but they don't have to be rude about it.

This email sign up form plugin was invented for businesses who want to collect as many emails as possible, while also being polite about it. 

### Features

* This plugin will trigger
  * An email sign up form inside a modal when the user shows intent to leave your page. By default, this is disabled on mobile.
  * An email sign up form along the bottom of your page after a user has scrolled down at least 40% of your page and been on the page for 8 seconds or longer. By default, this is enabled on both desktop and mobile.
* The modal is accessible
  * Toggle the `aria-hidden` attribute on modal
  * Trap tab focus within the modal
  * Maintain focus position before and after toggling modal
  * Focus on the first focusable element within the modal
* You can enable an exit intent modal on desktop (as well as mobile if you want)
* You can enable clicking on the modal overlay dismissing the modal

### Politeness Rules

* Both email sign up forms (the modal and bottom bar) won't trigger before a minumum of 8 seconds has passed on at least the 3rd page view on the current site
  * On a content site, like a blog, it's recommended you change the page view option to trigger at just 1 page view, but enable the option that will only trigger it when 40% of the page has been scrolled
* The user can press the Esc key or the large close X inside either form to dismiss them. 
* The modal form and bottom bar form will never appear within 2 days of being dismissed.
* On mobile, it's strongly recommended to NOT enable the exit intent modal. However, if you do, this library will ensure there's been at least 3 page views on your website (that ensure visitor interest) before the exit intent modal will be triggered.





