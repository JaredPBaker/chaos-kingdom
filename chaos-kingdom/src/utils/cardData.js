export const CARDS = [
  // Creatures
  {
    name: 'Flying Pig',
    type: 'Creature',
    cost: 1,
    attack: 2,
    defense: 1,
    ability: 'When played, steal 1 card from another player's hand.',
  },
  {
    name: 'Jellybean Giant',
    type: 'Creature',
    cost: 2,
    attack: 3,
    defense: 4,
    ability: 'When played, all other Creatures in your kingdom gain +2 defense.',
  },
  // Add more creatures...
  // Artifacts
  {
    name: 'Enchanted Mirror',
    type: 'Artifact',
    cost: 2,
    ability: 'When played, draw 2 cards.',
  },
  {
    name: 'Crystal Ball',
    type: 'Artifact',
    cost: 1,
    ability: 'When played, look at the top 3 cards of the Deck of Chaos and rearrange them in any order.',
  },
  // Add more artifacts...
  // Structures
  {
    name: 'Candy Castle',
    type: 'Structure',
    cost: 3,
    defense: 3,
    ability: 'All Creatures gain +1 VP when attacking.',
  },
  {
    name: 'Invisible Wall',
    type: 'Structure',
    cost: 2,
    defense: 4,
    ability: 'Prevent all damage to your Structures for 2 turns.',
  },
  // Add more structures...
  // Events
  {
    name: 'Storm of Madness',
    type: 'Event',
    cost: 2,
    ability: 'All players discard 1 card and then draw 2 cards. Gain 1 CP for each card discarded.',
  },
  {
    name: 'Unexpected Disaster',
    type: 'Event',
    cost: 2,
    ability: 'Destroy 1 enemy Structure.',
  },
  // Add more events...
];