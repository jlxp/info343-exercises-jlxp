// @ts-check
"use strict";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/{name}/";
const ERROR_ALERT = document.querySelector("#error-alert");

function handleError(err) {
    console.error(err);
    ERROR_ALERT.textContent = err.message;
    ERROR_ALERT.classList.remove("d-none");
}

function handleResponse(response) {
    console.log("got response");
    if (response.ok) {
        return response.json();
    } else {
        return response.text()
            .then(function(message) {
                throw new Error(message);
            });
    }
}

function fetchPokemonName(name) {
    let url = POKEMON_API.replace("{name}", name);
    return fetch(url);
}

fetchPokemonName("eevee")
    .then(handleResponse)
    .then(renderResults)
    .catch(handleError);

function renderResults(data) {
    console.log(data);
    document.querySelector("#name").textContent = data.name;
    document.querySelector("#pokemon-pic").src = data.sprites.front_default;
    document.querySelector("#types").textContent = data.types[0].type.name;
    for (let i = 0; i < data.moves.length; i++) {
        let li = document.createElement("li");
        li.textContent = data.moves[i].move.name;
        document.querySelector("#moves").appendChild(li);
    }
    
    for (let i = 0; i < data.game_indices.length; i++) {
        let li = document.createElement("li");
        li.textContent = data.game_indices[i].version.name;
        document.querySelector("#games").appendChild(li);
    }
}