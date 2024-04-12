
import {createTextElement, createRatingElement, ready} from './common.js';
import {gamesTable} from './data.js';

const initPage = 0;
const initSize = 5;

let searchText = '';

function gotoGame(id){
    return () => window.location.href = 'html/game.html?id=' + id;
}

function setupSearchBar(){
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', () => searchBarKeyup(searchBar));
}

function searchBarKeyup(searchBar){
    searchText = searchBar.value.toLowerCase();
    renderGamesPage(initPage, initSize);
}

function getGamesPageObject(page, size){
    const startIdx = page * size;
    const endIdx = (page + 1) * size;
    const allMatchingGames = !!searchText
        ? gamesTable.filter(game => game.name.toLowerCase().includes(searchText))
        : gamesTable;

    const isLastPage = endIdx >= allMatchingGames.length;
    const gamesPage = allMatchingGames.slice(
        startIdx, isLastPage ? allMatchingGames.length : endIdx
    );
    return {
      isLastPage, gamesPage
    };
}

function renderGamesPage(page, size){
    const {
        isLastPage, gamesPage
    } = getGamesPageObject(page, size);

    // render games page
    const gamesContainerElement = document.getElementById('games-container');
    gamesContainerElement.innerHTML = ''; // clear children

    for (let game of gamesPage){
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');
        gameElement.addEventListener('click', gotoGame(game.id));
        gamesContainerElement.appendChild(gameElement);

        createTextElement('h2', game.name, gameElement);
        createRatingElement(game.rating, gameElement);
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
    setupSearchBar();
    renderGamesPage(initPage, initSize);
});

