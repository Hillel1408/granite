const swiper = new Swiper('.slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider__swiper-button-next',
        prevEl: '.slider__swiper-button-prev',
    },
    scrollbar: {
        el: '.slider__swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: 'auto',
    },
});
const bestOfferSwiper = new Swiper('.best-offer-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.best-offer__swiper-button-next',
        prevEl: '.best-offer__swiper-button-prev',
    },
    enabled: false,
    breakpoints: {
        576: {
            enabled: true,
        },
    },
});
const productSwiper = new Swiper('.product-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: '.product__swiper-button-next',
        prevEl: '.product__swiper-button-prev',
    },
});
const productSwiper2 = new Swiper('.product-slider-2', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.product__swiper-button-next-2',
        prevEl: '.product__swiper-button-prev-2',
    },
});
const productSwiper3 = new Swiper('.product-slider-3', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.product__swiper-button-next-3',
        prevEl: '.product__swiper-button-prev-3',
    },
});

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

const tabsItems = document.querySelectorAll('.reviews-tabs-item');
const tabsBlock = document.querySelectorAll('.reviews-tabs-block');

for (let elem of tabsItems) {
    elem.addEventListener('click', function () {
        for (let elem of tabsItems) {
            elem.classList.remove('active');
        }
        this.classList.add('active');
        for (let elem of tabsBlock) {
            elem.classList.remove('active');
            if (this.dataset.id == elem.dataset.id) {
                elem.classList.add('active');
            }
        }
    });
}

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

const cartBtn = document.querySelector('.cart__form-btn');
const popup2 = document.querySelector('.popup-2');
const popup2Close = document.querySelector('.popup-2__close');
const popup2Btn = document.querySelector('.popup-2__btn');

cartBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup2.classList.toggle('open');
    document.body.classList.toggle('lock');
});

popup2Close.addEventListener('click', function () {
    popup2.classList.toggle('open');
    document.body.classList.toggle('lock');
});

popup2Btn.addEventListener('click', function () {
    popup2.classList.toggle('open');
    document.body.classList.toggle('lock');
});
