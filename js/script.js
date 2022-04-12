"use strict";
/*Замена классов
document.querySelector('.page').classList.remove('light-theme-site');
document.querySelector('.page').classList.add('dark-theme-site');
*/

/* Переключатель темы */
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('dark-theme-site');
  page.classList.toggle('light-theme-site');
};

let test = document.querySelector(".button-classic-test");
test.onclick=function () {
  alert("Нажали на кнопочку");
};
