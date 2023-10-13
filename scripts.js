// @ts-check

import { state, Task } from "./state.js";

/**
 *
 * @param {string} dataAttr
 * @param {string} [value]
 * @returns {HTMLElement}
 */
const getHTML = (dataAttr, value) => {
  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;
  const element = document.querySelector(selector);
  const isHTMLElement = element instanceof HTMLElement;

  if (!isHTMLElement) {
    throw new Error(`${selector} attribute not found in HTML`);
  }
  return element;
};

/**
 *
 * @param {string} dataAttr
 * @param {string} value
 * @returns {boolean}
 */
const doesHTMLExist = (dataAttr, value) => {
  const selector = value
    ? `[data-${dataAttr}="${value}"]`
    : `[data-${dataAttr}]`;
  const element = document.querySelector(selector);
  const isHTMLElement = element instanceof HTMLElement;

  return isHTMLElement;
};

/**
 *
 * @param {string} id
 */
const addTaskToHTML = (id) => {
  if (doesHTMLExist("task", id)) {
    throw new Error("Task with that ID already added");
  }

  const list = getHTML("list");
  const preview = document.createElement("li");
  preview.className = "task";
  preview.dataset.task = id;

  preview.innerHTML = /* html */ `
    <label class="task__check">
    <input class="task__input" type="checkbox" disabled />
    </label>
    <button class="task__title" disabled>
    </button>
    <label class="task__check">
    <svg
    class="task__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 96 960 960"
    style="display:none"
    >
    <path
        d="M253 961q-40.212 0-67.606-27.1Q158 906.8 158 867V314h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463 961 707 961H253Zm454-647H253v553h454V314ZM354 789h77V390h-77v399Zm175 0h78V390h-78v399ZM253 314v553-553Z"
    ></path>
    </svg>
    </label>`;

  list.appendChild(preview);
};

/**
 *
 * @param {string} id
 * @param {Partial<Pick<Task, 'completed' | 'due' | 'title' | 'urgency'>>} changes
 */
const updateHTMLTask = (id, changes) => {
  const element = document.querySelector(`[data-task="${id}"`);
  const isHTMLElement = element instanceof HTMLElement;
  if (!isHTMLElement) throw new Error("");
};

window.addEventListener("error", () => {
  document.body.innerHTML = "Something wene very wrong. Please refresh.";
});

addTaskToHTML("test");
updateHTMLTask("test", { title: "Wash the Dog" });
