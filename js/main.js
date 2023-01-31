
import {createTextElement, formatRating, ready} from './common.js';
import {gamesTable} from './data.js';

function gotoGame(id){
    return () => window.location.href = 'html/game.html?id=' + id;
}

function renderGamesPage(page, size){
    const curPage = page * size;
    const nxtPage = (page + 1) * size;
    const isLastPage = nxtPage > gamesTable.length;
    const gamesPage = gamesTable.slice(
        curPage, isLastPage ? gamesTable.length : nxtPage
    );

    // render games page
    const gamesContainerElement = document.getElementById('games-container');
    gamesContainerElement.innerHTML = ''; // clear children

    for (let game of gamesPage){
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');
        gameElement.addEventListener('click', gotoGame(game.id));
        gamesContainerElement.appendChild(gameElement);

        createTextElement('h2', game.name, gameElement);
        createTextElement('h2', formatRating(game.rating), gameElement);
    }

    // render paging buttons
    const pageElement = document.createElement('div');
    pageElement.classList.add('page');
    gamesContainerElement.appendChild(pageElement);

    const prevButton = createTextElement('button', 'prev', pageElement);
    if(page > 0){
        prevButton.addEventListener('click', () => renderGamesPage(page - 1, size));
    } else {
        prevButton.disabled = true;
    }

    createTextElement('h3', `page ${page + 1}`, pageElement);

    const nextButton = createTextElement('button', 'next', pageElement);
    if(!isLastPage) {
        nextButton.addEventListener('click', () => renderGamesPage(page + 1, size));
    } else {
        nextButton.disabled = true; 
    }
}

ready(function() {
    renderGamesPage(0, 4);
});

