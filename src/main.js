import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createGraphs } from "./js/charts";
import { animateCounter } from "./js/animations";
import { addPrintEventListener } from "./js/print";

document.addEventListener("DOMContentLoaded", function () {
  animateCounter();
  createGraphs();
  addPrintEventListener();
});
