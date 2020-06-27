import domReady from "./dom/dom-ready";

import watchTriggerData from "./trigger-popups/watch-trigger-data";
import initTemporaryGlobals from "./temporary-globals/init-temporary-globals";
import initPersistentGlobals from "./persistent-globals/init-persistent-globals";
import initDomElements from "./dom/init-dom-elements";

import initDebugNoticeEventListeners from "./debug-notice/init-debug-notice-event-listeners";
import initModalEventListeners from "./modal/init-modal-event-listeners";
import initBottomBarEventListeners from "./bottom-bar/init-bottom-bar-event-listeners";



// import initDataWatchers from "./helpers/init-data-watchers";
// import initModalDataWatchers from "./modal/init-modal-data-watchers";
// import initModal from "./modal/init-modal";

export default function initEmailForms (options) {
  domReady(() => {

    // set up all global options and elements we'll need
    initTemporaryGlobals(options);

    // add debug notice, modal, and bottom bar to the page 
    // (relies on selectors in temporary globals being defined)
    initDomElements();

    // trigger the popups when data is right 
    // (relies on DOM elements being present)
    watchTriggerData();

    // set up global options that need to persist through page loads (e.g. page views, scroll percentage, active time on site)
    // (should be called after trigger data watchers, so they'll trigger immediately on page load)
    initPersistentGlobals();

    // set up event listeners for debug notice
    initDebugNotice();

    // set up event listeners for email popup
    initModal();

    // set up event listeners for email popup
    initBottomBarEventListeners();

  });
}














