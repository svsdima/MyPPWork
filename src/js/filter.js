const filter = () => {
    const menu = document.querySelector('.portfolio__menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLanding = menu.querySelector('.landing'),
          btnStore = menu.querySelector('.store'),
          btnApp = menu.querySelector('.app'),
          btnOther = menu.querySelector('.other'),
          wrapper = document.querySelector('.portfolio__wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markLanding = wrapper.querySelectorAll('.landing'),
          markStore = wrapper.querySelectorAll('.store'),
          markApp = wrapper.querySelectorAll('.app'),
          markOther = wrapper.querySelectorAll('.other'),
          no = document.querySelector('.portfolio__no');

    /* Фильтрация элементов */
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animate__animated', 'animate__fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animate__animated', 'animate__fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animate__animated', 'animate__fadeIn');
            })
        } else {
            no.style.display = 'block';
            no.classList.add('animate__animated', 'animate__fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLanding.addEventListener('click', () => {
        typeFilter(markLanding);
    });

    btnStore.addEventListener('click', () => {
        typeFilter(markStore);
    });

    btnApp.addEventListener('click', () => {
        typeFilter(markApp);
    });

    btnOther.addEventListener('click', () => {
        typeFilter(markOther);
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;