import {throttle} from "stormcloud";
import {persistentGlobals} from "./persistent-globals";

/*

  Keep track of:
  - pageViews
  - activeTimeOnPage
  - activeTimeOnSite
  - highestScrollPercentageAcrossAllPages

*/ 
export default function initPersistentGlobals (allOptions) {
  if (!isNumberDefined(persistentGlobals.pageViews)) {
    persistentGlobals.pageViews = 1;
  } else {
    persistentGlobals.pageViews++;
  }

  if (!isNumberDefined(persistentGlobals.highestScrollPercentageAcrossAllPages)) {
    persistentGlobals.highestScrollPercentageAcrossAllPages = 0;
  }

  if (!isNumberDefined(persistentGlobals.activeTimeOnSite)) {
    persistentGlobals.activeTimeOnSite = 0;
  }

  // refresh this value for every page
  persistentGlobals.activeTimeOnPage = 0;

  watchCurrentScrollPercentage();
}

function isNumberDefined (val) {
  return typeof val === "number" && !Number.isNaN(val);
}

function watchCurrentScrollPercentage () {
  window.addEventListener('scroll', throttle(function () {
    // will execute once for every second the user is scrolling
    setHighestScrollPercentage();
    persistentGlobals.activeTimeOnPage++;
    persistentGlobals.activeTimeOnSite++;
  }, 1000));
}

function setHighestScrollPercentage () {
  let currentScrollPercentage = getScrollPercentage();
  if (currentScrollPercentage > persistentGlobals.highestScrollPercentageAcrossAllPages) {
    persistentGlobals.highestScrollPercentageAcrossAllPages = currentScrollPercentage;
  }
}

function getScrollPercentage () {
  // get the scroll height of the document (https://javascript.info/size-and-scroll-window#width-height-of-the-document) 
  let docScrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  // calculate scroll percentage (subtract browser height since that's not actually scrollable)
  let scrollPercentage = window.pageYOffset / (docScrollHeight - document.documentElement.clientHeight);
  // calculate percentage
  return Math.floor(scrollPercentage * 100);
}



