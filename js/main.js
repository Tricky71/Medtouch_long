'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const smoothLinks = document.querySelectorAll('a[href^="#links"]');
  const smoothItems = document.querySelectorAll('.links__item');
  
  for (let i = 0; i < smoothLinks.length; i++) {
    const arr = [];
    smoothLinks.forEach((n) => {
      arr.push(n.getAttribute('data-link'));
      return arr;
    });
    
    smoothLinks[i].addEventListener('click', function (e) {
      e.preventDefault();
      modal1.classList.add('hidden');
      modal2.classList.add('hidden');
      overlay.classList.add('hidden');
      body1.style.overflowY = 'visible';
      smoothItems[arr[i] - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  const body1 = document.querySelector('body');
  const btn1 = document.querySelector('.button__active--1');
  const btn2 = document.querySelector('.button__active--2');
  const modal2= document.querySelector('.main-modal--2');
  const modal1= document.querySelector('.main-modal--1');
  const closeBtn1 = document.querySelector('.modal__close--1');
  const closeBtn2 = document.querySelector('.modal__close--2');
  const overlay = document.querySelector('.overlay');
  const backBtn1 = document.querySelector('.button-back--1');
  const backBtn2 = document.querySelector('.button-back--2');
  const overlayInlay =document.querySelector('.overlay__inlay');
  
  btn1.addEventListener('click', () => {
    modal1.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'hidden';
  })

  btn2.addEventListener('click', () => {
    modal2.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'hidden';
  })

  closeBtn1.addEventListener('click', () => {
    modal1.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'visible';
  });
  
  closeBtn2.addEventListener('click', () => {
    modal2.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'visible';
  });

  backBtn1.addEventListener('click', () => {
    modal1.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'visible';
  });

  backBtn2.addEventListener('click', () => {
    modal2.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body1.style.overflowY = 'visible';
  });

  overlay.addEventListener('click', (evt) => {
    if (evt.target == overlayInlay) {
      modal1.classList.add('hidden');
      modal2.classList.add('hidden');
      overlay.classList.add('hidden');
      body1.style.overflowY = 'visible';
    }
  });


});



