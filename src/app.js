/* src/app.js */
import 'bootstrap'
// import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import menu from './assets/scripts/menu';
import sliders from "./assets/scripts/sliders";
import { initMaps } from './assets/scripts/modules/map/main';
import Splitting from './assets/scripts/vendor/splitting';
import sal from './assets/scripts/vendor/sal';

window.Splitting = Splitting;
window.sal = sal;

// Styles
import 'styles/_app.scss'
// import 'simplebar/dist/simplebar.css';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  initMaps();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    sliders.init();
    menu.init();
  });
});
