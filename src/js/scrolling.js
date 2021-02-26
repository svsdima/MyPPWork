const scrolling = (upSelector) => {
    /* Появление стрелки вверх */
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            upElem.classList.add('animate__animated', 'animate__fadeIn');
            upElem.classList.remove('animate__fadeOut');
        } else {
            upElem.classList.add('animate__fadeOut');
            upElem.classList.remove('animate__fadeIn');
        }
    });

    
    /* Скролл при помощи requestAnimationFrame */
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
            hash = this.hash,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        });
    });


};

export default scrolling;