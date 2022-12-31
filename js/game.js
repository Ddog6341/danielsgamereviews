
import {ready} from "./common.js";
import {gamesTable} from "./data.js";

function getIdFromUrl(){
    const url = window.location.href;
    return +url.substring(url.indexOf('?id=') + 4, url.length);
}
ready(function() {
    const gameId = getIdFromUrl();
    const game = gamesTable.find(game => game.id === gameId);
    if (!game) {
        window.location.href = '../index.html';
    } else {
        const gameContainerElement = document.getElementById('game-container');
        
        const gameHeaderElement = document.createElement("h2");
        gameHeaderElement.innerText = game.name;
        gameContainerElement.appendChild(gameHeaderElement);

        const gameRatingElement = document.createElement("h2");
        gameRatingElement.innerText = game.rating + "/10";
        gameContainerElement.appendChild(gameRatingElement);

        const gameReviewElement = document.createElement("p");
        gameReviewElement.innerText = game.review;
        gameContainerElement.appendChild(gameReviewElement);

        const recHeaderElement= document.createElement("h2");
        recHeaderElement.innerText = "recommended";
        gameContainerElement.appendChild(recHeaderElement);

        const recContainerElement = document.createElement("div");
        gameContainerElement.appendChild(recContainerElement );

        for (let recId of game.recs){
            const rec = gamesTable.find(game => game.id === recId);
            if(!rec) continue;
            const recNameElement = document.createElement("h3");
            recNameElement.innerText = rec.name;
            recContainerElement.appendChild(recNameElement); 

            const recRatingElement = document.createElement("span");
            recRatingElement.innerText = rec.rating + "/10";
            recContainerElement.appendChild(recRatingElement); 
        }

    }
});

