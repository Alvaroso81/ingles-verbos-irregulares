const UNIT_GROUPS = {
  length: {
    id: "length",
    label: "Longitud",
    ladder: "km - hm - dam - m - dm - cm - mm",
    units: [
      { symbol: "mm", name: "milímetro", toBase: 0.001, equivalent: "1 mm = 0,001 m" },
      { symbol: "cm", name: "centímetro", toBase: 0.01, equivalent: "1 cm = 0,01 m" },
      { symbol: "dm", name: "decímetro", toBase: 0.1, equivalent: "1 dm = 0,1 m" },
      { symbol: "m", name: "metro", toBase: 1, equivalent: "1 m = 100 cm" },
      { symbol: "dam", name: "decámetro", toBase: 10, equivalent: "1 dam = 10 m" },
      { symbol: "hm", name: "hectómetro", toBase: 100, equivalent: "1 hm = 100 m" },
      { symbol: "km", name: "kilómetro", toBase: 1000, equivalent: "1 km = 1000 m" }
    ]
  },
  mass: {
    id: "mass",
    label: "Masa",
    ladder: "kg - hg - dag - g - dg - cg - mg",
    units: [
      { symbol: "mg", name: "miligramo", toBase: 0.001, equivalent: "1 mg = 0,001 g" },
      { symbol: "cg", name: "centigramo", toBase: 0.01, equivalent: "1 cg = 0,01 g" },
      { symbol: "dg", name: "decigramo", toBase: 0.1, equivalent: "1 dg = 0,1 g" },
      { symbol: "g", name: "gramo", toBase: 1, equivalent: "1 g = 1000 mg" },
      { symbol: "dag", name: "decagramo", toBase: 10, equivalent: "1 dag = 10 g" },
      { symbol: "hg", name: "hectogramo", toBase: 100, equivalent: "1 hg = 100 g" },
      { symbol: "kg", name: "kilogramo", toBase: 1000, equivalent: "1 kg = 1000 g" }
    ]
  },
  capacity: {
    id: "capacity",
    label: "Capacidad",
    ladder: "kl - hl - dal - l - dl - cl - ml",
    units: [
      { symbol: "ml", name: "mililitro", toBase: 0.001, equivalent: "1 ml = 0,001 l" },
      { symbol: "cl", name: "centilitro", toBase: 0.01, equivalent: "1 cl = 0,01 l" },
      { symbol: "dl", name: "decilitro", toBase: 0.1, equivalent: "1 dl = 0,1 l" },
      { symbol: "l", name: "litro", toBase: 1, equivalent: "1 l = 1000 ml" },
      { symbol: "dal", name: "decalitro", toBase: 10, equivalent: "1 dal = 10 l" },
      { symbol: "hl", name: "hectolitro", toBase: 100, equivalent: "1 hl = 100 l" },
      { symbol: "kl", name: "kilolitro", toBase: 1000, equivalent: "1 kl = 1000 l" }
    ]
  }
};

const GAME_MODES = {
  length: { label: "Longitud", groups: ["length"] },
  mass: { label: "Masa", groups: ["mass"] },
  capacity: { label: "Capacidad", groups: ["capacity"] },
  mixed: { label: "Mezclado", groups: ["length", "mass", "capacity"] }
};

const QUESTION_PATTERNS = [
  { key: "convert-one", label: "Conversión simple", answerCount: 1 },
  { key: "convert-two", label: "Conversión doble", answerCount: 2 },
  { key: "convert-three", label: "Conversión triple", answerCount: 3 },
  { key: "missing-source", label: "Cantidad que falta", answerCount: 1 }
];

const STORAGE_KEYS = {
  bestScore: "units-best-score",
  bestTime: "units-best-time",
  lastName: "units-last-name"
};

const FRIENDLY_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30, 40, 50, 60, 75, 80, 90, 100, 120, 150, 200, 250, 500];

