import tigerlily from "tigerlily";

let persistentGlobals;

if (!persistentGlobals) {
  persistentGlobals = tigerlily('polite-pop');
}

window.persistentGlobals = persistentGlobals; // todo remove

export {tigerlily, persistentGlobals};