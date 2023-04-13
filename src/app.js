// if we want hot reloaded html in dev server:
import './index.html';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu');
  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    document.querySelector('header').classList.toggle('toggle');
  });

  function toggleMenuClasses() {
    menu.classList.remove('fa-times');
    document.querySelector('header').classList.remove('toggle');
  }

  const topElement = document.querySelector('.top');
  function toggleTopDisplay() {
    if (window.pageYOffset > 0) {
      topElement.style.display = 'block';
    } else {
      topElement.style.display = 'none';
    }
  }

  window.addEventListener('scroll', () => {
    toggleMenuClasses();
    toggleTopDisplay();
  });

  window.addEventListener('load', () => {
    toggleMenuClasses();
    toggleTopDisplay();
  });

  // smooth scrolling
  const links = document.querySelectorAll('a[href*="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        const top = target.offsetTop;
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  });
});
