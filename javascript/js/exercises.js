//@ts-check
/**
 * The comment above just tells Visual Studio Code to do some extra
 * type checking at development time. It has no effect on the execution
 * of this code at runtime in the browser. VSCode uses the JSDoc information
 * in the comments above each function to know what type of data each
 * parameter expects, and what type of data the function returns. This
 * type information allows VSCode to flag potential errors in your code
 * and provide helpful IntelliSense features while you code. For more
 * information see the VSCode documentation:
 * https://code.visualstudio.com/docs/languages/javascript#_type-checking-and-quick-fixes-for-javascript-files
 */

/**
 * TODO: tell the interpreter to go into strict mode
 * https://drstearns.github.io/tutorials/javascript/#secstrictmode
 */
"use strict";


/**
 * TODO: implement each function below according to the comments above
 * the function. Use the hint links within the function body to see the
 * relevant documentation. Feel free to work together with another student,
 * and ask questions of us if you get stuck or need clarification. To
 * verify your implementations, open the `index.html` file in your browser.
 * Each time that page is refreshed, it will run all the automated tests
 * and report the results. If you use `live-server`, it will auto-refresh
 * and re-run the tests each time you save your code!
 */

/**
 * Returns true if the two strings contain the same
 * letters regardless of case, false otherwise.
 * @param {string} string1 
 * @param {string} string2 
 * @returns {boolean}
 */
function caseInsensitiveEquals(string1, string2) {
    //hints:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    return string1.toLowerCase() === string2.toLowerCase();
}

/**
 * Returns true if `stringValue` starts with `prefix`.
 * @param {string} stringValue 
 * @param {string} prefix 
 * @returns {boolean}
 */
function startsWith(stringValue, prefix) {
    //although there is now a `startsWith()` method on all
    //strings, this won't be supported in older browsers, so
    //implement this logic yourself using `.substr()`
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    return stringValue.substr(0, prefix.length).toLowerCase() === prefix.toLowerCase();
}

/**
 * Returns a title-case form of `word` where
 * the first letter is in upper-case and the rest
 * is in lower-case.
 * @param {string} word - a single word to capitalize 
 * @returns {string}
 */
function toTitleCase(word) {
    //hints:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
}

/**
 * Returns a pseudo-random integer that is >= min and < max.
 * @param {number} min - the minimum number
 * @param {number} max - the maximum number
 * @returns {number}
 */
function randomInteger(min, max) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    return Math.floor(Math.random() * (max - min) + min);
}

//ARRAYS
/**
 * Returns a new array containing the elements
 * "low", "medium", and "high" (in that order).
 * @returns {string[]}
 */
function createPrioritiesArray() {
    //don't overthink this: I just want you to practice the array literal syntax
    //https://developer.mozilla.org/en-US/docs/Glossary/array
    return ["low", "medium", "high"];
}

/**
 * Returns an array containing all
 * even numbers >= 0 and < `max`
 * @param {number} max - the maximum number
 * @returns {number[]}
 */
function evensUnder(max) {
    //hints:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    let result = [];
    for (let i = 0; i < max; i+=2) {
        result.push(i);
    }
    return result;
}

/**
 * Returns the index of `element` within `array`,
 * or -1 if the element is not in the array.
 * Compares elements using strict equality.
 * @param {Array} array - the array to search
 * @param {*} element - the element to find
 * @returns {number} - the index of the element, or -1 if not found
 */
function elementIndex(array, element) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    //https://drstearns.github.io/tutorials/javascript/#secequalityandcoercion
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

/**
 * Returns the largest number from the array of numbers.
 * @param {number[]} numberArray 
 * @returns {number} - the largest number
 */
function largestNumber(numberArray) {
    //hint: you'll need a variable outside of your for loop
    //to track the largest number you've seen so far
    let max = numberArray[0];
    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] > max) {
            max = numberArray[i];
        }
    }
    return max;
}

/**
 * Returns the average of the numbers in `numberArray`.
 * If the `numberArray` is empty, it returns the literal
 * value undefined.
 * @param {number[]} numberArray 
 * @returns {number|undefined} - the average of the numbers in the numberArray
 */
function average(numberArray) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    if (numberArray.length === 0) {
        return undefined;
    } else {
        let avg = 0;
        for (let i = 0; i < numberArray.length; i++) {
            avg += numberArray[i];
        }
        return avg = avg / numberArray.length;
    }
}

/**
 * Returns a new array that contains the same elements
 * as the source `array`, but in reverse order.
 * @param {Array} array 
 * @returns {Array}
 */
