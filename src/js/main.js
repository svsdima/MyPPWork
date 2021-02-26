import progressBar from './progress-bar';
import scrolling from './scrolling';
import burger from './burger';
import filter from './filter';
import form from './form';

// window.onload = function() {

//     setTimeout(function() {

//         document.getElementById("preloader_malc").style.opacity = 0;

//     }, 400);

// };

window.addEventListener('DOMContentLoaded', () => {
    progressBar();
    scrolling('.pageup');
    burger('.menu', '.nav__trigger');
    filter();
    form('form');
});