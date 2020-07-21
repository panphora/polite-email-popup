import tigerlily from "tigerlily";

let persistentGlobals;

if (!persistentGlobals) {
  persistentGlobals = tigerlily('polite-email-popup');
}

window.persistentGlobals = persistentGlobals; // todo remove

export {tigerlily, persistentGlobals};