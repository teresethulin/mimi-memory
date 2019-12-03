// Function to create cards and insert into gameboard
const createCards = (array, i) => {
    return `

  <div class="card" data-id="">
  
  <img class="card-front" src="">

    <img class = "card-back"
    src = "https://citychickbuzz.files.wordpress.com/2012/06/mclogo.jpg" >
  
    </div>

  <div class="card" data-id="">

  <img class="card-front" src="">

    <img class = "card-back"
    src = "https://citychickbuzz.files.wordpress.com/2012/06/mclogo.jpg" >

  </div>

   `
}

// Function to shuffle cards
const shuffleCards = (cards) => {
    let currentPosition = cards.length,
        temporaryValue, randomPosition;

    while (0 !== currentPosition) {
        randomPosition = Math.floor(Math.random() * currentPosition);
        currentPosition -= 1;

        temporaryValue = cards[currentPosition];
        cards[currentPosition] = cards[randomPosition];
        cards[randomPosition] = temporaryValue;
    }
    return cards;
}