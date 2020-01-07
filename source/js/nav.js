'use strict';

const header = document.querySelector(".header");
const toggle = document.querySelector(".header__toggle");

header.classList.remove("header--nojs");

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (header.classList.contains("header--closed")) {
    header.classList.remove("header--closed");
    header.classList.add("header--opened");
  } else {
    header.classList.add("header--closed");
    header.classList.remove("header--opened");
  }
});

