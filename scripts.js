// @ts-check

import { createTask } from "./modules/tasks.js";
import { createAdding } from "./modules/adding.js";

// /**
//  *
//  * @param {string} id
//  * @param {Partial<Pick<Task, 'completed' | 'due' | 'title' | 'urgency'>>} changes
//  */
// const updateHTMLTask = (id, changes) => {
//   const element = document.querySelector(`[data-task="${id}"`);
//   const isHTMLElement = element instanceof HTMLElement;
//   if (!isHTMLElement) throw new Error("");
// };

window.addEventListener("error", () => {
  document.body.innerHTML = "Something went very wrong. Please refresh.";
});

// createTask({
//   title: "Wash the Dog",
//   urgency: "High",
//   due: new Date(),
// });

const adding = createAdding();

adding.submission = createTask;
