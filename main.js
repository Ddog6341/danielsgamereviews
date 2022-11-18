
const gamesTable = [
    {
        id: 1,
        name: 'The last of us Part 1',
        rating: 10,
    },
    {
        id: 2,
        name: 'God of War (2018)',
        rating: 10,
    },
    {
        id: 3,
        name: 'Elden Ring',
        rating: 10,
    },
    {
        id: 4,
        name: 'The Last of Us part 2',
        rating: 9,

    }, 
    {
        id: 5,
        name: 'Uncharted 4',
        rating: 9,
    },
    {
        id: 6,
        name: 'Returnal',
        rating: 9,
    },
    {
        id: 7,
        name: 'Marvels Spiderman',
        rating: 9,
    },
    {
        id: 8,
        name: 'Farcry 3',
        rating: 8,
    },
    {
        id: 9,
        name: 'Red Dead Redemption 2',
        rating: 10,
    },
    {
        id: 10,
        name: 'For Honor',
        rating: 7,
    },
    {
        id: 11,
        name: 'Stray',
        rating: 8,
    },
];

function ready(callback){
    // in case the document is already rendered
    if (document.readyState !== 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState === 'complete') callback();
    });
}

ready(function() {
    const gamesContainerElement = document.getElementById("games-container");

    for (let game of gamesTable){
        const gameElement = document.createElement("div");
        gameElement.classList.add("game");
        gamesContainerElement.appendChild(gameElement);

        const gameHeaderElement = document.createElement("h2");
        gameHeaderElement.innerText = game.name;
        gameElement.appendChild(gameHeaderElement);

        const gameRatingElement = document.createElement("span");
        gameRatingElement.innerText = game.rating + "/10";
        gameElement.appendChild(gameRatingElement);
    }
});

