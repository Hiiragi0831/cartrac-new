import Swiper, { Lazy } from "swiper";

let mainSlider = new Swiper('.slider__main', {
  modules: [Lazy],
  lazy: true,
});
