/*
  Exit Intent
  ===========
  Triggers a callback whenever the user is about to leave the page

  - Isn't aggressive
    - Will only trigger once
    - Will only trigger when the mouse is near top of page
  - Addresses Firefox bugs with INPUT and SELECT elements
*/

export default function onExitIntent (exitIntentCallback) {
  function onMouseOut(event) {
    let mouseNearTopOfPage = event.clientY < 20;
    let mouseDidntEnterAnotherElement = event.relatedTarget === null;
    let mouseEventIsNotInsideAnInputElement = event.target.nodeName.toLowerCase() !== "select" && event.target.nodeName.toLowerCase() !== "input"; 

    if (mouseNearTopOfPage && mouseDidntEnterAnotherElement && mouseEventIsNotInsideAnInputElement) {
      // document.removeEventListener("mouseout", onMouseOut);
      if (exitIntentCallback) {
        exitIntentCallback();
      }
    }
  }
  document.addEventListener("mouseout", onMouseOut);
}