class Pokemon {
  constructor(name, type, pokemon, move1, move4) {
    this.pokemon = true;
    this.move2 = 'Growl';
    this.move3 = 'Tail Whip';
    this.name = name;
    this.type = type;
    this.move1 = move1;
    this.move4 = move4;
  }
  sayHi() {
    console.log(this.name + '!');
  }
};

var bulbasaur = {
  name: 'Bulbasaur',
  type: 'grass',
  pokemon: true,
  move1: 'Tackle',
  move2: 'Growl',
  move3: 'Tail Whip',
  move4: 'Vine Whip',
};

var charmander = {
  name: 'Charmander',
  type: 'fire',
  pokemon: true,
  move1: 'Scratch',
  move2: 'Growl',
  move3: 'Tail Whip',
  move4: 'Ember',
};

var squirtle = {
  name: 'Squirtle',
  type: 'water',
  pokemon: true,
  move1: 'Tackle',
  move2: 'Growl',
  move3: 'Tail Whip',
  move4: 'Bubble',
};

function pokemonGym(bulbasaur, charmander, squirtle) {
  bulbasaur.sayHi();
  charmander.sayHi();
  squirtle.sayHi();

  if (bulbasaur.type > squirtle.type) {
    console.log(bulbasaur.name + ' wins!');
  } else if (squirtle.type > charmander.type) {
    console.log(squirtle.name + ' wins!');
  } else { (charmander.type > bulbasaur.type)
    console.log(charmander.name + ' wins!');
  }
}

var bulbasaur = new Pokemon('Bulbasaur','grass', 'Tackle', 'Vine Whip');
var charmander = new Pokemon('Charmander','fire', 'Scratch', 'Ember');
var squirtle = new Pokemon('Squirtle','water', 'Tackle', 'Bubble');

pokemonGym (bulbasaur, charmander, squirtle);
