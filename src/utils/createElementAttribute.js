function createElementAttribute(attr = "class", attrs = {}) {
  const keys = Object.keys(attrs);
  const hasValue = keys.includes(attr);
  if (!hasValue) {
    throw new Error(`The ${attr} attribtue has not been provided`);
  }

  const value = attrs[attr];

  if (typeof value !== "string") {
    throw new Error(
      `Invalid attribute value ${typeof value} for attribute ${attr}`
    );
  }

  return [attr, attrs[attr].trim()];
}

export { createElementAttribute };
