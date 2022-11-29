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

  function status() {
    if (document.querySelectorAll('.tovar__sklad')) {
      document.querySelectorAll('.tovar__sklad').forEach((item) => {
        if (!item.querySelector(".product__statys")) {
          const div = document.createElement('div');
          const span = document.createElement('span');

          div.classList.add('product__statys');
          div.classList.add('product__statys--red');
          span.classList.add('for-mobile');
          span.innerHTML = "Нет в наличии";


          item.appendChild(div);
          div.appendChild(span);
        }
      })
    }
  }

  status();

  if (document.querySelector('.product__table')) {
    if (document.querySelector('.product__table').querySelectorAll('.product__tr').length > 5) {
      document.querySelector('.product__table').querySelectorAll('.product__tr').forEach((item, index) => {
        if (index > 5) {
          item.classList.add('is-hidden');
        }
      });

      document.querySelector('.product__more').addEventListener('click', () => {
        document.querySelector('.product__more').classList.add('is-hidden');
        document.querySelector('.product__table').querySelectorAll('.product__tr').forEach((item) => {
          item.classList.remove('is-hidden');
        });
      })
    }
  }

  // $(document).on('mse2_load', function(e, data) {
  //   status();
  // });

  if (document.querySelector('.deliver-js')) {
    const deliverJs = document.querySelector('.deliver-js');

    deliverJs.querySelectorAll('label').forEach((i) => {
      if (i.textContent.includes('Доставка')) {
        i.querySelector('input').checked = true;
      }
    });

    document.querySelectorAll('.deliver-js-btn').forEach((i) => {
      i.addEventListener('click', () => {

        deliverJs.querySelectorAll('label').forEach((j) => {
          j.querySelector('input').removeAttribute('checked');
          if (j.textContent.includes(String(i.textContent))) {
            console.log(j.querySelector('input'));
            j.querySelector('input').setAttribute('checked', 'checked');
          }
        });
      });
    });
  }
});



