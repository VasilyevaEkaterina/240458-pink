'use strict';

// Prices: mobile controls
var priceTable = document.querySelector('.prices__table');

var slideLeft = function () {
  priceTable.style.transform = 'translateX(-21%)';
}

var slideCenter = function () {
  priceTable.style.transform = 'translateX(-47%)';
}

var slideRight = function () {
  priceTable.style.transform = 'translateX(-71%)';
}

// Reviews
var prevSlide = document.querySelector('.review__slide--prev');
var currentSlide = document.querySelector('.review__slide--current');
var nextSlide = document.querySelector('.review__slide--next');
var arrowBtns = document.querySelector('.review__arrow-btns');
var radioBtns = document.querySelector('.review__slider-controls');

prevSlide.classList.add('review__slide--hidden');
nextSlide.classList.add('review__slide--hidden');
currentSlide.classList.add('review__slide--active');
arrowBtns.style.opacity = "1";
radioBtns.style.opacity = "1";

// Reviews: mobile and tablet controls
var slidePrev = function () {
  currentSlide.classList.add('review__slide--hidden');
  nextSlide.classList.add('review__slide--hidden');
  prevSlide.classList.remove('review__slide--hidden');
}

var slideActive = function () {
  prevSlide.classList.add('review__slide--hidden');
  nextSlide.classList.add('review__slide--hidden');
  currentSlide.classList.remove('review__slide--hidden');
}

var slideNext = function () {
  currentSlide.classList.add('review__slide--hidden');
  prevSlide.classList.add('review__slide--hidden');
  nextSlide.classList.remove('review__slide--hidden');
}

// Reviews: desktop controls
var prevBtn = document.querySelector('.review__arrow--prev');
var nextBtn = document.querySelector('.review__arrow--next');

var onNextBtnClick = function () {
  if (currentSlide.classList.contains('review__slide--active')) {
    currentSlide.classList.remove('review__slide--active');
    currentSlide.classList.add('review__slide--hidden');
    nextSlide.classList.remove('review__slide--hidden');
    nextSlide.classList.add('review__slide--active');
    nextBtn.style.display = "none";
    prevBtn.style.display = "block";
  } else {
    nextSlide.classList.remove('review__slide--active');
    nextSlide.classList.add('review__slide--hidden');
    prevSlide.classList.remove('review__slide--active');
    prevSlide.classList.add('review__slide--hidden');
    currentSlide.classList.remove('review__slide--hidden');
    currentSlide.classList.add('review__slide--active');
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  };
}

var onPrevBtnClick = function () {
  if (currentSlide.classList.contains('review__slide--active')) {
    currentSlide.classList.remove('review__slide--active');
    currentSlide.classList.add('review__slide--hidden');
    prevSlide.classList.remove('review__slide--hidden');
    prevSlide.classList.add('review__slide--active');
    prevBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else {
    prevSlide.classList.remove('review__slide--active');
    prevSlide.classList.add('review__slide--hidden');
    nextSlide.classList.remove('review__slide--active');
    nextSlide.classList.add('review__slide--hidden');
    currentSlide.classList.remove('review__slide--hidden');
    currentSlide.classList.add('review__slide--active');
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  };
}

prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);
