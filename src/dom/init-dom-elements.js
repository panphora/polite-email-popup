import temporaryGlobals from "../temporary-globals/temporary-globals";
import addHtmlToPage from "./add-html-to-page";
import getDebugNoticeTemplateString from "../debug-notice/get-debug-notice-template-string";
import getModalTemplateString from "../modal/get-modal-template-string";
import getBottomBarTemplateString from "../bottom-bar/get-bottom-bar-template-string";
import initElemGlobals from "./init-elem-globals";

export default function initDomElements () {
  if (temporaryGlobals.showDebugNotice) {
    addHtmlToPage(getDebugNoticeTemplateString());
  }

  // Add modal to page
  addHtmlToPage(getModalTemplateString(temporaryGlobals));

  // Add bottom bar to page
  addHtmlToPage(getBottomBarTemplateString(temporaryGlobals));

  // Add elements to temporary globals
  initElemGlobals();
}