const state = {
  playerName: "",
  mode: "mixed",
  totalQuestions: 15,
  lives: 3,
  score: 0,
  streak: 0,
  maxStreak: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  currentQuestionIndex: 0,
  currentQuestion: null,
  questionPool: [],
  mistakes: [],
  timerSeconds: 0,
  timerId: null,
  tableSortAsc: true,
  previousScreen: "start"
};

const screens = {
  start: document.getElementById("startScreen"),
  game: document.getElementById("gameScreen"),
  summary: document.getElementById("summaryScreen"),
  review: document.getElementById("reviewScreen"),
  table: document.getElementById("tableScreen")
};

const elements = {
  startForm: document.getElementById("startForm"),
  playerName: document.getElementById("playerName"),
  gameMode: document.getElementById("gameMode"),
  questionCount: document.getElementById("questionCount"),
  currentPlayerName: document.getElementById("currentPlayerName"),
  scoreValue: document.getElementById("scoreValue"),
  streakValue: document.getElementById("streakValue"),
  livesValue: document.getElementById("livesValue"),
  timerValue: document.getElementById("timerValue"),
  questionCounter: document.getElementById("questionCounter"),
  progressFill: document.getElementById("progressFill"),
  questionPrompt: document.getElementById("questionPrompt"),
  questionHelper: document.getElementById("questionHelper"),
  questionClue: document.getElementById("questionClue"),
  questionModeBadge: document.getElementById("questionModeBadge"),
  answerForm: document.getElementById("answerForm"),
  answerFields: document.getElementById("answerFields"),
  feedbackBox: document.getElementById("feedbackBox"),
  summaryPlayerName: document.getElementById("summaryPlayerName"),
  summaryFinalScore: document.getElementById("summaryFinalScore"),
  summaryCorrect: document.getElementById("summaryCorrect"),
  summaryWrong: document.getElementById("summaryWrong"),
  summaryTime: document.getElementById("summaryTime"),
  summaryAccuracy: document.getElementById("summaryAccuracy"),
  reviewList: document.getElementById("reviewList"),
  practiceMistakesBtn: document.getElementById("practiceMistakesBtn"),
  bestScoreBadge: document.getElementById("bestScoreBadge"),
  bestScoreValue: document.getElementById("bestScoreValue"),
  bestTimeValue: document.getElementById("bestTimeValue"),
  unitTableBody: document.getElementById("verbTableBody"),
  unitSearchInput: document.getElementById("verbSearchInput"),
  sortTableBtn: document.getElementById("sortTableBtn")
};

function roundValue(value) {
  return Math.round(value * 1000000) / 1000000;
}

function formatNumber(value) {
  const rounded = roundValue(value);
  if (Number.isInteger(rounded)) {
    return String(rounded);
  }
  return rounded.toFixed(6).replace(/\.?0+$/, "").replace(".", ",");
}

