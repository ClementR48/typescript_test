const title = document.querySelector("h1");


const handleClickTitle = () => {
  setTimeout(() => {
    title.style.color = "#333"
  }, 1000)
  title.style.color = "red"
}

title.addEventListener("click", handleClickTitle);


