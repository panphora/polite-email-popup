export default function ({
  imageSrc = "",
  headingText = "Sign up for updates",
  descriptionText = "Get cutting edge articles and insights into our process",
  mainButtonText = "Sign up",
  closeButtonText = "Close",
  beSlightlyMoreAggressive = false

  bottomBarCountdownTime = 8,
  modalCountdownTime = 8,
  shouldCloseOnOverlayClick = false,
  enableDesktopExitIntentOnPageViewCount = 3,
  enableMobileExitIntent = false,
  enableMobileExitIntentOnPageViewCount = 3
}) {
  // ensure countdown times are a minumum of 8 seconds
  bottomBarCountdownTime = bottomBarCountdownTime >= 8 ? bottomBarCountdownTime : 8;
  modalCountdownTime = modalCountdownTime >= 8 ? modalCountdownTime : 8;

  let modalTemplateString = getModalTemplateString({imageSrc, headingText, descriptionText, mainButtonText});

  // INSERT MODAL HTML
  document.body.insertAdjacentHTML("beforeend", modalTemplateString);

  // GET MODAL ELEMENTS
  const modalElem = document.querySelector(MODAL_ELEM_CLASS);
  const modalElemForm = document.querySelector(MODAL_ELEM_FORM_CLASS);
  const modalElemCloseButton = document.querySelector(MODAL_ELEM_CLOSE_BUTTON_CLASS);

  // MODAL EVENT LISTENERS
  modalElem.addEventListener("click", event => onClickModalBackdrop({event, modalElem, shouldCloseOnOverlayClick}));
  modalElemForm.addEventListener("submit", event => onSubmit({event, modalElem}));
  modalElemCloseButton.addEventListener('click', () => closeModal({modalElem}));
  document.addEventListener("keydown", (event) => onKeyDown({event, modalElem}));

  // FIGURE OUT IF MODAL WAS CLOSED RECENTLY  
  let modalWasClosedInPastTwoDays = false;
  const modalClosedDate = getItemLocalStorage("modalClosedDate");
  if (modalClosedDate) {
    const twoDaysInMs = 1000 * 60 * 60 * 24 * 2;
    const timeBetweenDatesInMs = Date.now() - modalClosedDate;

    if (timeBetweenDatesInMs < twoDaysInMs) {
      modalWasClosedInPastTwoDays = true;
    }
  }

  // DON'T TRIGGER MODAL IF IT WAS CLOSED RECENTLY
  if (!modalWasClosedInPastTwoDays) {
    // EXIT INTENT EVENTS
    if (pageViews >= enableDesktopExitIntentOnPageViewCount) {
      setTimeout(() => {
        onExitIntent(() => openModal({modalElem}));  
      }, modalCountdownTime * 1000);
    }
    
    if (IS_MOBILE && enableMobileExitIntent && pageViews >= enableMobileExitIntentOnPageViewCount) {
      setTimeout(() => {
        initMobileExitIntent();
        onMobileExitIntent(() => openModal({modalElem}));
      }, modalCountdownTime * 1000);
    }
  }
}