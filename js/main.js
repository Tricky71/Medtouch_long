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
});



