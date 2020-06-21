const FOCUSABLE_SELECTORS = 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]';
const IS_MOBILE = window.matchMedia("only screen and (max-width: 780px)").matches;
const MODAL_ELEM_CLASS = '.email-modal';
const MODAL_ELEM_FORM_CLASS = '.email-modal__content';
const MODAL_ELEM_CLOSE_BUTTON_CLASS = '.email-modal__close';

let activeElementOfDocument;
let onMobileExitIntentCallback;

const {getItemLocalStorage, setItemLocalStorage} = initLocalStorageDatabase({databaseName: "database_wBLhIXkitW"});

// keep track of page views
let pageViews = getItemLocalStorage("pageViews") || 0;
pageViews += 1;
setItemLocalStorage("pageViews", pageViews);

function getModalTemplateString ({imageSrc, headingText, descriptionText, mainButtonText}) {
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
      <input class="email-modal__input" type="email" value="" placeholder="email@example.com">
    </div>
    <div class="email-modal__button-container">
      <button class="email-modal__sign-up" type="submit">${mainButtonText}</button>
    </div>
    <button class="email-modal__close" type="button"></button>
  </form>
</div>
`;
}

function openModal({modalElem}) {
  activeElementOfDocument = document.activeElementOfDocument;

  // show the modal
  modalElem.style.display = 'flex';
  setTimeout(() => {
    document.body.classList.add("email-signup-modal-open");
  }, 100);
  
  // Focus the first element within the modal. Make sure the element is visible and doesnt have focus disabled (tabindex=-1);
  modalElem.querySelector(FOCUSABLE_SELECTORS).focus();

  // Trap the tab focus by disable tabbing on all elements outside of your modal.  Because the modal is a sibling of main, this is easier. Make sure to check if the element is visible, or already has a tabindex so you can restore it when you untrap.    
  const focusableElements = document.querySelectorAll(FOCUSABLE_SELECTORS);
  const focusableElementsInModal = modalElem.querySelectorAll(FOCUSABLE_SELECTORS);
  const focusableElementsInModalArray = Array.from(focusableElementsInModal);
  focusableElements.forEach(el => {
    if (!focusableElementsInModalArray.includes(el)) {
      el.setAttribute('tabindex', '-1');
    }
  });

  // Trap the screen reader focus as well with aria roles. This is much easier as our main and modal elements are siblings, otherwise you'd have to set aria-hidden on every screen reader focusable element not in the modal.
  modalElem.removeAttribute('aria-hidden');
  const topLevelElements = Array.from(document.body.children);
  topLevelElements.forEach(el => {
    if (el !== modalElem) {
      el.setAttribute('aria-hidden', 'true');
    }
  });

  bodyScrollLock.disableBodyScroll(modalElem);
}

function closeModal({modalElem}) {
  document.body.classList.remove("email-signup-modal-open");

  // keep track of when the modal was closed
  setItemLocalStorage("modalClosedDate", Date.now());

  // hide the modal
  modalElem.style.display = 'none';

  // Untrap the tab focus by removing tabindex=-1. You should restore previous values if an element had them.    
  const focusableElements = document.querySelectorAll(FOCUSABLE_SELECTORS);
  focusableElements.forEach(el => el.removeAttribute('tabindex'));
  
  // Untrap screen reader focus
  const topLevelElements = document.querySelectorAll("body > [aria-hidden]");
  topLevelElements.forEach(el => {
    el.removeAttribute('aria-hidden');
  });
  modalElem.setAttribute('aria-hidden', 'true');
  
  // restore focus to the triggering element
  if (activeElementOfDocument) {
    activeElementOfDocument.focus();
  }

  bodyScrollLock.enableBodyScroll(modalElem);
}

function onKeyDown ({event, modalElem}) {
  if (event.keyCode === 27 && document.body.classList.contains("email-signup-modal-open")) {
    closeModal({modalElem});
  }
}

function onSubmit ({event, modalElem}) {
  event.preventDefault();
  // console.log("onSubmit", event, modalElem);
}

function onClickModalBackdrop ({event, modalElem, shouldCloseOnOverlayClick}) {
  if (shouldCloseOnOverlayClick && !event.target.closest(MODAL_ELEM_FORM_CLASS)) {
    closeModal({modalElem});
  }
}

function initEmailSignupForms({
  imageSrc = "",
  headingText = "Sign up for updates",
  descriptionText = "Get cutting edge articles and insights into our process",
  mainButtonText = "Sign up",
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


function onMobileExitIntent (callback) {
  onMobileExitIntentCallback = callback;
}

function initMobileExitIntent () {
  let maxScrollY = 0;

  function onScroll () {
    let currentScrollY = window.scrollY;

    if (currentScrollY > maxScrollY) {
      maxScrollY = currentScrollY;
    }

    if ((maxScrollY - currentScrollY) > 500) {
      window.removeEventListener('scroll', onScroll);
      if (onMobileExitIntentCallback) {
        onMobileExitIntentCallback();
      }
    }
  }

  window.addEventListener('scroll', onScroll);
}

window.initEmailSignupForms = initEmailSignupForms;




