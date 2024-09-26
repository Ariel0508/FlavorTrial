import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//首頁
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 3,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    992: {      
      grid: {
        rows: 1,
      },
      slidesPerView: 2,
      spaceBetween: 48,
    },
    1200: {      
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});