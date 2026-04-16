// Dataset principal del libro. Si quieres retocar alguna traduccion u opcion,
// solo hace falta editar este array.
const IRREGULAR_VERBS = [
  { base: "be", past: ["was", "were"], participle: ["been"], spanish: ["ser", "estar"] },
  { base: "beat", past: ["beat"], participle: ["beaten"], spanish: ["golpear", "vencer"] },
  { base: "become", past: ["became"], participle: ["become"], spanish: ["llegar a ser", "convertirse en"] },
  { base: "begin", past: ["began"], participle: ["begun"], spanish: ["empezar", "comenzar"] },
  { base: "bend", past: ["bent"], participle: ["bent"], spanish: ["doblar"] },
  { base: "bet", past: ["bet"], participle: ["bet"], spanish: ["apostar"] },
  { base: "bite", past: ["bit"], participle: ["bitten"], spanish: ["morder"] },
  { base: "bleed", past: ["bled"], participle: ["bled"], spanish: ["sangrar"] },
  { base: "blow", past: ["blew"], participle: ["blown"], spanish: ["soplar"] },
  { base: "break", past: ["broke"], participle: ["broken"], spanish: ["romper"] },
  { base: "bring", past: ["brought"], participle: ["brought"], spanish: ["traer"] },
  { base: "build", past: ["built"], participle: ["built"], spanish: ["construir"] },
  { base: "burn", past: ["burnt", "burned"], participle: ["burnt", "burned"], spanish: ["quemar"] },
  { base: "buy", past: ["bought"], participle: ["bought"], spanish: ["comprar"] },
  { base: "catch", past: ["caught"], participle: ["caught"], spanish: ["atrapar", "coger"] },
  { base: "choose", past: ["chose"], participle: ["chosen"], spanish: ["elegir", "escoger"] },
  { base: "come", past: ["came"], participle: ["come"], spanish: ["venir"] },
  { base: "cost", past: ["cost"], participle: ["cost"], spanish: ["costar"] },
  { base: "cut", past: ["cut"], participle: ["cut"], spanish: ["cortar"] },
  { base: "dig", past: ["dug"], participle: ["dug"], spanish: ["cavar"] },
  { base: "do", past: ["did"], participle: ["done"], spanish: ["hacer"] },
  { base: "draw", past: ["drew"], participle: ["drawn"], spanish: ["dibujar"] },
  { base: "dream", past: ["dreamt", "dreamed"], participle: ["dreamt", "dreamed"], spanish: ["soñar"] },
  { base: "drink", past: ["drank"], participle: ["drunk"], spanish: ["beber"] },
  { base: "drive", past: ["drove"], participle: ["driven"], spanish: ["conducir"] },
  { base: "eat", past: ["ate"], participle: ["eaten"], spanish: ["comer"] },
  { base: "fall", past: ["fell"], participle: ["fallen"], spanish: ["caer"] },
  { base: "feed", past: ["fed"], participle: ["fed"], spanish: ["dar de comer", "alimentar"] },
  { base: "feel", past: ["felt"], participle: ["felt"], spanish: ["sentir"] },
  { base: "fight", past: ["fought"], participle: ["fought"], spanish: ["luchar", "pelear"] },
  { base: "find", past: ["found"], participle: ["found"], spanish: ["encontrar"] },
  { base: "fly", past: ["flew"], participle: ["flown"], spanish: ["volar"] },
  { base: "forget", past: ["forgot"], participle: ["forgotten"], spanish: ["olvidar"] },
  { base: "forgive", past: ["forgave"], participle: ["forgiven"], spanish: ["perdonar"] },
  { base: "freeze", past: ["froze"], participle: ["frozen"], spanish: ["congelar"] },
  { base: "get", past: ["got"], participle: ["got", "gotten"], spanish: ["conseguir", "obtener"] },
  { base: "give", past: ["gave"], participle: ["given"], spanish: ["dar"] },
  { base: "go", past: ["went"], participle: ["gone"], spanish: ["ir"] },
  { base: "grow", past: ["grew"], participle: ["grown"], spanish: ["crecer"] },
  { base: "hang", past: ["hung", "hanged"], participle: ["hung", "hanged"], spanish: ["colgar"] },
  { base: "have", past: ["had"], participle: ["had"], spanish: ["tener", "haber"] },
  { base: "hear", past: ["heard"], participle: ["heard"], spanish: ["oír", "escuchar"] },
  { base: "hide", past: ["hid"], participle: ["hidden"], spanish: ["esconder"] },
  { base: "hit", past: ["hit"], participle: ["hit"], spanish: ["golpear"] },
  { base: "hold", past: ["held"], participle: ["held"], spanish: ["sujetar", "sostener"] },
  { base: "hurt", past: ["hurt"], participle: ["hurt"], spanish: ["hacer daño", "doler"] },
  { base: "keep", past: ["kept"], participle: ["kept"], spanish: ["guardar", "mantener"] },
  { base: "know", past: ["knew"], participle: ["known"], spanish: ["saber", "conocer"] },
  { base: "lay", past: ["laid"], participle: ["laid"], spanish: ["poner", "colocar"] },
  { base: "lead", past: ["led"], participle: ["led"], spanish: ["guiar", "dirigir"] },
  { base: "learn", past: ["learnt", "learned"], participle: ["learnt", "learned"], spanish: ["aprender"] },
  { base: "leave", past: ["left"], participle: ["left"], spanish: ["dejar", "marcharse"] },
  { base: "lend", past: ["lent"], participle: ["lent"], spanish: ["prestar"] },
  { base: "let", past: ["let"], participle: ["let"], spanish: ["permitir", "dejar"] },
  { base: "lie", past: ["lay"], participle: ["lain"], spanish: ["tumbarse"] },
  { base: "lie", past: ["lied"], participle: ["lied"], spanish: ["mentir"] },
  { base: "light", past: ["lit"], participle: ["lit"], spanish: ["encender"] },
  { base: "lose", past: ["lost"], participle: ["lost"], spanish: ["perder"] },
  { base: "make", past: ["made"], participle: ["made"], spanish: ["hacer", "fabricar"] },
  { base: "mean", past: ["meant"], participle: ["meant"], spanish: ["querer decir", "significar"] },
  { base: "meet", past: ["met"], participle: ["met"], spanish: ["conocer", "encontrarse con"] },
  { base: "overcome", past: ["overcame"], participle: ["overcome"], spanish: ["superar"] },
  { base: "pay", past: ["paid"], participle: ["paid"], spanish: ["pagar"] },
  { base: "put", past: ["put"], participle: ["put"], spanish: ["poner"] },
  { base: "quit", past: ["quit", "quitted"], participle: ["quit", "quitted"], spanish: ["dejar", "abandonar"] },
  { base: "read", past: ["read"], participle: ["read"], spanish: ["leer"] },
  { base: "ride", past: ["rode"], participle: ["ridden"], spanish: ["montar", "ir en"] },
  { base: "ring", past: ["rang"], participle: ["rung"], spanish: ["sonar", "llamar"] },
  { base: "rise", past: ["rose"], participle: ["risen"], spanish: ["levantarse", "subir"] },
  { base: "run", past: ["ran"], participle: ["run"], spanish: ["correr"] },
  { base: "say", past: ["said"], participle: ["said"], spanish: ["decir"] },
  { base: "see", past: ["saw"], participle: ["seen"], spanish: ["ver"] },
  { base: "sell", past: ["sold"], participle: ["sold"], spanish: ["vender"] },
  { base: "send", past: ["sent"], participle: ["sent"], spanish: ["enviar"] },
  { base: "set", past: ["set"], participle: ["set"], spanish: ["colocar", "poner"] },
  { base: "shake", past: ["shook"], participle: ["shaken"], spanish: ["agitar"] },
  { base: "shine", past: ["shone"], participle: ["shone"], spanish: ["brillar"] },
  { base: "shoot", past: ["shot"], participle: ["shot"], spanish: ["disparar"] },
  { base: "show", past: ["showed"], participle: ["shown"], spanish: ["mostrar", "enseñar"] },
  { base: "shut", past: ["shut"], participle: ["shut"], spanish: ["cerrar"] },
  { base: "sing", past: ["sang"], participle: ["sung"], spanish: ["cantar"] },
  { base: "sink", past: ["sank"], participle: ["sunk"], spanish: ["hundir", "hundirse"] },
  { base: "sit", past: ["sat"], participle: ["sat"], spanish: ["sentarse"] },
  { base: "sleep", past: ["slept"], participle: ["slept"], spanish: ["dormir"] },
  { base: "smell", past: ["smelt", "smelled"], participle: ["smelt", "smelled"], spanish: ["oler"] },
  { base: "speak", past: ["spoke"], participle: ["spoken"], spanish: ["hablar"] },
  { base: "spell", past: ["spelt", "spelled"], participle: ["spelt", "spelled"], spanish: ["deletrear"] },
  { base: "spend", past: ["spent"], participle: ["spent"], spanish: ["gastar", "pasar tiempo"] },
  { base: "stand", past: ["stood"], participle: ["stood"], spanish: ["estar de pie"] },
  { base: "steal", past: ["stole"], participle: ["stolen"], spanish: ["robar"] },
  { base: "stick", past: ["stuck"], participle: ["stuck"], spanish: ["pegar", "clavar"] },
  { base: "sting", past: ["stung"], participle: ["stung"], spanish: ["picar"] },
  { base: "sweep", past: ["swept"], participle: ["swept"], spanish: ["barrer"] },
  { base: "swim", past: ["swam"], participle: ["swum"], spanish: ["nadar"] },
  { base: "take", past: ["took"], participle: ["taken"], spanish: ["coger", "tomar", "llevar"] },
  { base: "teach", past: ["taught"], participle: ["taught"], spanish: ["enseñar"] },
  { base: "tear", past: ["tore"], participle: ["torn"], spanish: ["rasgar", "romper"] },
  { base: "tell", past: ["told"], participle: ["told"], spanish: ["decir", "contar"] },
  { base: "think", past: ["thought"], participle: ["thought"], spanish: ["pensar"] },
  { base: "throw", past: ["threw"], participle: ["thrown"], spanish: ["lanzar", "tirar"] },
  { base: "understand", past: ["understood"], participle: ["understood"], spanish: ["entender"] },
  { base: "wake up", past: ["woke up"], participle: ["woken up"], spanish: ["despertarse"] },
  { base: "wear", past: ["wore"], participle: ["worn"], spanish: ["llevar puesto"] },
  { base: "win", past: ["won"], participle: ["won"], spanish: ["ganar"] },
  { base: "write", past: ["wrote"], participle: ["written"], spanish: ["escribir"] }
];

