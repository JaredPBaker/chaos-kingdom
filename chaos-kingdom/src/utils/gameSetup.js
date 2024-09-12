import cardData from './cardData';

export function setupGame(numPlayers) {
  const deck = shuffleDeck([...cardData]);
  const players = [];

  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i,
      hand: dealCards(deck, 5),
      cp: 5,
      vp: 0,
      playArea: [],
    });
  }

  return {
    players,
    currentPlayer: 0,
    deck: deck.slice(numPlayers * 5), // Remove dealt cards from the deck
    discardPile: [],
    turnNumber: 1,
    currentPhase: 'draw',
  };
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function dealCards(deck, numCards) {
  return deck.slice(0, numCards);
}