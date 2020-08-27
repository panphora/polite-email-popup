import temporaryGlobals from "../temporary-globals/temporary-globals";
import addHtmlToPage from "./add-html-to-page";
import getModalTemplateString from "../modal/get-modal-template-string";
import getBottomBarTemplateString from "../bottom-bar/get-bottom-bar-template-string";
import initElemGlobals from "./init-elem-globals";
import getStylesString from "../helpers/get-styles-string";

export default function initDomElements () {
  addHtmlToPage(getStylesString());

  if (temporaryGlobals.showDebugNotice) {
    addHtmlToPage("<div class='polite-email-popup__debug-notice'></div>");
  }

  // Add bottom bar to page
  addHtmlToPage(getBottomBarTemplateString(temporaryGlobals));
  
  // Add modal to page
  addHtmlToPage(getModalTemplateString(temporaryGlobals));

  // Add elements to temporary globals
  initElemGlobals();
}