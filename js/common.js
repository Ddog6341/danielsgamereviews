
export function ready(callback) {
    // in case the document is already rendered
    if (document.readyState !== 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'complete') callback();
        });
}

export function formatRating(rating){
    return rating + '/10';
}

export function createTextElement(tag, text, parent){
    const textElement = document.createElement(tag);
    textElement.innerText = text;
    parent.appendChild(textElement);
    return textElement;
}
