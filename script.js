"use strict"

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Flip cards on click and check for match
const flipCard = (event) => {

    if (lockBoard) return;

    if (event.currentTarget === firstCard) return;

    event.currentTarget.classList.add('flip');

    if (!hasFlippedCard) {

        // first click
        hasFlippedCard = true;
        firstCard = event.currentTarget;

    } else {

        // second click
        hasFlippedCard = false;
        secondCard = event.currentTarget;

        checkForMatch();
    }
}

// check if cards match
const checkForMatch = () => {

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        lockMatchedCards();
    } else {
        unflipCards();
    }
}

const lockMatchedCards = () => {

    // it's a match!
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

const unflipCards = () => {

    lockBoard = true;

    // not a match
    setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;

    }, 1500);

}

const resetBoard = () => {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


// Shuffle cards - immediately invoked
(() => {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16);

        card.style.order = randomPosition;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard));