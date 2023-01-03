
import {createTextElement, formatRating, ready} from './common.js';
import {gamesTable} from './data.js';

function gotoGame(id){
    return () => window.location.href = 'html/game.html?id=' + id;
}

ready(function() {
    const gamesContainerElement = document.getElementById('games-container');

    for (let game of gamesTable){
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');
        gameElement.addEventListener('click', gotoGame(game.id));
        gamesContainerElement.appendChild(gameElement);

        createTextElement('h2', game.name, gameElement);
        createTextElement('h2', formatRating(game.rating), gameElement);
    }
});

