"use strict";
// function logger(){
//     console.log('my name is sita');
//     return 'sita'
// }
// const name = logger();
// console.log(name)

// function fruitePieces(fruite){
//      return fruite*4;
// }

// function fruiteProcesser(apples,orenges){
//     // console.log(apples,orenges)
//     const applePieces = fruitePieces(apples)
//     const orengePieces = fruitePieces(orenges)
//     const juice =  `...........juice with ${applePieces} apples and ${orengePieces} orenges`
//     return juice;
// }
// const aa = fruiteProcesser(1,10);
// console.log(aa)

// function birthDate(bdate){
//     return 2022-bdate
// }

// const byear = birthDate(2011)
// console.log(byear)

// const byearrr = function(by){
//     return 2022-by

// }
// const byearr = birthDate(2011)
// console.log(byearr)

// const byeah = bd => {
//     return 2022-bd;
// }
// const byeahh = byeah(2000)
// console.log(byeahh)

// const calAvrg = (arg1, arg2, arg3) => (arg1+arg2+arg3) /3;

// const checkWinner = (avgDol, avgKoy)=>{
//      (avgDol >= avgKoy) ? console.log(`dolphins are the winners`) : console.log(`koyalas are the winners`);
// }

// const dolAvg = calAvrg(44,23,71);
// const koyAvg = calAvrg(44,23,90);
// console.log(dolAvg, koyAvg)
// checkWinner(dolAvg, koyAvg)

const friends = ["aa", "bb", "cc"];
// console.log(friends);
// console.log(friends.length)
// friends.push('ff');
// console.log(friends);
// const a=friends.pop()
// console.log(friends);

// console.log(a);
// const aaa=friends.shift('aa')
// console.log(friends);

// const sita= {
//     fname : 'sita',
//     lname : 'padala',
//      age : '22',
//      address : 'aaaa'
// }
// console.log(sita)
// console.log(friends)

// const aa = prompt("enter");
// console.log(sita[aa])

// const sita= {
//     fname : 'sita',
//     lname : 'padala',
//      byeah: 12,
//      address : 'aaaa',
//      age : function () {
//         return 22-this.byeah;
//      },

//      getSummery : function (){
//         return `last name of ${sita.fname} is ${this.lname} and her age is ${sita.age()}`;

//      }

// }
//  console.log(sita.age());
//  console.log(sita.getSummery())

// const john = {
//     fname: 'john',
//     lname: 'padala',
//     byeah: 12,
//     address: 'aaaa',
//     mass: 78,
//     height: 1.69,
//     calBmi: function () {
//         return this.bmi = this.mass / this.height ** 2;
//     }

// }

// const mark = {
//     fname: 'mark',
//     lname: 'padala',
//     byeah: 12,
//     address: 'aaaa',
//     mass: 92,
//     height: 1.95,
//     calBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// }
// mark.calBmi();
// john.calBmi();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fname}`);
// }
// else {
//     console.log(`${john.bmi}`);

// }

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }

//     // calcAge: function () {
//     //   // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

// for(let a=1; a<10; a++){
//     console.log("sita",a);
// }

// const years = [2021, 2022, 2023, 2024]
// const ages = []
// for (let i = 0; i < years.length; i++) {
//     ages.push(2039 - years[i]);

//     if (years[i] === 2023) {
//         break;

//     }
// }
// console.log(ages);

let dice = Math.trunc(Math.random() * 6);
console.log(dice);
