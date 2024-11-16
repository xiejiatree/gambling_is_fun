// Global variables
let playerHand = [];
let dealerHand = [];

function createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];

    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push({ suit, rank });
        });
    });

    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];  // Swap elements
    }
    return deck;
}

function dealCards(deck) {
    // Deal 2 cards to player and dealer each
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];

    // Call display functions to show hands
    displayHand('player-hand', playerHand);
    displayHand('dealer-hand', dealerHand);
}

function displayHand(elementId, hand) {
    const handElement = document.getElementById(elementId);
    const cardsElement = handElement.querySelector('.cards');
    cardsElement.innerHTML = ''; // Clear any existing cards

    hand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = `${card.rank} of ${card.suit}`;
        cardsElement.appendChild(cardElement);
    });
}

function startGame() {
    const deck = createDeck();
    shuffleDeck(deck);
    dealCards(deck);
}

// Hook up the "Start Game" button
document.getElementById("start-game").addEventListener("click", startGame);