const GAME_MODES = {
  "past-participle": {
    label: "Pasado y participio",
    patterns: ["base-to-two", "spanish-to-two"]
  },
  "guess-infinitive": {
    label: "Adivinar infinitivo",
    patterns: ["past-to-base", "participle-to-base", "past-to-two", "participle-to-two", "spanish-to-base"]
  },
  mixed: {
    label: "Mezclado",
    patterns: [
      "base-to-two",
      "spanish-to-two",
      "past-to-two",
      "participle-to-two",
      "spanish-to-base",
      "past-to-base",
      "participle-to-base"
    ]
  }
};

const STORAGE_KEYS = {
  bestScore: "irregular-best-score",
  bestTime: "irregular-best-time",
  lastName: "irregular-last-name"
};

const QUESTION_TEMPLATES = {
  "base-to-two": {
    prompt: "Completa el pasado y el participio.",
    buildClue: (verb, clueMode) =>
      clueMode === "spanish"
        ? `Traducción: ${verb.spanish.join(" / ")}`
        : `Infinitivo: ${verb.base}`,
    answers: [
      { key: "past", label: "Pasado" },
      { key: "participle", label: "Participio" }
    ]
  },
  "spanish-to-two": {
    prompt: "Escribe el verbo en inglés en pasado y participio.",
    buildClue: (verb) => `Español: ${verb.spanish.join(" / ")}`,
    answers: [
      { key: "past", label: "Pasado" },
      { key: "participle", label: "Participio" }
    ]
  },
  "past-to-two": {
    prompt: "A partir del pasado, completa infinitivo y participio.",
    buildClue: (verb, clueMode) =>
      clueMode === "spanish"
        ? `Pista en español: ${verb.spanish.join(" / ")} | Pasado: ${verb.past[0]}`
        : `Pasado: ${verb.past[0]}`,
    answers: [
      { key: "base", label: "Infinitivo" },
      { key: "participle", label: "Participio" }
    ]
  },
  "participle-to-two": {
    prompt: "A partir del participio, completa infinitivo y pasado.",
    buildClue: (verb, clueMode) =>
      clueMode === "spanish"
        ? `Pista en español: ${verb.spanish.join(" / ")} | Participio: ${verb.participle[0]}`
        : `Participio: ${verb.participle[0]}`,
    answers: [
      { key: "base", label: "Infinitivo" },
      { key: "past", label: "Pasado" }
    ]
  },
  "spanish-to-base": {
    prompt: "Adivina el infinitivo en inglés.",
    buildClue: (verb) => `Español: ${verb.spanish.join(" / ")}`,
    answers: [{ key: "base", label: "Infinitivo" }]
  },
  "past-to-base": {
    prompt: "Escribe el infinitivo que corresponde a este pasado.",
    buildClue: (verb, clueMode) =>
      clueMode === "spanish"
        ? `Español: ${verb.spanish.join(" / ")} | Pasado: ${verb.past[0]}`
        : `Pasado: ${verb.past[0]}`,
    answers: [{ key: "base", label: "Infinitivo" }]
  },
  "participle-to-base": {
    prompt: "Escribe el infinitivo que corresponde a este participio.",
    buildClue: (verb, clueMode) =>
      clueMode === "spanish"
        ? `Español: ${verb.spanish.join(" / ")} | Participio: ${verb.participle[0]}`
        : `Participio: ${verb.participle[0]}`,
    answers: [{ key: "base", label: "Infinitivo" }]
  }
};

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
  reviewSource: "summary",
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
  verbTableBody: document.getElementById("verbTableBody"),
  verbSearchInput: document.getElementById("verbSearchInput"),
  sortTableBtn: document.getElementById("sortTableBtn")
};

