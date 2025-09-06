const COUNTER_TAG_ID = "counter";
const NUMBER_OF_DEATHS_PER_YEAR = 58000;
const ANIMATION_INTERVAL = 30;
const LOCALE = "pt-BR";

function animateCounter() {
  const counter = document.getElementById(COUNTER_TAG_ID);
  const target = NUMBER_OF_DEATHS_PER_YEAR;
  const increment = target / 100;

  let current = 0;

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      counter.textContent = target.toLocaleString(LOCALE);
      clearInterval(timer);
      return;
    }

    counter.textContent = Math.floor(current).toLocaleString(LOCALE);
  }, ANIMATION_INTERVAL);
}

export { animateCounter };
