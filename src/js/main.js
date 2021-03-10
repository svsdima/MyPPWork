import progressBar from './progress-bar';
import scrolling from './scrolling';
import burger from './burger';
import filter from './filter';

window.addEventListener('DOMContentLoaded', () => {
    progressBar();
    scrolling('.pageup');
    burger('.menu', '.nav__trigger');
    filter();
});