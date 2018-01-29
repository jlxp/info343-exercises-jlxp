//@ts-check
"use strict";

/**
 * @typedef Task
 * @property {string} title
 * @property {boolean} [done]
 */

/**
 * @typedef State
 * @property {Task[]} tasks
 */

/**
 * @type {State}
 */
let state = {
    tasks: [
        {title: "Learn the DOM"},
        {title: "Buy Dr Stearns a Tesla Roadster"}
    ]
};

/**
 * Renders a single task as an <li>
 * @param {Task} task 
 * @returns {HTMLElement}
 */
function renderTask(task) {
    //TODO: create a new <li> for the task,
    //populate it, add a click event listener,
    //and return it
}

/**
 * Renders the application state to the page
 * @param {State} state 
 */
function render(state) {
    //TODO: clear the #tasks-ul element
    //and render each task, appending the
    //returned <li> to the <ul>
}

//do an initial rendering
render(state);

//TODO: add event listener for the new task form 
//submit event that adds new tasks to the list


//TODO: add event listener for the purge completed
//button click event that purges completed tasks
//from the list
