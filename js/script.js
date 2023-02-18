{
    const hello = () => {
        console.log("Witam Ciebie na mojej stronie, mam nadzieje że udzielisz mi uwag abym wiedział co robie źle , pozdrawiam :)")
    }
    const changeBackground = () => {
        const header__button = document.querySelector(".header__button");
        const body = document.querySelector(".body");
        const buttonText = document.querySelector(".buttonText");

        header__button.addEventListener("click", () => {
            body.classList.toggle("darkTheme");
            body.classList.contains("darkTheme") ? buttonText.innerText = "jasne" : buttonText.innerText = "ciemne"
        });
    }
    changeBackground();
    hello();
}