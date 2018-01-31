// @ts-check
"use strict";

//iTunes Search API
//`entity=music` filters for just music tracks and music videos
//`term=...` is how you specify the search term
const SEARCH_API = "https://itunes.apple.com/search?entity=musicTrack&term="

//a few elements we will need to adjust often
const PROGRESS_BAR = document.querySelector(".progress");
const ERROR_ALERT_DIV = document.querySelector(".alert-danger");  
const RESULTS_DIV = document.querySelector("#results");

let previewAudio = new Audio();

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
    //TODO: display error message in ERROR_ALERT_DIV
    //so the user can see it
    ERROR_ALERT_DIV.textContent = err.message;
    ERROR_ALERT_DIV.classList.remove("d-none");
}

function renderTrack(track) {
    let img = document.createElement("img");
    img.src = track.artworkUrl100;
    img.alt = track.trackName;
    img.title = track.trackName;
    img.addEventListener("click", function() {
        if (previewAudio.src === track.previewUrl) {
            if (previewAudio.paused) {
                previewAudio.play();
            } else {
                previewAudio.pause();
            }
        } else {
            previewAudio.src = track.previewUrl;
            previewAudio.play();
        }
    })
    return img;
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

    //TODO: render the objects in the `results` array to the screen
    console.log(data);
    ERROR_ALERT_DIV.classList.add("d-none");
    RESULTS_DIV.textContent= "";
    for(let i = 0; i < data.results.length; i++) {
        RESULTS_DIV.appendChild(renderTrack(data.results[i]));
    }
}

//TODO: listen for the "submit" event
//raised by the <form id="search-form">
//element, prevent the default behavior,
//and use fetch() to search iTunes for tracks
//matching the term the user entered in the
//<input> element within the form.
document.querySelector("#search-form")
    .addEventListener("submit", function(evt) {
        evt.preventDefault(); // stops the browser from sending the data to another server and lets us handle the data instead
        let q = this.querySelector("input").value;
        console.log("searching for %s", q);
        PROGRESS_BAR.classList.remove("d-none");
        fetch(SEARCH_API + q)
            .then(handleResponse)
            .then(renderResults)
            .catch(handleError)
            .then(function() {
                PROGRESS_BAR.classList.add("d-none");
            });
    });