import domReady from "../dom/dom-ready";
import { Notyf } from 'notyf';

let notyf = {
  success: () => {},
  error: () => {}
};

domReady(() => {
  notyf = new Notyf({
    duration: 8000,
    position: {
      x: "center",
      y: "bottom"
    },
    dismissible: true
  });
});

export function showSuccessMessage (msg) {
  notyf.success(msg);
}

export function showErrorMessage (msg) {
  notyf.error(msg)
}
