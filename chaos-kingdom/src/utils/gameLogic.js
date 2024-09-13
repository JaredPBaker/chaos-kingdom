import { CARDS } from './cardData';
export function initializeGame(numPlayers) {
  const deck = shuffleDeck([...CARDS]);
  const players = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i + 1,
      hand: [],
      playedCards: [],
      chaosPoints: 5,
      victoryPoints: 0,
    });
  }
  // Deal initial hands
  for (let i = 0; i < 5; i++) {
    for (let player of players) {
      player.hand.push(deck.pop());
    }
  }
  return {
    deck,
    players,
    currentPlayer: 0,
    turn: 1,
  };
}
export function drawCard(gameState, playerIndex) {
  const player = gameState.players[playerIndex];
  const card = gameState.deck.pop();
  player.hand.push(card);
  return { ...gameState };
}
export function playCard(gameState, playerIndex, cardIndex) {
  const player = gameState.players[playerIndex];
  const card = player.hand[cardIndex];
  if (player.chaosPoints >= card.cost) {
    player.chaosPoints -= card.cost;
    player.playedCards.push(card);
    player.hand.splice(cardIndex, 1);
    // Apply card effects
    applyCardEffects(gameState, playerIndex, card);
  }
  return { ...gameState };
}
export function endTurn(gameState, playerIndex) {
  // Gain 2 CPs at the start of the next turn
  gameState.players[playerIndex].chaosPoints += 2;
  // Draw 2 cards for the next turn
  drawCard(gameState, playerIndex);
  drawCard(gameState, playerIndex);
  gameState.turn++;
  return { ...gameState };
}
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
function applyCardEffects(gameState, playerIndex, card) {
  // Implement card-specific effects here
  // This is a simplified version and should be expanded based on card abilities
  if (card.type === 'Creature') {
    gameState.players[playerIndex].victoryPoints += 1;
  } else if (card.type === 'Structure') {
    gameState.players[playerIndex].victoryPoints += 2;
  } else if (card.type === 'Artifact') {
    gameState.players[playerIndex].chaosPoints += 1;
  } else if (card.type === 'Event') {
    // Apply event effects to all players
    for (let player of gameState.players) {
      player.chaosPoints += 1;
    }
  }
}