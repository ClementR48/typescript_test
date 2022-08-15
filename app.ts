const counter = document.querySelector(".counter");
const buttonMas = document.querySelector('.increment')
const buttonMenos = document.querySelector('.decrement')

let i: number = 0;
const increment = (e: Event) => {
  i++;
  if (counter) {
    counter.textContent = i.toString();
  }
};

const decrement = () => {
  if(i > 0)
  i--
  if (counter)
  counter.textContent= i.toString()
}

buttonMas?.addEventListener("click", increment);
buttonMenos?.addEventListener("click", decrement);
