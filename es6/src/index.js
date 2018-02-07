//TODO: import fetch() polyfill library `whatwg-fetch`
//from the node_modules directory
//this will ensure it's added to the final bundle.js
import "whatwg-fetch";
import TrackCard from "./TrackCard";
import ProgressBar from "./ProgressBar";

//iTunes Search API
//`entity=music` filters for just music tracks and music videos
//`term=...` is how you specify the search term
const SEARCH_API = "https://itunes.apple.com/search?entity=musicTrack&term="

const PROGRESS_BAR = document.querySelector(".progress");
const RESULTS_DIV = document.querySelector("#results");
const SEARCH_FORM = document.querySelector("#search-form")
const SEARCH_INPUT = document.querySelector("#search-input");

/**
 * Handles responses from the fetch() API.
 * The iTunes API always returns JSON, even for
 * status codes >= 400.
 * @param {Response} response 
 */
function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        //iTunes API errors are returned
        //as a JSON object containing
        //an `errorMessage` property
        return response.json()
            .then(function(err) {
                throw new Error(err.errorMessage);
            });
    }
}

/**
 * Handles errors that occur while fetching
 * @param {Error} err 
 */
function handleError(err) {
    console.error(err);
    //TODO: create an instance of ErrorAlert
    //and render it to the RESULTS_DIV element
}

/**
 * Renders the iTunes search API results
 * @param {Object} data 
 */
function renderResults(data) {
    //The `data` returned from the iTunes API
    //is an object with two properties:
    // - resultsCount: number of search results
    // - results: an array of objects, one for each search result
    //for details on the properties in each search result object, see:
    //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#understand

    //TODO: create a TrackCard object for each track in 
    //the `data.results` array, and render it into the
    //the RESULTS_DIV element
    console.log(data);
    RESULTS_DIV.textContent = "";
    for (let i = 0; i < data.results.length; i++) {
        let tc = new TrackCard(data.results[i]);
        RESULTS_DIV.appendChild(tc.render());
    }
}

//TODO: listen for the "submit" event raised
//by the SEARCH_FORM element, and query the iTunes
//API. Use a lambda function for the event listener!
SEARCH_FORM.addEventListener("submit", evt => {
    evt.preventDefault();
    let q = SEARCH_INPUT.value;
    RESULTS_DIV.textContent = "";
    RESULTS_DIV.appendChild(new ProgressBar().render());
    fetch(SEARCH_API + q)
        .then(handleResponse)
        .then(renderResults)
        .catch(handleError);
})