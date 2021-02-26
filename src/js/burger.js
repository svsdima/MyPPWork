const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);

    // menuElem.style.display = "none";
    menuElem.style.opacity = 0;

    /* Открытие бургера */
    burgerElem.addEventListener('click', (e) => {
        e.preventDefault();
        if (menuElem.style.opacity == 0) {
            // menuElem.style.display = "block";
            menuElem.style.opacity = 1;
            menuElem.classList.add('animate__animated', 'animate__slideInLeft');
            menuElem.classList.remove('animate__slideOutLeft');
            burgerElem.classList.add('is-active');
        } else {
            // menuElem.style.display = "none";
            menuElem.classList.add('animate__slideOutLeft');
            menuElem.classList.remove('animate__slideInLeft');
            menuElem.style.opacity = 0;
            burgerElem.classList.remove('is-active');
        }
    });
};

export default burger;