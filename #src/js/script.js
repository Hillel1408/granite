const headerNavBtn = document.querySelector('.header-nav__btn');
const sidebar = document.querySelector('.sidebar-wrapper');
const popup = document.querySelector('.popup');
const header = document.querySelector('.header');

function getBodyScrollTop() {
    return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    );
}

headerNavBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    popup.classList.toggle('open');
    document.body.classList.toggle('lock');
    if (sidebar.style.maxHeight) sidebar.style.maxHeight = null;
    else
        sidebar.style.maxHeight =
            window.innerHeight -
            header.scrollHeight +
            getBodyScrollTop() +
            'px';
});

const headerNav = document.querySelector('.header-nav');
const menuBtn = document.querySelector('.header__menu-btn');
const closeBtn = document.querySelector('.header-nav__close-btn');

menuBtn.addEventListener('click', function () {
    headerNav.classList.toggle('open');
    document.body.classList.toggle('lock');
});

closeBtn.addEventListener('click', function () {
    headerNav.classList.toggle('open');
    document.body.classList.toggle('lock');
});

const mobileMenu = document.querySelector('.open-mobile-menu');
const mobileSidebar = document.querySelector('.sidebar');

mobileMenu.addEventListener('click', function () {
    mobileSidebar.classList.toggle('open');
    document.body.classList.toggle('lock');
});
