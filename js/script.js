{
    const hello = () => {
        console.log("Witam Ciebie na mojej stronie, mam nadzieje że udzielisz mi uwag abym wiedział co robie źle , pozdrawiam :)")
    }
    const changeBackground = () => {
        const buttonElement = document.querySelector(".js-button");
        const bodyElement = document.querySelector(".body");
        const buttonText = document.querySelector(".buttonText");

        buttonElement.addEventListener("click", () => {
            bodyElement.classList.toggle("darkTheme");
            bodyElement.classList.contains("darkTheme") ? buttonText.innerText = "jasne" : buttonText.innerText = "ciemne" ;
            [...document.querySelectorAll(".js-tableCell")].forEach(tableCellElement => {
                tableCellElement.classList.contains("section__tableCell--white") ? tableCellElement.classList.remove("section__tableCell--white") : tableCellElement.classList.add("section__tableCell--white");
            })
    });
    }

    const init = () => {
    
    changeBackground();
    hello();
    }
    init();
}

