'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabBtns = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const changeOpacity = function (link, newOpacity) {
  if (e.target.classList.contains('nav__link')) {
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (link !== el) el.style.opacity = newOpacity;
    });
    logo.style.opacity = newOpacity;
  }
};

// document.querySelectorAll('.nav__link').forEach(function (elem) {
//   elem.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const allSections = document.querySelectorAll('.section');
// const allButtons = document.getElementsByTagName('button');

// const message = document.createElement('div');

// message.classList.add('cookie-message');

// const h1 = document.querySelector('h1');

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.getElementById('section--1');

// const alertH1 = function (e) {
//   alert('البابا جالكوا ايديكوا فوق');
// };

// btnScrollTo.addEventListener('click', function (e) {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.addEventListener('mouseenter', alertH1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// },true); // true make the nav always called first

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabBtns.forEach(btn => btn.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});

nav.addEventListener('mouseover', e => changeOpacity(e.target, 0.5));
nav.addEventListener('mouseout', e => changeOpacity(e.target, 1));
