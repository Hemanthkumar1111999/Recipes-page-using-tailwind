const burger = document.querySelector('#humburger');
const menu = document.querySelector('#menu');

burger.addEventListener('click',() => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})