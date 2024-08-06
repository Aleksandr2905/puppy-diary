new Swiper('.swiper-container', {
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.custom-next',
    prevEl: '.swiper-button-prev.custom-prev',
  },
});
