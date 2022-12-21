
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
        const titleElement = document.getElementById('title');
        titleElement.innerText = game.name;
    }
});

