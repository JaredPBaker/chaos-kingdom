const cardData = [
    // Creatures
    {
      id: 'c1',
      type: 'Creature',
      name: 'Flying Pig',
      cost: 1,
      atk: 2,
      def: 1,
      ability: 'When Flying Pig is played, steal 1 card from another player\'s hand. If the card is an Artifact, play it immediately for free.',
    },
    {
      id: 'c2',
      type: 'Creature',
      name: 'Jellybean Giant',
      cost: 2,
      atk: 3,
      def: 4,
      ability: 'When Jellybean Giant is played, all other Creatures in your kingdom gain +2 defense. If "Candy Castle" is in play, gain 2 additional VPs.',
    },
    // Add more creatures...
  
    // Artifacts
    {
      id: 'a1',
      type: 'Artifact',
      name: 'Enchanted Mirror',
      cost: 2,
      ability: 'When Enchanted Mirror is played, draw 2 cards. If "The Wand of Weirdness" is in play, draw 3 cards instead.',
    },
    // Add more artifacts...
  
    // Structures
    {
      id: 's1',
      type: 'Structure',
      name: 'Candy Castle',
      cost: 3,
      def: 3,
      ability: 'All Creatures gain +1 VP when attacking. If "Jellybean Giant" is in play, gain an additional 2 VPs.',
    },
    // Add more structures...
  
    // Events
    {
      id: 'e1',
      type: 'Event',
      name: 'Storm of Madness',
      cost: 2,
      ability: 'All players discard 1 card and then draw 2 cards. Gain 1 CP for each card discarded.',
    },
    // Add more events...
  ];
  
  export default cardData;