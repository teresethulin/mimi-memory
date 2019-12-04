"use strict"


const gameBoard = document.querySelector('.gameboard');
const cardsFlipped = document.querySelectorAll('.card-front');
let pairs = 0;


const cardImages = [{
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

// Duplicates array so we now have 8x8 images
const allImages = cardImages.concat(cardImages);

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



// Create cards with data from the image array
const createCards = (name, image) => {
    return `<div class="card" data-id=${name}>
    <img class="card-front" src="${image}">
    <img class="card-back" src="https://citychickbuzz.files.wordpress.com/2012/06/mclogo.jpg">
    </div>`;
};

// Resets board
const resetBoard = () => {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


const flipCard = (event) => {

    if (lockBoard) return;



    if (event.currentTarget === firstCard) return;

    event.currentTarget.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = event.currentTarget;
        return;

    } else {
        //second click
        hasFlippedCard = false;
        secondCard = event.currentTarget;

        checkForMatch();

    }
}

// Generate cards to game board
const startGame = () => {
    pairs = 0;
    gameBoard.innerHTML = "";

    const backgroundMusic = new Audio('./media/audio/mimi-mingle-pitched.mp3');

    const shuffledImages = shuffleCards(allImages);
    shuffledImages.forEach(image => {

        const cardFront = createCards(image.name, image.image);
        gameBoard.innerHTML += cardFront;
    });
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));
};
startGame();


// Default values
let hasFlippedCard, lockBoard = false;
let firstCard, secondCard;


// Function for checking if cards match
const checkForMatch = () => {

    if (firstCard.dataset.id === secondCard.dataset.id) {
        cardsMatched();

        const gameCompleted = () => {
            if (pairs === 8) {
                const section = document.querySelector('section');
                const endOfGameScreen = document.createElement('div');
                endOfGameScreen.classList.add('you-won');
                endOfGameScreen.textContent = "You won!";
                section.appendChild(endOfGameScreen);
            }
        }
        gameCompleted();

    } else {
        unflipCards();
    }
}




// Function for unflipping cards if it's not a match
const unflipCards = () => {

    lockBoard = true;

    // not a match
    setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }, 1500);

}


// Audio that plays if cards match
const cardSoundOnClick = new Audio('./media/audio/mimi-jingle-2x.mp3');

// Function for locking clicked cards if it's a match
const cardsMatched = () => {

    // it's a match!
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    cardSoundOnClick.play();
    pairs += 1;

    resetBoard();
}

// const startGame = () => {
//     generateCards();

// }


const button = document.querySelector('.replay-button');

// Restart game
button.addEventListener('click', startGame);