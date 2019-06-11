import { createElement } from "./utils/createElement";
import { createTextElement } from "./utils/createTextElement";
import { append } from "./utils/append";

const createRow = () => createElement("tr", { class: "row" });

const createTitleCell = () =>
  createElement("td", { class: "row-cell row-cell--title" });

const createTitleElement = () =>
  createTextElement("Some post title", createElement("span"));

const createActionsCell = () =>
  createElement("td", { class: "row-cell row-cell--actions" });

const createRemoveAction = () =>
  createTextElement(
    "Remove",
    createElement("a", { class: "action action--remove" })
  );

const createCellWithTitle = () =>
  append(createTitleCell(), createTitleElement());

const createCellWithActions = () =>
  append(createActionsCell(), createRemoveAction());

const row = append(createRow(), [
  createCellWithTitle(),
  createCellWithActions()
]);

console.log(row);
