"use strict";

//live feed of Seattle 911 Police Incidents
const dataURL = "https://data.seattle.gov/resource/pu5n-trf4.json?$order=event_clearance_date%20DESC&$where=event_clearance_date%20is%20not%20null"

//your MapBox access tokne
mapboxgl.accessToken = 'paste your mapbox access token here';

/**
 * Handles responses from the fetch() API.
 * The iTunes API always returns JSON, even for
 * status codes >= 400.
 * @param {Response} response 
 * @returns {Promise}
 */
function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return response.json()
            .then(function(err) {
                throw new Error(err.errorMessage);
            });
    }
}
