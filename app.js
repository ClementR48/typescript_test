const title = document.querySelector("h1");

title.addEventListener("click", handleClickTitle);

function handleClickTitle(){
  setTimeout(() => {
    title.style.color = "#333"
  }, 1000)
  title.style.color = "red"
}
