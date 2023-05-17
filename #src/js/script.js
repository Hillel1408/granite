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
});
