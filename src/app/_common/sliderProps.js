import {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Parallax,
  FreeMode,
} from "swiper/modules";

// Swiper 11+ doesn't use SwiperCore.use, modules are passed directly to the component or props

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderProps = {
  milImagesFullSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".art-project-slider-navigation .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-works-swiper-next",
      prevEl: ".art-works-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  },
  milReviewsSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".art-testimonial-slider-navigation .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    modules: [
      Pagination,
      Navigation,
      Autoplay,
      EffectFade,
      Grid,
      EffectCreative,
      Virtual,
      HashNavigation,
      History,
      Thumbs,
      Scrollbar,
      Keyboard,
      A11y,
      Parallax,
      FreeMode,
      Mousewheel,
    ],
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  milBlogSlider: {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".art-blog-slider-navigation .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-blog-swiper-next",
      prevEl: ".art-blog-swiper-prev",
    },
    modules: [
      Pagination,
      Navigation,
      Autoplay,
      EffectFade,
      Grid,
      EffectCreative,
      Virtual,
      HashNavigation,
      History,
      Thumbs,
      Scrollbar,
      Keyboard,
      A11y,
      Parallax,
      FreeMode,
      Mousewheel,
    ],
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
};
