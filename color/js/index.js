//@ts-check
"use strict";

/**
 * Clones an object by shallowly copying all of 
 * its properties to a new object instance
 * @param {Object} obj - the object to clone
 * @returns {Object}
 */
function cloneObject(obj) {
    //for details on what Object.assign does, see
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    return Object.assign({}, obj);
}

/**
 * @typedef Color
 * @property {string} name - name of the color
 * @property {number} r - red value of the color
 * @property {number} g - green value of the color
 * @property {number} b - blue value of the color
 */

/**
 * @typedef State
 * @property {Color[]} colors - predefined colors
 * @property {Color|undefined} selectedColor - the currently selected color
 */

/**
 * @type {State}
 */
let state = {
    colors: [
        {name: "red", r: 255, g: 0, b: 0},
        {name: "orange", r: 255, g: 128, b: 0},
        {name: "yellow", r: 255, g: 255, b: 0},
        {name: "green", r: 0, g: 255, b: 0},
        {name: "blue", r: 0, g: 0, b: 255},
        {name: "indigo", r: 0, g: 0, b: 128},
        {name: "violet", r: 128, g: 0, b: 255},
        {name: "black", r: 0, g: 0, b: 0},
        {name: "white", r: 255, g: 255, b: 255}        
    ],
    selectedColor: undefined
}

//initialize selectedColor to be the first of the pre-defined colors
state.selectedColor = cloneObject(state.colors[0]);

/**
 * Returns a CSS `rgb()` expression for the given color.
 * Callers can use the returned `rgb()` expression to set
 * an element's `.style.backgroundColor` property
 * @param {Color} color 
 * @returns {string} - the rgb() expression for the provided color
 */
function toRGB(color) {
    //TODO: return a string in the form of:
    //  rgb(red-value,green-value,blue-value)
    //where `red-value` is replaced with the color's red value
    //`green-value` is replaced with the color's green value,
    //and `blue-value` is replaced with the color's blue value.

}

/**
 * Renders a specific Color object as a <button> element with
 * that color as the element's .style.backgroundColor
 * @param {Color} color 
 * @returns {HTMLButtonElement}
 */
function renderSwatch(color) {
    //TODO: create a new <button> element

    //add the style class "swatch" to its class list
    //https://drstearns.github.io/tutorials/dom/#secaddingremovingstyleclasses

    //set the .style.backgroundColor property to the string
    //you get back from calling your toRGB() function above
    //https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

    //set the button's `.title` property to be the color name
    //https://www.w3schools.com/jsref/prop_html_title.asp

    //set the `aria-label` attribute to be the string:
    // "select " + color.name
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    //https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute

    //add a click event listener on this button that sets the
    //state.selectedColor value to a clone of this current color object
    //and then re-renders to show the selected color
    //HINT: use the cloneObject() function defined above

    //return the <button> you just created and initialized

}

/**
 * Renders the application state to the page
 * @param {State} state 
 */
function render(state) {
    //clear the <div class="swatches"> element
    //and for each color in state.colors,
    //append the <button> that is returned from
    //your renderSwatch() function

    //set the .style.backgroundColor of the 
    //<div class="current"> element so that it
    //shows the currently-selected color

    //set the values of the red, green, and blue
    //<input> elements to the r,g,b values from the
    //selected color
    //https://drstearns.github.io/tutorials/dom/#secgettingsettingthevalueofaninput
    
}

//do an initial render of the application state
render(state);

/* TODO: add event listeners for the "input" event raised by
each of the red, green, and blue input elements. The "input"
event occurs anytime the value of the input changes. When
the value of one of those inputs changes, modify the corresponding
color value in the state.selectedColor and re-render.
*/


/* TODO: add an event listener for the "click" event raised by
the <button class="add-custom-color-button"> element. When that
button is clicked, create a new color object, using the current
values in the red, green, blue inputs and the name in the 
<input class="custom-color-name"> element as the color name.
Push that new color into state.colors and re-render.
*/

