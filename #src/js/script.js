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

const toggle = (item) => {
    item.classList.toggle('open');
    document.body.classList.toggle('lock');
};

headerNavBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    toggle(popup);
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
    toggle(headerNav);
});

closeBtn.addEventListener('click', function () {
    toggle(headerNav);
});

const mobileMenu = document.querySelector('.open-mobile-menu');
const mobileSidebar = document.querySelector('.sidebar');

mobileMenu.addEventListener('click', function () {
    toggle(mobileSidebar);
});

const phoneInput = document.querySelectorAll('.phone-input');

phoneInput.forEach((item) => {
    const phoneMask = new IMask(item, {
        mask: '+{7}(000)000-00-00',
    });
});

const sidebarCloseBtn = document.querySelector('.sidebar__close-btn');

sidebarCloseBtn.addEventListener('click', function () {
    toggle(mobileSidebar);
});
