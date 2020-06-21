export default function getBottomBarTemplateString ({headingText, mainButtonText, closeButtonText}) {
  return `<div class="bottom-bar">
  <form class="bottom-bar__content" method="POST" action="/">
    <label class="bottom-bar__label">
      <span class="bottom-bar__label-text">${headingText}</span>
      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="you@example.com">
    </label>
    <button class="bottom-bar__sign-up" type="submit">${mainButtonText}</button>
  </form>
  <div class="bottom-bar__close-container">
    <button class="bottom-bar__close" type="button">${closeButtonText}</button>
  </div>
</div>`;
}