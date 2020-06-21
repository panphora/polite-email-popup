function trigger (name, value) {
  let event = new CustomEvent(name, { detail: value });
  document.dispatchEvent(event);
}

function listen (name, cb) {
  document.addEventListener(name, function (event) {
    cb(event.detail);
  }, false);
}

export default {
  trigger,
  listen
}