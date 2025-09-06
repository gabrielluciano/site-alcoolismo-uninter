import { Chart, registerables } from "chart.js";
import { CHARTS_CONFIG } from "./chart-config";

Chart.register(...registerables);

function createGraphs() {
  for (const key in CHARTS_CONFIG) {
    const chart = CHARTS_CONFIG[key];

    const ctx = document.getElementById(chart.canvas);
    if (!ctx) continue;

    new Chart(ctx.getContext(chart.context), chart.chart);
  }
}

export { createGraphs };
