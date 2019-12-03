"use strict"

const cardFrontImages = [{
        image: 'http://los40es00.epimg.net/los40/imagenes/2009/08/02/actualidad/1249164000_294754_1273518780.jpg',
        name: 'eminem'
    },
    {
        image: 'https://i.pinimg.com/736x/2a/c7/ed/2ac7ed2e187927f0a567679f975d4ec2--mariah-carey-heartbreaker-the-s.jpg',
        name: 'heartbreaker'
    },
    {
        image: './media/images/tumblr_pi9frvOjaG1szkflc_540.jpg',
        name: 'bed'
    },
    {
        image: 'https://i.pinimg.com/736x/79/5e/fa/795efad054cf2be039aadc440f06cd52.jpg',
        name: 'willsmith'
    },
    {
        image: 'https://www.essence.com/wp-content/uploads/2015/10/images/2015/10/26/mariah-whitney.jpg',
        name: 'whitney'
    },
    {
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.breatheheavy.com%2Fwp-content%2Fuploads%2F2018%2F10%2FMARIAH-CAREY-CAUTION-ALBUM-COVER.jpg&f=1&nofb=1',
        name: 'caution'
    },
    {
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstylesatlife.com%2Fwp-content%2Fuploads%2F2015%2F11%2FMariah-Carey-without-makeup-2.jpg&f=1&nofb=1',
        name: 'precious'
    },
    {
        image: 'https://66.media.tumblr.com/88cae99a097fb270c77fc7707b48553b/tumblr_p2rgp2sbb11uhlg22o1_1280.jpg',
        name: 'fantasy'
    },
]

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

const button = document.querySelector('.replay-button');

// Restart game
button.addEventListener('click', startGame);

cards.forEach(card => card.addEventListener('click', flipCard));