function normalizeText(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
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

function savePlayerName(name) {
  localStorage.setItem(STORAGE_KEYS.lastName, name);
}

function loadLastPlayerName() {
  const savedName = localStorage.getItem(STORAGE_KEYS.lastName);
  if (savedName) {
    elements.playerName.value = savedName;
  }
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
    return "Empieza fuerte y cuida tus vidas.";
  }

  if (state.lives === 1) {
    return "Ultima vida. Piensa bien antes de responder.";
  }

  return "Siguiente pregunta. Vamos a por otra.";
}

function getPatternsForMode(mode) {
  return GAME_MODES[mode].patterns;
}

function buildQuestionPool(sourceVerbs, totalQuestions) {
  const verbs = shuffleArray(sourceVerbs);
  const pool = [];

  while (pool.length < totalQuestions) {
    pool.push(...shuffleArray(verbs));
  }

  return pool.slice(0, totalQuestions);
}

function pickClueMode(patternKey) {
  if (patternKey === "spanish-to-two" || patternKey === "spanish-to-base") {
    return "spanish";
  }
  return Math.random() < 0.5 ? "english" : "spanish";
}

function buildQuestion(verb) {
  const patternKey = getRandomItem(getPatternsForMode(state.mode));
  const template = QUESTION_TEMPLATES[patternKey];
  const clueMode = pickClueMode(patternKey);

  return {
    verb,
    patternKey,
    prompt: template.prompt,
    clue: template.buildClue(verb, clueMode),
    clueMode,
    answers: template.answers
  };
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
  const question = buildQuestion(state.questionPool[state.currentQuestionIndex]);
  state.currentQuestion = question;
  const modeLabel = GAME_MODES[state.mode].label;

  elements.questionModeBadge.textContent = modeLabel;
  elements.questionPrompt.textContent = question.prompt;
  elements.questionClue.textContent = question.clue;
  elements.questionHelper.textContent =
    question.answers.length === 1
      ? "Responde en inglés y revisa bien la ortografía."
      : "Responde en inglés. Cada casilla se corrige por separado.";

  elements.answerFields.innerHTML = question.answers
    .map(
      (answer, index) => `
        <div class="answer-field">
          <label for="answer-${index}">${answer.label}</label>
          <input
            id="answer-${index}"
            name="${answer.key}"
            type="text"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            placeholder="Escribe aquí"
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

function isCorrectAnswer(userValue, validAnswers) {
  const normalizedUserValue = normalizeText(userValue);
  return validAnswers.some((answer) => normalizeText(answer) === normalizedUserValue);
}

function getValidAnswersForKey(verb, key) {
  return key === "base" ? [verb.base] : verb[key];
}

function getCorrectAnswerText(key, verb) {
  if (key === "base") {
    return verb.base;
  }
  return verb[key].join(" / ");
}

function storeMistake(question, userInputs, results) {
  state.mistakes.push({
    verb: question.verb.base,
    spanish: question.verb.spanish.join(" / "),
    type: question.prompt,
    clue: question.clue,
    correct: question.answers
      .map((answer) => `${answer.label}: ${getCorrectAnswerText(answer.key, question.verb)}`)
      .join(" | "),
    user: question.answers
      .map((answer, index) => `${answer.label}: ${userInputs[index] || "(vacío)"}`)
      .join(" | "),
    baseVerb: question.verb,
    failedKeys: results.filter((item) => !item.isCorrect).map((item) => item.key)
  });
}

function showFeedback(type, message) {
  elements.feedbackBox.className = `feedback-box ${type}`;
  elements.feedbackBox.textContent = message;
  pulseElement(elements.feedbackBox);
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

function renderReviewList() {
  if (state.mistakes.length === 0) {
    elements.reviewList.innerHTML = `
      <div class="review-empty">
        No hay fallos guardados en esta partida. Todo limpio, buen trabajo.
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
          <p><strong>Error ${index + 1}</strong> ${mistake.type}</p>
          <p><strong>Verbo:</strong> ${mistake.verb} (${mistake.spanish})</p>
          <p><strong>Pista:</strong> ${mistake.clue}</p>
          <p><strong>Respuesta correcta:</strong> ${mistake.correct}</p>
          <p><strong>Tu respuesta:</strong> ${mistake.user}</p>
        </article>
      `
    )
    .join("");
}

function renderVerbTable() {
  const searchTerm = normalizeText(elements.verbSearchInput.value);
  const sortedVerbs = [...IRREGULAR_VERBS].sort((a, b) =>
    state.tableSortAsc ? a.base.localeCompare(b.base) : b.base.localeCompare(a.base)
  );

  const filtered = sortedVerbs.filter((verb) => {
    const haystack = [verb.base, verb.past.join(" "), verb.participle.join(" "), verb.spanish.join(" ")]
      .join(" ")
      .toLowerCase();
    return haystack.includes(searchTerm);
  });

  if (filtered.length === 0) {
    elements.verbTableBody.innerHTML = `
      <tr>
        <td colspan="4">No hay verbos que coincidan con la busqueda.</td>
      </tr>
    `;
    return;
  }

  elements.verbTableBody.innerHTML = filtered
    .map(
      (verb) => `
        <tr>
          <td>${verb.base}</td>
          <td>${verb.past.join(" / ")}</td>
          <td>${verb.participle.join(" / ")}</td>
          <td>${verb.spanish.join(" / ")}</td>
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
  state.questionPool = buildQuestionPool(options.verbs ?? IRREGULAR_VERBS, state.totalQuestions);
  savePlayerName(state.playerName);
  startTimer();
  switchScreen("game");
  renderQuestion();
}

function handleAnswerSubmission(event) {
  event.preventDefault();

  const question = state.currentQuestion;
  const userInputs = question.answers.map((answer) => elements.answerForm.elements[answer.key].value);
  const results = question.answers.map((answer, index) => ({
    key: answer.key,
    label: answer.label,
    isCorrect: isCorrectAnswer(userInputs[index], getValidAnswersForKey(question.verb, answer.key))
  }));

  const allCorrect = results.every((item) => item.isCorrect);

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
      .map((answer) => `${answer.label}: ${getCorrectAnswerText(answer.key, question.verb)}`)
      .join(" | ");
    showFeedback("error", `Ups. La respuesta correcta era ${corrections}.`);
  }

  updateScoreboard();
  elements.answerForm.reset();
  advanceGame();
}

