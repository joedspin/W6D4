const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function (selector) {
  if (typeof selector === "string") {
    const nodeList = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(nodeList);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }
};