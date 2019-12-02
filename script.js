"use strict"

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
    }

    console.log({
        firstCard,
        secondCard
    });

}

cards.forEach(card => card.addEventListener('click', flipCard));