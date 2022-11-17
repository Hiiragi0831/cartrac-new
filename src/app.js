/* src/app.js */
import 'bootstrap'
// import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import menu from './assets/scripts/menu';
import sliders from "./assets/scripts/sliders";
import { initMaps } from './assets/scripts/modules/map/main';
import Splitting from './assets/scripts/vendor/splitting';
import sal from './assets/scripts/vendor/sal';
import {initAccordions} from './assets/scripts/modules/accordion/init-accordion';
import 'lazysizes';

window.Splitting = Splitting;
window.sal = sal;

// Styles
import 'styles/_app.scss'
import { initQty } from './assets/scripts/modules/field-num';
// import 'simplebar/dist/simplebar.css';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  initMaps();
  initAccordions();
  sliders.init();
  menu.init();
  initQty();

  if (document.querySelectorAll('.tovar__sklad')) {
    document.querySelectorAll('.tovar__sklad').forEach((item) => {
      if (item.innerHTML === "") {
        const div = document.createElement('div');

        div.classList.add('product__statys');
        div.classList.add('product__statys--red');

        item.appendChild(div);
      }
    })
  }
});



