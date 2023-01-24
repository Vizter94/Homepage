console.log("Witam Ciebie na mojej stronie, mam nadzieje że udzielisz mi uwag abym wiedział co robie źle , pozdrawiam :)")
let header__button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let buttonText = document.querySelector(".buttonText");

header__button.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    body.classList.contains("darkTheme") ? buttonText.innerText = "jasne" : buttonText.innerText = "ciemne"
});