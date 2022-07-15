'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderData = function (data,clsaaName='') {
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
        <p class="country__row"><span>🗣️</span>LANG: ${
          Object.values(data?.[0].languages)
        }</p>
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
const getCountryAndNeibhour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    renderData(data);
    console.log(data);
    console.log(data);
    console.log(data?.[0].flags?.png);
      // console.log(currency)
      console.log(data?.[0].currencies[Object.keys(data?.[0].currencies)[0]]);
      const [neighbours] = data?.[0].borders;
      // console.log(data?.[0].borders[0]);
    console.log(neighbours)
      if (!neighbours) return;
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbours}`);
      request2.send();
    request2.addEventListener('load', function () {
      console.log(this.responseText)
      const data2 = JSON.parse(this.responseText);
      console.log(data2)
      renderData(data2, 'neighbour');
      })
      // console.log(this.responseText);
    
  });
};

// getCountryAndNeibhour('USA');

getCountryAndNeibhour('india');

// getCountryAndNeibhour('germany');
