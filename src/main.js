import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createGraphs } from "./js/charts";
import { animateCounter } from "./js/animations";
import { addPrintEventListener } from "./js/print";
import { addMenuEventListener } from "./js/menu";
import { addCalculatorButtonEventListener } from "./js/calculator";

document.addEventListener("DOMContentLoaded", function () {
  animateCounter();
  createGraphs();
  addPrintEventListener();
  addMenuEventListener();
  addCalculatorButtonEventListener();
});
