//@ts-check
"use strict";

/**
 * @typedef State
 * @property {number} [startTime] - the value of Date.now() when the timer was started
 * @property {Object} [timer] - the current timer ID returned from setInterval()
 */

/**
 * @type {State}
 */
let state = {
    startTime: undefined,
    timer: undefined
}

/**
 * Renders the current application state to the page
 * @param {State} state 
 */
function render(state) {
    let elapsed = Date.now() - state.startTime;
    
    elapsed
    /* TODO: state.startTime property will be set to the
    result of calling Date.now() when the timer is started. 
    This value is the number of milliseconds that have elapsed
    between Jan 1, 1970 and the moment when Date.now() was
    called. Call Date.now() again in this function and
    then subtract state.startTime from the result to get the
    number of milliseconds that have elapsed since the timer
    was started. Then convert that into a number of minutes
    and seconds. There are 1000 milliseconds in one second,
    and there are 60 seconds in one minute. For example, if
    62000 milliseconds have elapsed, you should covert that
    into 1 minute and 2 seconds. If the number of milliseconds
    doesn't divide evenly into seconds, use Math.floor() to
    round down to the previous second.

    After you calculate the elapsed minutes and seconds,
    set the text content of the <span class="minutes">
    element to the number of minutes, and the text content
    of the <span class="seconds"> element to the number of
    seconds.
    https://drstearns.github.io/tutorials/dom/#secgettingsettingthecontentofanelement

    FYI: the reason we are storing a start time in the state
    rather than the number of elapsed seconds is because
    timer functions in JavaScript are not guaranteed to run 
    exactly at the interval you request. JavaScript is single-
    threaded, so if the interpreter is busy running other code
    when your timer fires, it will wait to run your timer function
    until the current code execution finishes. If you merely
    increment an elapsed number of seconds during your timer
    function, you'll quickly experience clock skew.
    */
}

//TODO: select the <button class="start-button"> element
//and add a click event listener. When the button is clicked,
//set state.startTime to the result of calling Date.now(),
//use setInterval() to start a timer that fires every 1000
//milliseconds, and store the return value in `state.timer` so
//that you can stop the timer when the Stop button is clicked.
//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
//The timer should call your `render()` function passing the
//current application state object.
//HINT: remember that users can click the Start button multiple
//times before clicking Stop, so make sure you handle that
//appropriately (i.e., don't start another timer).


//TODO: select the <button class="stop-button"> element
//and add a click event listener. When the button is clicked,
//stop the timer ID stored in `state.timer`.
//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
document.querySelector("start-button") 
    .addEventListener("click", function() {
        if (state.timer) {
            return;
        }
        state.timer.setInterval(function() {
        state.startTime = Date.now();
        state.timer = setInterval(function() {
            render(state);
        }, 1000);
    });

document.querySelector(".stop-buttion")
    .addEventListener("click", function() {
        window.clearInterval(state.timer);
    });
