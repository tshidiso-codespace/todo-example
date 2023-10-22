import { getHTML } from "./helpers.js";

/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - The priority that the tasks
 * should take in terms of how quickly it should be completed
 */
const createAddingHTML = () => {
  const element = getHTML({ dataAttr: "adding" });

  const button = document.createElement("button");
  button.className = "button";
  button.innerText = "Add Task";
  element.appendChild(button);

  const dialog = document.createElement("dialog");
  dialog.className = "overlay";
  dialog.open = true;

  dialog.innerHTML = `
    
    <h2 class="overlay__title">Add Task</h2>
  
    <form data-form id="adding>
      <label class="overlay__field">
        <div>Title</div>
        <input required class="overlay__input" name="title" />
      </label>
        
      <label class="overlay__field">
        <div>Due</div>
        <input type="date" class="overlay__input" name="due />
      </label>

      <label class="overlay__field">
        <div>Urgency</div>
        <select required class="overlay__input" name="urgency" />
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="low">Low</option>
      </label>

      <label class="overlay__field">
        <div>Label</div>
        <input class="overlay__input" />
      </label>
    </form>

    <div class="overlay__row">
      <button class="button" data-cancel>Cancel</button>
      <button class="button" type="submit" form="adding>Save</button>
    </div>
  `;
  element.appendChild(dialog);

  return {
    button,
    dialog,
    form: dialog.querySelector("[data-form]"),
    cancel: dialog.querySelector("[data-cancel]"),
  };
};

/**
 * @typedef {object} Data
 * @prop {string} title
 * @prop {Data | null} due
 * @prop {Urgency} urgency
 */

/**
 * @callback Submission
 * @param {Data} data
 */

/**
 * @typedef {object} Adding
 * @prop {Submission} submission
 */
export const createAdding = () => {
  const { button, dialog, form, cancel } = createAddingHTML();

  const state = {
    submission: undefined,
  };

  button.addEventListener("click", () => {
    dialog.showModal();
  });

  cancel.addEventListener("click", () => {
    dialog.close();
  });

  form.addEventListener("click", (event) => {
    event.preventDefault();
    if (typeof state.submission !== "function") {
      throw new Error('"submission" value has to be set as function');
    }

    if (!(event.target instanceof HTMLFormElement)) {
      throw new Error("form not found");
    }

    const entries = new FormData(event.target);
    const response = Object.fromEntries(entries);
    state.submission(response);

    event.target.reset();
    dialog.close();
  });

  return {
    get submission() {
      return state.submission;
    },

    set submission(newValue) {
      state.submission = newValue;
    },
  };
};

export default createAdding;
