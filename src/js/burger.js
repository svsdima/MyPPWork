const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = "none";

    /* Открытие бургера */
    burgerElem.addEventListener('click', (e) => {
        e.preventDefault();
        if (menuElem.style.display == "none") {
            menuElem.style.display = "block";
            menuElem.classList.add('animate__animated', 'animate__slideInLeft');
            menuElem.classList.remove('animate__slideOutLeft');
            burgerElem.classList.add('is-active');
        } else {
            menuElem.classList.add('animate__slideOutLeft');
            menuElem.classList.remove('animate__slideInLeft');
            burgerElem.classList.remove('is-active');
            setTimeout(function() {
                menuElem.style.display = "none";
            } , 500);
        }
        clearTimeout();
    });
};

export default burger;