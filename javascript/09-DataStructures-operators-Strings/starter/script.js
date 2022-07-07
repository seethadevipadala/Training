'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    // console.log(starterIndex, mainIndex)

    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDeliery: function ({ startIndex, time, address, mainIndex }) {
    console.log(
      `${time},${this.starterMenu[startIndex]},${address},${mainIndex}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [1, 2, 3]
// const [a, b, c] = arr;
// console.log(a, b, c)

// let [primary, , secondary] = restaurant.categories;
// console.log(primary, secondary);
// [primary, secondary] = [secondary, primary]
// console.log(primary, secondary);
// console.log(restaurant.order(0,2));
// const [starter, mainCouse] = restaurant.order(0, 2);
// console.log(starter, mainCouse);

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours)

// const {
//   name: resName, categories: tags, openingHours: timins
// } = restaurant;
// console.log(resName,tags,timins)
// let a = 23;
// let b = 12;
// let n;
// const obj = { a: 23, b: 4, c: 5 };
// ({ a, b,c:n } = obj)
// console.log(a, b, n)
// const { openingHours:{fri:{open,close}} } = restaurant;
// // const { fri :{open,close} } = openingHours;
// console.log(open,close);
// restaurant.orderDeliery({
//   time: '2',
//   address: '322,efdfefeee',
//   startIndex: 1,
//   mainIndex:4
// })

//Spread Operator..................

// const arr = [1, 2, 3]
// const newArr = [12,5,...arr]
// console.log(newArr)

//Rest operator....................

// const arr = [1, 2, ...[3, 5]];
// console.log(arr)
// const [a,b,...others] =[1, 2, 3, 4, 5];

// console.log(a, b, others);
// let sum = 0;
// const add = function (...number) {
//   for (let i = 0; i < + number.length; i++){
//     sum+=number[i]
//   }
//     console.log(sum)

// }
// const arr = [2, 4, 5];
// add(...arr);

///////////////////////////////////#Codingi Challenge1/////////////////////////////

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: { a: 1.33 },
//     x: { a: 3.25 },
//     team2: { a: 6.5 },
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2)
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1,fieldPlayers1);
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2,fieldPlayers2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// for (const i of allPlayers.entries()) {
//   console.log(i)
// }
// console.log(game.odd?.team1)

// const properties = Object.keys(restaurant);
// console.log(properties);
// const aa = Object.entries(restaurant.openingHours)
// console.log(aa)
// for (let [key, { open,close}] of aa) {
//   // console.log(key,value1,value2)
//   console.log(key,open,close)

// }

// const aaa = Object.entries(game.odds)
// console.log(aaa);
// for (const [key, value] of aaa) {
//   console.log(key,value.a);

// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//////////////////////////coding challenge2///////////////////
//1

// const goals = Object.entries(game.scored);
// console.log(goals)

// for (const [i, value] of goals) {
//   // console.log(`Goal ${i + 1}: ${value}`);
//   console.log(`Goal ${i+1}: ${value}`);

// }

//2

let avg = 0;
let sum = 0;
const odds = Object.values(game.odds)
for (const odd of odds) {
  sum =sum+ odd;
}
console.log(sum)

avg = sum / odds.length;

console.log(avg)
// const odds = Object.keys(game.odds);
// let average = 0;
// const odds = Object.values(game.odds)
// console.log(odds);

// for (const odd of odds) average += odd;
// console.log(average);

// average /= odds.length;
// console.log(average);

////3

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉


const val = Object.entries(game.odds)
console.log(val);
for (let [i, j] of val) {
  const a = i==='x' ? 'draw' :`victory of ${game[i]}`
  console.log(`odd of  ${a} : ${j}`)
}

