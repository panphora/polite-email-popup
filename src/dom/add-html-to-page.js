export default function addHtmlToPage (htmlString) {
  document.body.insertAdjacentHTML("beforeend", htmlString);
}