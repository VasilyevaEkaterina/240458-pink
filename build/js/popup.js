'use strict';

var ENTER_KEYCODE = 13;

var formBtn = document.querySelector('.form__btn');
var popup = document.querySelector('.popup');

var popupAccept = document.querySelector('.popup--accept');
var popupDecline = document.querySelector('.popup--decline');
var btnAccept = document.querySelector('.popup__btn--accept');
var btnDecline = document.querySelector('.popup__btn--decline');

formBtn.addEventListener('submit', function(evt) {
  evt.preventDefault();
  popupAccept.classList.remove('popup--closed');
});

btnAccept.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupAccept.classList.add('popup--closed');
});

btnDecline.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupDecline.classList.add('popup--closed');
});

window.addEventListener('keydown', function(evt) {
  evt.preventDefault();
  if(evt.keyCode === ENTER_KEYCODE) {
    popupAccept.classList.add('popup--closed');
    popupDecline.classList.add('popup--closed');
  }
});
