import { OPTIONS_IDS, RISK_LEVELS } from "./calculator-config";

const BUTTON_ID = "calculate-button";
const RESULT_BOX = "result";
const RISK_LEVEL_ID = "risk-Level";
const RISK_MESSAGE_ID = "risk-message";
const RISK_RECOMMENDATION_ID = "risk-recommendation";

function addCalculatorButtonEventListener() {
  const button = document.getElementById(BUTTON_ID);
  button?.addEventListener("click", calcularRisco);
}

function calcularRisco() {
  const firstQuestionId = OPTIONS_IDS[0].id;
  const firstQuestionValue = parseInt(document.getElementById(firstQuestionId).value);
  const isFirstQuestionZero = firstQuestionValue === 0;

  const totalScore = OPTIONS_IDS.map((item) => ({ ...item, el: document.getElementById(item.id) }))
    .filter((item) => !(isFirstQuestionZero && item.ignoreIfFirstIsZero))
    .map((item) => parseInt(item.el.value))
    .reduce((prev, curr) => prev + curr, 0);
  showResult(totalScore);
}

function showResult(score) {
  const riskLevel = RISK_LEVELS.find((level) => score >= level.from && score <= level.to);

  document.getElementById(RISK_LEVEL_ID).textContent = `Pontuação: ${score} - ${riskLevel.level}`;
  document.getElementById(RISK_MESSAGE_ID).textContent = riskLevel.message;
  document.getElementById(RISK_RECOMMENDATION_ID).textContent = riskLevel.recommendation;
  document.getElementById(RESULT_BOX).style.display = "block";
}

export { addCalculatorButtonEventListener };
