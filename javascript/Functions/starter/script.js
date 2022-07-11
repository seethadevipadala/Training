'use strict';
// const bookings = []
// const bookTicket = function (flightName,numOfPassengers=1,price=1 ) {
//     const booking = {
//         flightName,
//         numOfPassengers,
//         price
//     }
//     bookings.push(booking)
//     console.log(booking)


// }
// bookTicket('Air india', undefined, 9)

// const flight = 'LH123';
// const jonas = {
//     name: 'jonas Schedtmann',
//     passport: 43433535353
    
// }


// const checkIn = function (flightNum, passenger) {

//     flightNum = 'LH233';
//     passenger.name = 'Mr.' + passenger.name;
//     console.log(passenger.passport)
//     if (passenger.passport === 43433535353) {
//         alert('checkin')
//     }
//     else {
//         alert('wrong passport');
//     }
// }
// checkIn(flight, jonas)

///////////////////////////// Call back function and Higher order function
// const oneawaord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')
// }

// const transeformer = function (str, fn) {
//     console.log(`original srt : ${str}`)
//     console.log(fn(str));
// }
// transeformer('ssda egea hrrag', upperFirstWord);
// transeformer('ssda egea hrrag', oneawaord);


////////////////////////// Function returning functions ////////////////

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeter = greet('heyyyy');
// greeter('sita');

// greet('helooo')('gita')



// const greeet = greeting => name => {
//     console.log(`${greeting} ${name}`);
// }

// greet('helooo')('gita')

// const flight1 = {
//     airline: 'airline1',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightnum, name) {
//         console.log(`${name } booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`)
//     }
// }

// const flight2 = {
//     airline: 'airline2',
//     iataCode: 'EW',
//     booking: []
    
// }

// flight1.book(323, 'sita');
// const book = flight1.book;
// // book(23,'gita')
// book.call(flight1, 445, 'gita')
// book.apply(flight1, [4343, 'swetha'])
// console.log(flight1)
// console.log(flight2)

// const fun = book.bind(flight2);
// fun(32434, 'latha')

// flight1.planes = 300;


// flight1.buyPlane = function () {
//     // console.log(this)
//     this.planes++;
//     console.log(this.planes)
   
// };

// document.querySelector('.buy').addEventListener('click',flight1.buyPlane.bind(flight1))


// const addTax = (rate, value) => value + value * rate;


// console.log(addTax(0.1, 200));
// const add = addTax.bind(0.1,null);
// console.log(add(200));

// const addtax2 = (rate) => {
//     return function add2(value) {
//         return value + rate * value;
//     }
// }

// console.log(addtax2(0.1)(200))



///////////////////////////////Coding challeng -01//////////////////////////

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const ans = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number`));
//         console.log(ans);
//         // typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;
//         if(typeof ans === 'number' &&
//         ans < this.answers.length)
//         this.answers[ans]++;
  
//         console.log(this.answers);
//         this.displayResults();
//         this.displayResults('string');
//     },
    
    


//     displayResults(type = 'array') {
       
//         if (type === 'array')
//             console.log(this.answers);
//         else if (type === 'string')
//             console.log(`poll results are ${this.answers.join(',')}`)
//     }
// }


// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));



////////////////////////////////// Immediatly invoked functions////////////////////////////


const secureBooking = function(){
    let passengerNum = 20;
    return function () {
      passengerNum++;
      console.log(passengerNum);
    }
  }
  
  const booker = secureBooking();
booker();
booker();
  
booker();
console.dir(booker)

