import { createElementAttribute } from "./createElementAttribute";

function createElement(tag = "div", attrs = {}) {
  const fragment = document.createDocumentFragment();
  const element = document.createElement(tag);

  const attributes = Object.keys(attrs).map(attr =>
    createElementAttribute(attr, attrs)
  );

  attributes.forEach(([key, value]) => element.setAttribute(key, value));

  return fragment.appendChild(element);
}

export { createElement };
