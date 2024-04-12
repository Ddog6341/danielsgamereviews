
export function ready(callback) {
    // in case the document is already rendered
    if (document.readyState !== 'loading') {
        callback();
    }
    // modern browsers
    else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback);
    }
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') callback();
    });
}

export function createTextElement(tag, text, parent){
    const textElement = document.createElement(tag);
    textElement.innerText = text;
    parent.appendChild(textElement);
    return textElement;
}

export function createRatingElement(rating, parent){
    const ratingElement = document.createElement('div');
    parent.appendChild(ratingElement);

    for (let i = 0; i < 10; i++) {
        const iconName = i < rating ? 'cookie' : 'cookie_off'; 
        const iconElement = createTextElement('span', iconName, ratingElement);
        iconElement.classList.add('material-symbols-outlined');
    }
    return ratingElement;
}