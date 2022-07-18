// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // ///////////////////////////////////////

const renderData = function (data, clsaaName = '') {
  const currency = Object.keys(data?.[0].currencies)[0];
  const html = `

    <article class="country-${clsaaName}">
      <img class="country__img" src=${data?.[0].flags.png} />
      <div class="country__data">
        <h3 class="country__name">${data?.[0].name.common}</h3>
        <h4 class="country__region">${data?.[0].region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data?.[0].population / 1000000
        ).toFixed(1)}people</p>
        <p class="country__row"><span>🗣️</span>LANG: ${Object.values(
          data?.[0].languages
        )}</p>
        <p class="country__row"><span>💰</span>CUR:${
          data?.[0].currencies[currency].name +
          ' ' +
          data?.[0].currencies[currency].symbol
        }</p>
      </div>
    </article>

    `;
  console.log(Object.values(Object.values(data?.[0].currencies)[0]));
  countriesContainer.insertAdjacentHTML('beforebegin', html);
  countriesContainer.style.opacity = 1;
};
// // const getCountryAndNeibhour = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const data = JSON.parse(this.responseText);
// //     renderData(data);
// //     console.log(data);
// //     console.log(data);
// //     console.log(data?.[0].flags?.png);
// //       // console.log(currency)
// //       console.log(data?.[0].currencies[Object.keys(data?.[0].currencies)[0]]);
// //       const [neighbours] = data?.[0].borders;
// //       // console.log(data?.[0].borders[0]);
// //     console.log(neighbours)
// //       if (!neighbours) return;
// //       const request2 = new XMLHttpRequest();
// //       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbours}`);
// //       request2.send();
// //     request2.addEventListener('load', function () {
// //       console.log(this.responseText)
// //       const data2 = JSON.parse(this.responseText);
// //       console.log(data2)
// //       renderData(data2, 'neighbour');
// //       })
// //       // console.log(this.responseText);

// //   });
// // };

// // // getCountryAndNeibhour('USA');

// // getCountryAndNeibhour('india');

// // // getCountryAndNeibhour('germany');

// // const req = fetch('https://restcountries.com/v3.1/name/india');
// // console.log(req);

// // const getCountry = function (country) {
// //   const req = fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
// //     console.log(response);
// //     return response.json();
// //   }).then(function (data) {
// //     console.log(data);
// //     renderData(data)
// //   });

// // // console.log(req);
// // }

// const getError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountry = function (country) {
//   const req = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`  ${response.status}`);

//       return response.json();
//     })

//     .then(data => {
//       console.log(data);
//       renderData(data);
//       const neighbour = data?.[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         .then(
//           res => res.json(),
//           err => alert(err)
//         )
//         .then(dataa => renderData(dataa, 'neighbour'))
//         .catch(err => {
//           console.log(`Error : ${err} `);
//           // getError(
//           //   `something went wrong ${err.message}. Try again!`
//           // );
//         })
//         .finally(() => {
//           countriesContainer.style.opacity = 1;
//         });
//     })
//     .catch(err => {
//       console.log(`Error : ${err} `);
//       getError(
//         `............something went wrong ${err.message}. Try again!...............`
//       );
//     })

// };

// btn.addEventListener('click', function () {
//   getCountry('india');
// });

// getCountry('india');

// const promise = new Promise(function (reolve, reject) {
//   console.log('Lottery draw is happening');
//   const num = Math.random();
//   console.log(num);
//   setTimeout(function () {
//     if (num >= 0.4) console.log('you win');
//     else {
//       console.log('lost');
//     }
//   }, 2000);
// });
// promise.then(res => console.log(res)).catch(err => console.log(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log('1 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds');
//     return wait(1);
//   });

// const position = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// position().then(pos => console.log(pos));

// const whereAmI = async function (country) {
//   console.log('second');
//   try {
//     const data = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     console.log('second');

//     console.log(data);
//     const dataaa = await data.json();
//     console.log(dataaa);
//     renderData(dataaa);
//   } catch (err) {
//     console.log(`...............err............`);
    
//   }

// }
// whereAmI('portugal');
// console.log('first');
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const get3Countries = async function (c1, c2, c3) {
//   try {

//     // const data1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
//     // const dataaaa1 = await data1.json();
//     // const data2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
//     // const dataaaa2 = await data2.json();
//     // const data3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
//     // const dataaaa3 = await data3.json();

//     // console.log(dataaaa1);
//     // console.log([dataaaa1[0]?.capital, dataaaa2[0]?.capital, dataaaa3[0]?.capital]);
//     // console.log([dataaaa2[0]?.capital]);
//     // console.log([dataaaa3[0]?.capital]);
//    const data = await Promise.all([
//       // console.log((await (await fetch(`https://restcountries.com/v3.1/name/${c1}`)).json())[0]?.capital),
//       // console.log((await (await fetch(`https://restcountries.com/v3.1/name/${c2}`)).json())[0]?.capital),
//       // console.log((await (await fetch(`https://restcountries.com/v3.1/name/${c3}`)).json())[0]?.capital)


//     // const dataaaa1 = await data1.json(),
//     // const data2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`),
//     // // const dataaaa2 = await data2.json();
//     // const data3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`),
//     // // const dataaaa3 = await data3.json();
//     // console.log([dataaaa1[0]?.capital, dataaaa2[0]?.capital, dataaaa3[0]?.capital]);
     
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),

//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),

      

//    ]);
    
//     console.log(data.map(d => d[0]?.capital));
    
//   // console.log([data[0]?.capital])

//   } catch (err) {
//     console.error(err)
//   }
// }

// get3Countries('india', 'usa', 'portugal');

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/india`),
    getJSON(`https://restcountries.com/v3.1/name/usa`),
    
  ]);
  console.log(res[0]);
})();