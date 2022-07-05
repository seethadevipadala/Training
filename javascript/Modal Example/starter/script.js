'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
// console.log(btnCloseModal);

const closeModal = function (){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i <= btnShowModal.length; i++) {
  // console.log(btnShowModal[i].textContent);
  btnShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });


  btnCloseModal.addEventListener('click', closeModal);
}
