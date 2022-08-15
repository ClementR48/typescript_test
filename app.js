"use strict";
const counter = document.querySelector(".counter");
const buttonMas = document.querySelector('.increment');
const buttonMenos = document.querySelector('.decrement');
let i = 0;
const increment = (e) => {
    i++;
    if (counter) {
        counter.textContent = i.toString();
    }
};
const decrement = () => {
    if (i > 0)
        i--;
    if (counter)
        counter.textContent = i.toString();
};
buttonMas === null || buttonMas === void 0 ? void 0 : buttonMas.addEventListener("click", increment);
buttonMenos === null || buttonMenos === void 0 ? void 0 : buttonMenos.addEventListener("click", decrement);
