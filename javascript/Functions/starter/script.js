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

const flight1 = {
    airline: 'airline1',
    iataCode: 'LH',
    bookings: [],
    book(flightnum, name) {
        console.log(`${name } booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`)
    }
}

const flight2 = {
    airline: 'airline2',
    iataCode: 'EW',
    booking: []
    
}

flight1.book(323, 'sita');
const book = flight1.book;
// book(23,'gita')
book.call(flight1, 445, 'gita')
book.apply(flight1, [4343, 'swetha'])
console.log(flight1)
console.log(flight2)

const fun = book.bind(flight2);
fun(32434, 'latha')

flight1.planes = 300;
flight1.buyPlane = () => {
    this.planes++;
console.log(this.planes)
}

document.querySelector('.buy').addEventListener('clisk',flight1.buyPlane.bind(flight1)
