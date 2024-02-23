const navbarOpenBtn = document.querySelector('.navbar-open-btn');
const navbarCloseBtn = document.querySelector('.navbar-close-btn');

navbarOpenBtn.addEventListener('click', () => {
    navbarOpenBtn.classList.add('d-none');
    navbarCloseBtn.classList.remove('d-none');
});

navbarCloseBtn.addEventListener('click', () => {
    navbarOpenBtn.classList.remove('d-none');
    navbarCloseBtn.classList.add('d-none');
});