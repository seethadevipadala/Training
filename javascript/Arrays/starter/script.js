'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const displayMovements = function (movements) {
//   movements.forEach(
//     function (mov, i) {
//       const type = mov > 0 ? 'diposit' : 'withdraw';
//       const html = `
//       <div class="movements__row">
//       <div class="movements__type movements__type--deposit">${i + 1} ${type}</div>
//       <div class="movements__date">3 days ago</div>
//       <div class="movements__value">${mov}</div>
//     </div>`;
//       containerMovements.insertAdjacentHTML('afterbegin',html)
      
//     }
//   );
// }
// const movements= [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// console.log(account1.movements)
// console.log(displayMovements(accounts));

// const createUsername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// console.log(accounts)
// console.log(createUsername(accounts));


// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };
// const calcPrintBalance = function (movements) {
//   const balance = movements.reduce(function (acc, curr) {
//     return acc+curr
//   })
// }

// console.log(calcPrintBalance(account1.movements))





// const eurToUsd = 1.1;
// const momentUS = movements.map((mov) => eurToUsd * mov);


// console.log(momentUS);
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


/////////////////////////////////////////////////


// const arr = [1, 23, 5, 7, 3];
// console.log(arr.slice('2', '4'));
// console.log(arr.slice('-4'));
// console.log([...arr])
// console.log(arr.splice('2'));
// console.log(arr);

// const arrr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arrr.reverse());

// console.log(arr.concat(arrr));
// console.log([...arr, ...arrr]);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function (i,element) {
//   console.log(element,i)
// });


// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// const aa = arr.slice();
// console.log(aa);

// const userr = function (str) {
//   const name = str.toLowerCase().
//     split(' ')
//     .map(name => name[0]).join('');
//   return name;
// }
// console.log(userr('Padala Sita Devi'));

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// })

// const withdraw = movements.filter(mov => mov < 0);

// console.log(deposits);
// console.log(withdraw);

// const balance = movements.reduce(function (acc, curr) {
//   return acc + curr;
// })
// console.log(balance);





// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// console.log(accounts)
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);


// const somee = account1.movements.some((some) => some > 1500);
// console.log(somee)


const arr = [[1,[50,39,[3,5]] ,2], [3], 5, 7, 4, 3, 2];
console.log(arr.flat(3));
// console.log(arr.map((ele) => ele));
console.log(arr.flatMap(ele => ele));

// const arr = [-10, 2, -20, 5, 6, 73, -434];
// // console.log(arr.sort());
// arr.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;

// })
// console.log(arr);

const x = new Array(6);
x.fill(1,2,6);
console.log(x);
const a = new Array(1, 2, 3, 4, 5);
console.log(a);

const y = Array.from({ length: 10 },(_,i)=>i+1 )
console.log(y);

