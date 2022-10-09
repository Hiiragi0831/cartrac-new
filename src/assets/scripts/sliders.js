import Swiper, { Pagination } from "swiper";

const init = () => {
  new Swiper('.tovars-slider .swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1199: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    }
  });

  new Swiper('.brands-slider .swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1199: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    }
  });

  new Swiper('.swiper-brands .swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });
}

export default {
  init,
}
