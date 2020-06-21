import {throttle} from "stormcloud";
import domReady from "./dom/dom-ready";

import initDomElements from "./dom/init-dom-elements";
import initTemporaryGlobals from "./temporary-globals/init-temporary-globals";
import initPersistentGlobals from "./persistent-globals/init-persistent-globals";
import {persistentGlobals} from "./persistent-globals/persistent-globals";

import initDebugNotice from "./debug-notice/init-debug-notice";
import initExitIntent from "./modal/init-exit-intent";



// import initDataWatchers from "./helpers/init-data-watchers";
// import initModalDataWatchers from "./modal/init-modal-data-watchers";
// import initModal from "./modal/init-modal";

export default function initEmailForms (options) {
  domReady(() => {

    // set up all global options and elements we'll need
    initTemporaryGlobals(options);

    // set up global options that need to persist through page loads
    initPersistentGlobals();

    // add debug notice, modal, and bottom bar to the page
    initDomElements();

    // show a debug notice to keep track of triggers and user engagement
    initDebugNotice();

    // watches for exit intent and opens the modal if it's polite to do so
    initExitIntent();

    // // add modal HTML to page and keep track of relevant modal elements
    // initModal();

    // // keeps track of scroll position, page views, time on site, etc.
    // initDataWatchers();

    // // listens to page data and determines if modal is openable
    // initModalDataWatchers();

  });
}














