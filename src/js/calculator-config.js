const OPTIONS_IDS = [
  { id: "select-frequency", ignoreIfFirstIsZero: false },
  { id: "select-quantity", ignoreIfFirstIsZero: true },
  { id: "select-binge", ignoreIfFirstIsZero: true },
  { id: "select-cant-stop", ignoreIfFirstIsZero: true },
  { id: "select-failed-responsibilities", ignoreIfFirstIsZero: true },
  { id: "select-morning-drink", ignoreIfFirstIsZero: true },
  { id: "select-guilty", ignoreIfFirstIsZero: true },
  { id: "select-amnesia", ignoreIfFirstIsZero: true },
  { id: "select-injury", ignoreIfFirstIsZero: false },
  { id: "select-concerned", ignoreIfFirstIsZero: false },
];

const RISK_LEVELS = [
  {
    from: 0,
    to: 7,
    level: "Baixo risco",
    message: "Consumo dentro de limites considerados de baixo risco.",
    recommendation:
      "Seu resultado indica baixo risco. Não é necessária intervenção, apenas manter hábitos saudáveis e seguir orientações de prevenção.",
  },
  {
    from: 8,
    to: 15,
    level: "Uso de risco",
    message: "Este resultado indica padrão de consumo que pode levar a problemas de saúde ou sociais se mantido.",
    recommendation: "Seu resultado indica um padrão de risco. É recomendado avaliar formas de reduzir o consumo.",
  },
  {
    from: 16,
    to: 19,
    level: "Uso nocivo",
    message: "Seu resultado mostra que o consumo já está trazendo consequências negativas.",
    recommendation: "É importante buscar apoio para reduzir ou interromper o uso.",
  },
  {
    from: 20,
    to: 100,
    level: "Provável dependência",
    message: "Este resultado sugere forte probabilidade de transtorno por uso de álcool (dependência).",
    recommendation: "Recomenda-se buscar apoio médico especializado para avaliação e possível tratamento.",
  },
];

export { OPTIONS_IDS, RISK_LEVELS };
