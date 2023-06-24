// if we want hot reloaded html in dev server:
import Typed from 'typed.js';
import './index.html';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu');
  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    document.querySelector('header').classList.toggle('toggle');
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

  // typed js

  const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Student', 'Sport Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});
