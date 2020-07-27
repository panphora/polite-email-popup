import { Notyf } from 'notyf';
let notyf = new Notyf({
  duration: 5000,
  position: {
    x: "center",
    y: "top"
  },
  dismissible: true
});

export function showSuccessMessage (msg) {
  notyf.success(msg);
}

export function showErrorMessage (msg) {
  notyf.error(msg)
}