function reverseArray(array) {
    //don't reverse the array in-place.
    //create a new array and populate it with 
    //the same elements but in reverse order
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

/**
 * Represents a task to do.
 * This declaration doesn't affect the execution of
 * your script at runtime, but it is used by VSCode
 * at development time to provide helpful type information
 * and error checking. DO NOT DELETE OR MODIFY THIS!
 * @typedef Task
 * @prop {string} title - title of task
 * @prop {boolean} done - true if task is done
 * @prop {number} [priority] - optional priority for this task
 * @prop {string[]} [tags] - optional array of tags for this task
 */

/**
 * Returns a new JavaScript object with only two properties:
 * `title` set to the value of the `taskTitle` parameter;
 * and `done` set to false.
 * @param {string} taskTitle 
 * @returns {Task} a new JavaScript object representing the task
 */
function createTask(taskTitle) {
    //use the object literal syntax to create a new object
    //with only two properties as described above.
    //https://drstearns.github.io/tutorials/javascript/#secobjects
    let task = {
        title: taskTitle,
        done: false
    }
    return task;
}

/**
 * Sets the task's `priority` property to
 * the value passed as the `taskPriority` parameter.
 * @param {Task} task 
 * @param {number} taskPriority 
 */
function setPriority(task, taskPriority) {
    //https://drstearns.github.io/tutorials/javascript/#secobjects
    task.priority = taskPriority;
}

/**
 * Toggles the `done` property of the task from
 * false to true or true to false, and returns
 * the same task it received.
 * @param {Task} task 
 * @returns {Task}
 */
function toggleDone(task) {
    //https://drstearns.github.io/tutorials/javascript/#secobjects
    if (task.done) {
        task.done = false;
    } else {
        task.done = true;
    }
}

/**
 * Adds the value in the `tag` parameter to the 
 * array of tags in the task's `tags` property.
 * If the task does not have a `tags` property,
 * this will add one, set to an array containing the tag.
 * If the tag is already in the array, it will NOT
 * add it again.
 * @param {Task} task 
 * @param {string} tag 
 */
function addTag(task, tag) {
    //if `task` does not have a `tags` property
    //add one set to a new array containing the
    //value of the `tag` parameter.
    //else if the task.tags array doesn't already
    //contain the value of the `tag` parameter, 
    //add the value of the `tag` parameter to the array.
    if (task.hasOwnProperty("tags")) {
        let found = false;
        for (let i = 0; i < task.tags.length; i++) {
            if (task.tags[i] === tag) {
                found = true;
            }
        }
        if (!found) {
            task.tags.push(tag);
        }
    } else {
        task.tags = [tag];
    }
}

/**
 * Removes the specified tag from the array of
 * tags stored in the task's `tags` property.
 * If there are no more tags after the removal,
 * this will also delete the `tags` property from
 * the task.
 * @param {Task} task 
 * @param {string} tag 
 */
function removeTag(task, tag) {
    //if `task` has a `tags` property,
    //find the element matching the value of the `tag`
    //parameter and remove it from the array.
    //if there are no more tags, delete the `tags`
    //property from the `task` object.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
    if (task.hasOwnProperty("tags")) {
        for (let i = 0; i < task.tags.length; i++) {
            if (task.tags[i] === tag) {
                task.tags.splice(i, 1);
            }
        }
    }
    if (task.tags.length === 0) {
        delete task.tags;
    }
}

/**
 * Returns a new array containing task objects as
 * the elements, one for each element in the `titlesArray`,
 * which is an array of simple strings that should be used
 * as the titles for the new tasks.
 * @param {string[]} titlesArray 
 * @returns {Task[]}
 */
function createTasksArray(titlesArray) {
    //use your createTask() function above
    //to create each task object
    let result = [];
    for (let i = 0; i < titlesArray.length; i++) {
        result.push(createTask(titlesArray[i]));
    }
    return result;
}

/**
 * Given a nested object like this:
 * {
 *   a: {
 *     m: {
 *       x: "foo"
 *     }
 *   }
 * }
 * This function will let you get the value associated
 * with `a.m.x` by passing the root object as `obj` and
 * the string "a.m.x" as `propPath`. This function
 * will follow the properties in the path and return the
 * value associated with the last property in the path. If
 * a property at any level doesn't exist, this function
 * will return immediately with `undefined`.
 * @param {Object} obj - a JavaScript object
 * @param {string} propPath - a dot-delimited property path
 * @returns {*|undefined}
 */
function getProperty(obj, propPath) {
    //use .split() to split a delimited string into an array:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    
    //remember that you can get the value associated
    //with a property name stored in a variable using the
    //obj[variable] syntax.
    let path = propPath.split(".");
    let prev = obj;
    for (let i = 0; i < path.length; i++) {
        if (prev[path[i]] === undefined) {
            return undefined;
        }
        prev = prev[path[i]];
    }
    return prev;
}
