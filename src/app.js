/* src/app.js */
import 'bootstrap'
// import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import menu from './assets/scripts/menu';
import sliders from "./assets/scripts/sliders";

// Styles
import 'styles/_app.scss'
// import 'simplebar/dist/simplebar.css';



sliders.init();
menu.init();
