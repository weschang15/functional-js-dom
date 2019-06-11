function createTextElement(text, element) {
  const fragment = document.createDocumentFragment();
  const textNode = document.createTextNode(text);

  if (element) {
    element.appendChild(textNode);
    fragment.appendChild(element);
  } else {
    fragment.appendChild(textNode);
  }

  return fragment;
}

export { createTextElement };
