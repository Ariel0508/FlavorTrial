import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//首頁
const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });