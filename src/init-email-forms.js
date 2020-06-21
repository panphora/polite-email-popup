import {throttle} from "stormcloud";
import domReady from "./helpers/dom-ready";
import db from "./helpers/localstorage-db";
import onExitIntent from "./helpers/on-exit-intent";
import globals from "./helpers/globals";
import initDataWatchers from "./helpers/init-data-watchers";
import initModalDataWatchers from "./modal/init-modal-data-watchers";
import initModal from "./modal/init-modal";
import initDebugNotice from "./helpers/init-debug-notice";
import openModal from "./modal/open-modal";

export default function initEmailForms ({
  websiteType, // "content" or "marketing"
  beSlightlyMoreAggressive = false,
  onSubmit = () => {},
  showDebugNotice = false,
  imageSrc = "",
  headingText = "Sign up for updates",
  descriptionText = "Get cutting edge articles and insights into our process",
  mainButtonText = "Sign up",
  closeButtonText = "Close"
}) {
  domReady(() => {

    if (showDebugNotice) {
      initDebugNotice();
    }

    // add modal HTML to page and keep track of relevant modal elements
    initModal({onSubmit, imageSrc, headingText, descriptionText, mainButtonText});

    // keeps track of scroll position, page views, time on site, etc.
    initDataWatchers();

    // listens to page data and determines if modal is openable
    initModalDataWatchers({websiteType, beSlightlyMoreAggressive});

    onExitIntent(function () {
      if (globals.isModalOpenable()) {
        openModal({imageSrc, headingText, descriptionText, mainButtonText, closeButtonText});
      }
    });

  });
}














