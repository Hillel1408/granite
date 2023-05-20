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
