import {throttle} from "stormcloud";
import domReady from "./dom/dom-ready";

import initDomElements from "./dom/init-dom-elements";
import initTemporaryGlobals from "./temporary-globals/init-temporary-globals";
import initPersistentGlobals from "./persistent-globals/init-persistent-globals";
import {persistentGlobals} from "./persistent-globals/persistent-globals";

import initDebugNotice from "./debug-notice/init-debug-notice";

import onExitIntent from "./helpers/on-exit-intent";
import openModal from "./modal/open-modal";

// import initDataWatchers from "./helpers/init-data-watchers";
// import initModalDataWatchers from "./modal/init-modal-data-watchers";
// import initModal from "./modal/init-modal";

export default function initEmailForms (options) {
  domReady(() => {

    // set up all global options and elements we'll need
    initTemporaryGlobals(options);

    // add all HTML elements to the page
    initDomElements();

    // show a debug notice to keep track of triggers and user engagement
    initDebugNotice();

    // // add modal HTML to page and keep track of relevant modal elements
    // initModal();

    // // keeps track of scroll position, page views, time on site, etc.
    // initDataWatchers();

    // // listens to page data and determines if modal is openable
    // initModalDataWatchers();

    // onExitIntent(function () {
    //   if (persistentGlobals.isModalOpenable) {
    //     openModal();
    //   }
    // });

  });
}














