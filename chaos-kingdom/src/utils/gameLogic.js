export function playCard(gameState, playerId, cardId) {
    const player = gameState.players[playerId];
    const card = player.hand.find(c => c.id === cardId);
  
    if (!card || player.cp < card.cost) {
      return gameState; // Can't play the card
    }
  
    const updatedPlayer = {
      ...player,
      hand: player.hand.filter(c => c.id !== cardId),
      playArea: [...player.playArea, card],
      cp: player.cp - card.cost,
    };
  
    const updatedPlayers = gameState.players.map((p, index) => 
      index === playerId ? updatedPlayer : p
    );
  
    let updatedGameState = {
      ...gameState,
      players: updatedPlayers,
    };
  
    // Handle card abilities
    updatedGameState = handleCardAbility(updatedGameState, playerId, card);
  
    return updatedGameState;
  }
  
  function handleCardAbility(gameState, playerId, card) {
    switch (card.id) {
      case 'c1': // Flying Pig
        return handleFlyingPigAbility(gameState, playerId);
      case 'c2': // Jellybean Giant
        return handleJellybeanGiantAbility(gameState, playerId);
      // Add more cases for other cards
      default:
        return gameState;
    }
  }

  function handleJellybeanGiantAbility(gameState, playerId) {
    const currentPlayer = gameState.players[playerId];
    const updatedPlayArea = currentPlayer.playArea.map(card => 
      card.type === 'Creature' && card.id !== 'c2' ? { ...card, def: card.def + 2 } : card
    );
  
    const candyCastleInPlay = currentPlayer.playArea.some(card => card.id === 's1');
    const vpGain = candyCastleInPlay ? 2 : 0;
  
    const updatedPlayer = {
      ...currentPlayer,
      playArea: updatedPlayArea,
      vp: currentPlayer.vp + vpGain,
    };
  
    const updatedPlayers = gameState.players.map((p, index) => 
      index === playerId ? updatedPlayer : p
    );
  
    return {
      ...gameState,
      players: updatedPlayers,
    };
  }
  
  function handleFlyingPigAbility(gameState, playerId) {
    const otherPlayers = gameState.players.filter((_, index) => index !== playerId);
    const targetPlayer = otherPlayers[Math.floor(Math.random() * otherPlayers.length)];
    
    if (targetPlayer.hand.length === 0) return gameState;
  
    const stolenCard = targetPlayer.hand[Math.floor(Math.random() * targetPlayer.hand.length)];
    const updatedTargetPlayer = {
      ...targetPlayer,
      hand: targetPlayer.hand.filter(c => c.id !== stolenCard.id),
    };
  
    const currentPlayer = gameState.players[playerId];
    const updatedCurrentPlayer = {
      ...currentPlayer,
      hand: stolenCard.type === 'Artifact' ? currentPlayer.hand : [...currentPlayer.hand, stolenCard],
      playArea: stolenCard.type === 'Artifact' ? [...currentPlayer.playArea, stolenCard] : currentPlayer.playArea,
    };
  
    const updatedPlayers = gameState.players.map((p, index) => {
      if (index === playerId) return updatedCurrentPlayer;
      if (p.id === targetPlayer.id) return updatedTargetPlayer;
      return p;
    });
  
    return {
      ...gameState,
      players: updatedPlayers,
    };
  }
  
  // Implement other card ability handlers...
  
  export function endTurn(gameState) {
    const nextPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    const updatedPlayers = gameState.players.map((player, index) => {
      if (index === nextPlayer) {
        return {
          ...player,
          cp: player.cp + 2,
          hand: [...player.hand, ...drawCards(gameState.deck, 2)]
        };
      }
      return player;
    });
  
    const updatedGameState = {
      ...gameState,
      currentPlayer: nextPlayer,
      players: updatedPlayers,
      turnNumber: gameState.turnNumber + 1,
      currentPhase: 'draw',
      deck: gameState.deck.slice(2) // Remove the 2 drawn cards from the deck
    };
  
    // AI opponent's turn
    if (nextPlayer === 1) {
      return aiTurn(updatedGameState);
    }
  
    return updatedGameState;
  }
  
  function aiTurn(gameState) {
    const aiPlayer = gameState.players[1];
    let updatedGameState = { ...gameState };
  
    // Play cards
    aiPlayer.hand.forEach(card => {
      if (aiPlayer.cp >= card.cost) {
        updatedGameState = playCard(updatedGameState, 1, card.id);
      }
    });
  
    // End AI turn
    return endTurn(updatedGameState);
  }
  
  function drawCards(deck, count) {
    return deck.slice(0, count);
  }
  