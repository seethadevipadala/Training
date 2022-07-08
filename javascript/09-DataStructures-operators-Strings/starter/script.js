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

// let avg = 0;
// let sum = 0;
// const odds = Object.values(game.odds)
// for (const odd of odds) {
//   sum =sum+ odd;
// }
// console.log(sum)

// avg = sum / odds.length;

// console.log(avg)
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

// const val = Object.entries(game.odds)
// console.log(val);
// for (let [i, j] of val) {
//   const a = i==='x' ? 'draw' :`victory of ${game[i]}`
//   console.log(`odd of  ${a} : ${j}`)
// }

/////////////////////////////     Sets           ///////////////////////////

// const ordredSet = new Set([1, 3, 2, 4, 3, 2, 1, 1])
// console.log(ordredSet);
// console.log(ordredSet.has(2))
// console.log(ordredSet.has(9))
// ordredSet.add('5')
// console.log(ordredSet);
// for (const ele of ordredSet) {
//   console.log(ele)
// }

// const arr = ['sita', 'gita', 'swetha', 'sita', 'gita']
// const arr1 = [...new Set(arr)];
// console.log(arr1)
// console.log(new Set('aassddffj').size)

////////////////////////////////      Mpas           /////////////////////////

// const rest = new Map();
// rest.set('one', 1);
// rest.set('two', 2).set('three', 3).set('four', 4);
// console.log(rest);
// console.log(rest.get('one'));
// rest.delete('one');
// console.log(rest);

// //Convertion of objects to map

// console.log(new Map(Object.entries(restaurant.openingHours)));

//Quiz app
// const question = new Map([
//   ['question', 'what is the best programming language??'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false,'Try again']
// ])

// console.log(question.get('question'));
// for (let [key, value] of question) {
//   if(typeof key==='number') console.log(`Option ${key}: ${value}`)
// }

// const ans = Number(prompt("enter answer"));
// console.log(question.get((question.get('correct')===ans)))

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/


// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);



// const events = [...new Set(gameEvents.values())];
// console.log(events)

// gameEvents.delete(64)

// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)

// for (const [min, eve] of gameEvents) {
//   const half = min < 45 ? 'first half' : 'second half';
//   console.log(`[${half} ${min}] : ${eve}` )
// }



///////////////////////////////       Strings       ///////////////////////////////

// const str = 'Sita Devi';
// console.log(str[0]);
// console.log('sfdfe'[0]);
// console.log(str.length);
// console.log(str.indexOf('i'))
// console.log(str.lastIndexOf('i'));
// console.log(str.slice(5, 7))

// console.log(new String('jonas'));

// const str = 'Sita Devi';

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.replace('Devi', 'padala '));

// const strin = 'door door door';
// console.log(strin.replace(/door/g, 'gate'));

// console.log('a+bb+ccc+dddd'.split('+'));
// console.log('sitadevi Padala'.split(' '));
// const [fName, lName] = 'sitadevi Padala'.split(' ');

// console.log(fName, lName)

// const capitalizeName = function (item) {
//   const a = item.split(' ')
//   console.log(a)
//   const aa=[]
//   for (let n of a) {
//     aa.push(n[0].toUpperCase() + n.slice(1))
//   }
//   console.log(aa.join(' '));
//   // return aa;
// }
// capitalizeName('sita devi padala');

const message = '12345';
console.log(message.padStart(20, '+').padEnd(35, '+'));

const maskCreditcard = function (someString) {
  const str = someString.slice(-4);
  return str.padStart(someString.length,'*')
}

console.log(maskCreditcard('983827764634534'));