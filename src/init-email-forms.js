import {throttle} from "stormcloud";
import domReady from "./helpers/dom-ready";

import initTemporaryGlobals from "./temporary-globals/init-temporary-globals";
import initDomElements from "./helpers/init-dom-elements";
import initElementGlobals from "./helpers/init-element-globals";


import db from "./helpers/localstorage-db";
import onExitIntent from "./helpers/on-exit-intent";
import globals from "./helpers/globals";
import initDataWatchers from "./helpers/init-data-watchers";
import initModalDataWatchers from "./modal/init-modal-data-watchers";
import initModal from "./modal/init-modal";
import initDebugNotice from "./helpers/init-debug-notice";
import openModal from "./modal/open-modal";

export default function initEmailForms ({
  showDebugNotice = false,
  websiteType, // "content" or "marketing"
  beSlightlyMoreAggressive = false,
  onSubmit = () => {},
  imageSrc = "",
  headingText = "Sign up for updates",
  descriptionText = "Get cutting edge articles and insights into our process",
  mainButtonText = "Sign up",
  closeButtonText = "Close"
}) {

  console.log("xxxx");

  domReady(() => {

    initTemporaryGlobals({showDebugNotice, websiteType, beSlightlyMoreAggressive, imageSrc, headingText, descriptionText, mainButtonText, closeButtonText});

    // add all HTML elements to the page
    initDomElements();

    // get all the elements we'll need and add them to the global data
    initElementGlobals();

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














