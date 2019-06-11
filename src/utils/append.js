function append(parent, children) {
  Array.isArray(children)
    ? children.forEach(child => parent.appendChild(child))
    : parent.appendChild(children);

  return parent;
}

export { append };
