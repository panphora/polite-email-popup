import {throttle} from "stormcloud";
import globals from "./globals";
import domReady from "./dom-ready";

function getScrollPercentage () {
  // get the scroll height of the document (https://javascript.info/size-and-scroll-window#width-height-of-the-document) 
  let docScrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  // calculate scroll percentage (subtract browser height since that's not actually scrollable)
  let scrollPercentage = window.pageYOffset / (docScrollHeight - document.documentElement.clientHeight);
  // calculate percentage
  return Math.floor(scrollPercentage * 100);
}

let setCurrentScrollPercentageThrottled = throttle(1000, function () {
  // the following code will execute every time the user scrolls
  // as well as after every second of that scroll

  globals.setHighestScrollPercentage(getScrollPercentage());
  globals.incrementActiveTimeOnSite();
  globals.incrementActiveTimeOnPage();
});

export default function initDataWatchers () {
  globals.incrementSitePageViews();

  domReady(function () {
    window.addEventListener('scroll', setCurrentScrollPercentageThrottled);
  });
}







