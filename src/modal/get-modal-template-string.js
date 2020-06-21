export default function getModalTemplateString ({imageSrc, headingText, descriptionText, mainButtonText}) {
  return `
<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true" style="display: none">
  <form class="email-modal__content" method="POST" action="/">
    <div class="email-modal__top">
      <div class="email-modal__top-media">
        <img class="email-modal__top-image" src="${imageSrc}">
      </div>
      <div class="email-modal__top-content">
        <h2 class="email-modal__title" id="email-modal-title">${headingText}</h2>
        <p class="email-modal__description" id="email-modal-description">${descriptionText}</p>
      </div>
    </div>
    <div class="email-modal__input-container">
      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="email@example.com">
    </div>
    <div class="email-modal__button-container">
      <button class="email-modal__sign-up" type="submit">${mainButtonText}</button>
    </div>
    <button class="email-modal__close" type="button"></button>
  </form>
</div>
`;
}