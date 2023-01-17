
import {createTextElement, formatRating, ready} from './common.js';
import {gamesTable} from './data.js';

function getIdFromUrl(){
    const url = window.location.href;
    return +url.substring(url.indexOf('?id=') + 4, url.length);
}

function gotoGame(id){
    return () => window.location.href = 'game.html?id=' + id;
}

function gotoHome(){
    return () => window.location.href = '../index.html';
}
ready(function() {
    const gameId = getIdFromUrl();
    const game = gamesTable.find(game => game.id === gameId);
    if (!game) {
        gotoHome()();
        return;      
    } 
    const gameContainerElement = document.getElementById('game-container');
        
    const backButtonElement = createTextElement('button', 'back', gameContainerElement); 
    backButtonElement.addEventListener('click', gotoHome());

    createTextElement('h2', game.name, gameContainerElement);
    createTextElement('h2', formatRating(game.rating), gameContainerElement);
    createTextElement('p', game.review, gameContainerElement);

    const recHeaderElement = createTextElement('h2', 'recommended', gameContainerElement);
    recHeaderElement.id = 'rec-title';

    const allRecsContainerElement = document.createElement('div');
    gameContainerElement.appendChild(allRecsContainerElement);

    for (let recId of game.recs){
        const rec = gamesTable.find(game => game.id === recId);
        if(!rec){
            continue;
         }
        const recContainerElement = document.createElement('div');
        recContainerElement.classList.add('game');
        recContainerElement.addEventListener('click', gotoGame(recId));
        allRecsContainerElement.appendChild(recContainerElement);


        createTextElement('h3', rec.name, recContainerElement);
        createTextElement('h3', formatRating(rec.rating), recContainerElement);
    }

    
});

