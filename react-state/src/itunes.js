//iTunes Search API
//`entity=music` filters for just music tracks and music videos
//`term=...` is how you specify the search term
export const SEARCH_API = "https://itunes.apple.com/search?entity=musicTrack&term="


/**
 * Handles responses from the fetch() API.
 * The iTunes API always returns JSON, even for
 * status codes >= 400.
 * @param {Response} response 
 */
export function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        //iTunes API errors are returned
        //as a JSON object containing
        //an `errorMessage` property
        return response.json()
            .then(function (err) {
                throw new Error(err.errorMessage);
            });
    }
}
