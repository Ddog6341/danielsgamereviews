
import {ready} from "./common.js";
import {gamesTable} from "./data.js";

function gotoGame(id){
    return () => window.location.href = 'html/game.html?id=' + id;
}

ready(function() {
    const gamesContainerElement = document.getElementById("games-container");

    for (let game of gamesTable){
        const gameElement = document.createElement("div");
        gameElement.classList.add("game");
        gameElement.addEventListener('click', gotoGame(game.id));
        gamesContainerElement.appendChild(gameElement);

        const gameHeaderElement = document.createElement("h2");
        gameHeaderElement.innerText = game.name;
        gameElement.appendChild(gameHeaderElement);

        const gameRatingElement = document.createElement("span");
        gameRatingElement.innerText = game.rating + "/10";
        gameElement.appendChild(gameRatingElement);
    }
});

