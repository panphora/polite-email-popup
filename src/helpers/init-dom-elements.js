import addDebugNoticeHtmlToPage from "../debug-notice/add-debug-notice-html-to-page";
import getModalTemplateString from "../modal/get-modal-template-string";

export default function initDomElements ({showDebugNotice, imageSrc, headingText, descriptionText, mainButtonText}) {
  if (showDebugNotice) {
    addDebugNoticeHtmlToPage();
  }

  // Add modal to page
  let modalTemplateString = getTemplateString({imageSrc, headingText, descriptionText, mainButtonText});
  document.body.insertAdjacentHTML("beforeend", modalTemplateString);
}