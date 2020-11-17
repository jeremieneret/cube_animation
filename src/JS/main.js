const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const bonjour = document.querySelector('.bonjour');
let bonjourOpen = false;
menuBtn.addEventListener('click', () => {
    if (!bonjourOpen) {
        bonjour.classList.add('open');
        bonjourOpen = true;
    } else {
        bonjour.classList.remove('open');
        bonjourOpen = false;
    }
});