function openTable() {
  renderVerbTable();
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
  state.reviewSource = "summary";
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

  const uniqueMistakes = Array.from(
    new Map(
      state.mistakes.map((item) => [
        `${item.baseVerb.base}|${item.baseVerb.past.join(",")}|${item.baseVerb.participle.join(",")}`,
        item.baseVerb
      ])
    ).values()
  );
  startNewGame({
    playerName: state.playerName || elements.playerName.value.trim() || "Jugador",
    mode: "mixed",
    totalQuestions: Math.min(uniqueMistakes.length, 10),
    verbs: uniqueMistakes
  });
});

document.getElementById("openTableTopBtn").addEventListener("click", openTable);
document.getElementById("openTableGameBtn").addEventListener("click", openTable);
document.getElementById("closeTableBtn").addEventListener("click", returnFromTable);

elements.verbSearchInput.addEventListener("input", renderVerbTable);
elements.sortTableBtn.addEventListener("click", () => {
  state.tableSortAsc = !state.tableSortAsc;
  elements.sortTableBtn.textContent = state.tableSortAsc ? "Ordenar A-Z" : "Ordenar Z-A";
  renderVerbTable();
});

function init() {
  loadLastPlayerName();
  updateBestStatsUI();
  renderVerbTable();
  showFeedback("", "Escribe tu nombre y elige un modo para empezar.");
}

init();
