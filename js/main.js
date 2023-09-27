'use strict';

document.addEventListener('DOMContentLoaded', function() {

  const smoothLinks = document.querySelectorAll('a[href^="#links"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = document.getElementById('links');

        id.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
  };

  const btn1 = document.querySelector('.button__active--1');
  const btn2 = document.querySelector('.button__active--2');
  const modal2= document.querySelector('.main-modal--2');
  const modal1= document.querySelector('.main-modal--1');
  const closeBtn1 = document.querySelector('.modal__close--1');
  const closeBtn2 = document.querySelector('.modal__close--2');
  const overlay = document.querySelector('.overlay');
  const backBtn1 = document.querySelector('.button-back--1');
  const backBtn2 = document.querySelector('.button-back--2');
  

  btn1.addEventListener('click', () => {
    modal1.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  })

  btn2.addEventListener('click', () => {
    modal2.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  })

  closeBtn1.addEventListener('click', () => {
    modal1.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    
  });
  
  closeBtn2.addEventListener('click', () => {
    modal2.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  })

  backBtn1.addEventListener('click', () => {
    modal1.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  })

  backBtn2.addEventListener('click', () => {
    modal2.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  })



  // document.addEventListener('click', (evt) => {
  //   let target = evt.target;
  //   if (target != modal1 || target != modal2) {
  //      modal1.classList.toggle('hidden');
  //       overlay.classList.toggle('hidden');
  //   }
  // })
  

  // overlay.addEventListener('click', (evt) => {
  //   overlay.classList.toggle('hidden');
  //   // modal1.classList.toggle('hidden');
    
  // })

});



