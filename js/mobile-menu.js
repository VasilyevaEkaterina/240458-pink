'use strict';

var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

mainNav.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
navToggle.classList.add('page-header__toggle--closed');

var menuToggler = function () {

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__toggle--closed');
  }
};

navToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuToggler();
});

navToggle.removeEventListener('click', function (evt) {
  evt.preventDefault();
  menuToggler();
});
