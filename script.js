"use strict";

// Game board section
const gameBoard = document.querySelector(".gameboard");

const body = document.querySelector("body");

// Welcome screen
const welcomeScreen = document.querySelector(".welcome-screen");
const startTitle = document.querySelector(".h1-start");
const buttonStartGame = document.querySelector(".button-start-game");

// End of game screen and play again button
const endOfGameScreen = document.querySelector(".end-screen");
const endTitle = document.querySelector(".h1-end");
const buttonPlayAgain = document.querySelector(".button-play-again");

// Counter for counting matched cards so we know when game is completed
let pairs = 0;

// Array of 8 images for front of cards
const cardImages = [
  {
    image:
      "http://los40es00.epimg.net/los40/imagenes/2009/08/02/actualidad/1249164000_294754_1273518780.jpg",
    name: "eminem"
  },
  {
    image:
      "https://i.pinimg.com/736x/2a/c7/ed/2ac7ed2e187927f0a567679f975d4ec2--mariah-carey-heartbreaker-the-s.jpg",
    name: "heartbreaker"
  },
  {
    image: "./media/images/tumblr_pi9frvOjaG1szkflc_540.jpg",
    name: "bed"
  },
  {
    image:
      "https://i.pinimg.com/736x/79/5e/fa/795efad054cf2be039aadc440f06cd52.jpg",
    name: "willsmith"
  },
  {
    image:
      "https://www.essence.com/wp-content/uploads/2015/10/images/2015/10/26/mariah-whitney.jpg",
    name: "whitney"
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.breatheheavy.com%2Fwp-content%2Fuploads%2F2018%2F10%2FMARIAH-CAREY-CAUTION-ALBUM-COVER.jpg&f=1&nofb=1",
    name: "caution"
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstylesatlife.com%2Fwp-content%2Fuploads%2F2015%2F11%2FMariah-Carey-without-makeup-2.jpg&f=1&nofb=1",
    name: "precious"
  },
  {
    image: "https://data.whicdn.com/images/331548958/original.gif?t=1560649676",
    name: "fantasy"
  }
];

// Duplicates array so we now have 2x8 images
const allCardImages = cardImages.concat(cardImages);

// Shuffles all cards
const shuffleCards = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Create cards with data from the image array
const createCards = (name, image) => {
  return `<div class="card" data-id=${name}>
    <img class="card-front" src="${image}">
    <div class="card-back"></div>
    </div>`;
};

// Resets board
const resetBoard = () => {
  isCardFlipped = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
};

// Flip cards on click
const flipCard = event => {
  if (lockBoard) return;

  if (event.currentTarget === firstCard) return;

  event.currentTarget.classList.add("flip");

  if (!isCardFlipped) {
    //first click
    isCardFlipped = true;
    firstCard = event.currentTarget;
    return;
  } else {
    //second click
    isCardFlipped = false;
    secondCard = event.currentTarget;

    checkForMatch();
  }
};

// Start game and generate cards to game board
const startGame = () => {
  welcomeScreen.classList.add("removed");
  pairs = 0;
  gameBoard.innerHTML = "";
  endOfGameScreen.classList.remove("visible");
  endTitle.classList.remove("visible");
  buttonPlayAgain.classList.remove("visible");

  // All shuffled images
  const shuffledImages = shuffleCards(allCardImages);
  shuffledImages.forEach(image => {
    // Front of card
    const cardFront = createCards(image.name, image.image);
    gameBoard.innerHTML += cardFront;
  });

  // Card div
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => card.addEventListener("click", flipCard));
};

// Default values
let isCardFlipped,
  lockBoard = false;
let firstCard, secondCard;

// Function for checking if cards match
const checkForMatch = () => {
  if (firstCard.dataset.id === secondCard.dataset.id) {
    cardsMatched();

    // End of game screen
    const gameCompleted = () => {
      if (pairs === 8) {
        setTimeout(() => {
          endOfGameScreen.classList.add("visible");
          endTitle.classList.add("visible");
          buttonPlayAgain.classList.add("visible");
        }, 1300);
      }
    };
    gameCompleted();
  } else {
    unflipCards();
  }
};

// Function for unflipping cards if it's not a match
const unflipCards = () => {
  lockBoard = true;

  // not a match
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    lockBoard = false;
    firstCard = null;
    secondCard = null;
  }, 1500);
};

// Audio that plays if cards match
const jingleCardsMatch = new Audio("./media/audio/mimi-jingle-2x.mp3");

// Function for locking clicked cards if it's a match
const cardsMatched = () => {
  // it's a match!
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  jingleCardsMatch.play();
  pairs += 1;

  resetBoard();
};
