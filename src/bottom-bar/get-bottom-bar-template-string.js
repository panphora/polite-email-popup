export default function getBottomBarTemplateString ({headingText, mainButtonText, closeButtonText}) {
  return `<div class="bottom-bar" aria-hidden="true">
  <form class="bottom-bar__content" method="POST" action="/">
    <label class="bottom-bar__label">
      <span class="bottom-bar__label-text">${headingText}</span>
      <input class="bottom-bar__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>
      <input class="js-validate-not-robot" type="text">
    </label>
    <button class="bottom-bar__sign-up" type="submit">${mainButtonText}</button>
  </form>
  <div class="bottom-bar__close-container">
    <button class="bottom-bar__close" type="button">
      <span class="hide-mobile">${closeButtonText}</span>
      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>
    </button>
  </div>
</div>`;
}