const CONSUMPTION_BY_AGE_COLORS = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd"];

const CONSUMPTION_BY_AGE = {
  canvas: "consumptionByAgeCanvas",
  context: "2d",
  chart: {
    type: "bar",
    data: {
      labels: ["18-24 anos", "25-34 anos", "35-44 anos", "45-54 anos", "55-64 anos", "65+ anos"],
      datasets: [
        {
          label: "Consumo abusivo de álcool (%)",
          data: [25.0, 23.0, 20.8, 18.5, 15.2, 8.7],
          backgroundColor: CONSUMPTION_BY_AGE_COLORS.map((color) => color + "80"),
          borderColor: CONSUMPTION_BY_AGE_COLORS,
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Consumo Abusivo por Faixa Etária - Brasil 2023",
          font: { size: 16, weight: "bold" },
        },
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.parsed.y}% fazem consumo abusivo`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 30,
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
          title: {
            display: true,
            text: "Percentual da população (%)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Faixa etária",
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuart",
      },
    },
  },
};

const DEATHS_BY_GENDER_COLORS = ["#3498db", "#e74c3c"];

const DEATHS_BY_GENDER = {
  canvas: "deathsByGenderCanvas",
  context: "2d",
  chart: {
    type: "doughnut",
    data: {
      labels: ["Homens", "Mulheres"],
      datasets: [
        {
          label: "Mortes relacionadas ao álcool (2020)",
          data: [84510, 15490],
          backgroundColor: DEATHS_BY_GENDER_COLORS,
          borderColor: "#ffffff",
          borderWidth: 3,
          hoverOffset: 10,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Distribuição de Mortes por Gênero (2020)",
          font: { size: 16, weight: "bold" },
        },
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            usePointStyle: true,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed * 100) / total).toFixed(1);
              return `${context.label}: ${context.parsed.toLocaleString("pt-BR")} mortes (${percentage}%)`;
            },
          },
        },
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
      },
    },
  },
};

const CONSUMPTION_AMONG_YOUNG_PEOPLE = {
  canvas: "consumptionAmongYoungCanvas",
  context: "2d",
  chart: {
    type: "pie",
    data: {
      labels: ["Fazem consumo abusivo", "Não fazem consumo abusivo"],
      datasets: [
        {
          label: "Jovens 18-24 anos",
          data: [25, 75],
          backgroundColor: ["#e74c3c", "#27ae60"],
          borderColor: "#ffffff",
          borderWidth: 3,
          hoverOffset: 15,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Consumo Abusivo entre Jovens (18-24 anos)",
          font: { size: 16, weight: "bold" },
          color: "#000000",
        },
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            usePointStyle: true,
            color: "#000000",
            weight: "bold",
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.parsed}%`;
            },
          },
        },
      },
      animation: {
        animateRotate: true,
        duration: 2000,
      },
    },
  },
};

const HOSPITALIZATIONS_BY_YEAR = {
  canvas: "hospitalizationsByYearCanvas",
  context: "2d",
  chart: {
    type: "line",
    data: {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Internações por dependência de álcool",
          data: [145000, 148000, 152000, 156000, 159000, 167000, 164000, 162000, 160000],
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#c0392b",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Evolução das Internações Hospitalares (SUS)",
          font: { size: 16, weight: "bold" },
        },
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.parsed.y.toLocaleString("pt-BR")} internações em ${context.label}`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value.toLocaleString("pt-BR");
            },
          },
          title: {
            display: true,
            text: "Número de internações",
          },
        },
        x: {
          title: {
            display: true,
            text: "Ano",
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuart",
      },
    },
  },
};

const DEATH_CAUSES_OF_ALCOHOL_CONSUMPTION_COLORS = [
  "#e74c3c",
  "#f39c12",
  "#9b59b6",
  "#e67e22",
  "#3498db",
  "#95a5a6",
  "#1abc9c",
];

const DEATH_CAUSES_OF_ALCOHOL_CONSUMPTION = {
  canvas: "deathCausesCanvas",
  context: "2d",
  chart: {
    type: "bar",
    data: {
      labels: [
        "Doenças hepáticas",
        "Acidentes de trânsito",
        "Violência",
        "Câncer",
        "Doenças cardiovasculares",
        "Suicídios",
        "Outras causas",
      ],
      datasets: [
        {
          label: "Principais causas (%)",
          data: [35, 20, 15, 12, 8, 5, 5],
          backgroundColor: DEATH_CAUSES_OF_ALCOHOL_CONSUMPTION_COLORS.map((color) => color + "80"),
          borderColor: DEATH_CAUSES_OF_ALCOHOL_CONSUMPTION_COLORS,
          borderWidth: 2,
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        title: {
          display: true,
          text: "Principais Causas de Morte Relacionadas ao Álcool",
          font: { size: 16, weight: "bold" },
        },
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.parsed.x}% das mortes relacionadas ao álcool`;
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 40,
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
          title: {
            display: true,
            text: "Percentual (%)",
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuart",
      },
    },
  },
};

export const CHARTS_CONFIG = {
  CONSUMPTION_BY_AGE,
  DEATHS_BY_GENDER,
  CONSUMPTION_AMONG_YOUNG_PEOPLE,
  HOSPITALIZATIONS_BY_YEAR,
  DEATH_CAUSES_OF_ALCOHOL_CONSUMPTION,
};
