export default function getBottomBarTemplateString ({headingText, mainButtonText, closeButtonText}) {
  return `<div class="bottom-bar" aria-hidden="true">
  <form class="bottom-bar__content" method="POST" action="/">
    <label class="bottom-bar__label-text" for="bottom-bar-email">${headingText}</label>
    <div class="bottom-bar__bottom">
      <input id="bottom-bar-email" class="bottom-bar__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input class="js-validate-not-robot" type="text" tabindex="-1" value="">
      </div>
      <button class="bottom-bar__sign-up" type="submit">${mainButtonText}</button>
    </div>
  </form>
  <div class="bottom-bar__close-container">
    <button class="bottom-bar__close" type="button">
      <span class="hide-mobile">${closeButtonText}</span>
      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>
    </button>
  </div>
</div>`;
}