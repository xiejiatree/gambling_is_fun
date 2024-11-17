let maxBetHit = false; 
let doubleBets = false;
let tripleBets = false; 

localStorage.setItem("Deck", JSON.stringify(cards));
console.log("Complete cards : ", JSON.stringify(cards));

// GLOBAL VARIABLES
const activeCards = JSON.parse(localStorage.getItem("Deck"));

const cardHierarchy = ["2", "3", "4" ,"5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

const handHierarchy = ["High-card", "Pair", "Two Pairs", "Three-of-a-kind", "Straight", "Flush", "Full-house", "Four-of-a-kind", "Straight-flush", "Royal-flush"];

const suits = ["Diamonds", "Hearts" ,"Clubs", "Spades"];

const playerHands = ["playerHand","player2Hand", "player3Hand", "player4Hand"];

