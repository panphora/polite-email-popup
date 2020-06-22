import domReady from "./dom/dom-ready";

import initDomElements from "./dom/init-dom-elements";
import initTemporaryGlobals from "./temporary-globals/init-temporary-globals";
import initPersistentGlobals from "./persistent-globals/init-persistent-globals";
import {persistentGlobals} from "./persistent-globals/persistent-globals";

import initDebugNotice from "./debug-notice/init-debug-notice";
import initModal from "./modal/init-modal";



// import initDataWatchers from "./helpers/init-data-watchers";
// import initModalDataWatchers from "./modal/init-modal-data-watchers";
// import initModal from "./modal/init-modal";

export default function initEmailForms (options) {
  domReady(() => {

    // set up all global options and elements we'll need
    initTemporaryGlobals(options);

    // set up global options that need to persist through page loads (e.g. page views, scroll percentage, active time on site)
    initPersistentGlobals();

    // add debug notice, modal, and bottom bar to the page
    initDomElements();

    // show a debug notice to keep track of triggers and user engagement
    initDebugNotice();

    // set up event listeners for email popup
    initModal();

    // // listens to page data and determines if modal is openable
    // initModalDataWatchers();

  });
}