function parseNumberInput(value) {
  const cleaned = value.trim().replace(/\s+/g, "").replace(",", ".");
  if (!cleaned) {
    return null;
  }
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function nearlyEqual(a, b) {
  return Math.abs(a - b) < 0.000001;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function switchScreen(screenName) {
  if (screenName !== "table") {
    state.previousScreen = screenName;
  }
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pulseElement(element) {
  element.classList.remove("pulse");
  void element.offsetWidth;
  element.classList.add("pulse");
}

function readStorageNumber(key) {
  const value = Number(localStorage.getItem(key));
  return Number.isFinite(value) ? value : 0;
}

function updateBestStatsUI() {
  const bestScore = readStorageNumber(STORAGE_KEYS.bestScore);
  const bestTime = readStorageNumber(STORAGE_KEYS.bestTime);
  elements.bestScoreBadge.textContent = `Mejor puntuación: ${bestScore}`;
  elements.bestScoreValue.textContent = String(bestScore);
  elements.bestTimeValue.textContent = bestTime > 0 ? formatTime(bestTime) : "--:--";
}

function loadLastPlayerName() {
  const lastName = localStorage.getItem(STORAGE_KEYS.lastName);
  if (lastName) {
    elements.playerName.value = lastName;
  }
}

function savePlayerName(name) {
  localStorage.setItem(STORAGE_KEYS.lastName, name);
}

function startTimer() {
  stopTimer();
  state.timerId = window.setInterval(() => {
    state.timerSeconds += 1;
    elements.timerValue.textContent = formatTime(state.timerSeconds);
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function calculateScore({ correctAnswers, maxStreak, lives, totalTime }) {
  const basePoints = correctAnswers * 100;
  const streakBonus = maxStreak * 35;
  const livesBonus = lives * 120;
  const timePenalty = Math.floor(totalTime / 12) * 5;
  return Math.max(0, basePoints + streakBonus + livesBonus - timePenalty);
}

function getNeutralFeedbackMessage() {
  if (state.currentQuestionIndex === 0) {
    return "Empieza con calma y revisa bien las unidades.";
  }
  if (state.lives === 1) {
    return "Te queda una vida. Fíjate en los saltos de la escalera.";
  }
  return "Siguiente reto. Sigue sumando puntos.";
}

function getAvailableGroups() {
  return GAME_MODES[state.mode].groups.map((groupId) => UNIT_GROUPS[groupId]);
}

function buildSupportRows() {
  return Object.values(UNIT_GROUPS).flatMap((group) =>
    group.units.map((unit) => ({
      symbol: unit.symbol,
      name: unit.name,
      equivalent: unit.equivalent,
      group: group.label,
      ladder: group.ladder
    }))
  );
}

function pickDistinctUnits(group, count, excludedUnit = null) {
  const available = group.units.filter((unit) => unit.symbol !== excludedUnit?.symbol);
  return shuffleArray(available).slice(0, count);
}

function buildClueText(group, sourceValue, sourceUnit, style) {
  const quantityBySymbol = `${formatNumber(sourceValue)} ${sourceUnit.symbol}`;
  const quantityByName = `${formatNumber(sourceValue)} ${sourceUnit.name}${sourceValue === 1 ? "" : "s"}`;

  if (style === "sentence") {
    return `Convierte esta cantidad de ${group.label.toLowerCase()}: ${quantityByName}`;
  }
  if (style === "ladder") {
    return `Cantidad inicial: ${quantityBySymbol} | Escalera: ${group.ladder}`;
  }
  return `Cantidad inicial: ${quantityBySymbol}`;
}

function convertValue(value, sourceUnit, targetUnit) {
  const baseValue = value * sourceUnit.toBase;
  return roundValue(baseValue / targetUnit.toBase);
}

function buildAnswerField(unit, expectedValue) {
  return {
    key: `${unit.symbol}-${expectedValue}`,
    label: `${unit.name} (${unit.symbol})`,
    unit: unit.symbol,
    expectedValue,
    expectedDisplay: `${formatNumber(expectedValue)} ${unit.symbol}`
  };
}

function buildConversionQuestion(group) {
  const pattern = getRandomItem(QUESTION_PATTERNS);
  const sourceUnit = getRandomItem(group.units);
  const sourceValue = getRandomItem(FRIENDLY_VALUES);
  const clueStyle = getRandomItem(["simple", "sentence", "ladder"]);

  if (pattern.key === "missing-source") {
    const targetUnit = getRandomItem(pickDistinctUnits(group, 1, sourceUnit));
    const convertedValue = convertValue(sourceValue, sourceUnit, targetUnit);

    return {
      groupId: group.id,
      groupLabel: group.label,
      patternLabel: pattern.label,
      prompt: "Completa la cantidad que falta.",
      clue: `${formatNumber(sourceValue)} ${sourceUnit.symbol} = ? ${targetUnit.symbol}`,
      helper: "Escribe solo el número. Puedes usar coma o punto decimal.",
      answers: [buildAnswerField(targetUnit, convertedValue)],
      summary: `${formatNumber(sourceValue)} ${sourceUnit.symbol} = ${formatNumber(convertedValue)} ${targetUnit.symbol}`,
      sourceText: `${formatNumber(sourceValue)} ${sourceUnit.symbol}`
    };
  }

  const targetUnits = pickDistinctUnits(group, pattern.answerCount, sourceUnit);
  const answers = targetUnits.map((unit) => buildAnswerField(unit, convertValue(sourceValue, sourceUnit, unit)));
  const promptByCount = {
    1: "Convierte a la unidad indicada.",
    2: "Completa las dos conversiones.",
    3: "Completa las tres conversiones."
  };

  return {
    groupId: group.id,
    groupLabel: group.label,
    patternLabel: pattern.label,
    prompt: promptByCount[pattern.answerCount],
    clue: buildClueText(group, sourceValue, sourceUnit, clueStyle),
    helper: "Escribe solo el número. Cada casilla ya indica su unidad.",
    answers,
    summary: answers.map((answer) => answer.expectedDisplay).join(" | "),
    sourceText: `${formatNumber(sourceValue)} ${sourceUnit.symbol}`
  };
}

function buildQuestionPool(totalQuestions, predefinedQuestions = null) {
  if (predefinedQuestions) {
    return shuffleArray(predefinedQuestions).slice(0, totalQuestions);
  }

  const groups = getAvailableGroups();
  const pool = [];

  for (let index = 0; index < totalQuestions; index += 1) {
    const group = getRandomItem(groups);
    pool.push(buildConversionQuestion(group));
  }

  return pool;
}

function updateScoreboard() {
  elements.currentPlayerName.textContent = state.playerName;
  elements.scoreValue.textContent = String(state.score);
  elements.streakValue.textContent = String(state.streak);
  elements.livesValue.textContent = String(state.lives);
  elements.timerValue.textContent = formatTime(state.timerSeconds);
  elements.questionCounter.textContent = `Pregunta ${state.currentQuestionIndex + 1} de ${state.totalQuestions}`;
  elements.progressFill.style.width = `${(state.currentQuestionIndex / state.totalQuestions) * 100}%`;
}

function renderQuestion() {
  updateScoreboard();
  const question = state.questionPool[state.currentQuestionIndex];
  state.currentQuestion = question;

  elements.questionModeBadge.textContent = `${GAME_MODES[state.mode].label} · ${question.groupLabel}`;
  elements.questionPrompt.textContent = question.prompt;
  elements.questionClue.textContent = question.clue;
  elements.questionHelper.textContent = question.helper;

  elements.answerFields.innerHTML = question.answers
    .map(
      (answer, index) => `
        <div class="answer-field">
          <label for="answer-${index}">${answer.label}</label>
          <input
            id="answer-${index}"
            name="${index}"
            type="text"
            inputmode="decimal"
            autocomplete="off"
            spellcheck="false"
            placeholder="Escribe el número"
            required
          />
        </div>
      `
    )
    .join("");

  const firstInput = elements.answerFields.querySelector("input");
  if (firstInput) {
    firstInput.focus();
  }

  if (!elements.feedbackBox.classList.contains("success") && !elements.feedbackBox.classList.contains("error")) {
    showFeedback("", getNeutralFeedbackMessage());
  }
}

function showFeedback(type, message) {
  elements.feedbackBox.className = `feedback-box ${type}`;
  elements.feedbackBox.textContent = message;
  pulseElement(elements.feedbackBox);
}

function storeMistake(question, userInputs, results) {
  state.mistakes.push({
    question,
    groupLabel: question.groupLabel,
    type: question.patternLabel,
    clue: question.clue,
    correct: question.answers.map((answer) => answer.expectedDisplay).join(" | "),
    user: question.answers
      .map((answer, index) => {
        const value = userInputs[index] || "(vacío)";
        return `${answer.label}: ${value}`;
      })
      .join(" | "),
    failedAnswers: results.filter((result) => !result.isCorrect).length
  });
}

function advanceGame() {
  state.currentQuestionIndex += 1;
  elements.progressFill.style.width = `${(state.currentQuestionIndex / state.totalQuestions) * 100}%`;

  if (state.lives <= 0 || state.currentQuestionIndex >= state.totalQuestions) {
    finishGame();
    return;
  }

  window.setTimeout(() => {
    elements.feedbackBox.className = "feedback-box";
    renderQuestion();
  }, 950);
}

function saveBestStats() {
  const currentBestScore = readStorageNumber(STORAGE_KEYS.bestScore);
  const currentBestTime = readStorageNumber(STORAGE_KEYS.bestTime);

  if (state.score > currentBestScore) {
    localStorage.setItem(STORAGE_KEYS.bestScore, String(state.score));
  }

  if (state.correctAnswers === state.totalQuestions && (currentBestTime === 0 || state.timerSeconds < currentBestTime)) {
    localStorage.setItem(STORAGE_KEYS.bestTime, String(state.timerSeconds));
  }

  updateBestStatsUI();
}

function finishGame() {
  stopTimer();
  state.score = calculateScore({
    correctAnswers: state.correctAnswers,
    maxStreak: state.maxStreak,
    lives: state.lives,
    totalTime: state.timerSeconds
  });

  const totalAnswered = state.correctAnswers + state.wrongAnswers;
  const accuracy = totalAnswered === 0 ? 0 : Math.round((state.correctAnswers / totalAnswered) * 100);

  elements.summaryPlayerName.textContent = state.playerName;
  elements.summaryFinalScore.textContent = String(state.score);
  elements.summaryCorrect.textContent = String(state.correctAnswers);
  elements.summaryWrong.textContent = String(state.wrongAnswers);
  elements.summaryTime.textContent = formatTime(state.timerSeconds);
  elements.summaryAccuracy.textContent = `${accuracy}%`;

  saveBestStats();
  renderReviewList();
  switchScreen("summary");
}

function renderReviewList() {
  if (state.mistakes.length === 0) {
    elements.reviewList.innerHTML = `
      <div class="review-empty">
        No hay fallos guardados en esta partida. Has hecho un trabajo genial.
      </div>
    `;
    elements.practiceMistakesBtn.disabled = true;
    return;
  }

  elements.practiceMistakesBtn.disabled = false;
  elements.reviewList.innerHTML = state.mistakes
    .map(
      (mistake, index) => `
        <article class="review-item">
          <p><strong>Error ${index + 1}</strong> ${mistake.type} · ${mistake.groupLabel}</p>
          <p><strong>Pista:</strong> ${mistake.clue}</p>
          <p><strong>Respuesta correcta:</strong> ${mistake.correct}</p>
          <p><strong>Tu respuesta:</strong> ${mistake.user}</p>
        </article>
      `
    )
    .join("");
}

function renderSupportTable() {
  const searchTerm = elements.unitSearchInput.value.trim().toLowerCase();
  const rows = buildSupportRows().sort((first, second) =>
    state.tableSortAsc ? first.symbol.localeCompare(second.symbol) : second.symbol.localeCompare(first.symbol)
  );

  const filtered = rows.filter((row) => {
    const haystack = `${row.symbol} ${row.name} ${row.equivalent} ${row.group} ${row.ladder}`.toLowerCase();
    return haystack.includes(searchTerm);
  });

  if (filtered.length === 0) {
    elements.unitTableBody.innerHTML = `
      <tr>
        <td colspan="4">No hay unidades que coincidan con la búsqueda.</td>
      </tr>
    `;
    return;
  }

  elements.unitTableBody.innerHTML = filtered
    .map(
      (row) => `
        <tr>
          <td>${row.symbol}</td>
          <td>${row.name}</td>
          <td>${row.equivalent}</td>
          <td>${row.group}</td>
        </tr>
      `
    )
    .join("");
}

function resetGameBase() {
  state.lives = 3;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.correctAnswers = 0;
  state.wrongAnswers = 0;
  state.currentQuestionIndex = 0;
  state.currentQuestion = null;
  state.mistakes = [];
  state.timerSeconds = 0;
  elements.feedbackBox.className = "feedback-box";
  elements.feedbackBox.textContent = getNeutralFeedbackMessage();
}

function startNewGame(options = {}) {
  resetGameBase();
  state.playerName = options.playerName?.trim() || elements.playerName.value.trim() || "Jugador";
  state.mode = options.mode ?? elements.gameMode.value;
  state.totalQuestions = options.totalQuestions ?? Number(elements.questionCount.value);
  state.questionPool = buildQuestionPool(state.totalQuestions, options.predefinedQuestions ?? null);
  savePlayerName(state.playerName);
  startTimer();
  switchScreen("game");
  renderQuestion();
}

function handleAnswerSubmission(event) {
  event.preventDefault();

  const question = state.currentQuestion;
  const userInputs = question.answers.map((_, index) => elements.answerForm.elements[String(index)].value);
  const results = question.answers.map((answer, index) => {
    const parsedValue = parseNumberInput(userInputs[index]);
    return {
      label: answer.label,
      isCorrect: parsedValue !== null && nearlyEqual(parsedValue, answer.expectedValue),
      parsedValue
    };
  });

  const allCorrect = results.every((result) => result.isCorrect);

  if (allCorrect) {
    state.correctAnswers += 1;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.score += 100 + (state.streak - 1) * 20;
    showFeedback("success", `Correcto. Muy bien, ${state.playerName}.`);
    pulseElement(document.querySelector(".question-card"));
  } else {
    state.wrongAnswers += 1;
    state.streak = 0;
    state.lives -= 1;
    storeMistake(question, userInputs, results);
    const corrections = question.answers
      .filter((answer, index) => !results[index].isCorrect)
      .map((answer) => answer.expectedDisplay)
      .join(" | ");
    showFeedback("error", `Ups. La respuesta correcta era ${corrections}.`);
  }

  updateScoreboard();
  elements.answerForm.reset();
  advanceGame();
}

function openTable() {
  renderSupportTable();
  switchScreen("table");
}

function returnFromTable() {
  switchScreen(state.previousScreen || "start");
}

elements.startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = elements.playerName.value.trim();

  if (!playerName) {
    elements.playerName.focus();
    return;
  }

  startNewGame({
    playerName,
    mode: elements.gameMode.value,
    totalQuestions: Number(elements.questionCount.value)
  });
});

elements.answerForm.addEventListener("submit", handleAnswerSubmission);

document.getElementById("playAgainBtn").addEventListener("click", () => {
  switchScreen("start");
});

document.getElementById("reviewErrorsBtn").addEventListener("click", () => {
  renderReviewList();
  switchScreen("review");
});

document.getElementById("backToSummaryBtn").addEventListener("click", () => {
  switchScreen(state.score > 0 ? "summary" : "start");
});

elements.practiceMistakesBtn.addEventListener("click", () => {
  if (state.mistakes.length === 0) {
    return;
  }

  const practiceQuestions = state.mistakes.map((mistake) => mistake.question);
  startNewGame({
    playerName: state.playerName || elements.playerName.value.trim() || "Jugador",
    mode: "mixed",
    totalQuestions: Math.min(practiceQuestions.length, 10),
    predefinedQuestions: practiceQuestions
  });
});

document.getElementById("openTableTopBtn").addEventListener("click", openTable);
document.getElementById("openTableGameBtn").addEventListener("click", openTable);
document.getElementById("closeTableBtn").addEventListener("click", returnFromTable);

elements.unitSearchInput.addEventListener("input", renderSupportTable);
elements.sortTableBtn.addEventListener("click", () => {
  state.tableSortAsc = !state.tableSortAsc;
  elements.sortTableBtn.textContent = state.tableSortAsc ? "Ordenar A-Z" : "Ordenar Z-A";
  renderSupportTable();
});

function init() {
  loadLastPlayerName();
  updateBestStatsUI();
  renderSupportTable();
  showFeedback("", "Escribe tu nombre, elige una magnitud y empieza a convertir.");
}

init();
