const swiper = new Swiper('.slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider__swiper-button-next',
        prevEl: '.slider__swiper-button-prev',
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
