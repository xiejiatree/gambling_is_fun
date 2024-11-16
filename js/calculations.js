const PokerEvaluator = require('poker-evaluator');

const cardToNumber = {
    '2c': 1, '2d': 2, '2h': 3, '2s': 4,
    '3c': 5, '3d': 6, '3h': 7, '3s': 8,
    '4c': 9, '4d': 10, '4h': 11, '4s': 12,
    '5c': 13, '5d': 14, '5h': 15, '5s': 16,
    '6c': 17, '6d': 18, '6h': 19, '6s': 20,
    '7c': 21, '7d': 22, '7h': 23, '7s': 24,
    '8c': 25, '8d': 26, '8h': 27, '8s': 28,
    '9c': 29, '9d': 30, '9h': 31, '9s': 32,
    '10c': 33, '10d': 34, '10h': 35, '10s': 36,
    'jc': 37, 'jd': 38, 'jh': 39, 'js': 40,
    'qc': 41, 'qd': 42, 'qh': 43, 'qs': 44,
    'kc': 45, 'kd': 46, 'kh': 47, 'ks': 48,
    'ac': 49, 'ad': 50, 'ah': 51, 'as': 52
};

const numberToCard = Object.fromEntries(
    Object.entries(cardToNumber).map(([card, num]) => [num, card])
);

function convertCardsToNumbers(cards) {
    return cards.map(card => cardToNumber[card.toLowerCase()]);
}
function convertNumbersToCards(numbers) {
    return numbers.map(number => numberToCard[number]);
}

/*
 * can calculate win rate with 5, 6, or 7 cards
 */

const playerHand = ["Ah", "Kd"];
const communityCards = ["Qd", "Jc", "10c", "3h", "7s"];

const fullHand = playerHand.concat(communityCards).slice(0, 5); // Take only the first 5 cards
const fullHand_numeric = convertCardsToNumbers(fullHand);
const result = PokerEvaluator.evalHand(fullHand_numeric);

console.log(`1. Player has a ${result.handName}`);

const playerHand_2 = ["Ah", "3h"];
const communityCards_2 = ["Kd", "Ks", "Qh"];
const result_2 = PokerEvaluator.evalHand(convertCardsToNumbers(playerHand_2.concat(communityCards_2)));

console.log(`2. Player has a ${result_2.handName}`);

/* 
 * need to figure out how to retrieve playerHand & dealerHand from adjacent file
 */

