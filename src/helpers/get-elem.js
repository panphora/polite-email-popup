let cache = {};
// caches result of getting an element
export default function getElem (selector) {
  return cache[selector] || document.querySelector(selector);
}