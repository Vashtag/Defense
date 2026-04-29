/* ═══════════════════════════════════════════════════════
   PhD Defense Prep — App
═══════════════════════════════════════════════════════ */

const STORAGE = {
  QUESTIONS:   'phd_questions',
  FLASHCARDS:  'phd_flashcards',
  CONFIDENCE:  'phd_confidence',    // { questionId: 'low'|'medium'|'high' }
  ANSWERS:     'phd_answers',       // { questionId: 'text' }
  CHEATBLOCKS: 'phd_cheatblocks',
  STREAK:      'phd_streak',        // { lastDate: 'YYYY-MM-DD', count: N }
  FC_RATINGS:  'phd_fc_ratings',    // { cardId: 'low'|'medium'|'high' }
  COMMITTEE:   'phd_committee',
};

// ── Persistence helpers ──────────────────────────────────────────────────────
function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ── State ────────────────────────────────────────────────────────────────────
const state = {
  questions: (() => {
    const stored = load(STORAGE.QUESTIONS, null);
    if (!stored) return DEFAULT_QUESTIONS;
    const ids = new Set(stored.map(q => q.id));
    const added = DEFAULT_QUESTIONS.filter(q => !ids.has(q.id));
    return added.length ? [...stored, ...added] : stored;
  })(),
  flashcards:  load(STORAGE.FLASHCARDS,  DEFAULT_FLASHCARDS),
  confidence:  load(STORAGE.CONFIDENCE,  {}),
  answers:     { ...DEFAULT_ANSWERS, ...load(STORAGE.ANSWERS, {}) },
  cheatblocks: load(STORAGE.CHEATBLOCKS, DEFAULT_CHEATBLOCKS),
  committee:   load(STORAGE.COMMITTEE,   DEFAULT_COMMITTEE),
  fcRatings:   load(STORAGE.FC_RATINGS,  {}),
  streak:      load(STORAGE.STREAK,      { lastDate: '', count: 0 }),

  editingMemberId: null,

  // Practice session
  practiceQueue:  [],
  practiceIndex:  0,
  practiceTimer:  null,
  practiceSeconds: 120,
  practiceResults: [],

  // Flashcard
  fcFiltered: [],
  fcIndex:    0,
  fcFlipped:  false,

  // Editing
  editingQuestionId:   null,
  editingCheatblockId: null,
  pendingDeleteFn:     null,

  currentPage: 'dashboard',
};

/* ══════════════════════════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════════════════════════ */
function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  document.querySelectorAll('.bnav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  state.currentPage = page;
  if (page === 'dashboard')  renderDashboard();
  if (page === 'questions')  renderQuestions();
  if (page === 'flashcards') renderFlashcardPage();
  if (page === 'answers')    renderAnswers();
  if (page === 'cheatsheet') renderCheatsheet();
  if (page === 'committee')  renderCommittee();
  if (page === 'examprep')   renderExamPrep();
  if (page === 'dictionary')  renderDictionary();
  if (page === 'chaptermap') renderChapterMap();
  if (page === 'settings')   renderSettings();
  if (page === 'practice')   resetPractice();
}

/* ══════════════════════════════════════════════════════════════════════════════
   STREAK
══════════════════════════════════════════════════════════════════════════════ */
function touchStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const s = state.streak;
  if (s.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  s.count = (s.lastDate === yesterday) ? s.count + 1 : 1;
  s.lastDate = today;
  state.streak = s;
  save(STORAGE.STREAK, s);
}

/* ══════════════════════════════════════════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════════════════════════════════════════ */
function renderDashboard() {
  const conf = state.confidence;
  const practiced = Object.keys(conf).length;
  const highConf  = Object.values(conf).filter(v => v === 'high').length;
  const lowConf   = Object.values(conf).filter(v => v === 'low').length;

  document.getElementById('stat-total').textContent     = practiced;
  document.getElementById('stat-confident').textContent = highConf;
  document.getElementById('stat-review').textContent    = lowConf;
  document.getElementById('stat-streak').textContent    = state.streak.count;

  // Review list
  const reviewEl = document.getElementById('review-list');
  const needsReview = state.questions.filter(q => conf[q.id] === 'low');
  if (needsReview.length === 0) {
    reviewEl.innerHTML = '<p class="empty-state">No low-confidence questions — great work!</p>';
  } else {
    reviewEl.innerHTML = needsReview.slice(0, 8).map(q => `
      <div class="review-item" onclick="app.goTo('answers')">
        <div class="review-item-dot"></div>
        <span>${esc(q.text)}</span>
      </div>`).join('');
  }
}

/* ══════════════════════════════════════════════════════════════════════════════
   QUESTION BANK
══════════════════════════════════════════════════════════════════════════════ */
function getCategories() {
  return [...new Set(state.questions.map(q => q.category))].sort();
}

function populateCategorySelects() {
  const cats = getCategories();
  const selects = [
    document.getElementById('filterCategory'),
    document.getElementById('practiceCategory'),
    document.getElementById('answersFilterCategory'),
  ];
  selects.forEach(sel => {
    if (!sel) return;
    const current = sel.value;
    sel.innerHTML = '<option value="all">All Categories</option>' +
      cats.map(c => `<option value="${esc(c)}" ${current === c ? 'selected' : ''}>${esc(c)}</option>`).join('');
  });
  // Modal category
  const mq = document.getElementById('mq-category');
  if (mq) {
    mq.innerHTML = cats.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  }
}

function renderQuestions() {
  populateCategorySelects();
  const catFilter  = document.getElementById('filterCategory').value;
  const confFilter = document.getElementById('filterConfidence').value;

  let qs = state.questions;
  if (catFilter !== 'all') qs = qs.filter(q => q.category === catFilter);
  if (confFilter !== 'all') {
    qs = qs.filter(q => {
      const c = state.confidence[q.id] || 'unrated';
      return c === confFilter;
    });
  }

  const listEl = document.getElementById('question-list');
  if (qs.length === 0) {
    listEl.innerHTML = '<p class="empty-state">No questions match your filters.</p>';
    return;
  }

  listEl.innerHTML = qs.map(q => {
    const conf = state.confidence[q.id] || 'unrated';
    const tags = (q.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    return `
      <div class="question-card" id="qcard-${q.id}">
        <div class="q-card-header">
          <p class="q-text">${esc(q.text)}</p>
          <div class="q-actions">
            <button class="btn-icon-sm" title="Edit" onclick="app.openEditQuestion('${q.id}')">&#9998;</button>
            <button class="btn-icon-sm" title="Delete" onclick="app.confirmDelete('question','${q.id}')">&#128465;</button>
          </div>
        </div>
        <div class="q-meta">
          <span class="q-category-badge">${esc(q.category)}</span>
          <span class="q-difficulty diff-${q.difficulty}">${q.difficulty}</span>
          <span class="confidence-dot conf-dot-${conf}" title="Confidence: ${conf}"></span>
          <span style="font-size:.78rem;color:var(--text-muted)">${conf}</span>
          ${tags}
        </div>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════════════════════════
   ADD / EDIT QUESTION MODAL
══════════════════════════════════════════════════════════════════════════════ */
function openAddQuestion() {
  state.editingQuestionId = null;
  populateCategorySelects();
  document.getElementById('modal-question-title').textContent = 'Add Question';
  document.getElementById('mq-text').value = '';
  document.getElementById('mq-new-category').value = '';
  document.getElementById('mq-difficulty').value = 'medium';
  document.getElementById('mq-tags').value = '';
  openModal('modal-question');
}

function openEditQuestion(id) {
  const q = state.questions.find(x => x.id === id);
  if (!q) return;
  state.editingQuestionId = id;
  populateCategorySelects();
  document.getElementById('modal-question-title').textContent = 'Edit Question';
  document.getElementById('mq-text').value = q.text;
  document.getElementById('mq-category').value = q.category;
  document.getElementById('mq-new-category').value = '';
  document.getElementById('mq-difficulty').value = q.difficulty;
  document.getElementById('mq-tags').value = (q.tags || []).join(', ');
  openModal('modal-question');
}

function saveQuestion() {
  const text = document.getElementById('mq-text').value.trim();
  if (!text) return alert('Please enter a question.');
  const newCat = document.getElementById('mq-new-category').value.trim();
  const category = newCat || document.getElementById('mq-category').value || 'General';
  const difficulty = document.getElementById('mq-difficulty').value;
  const tagsRaw = document.getElementById('mq-tags').value;
  const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

  if (state.editingQuestionId) {
    const idx = state.questions.findIndex(q => q.id === state.editingQuestionId);
    if (idx !== -1) state.questions[idx] = { ...state.questions[idx], text, category, difficulty, tags };
  } else {
    state.questions.push({ id: 'q' + Date.now(), text, category, difficulty, tags });
  }
  save(STORAGE.QUESTIONS, state.questions);
  closeModal('modal-question');
  renderQuestions();
  populateCategorySelects();
}

/* ══════════════════════════════════════════════════════════════════════════════
   PRACTICE MODE
══════════════════════════════════════════════════════════════════════════════ */
function startPractice() {
  const cat   = document.getElementById('practiceCategory').value;
  const secs  = parseInt(document.getElementById('practiceTime').value) || 120;
  const count = parseInt(document.getElementById('practiceCount').value) || 5;

  let pool = cat === 'all' ? [...state.questions] : state.questions.filter(q => q.category === cat);
  if (pool.length === 0) { alert('No questions in this category.'); return; }

  // Shuffle, prioritize low/unrated confidence
  pool.sort(() => Math.random() - .5);
  pool.sort((a, b) => {
    const order = { low: 0, unrated: 1, medium: 2, high: 3 };
    const ca = order[state.confidence[a.id] || 'unrated'];
    const cb = order[state.confidence[b.id] || 'unrated'];
    return ca - cb;
  });

  state.practiceQueue   = pool.slice(0, count);
  state.practiceIndex   = 0;
  state.practiceSeconds = secs;
  state.practiceResults = [];

  document.getElementById('practice-setup').classList.add('hidden');
  document.getElementById('practice-results').classList.add('hidden');
  document.getElementById('practice-session').classList.remove('hidden');

  touchStreak();
  showPracticeQuestion();
}

function showPracticeQuestion() {
  const q = state.practiceQueue[state.practiceIndex];
  if (!q) { endPractice(); return; }

  document.getElementById('practice-progress').textContent =
    `Question ${state.practiceIndex + 1} of ${state.practiceQueue.length}`;
  document.getElementById('practice-question-text').textContent = q.text;
  document.getElementById('practice-category-badge').textContent = q.category;
  document.getElementById('practiceNotes').value = '';

  startTimer(state.practiceSeconds);
}

function startTimer(seconds) {
  clearInterval(state.practiceTimer);
  let remaining = seconds;
  const arc = document.getElementById('timerArc');
  const display = document.getElementById('timerDisplay');
  const circumference = 163.4;

  function tick() {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    const pct = remaining / seconds;
    arc.style.strokeDashoffset = circumference * (1 - pct);
    arc.classList.toggle('urgent', remaining <= 30);
    if (remaining <= 0) {
      clearInterval(state.practiceTimer);
      // Auto-advance with no rating
      submitConfidence(null);
    }
    remaining--;
  }
  tick();
  state.practiceTimer = setInterval(tick, 1000);
}

function submitConfidence(level) {
  clearInterval(state.practiceTimer);
  const q = state.practiceQueue[state.practiceIndex];
  if (q && level) {
    state.confidence[q.id] = level;
    save(STORAGE.CONFIDENCE, state.confidence);
  }
  const notes = document.getElementById('practiceNotes').value.trim();
  if (q && notes) {
    state.answers[q.id] = (state.answers[q.id] ? state.answers[q.id] + '\n\n[Practice notes]\n' : '') + notes;
    save(STORAGE.ANSWERS, state.answers);
  }
  state.practiceResults.push({ q, level: level || 'skipped' });
  state.practiceIndex++;
  if (state.practiceIndex >= state.practiceQueue.length) {
    endPractice();
  } else {
    showPracticeQuestion();
  }
}

function endPractice() {
  clearInterval(state.practiceTimer);
  document.getElementById('practice-session').classList.add('hidden');
  document.getElementById('practice-results').classList.remove('hidden');

  const results = state.practiceResults;
  const low  = results.filter(r => r.level === 'low').length;
  const med  = results.filter(r => r.level === 'medium').length;
  const high = results.filter(r => r.level === 'high').length;
  const skip = results.filter(r => r.level === 'skipped').length;

  document.getElementById('results-grid').innerHTML = `
    <div class="result-item"><div class="result-num result-high">${high}</div><div class="result-label">High Confidence</div></div>
    <div class="result-item"><div class="result-num result-medium">${med}</div><div class="result-label">Medium</div></div>
    <div class="result-item"><div class="result-num result-low">${low + skip}</div><div class="result-label">Needs Work</div></div>
  `;
}

function resetPractice() {
  clearInterval(state.practiceTimer);
  document.getElementById('practice-setup').classList.remove('hidden');
  document.getElementById('practice-session').classList.add('hidden');
  document.getElementById('practice-results').classList.add('hidden');
  populateCategorySelects();
}

function skipQuestion() {
  clearInterval(state.practiceTimer);
  submitConfidence(null);
}

/* ══════════════════════════════════════════════════════════════════════════════
   FLASHCARDS
══════════════════════════════════════════════════════════════════════════════ */
function renderFlashcardPage() {
  populateFlashcardDeckSelect();
  filterFlashcards();
}

function populateFlashcardDeckSelect() {
  const decks = [...new Set(state.flashcards.map(f => f.deck))].sort();
  const sel = document.getElementById('flashcardDeck');
  const cur = sel.value;
  sel.innerHTML = '<option value="all">All Decks</option>' +
    decks.map(d => `<option value="${esc(d)}" ${cur === d ? 'selected' : ''}>${esc(d)}</option>`).join('');
}

function filterFlashcards() {
  const deck = document.getElementById('flashcardDeck').value;
  state.fcFiltered = deck === 'all' ? [...state.flashcards] : state.flashcards.filter(f => f.deck === deck);
  state.fcIndex   = 0;
  state.fcFlipped = false;
  showFlashcard();
}

function showFlashcard() {
  const card = state.fcFiltered[state.fcIndex];
  const counterEl = document.getElementById('fc-counter');
  const fc = document.getElementById('flashcard');

  fc.classList.remove('flipped');
  state.fcFlipped = false;

  if (!card) {
    counterEl.textContent = 'No cards in this deck.';
    document.getElementById('fc-front-text').textContent = 'No flashcards yet. Add some!';
    document.getElementById('fc-back-text').textContent  = '';
    document.getElementById('fc-deck-label').textContent = '';
    return;
  }

  counterEl.textContent = `${state.fcIndex + 1} / ${state.fcFiltered.length}`;
  document.getElementById('fc-front-text').textContent = card.front;
  document.getElementById('fc-back-text').textContent  = card.back;
  document.getElementById('fc-deck-label').textContent = card.deck;
}

function flipCard() {
  state.fcFlipped = !state.fcFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', state.fcFlipped);
}

function prevCard() {
  if (state.fcFiltered.length === 0) return;
  state.fcIndex = (state.fcIndex - 1 + state.fcFiltered.length) % state.fcFiltered.length;
  showFlashcard();
}

function nextCard() {
  if (state.fcFiltered.length === 0) return;
  state.fcIndex = (state.fcIndex + 1) % state.fcFiltered.length;
  showFlashcard();
}

function rateCard(level) {
  const card = state.fcFiltered[state.fcIndex];
  if (!card) return;
  state.fcRatings[card.id] = level;
  save(STORAGE.FC_RATINGS, state.fcRatings);
  nextCard();
}

function openAddFlashcard() {
  document.getElementById('mfc-front').value = '';
  document.getElementById('mfc-back').value  = '';
  document.getElementById('mfc-deck').value  = '';
  openModal('modal-flashcard');
}

function saveFlashcard() {
  const front = document.getElementById('mfc-front').value.trim();
  const back  = document.getElementById('mfc-back').value.trim();
  const deck  = document.getElementById('mfc-deck').value.trim() || 'General';
  if (!front || !back) return alert('Front and back are required.');
  state.flashcards.push({ id: 'fc' + Date.now(), front, back, deck });
  save(STORAGE.FLASHCARDS, state.flashcards);
  closeModal('modal-flashcard');
  renderFlashcardPage();
}

/* ══════════════════════════════════════════════════════════════════════════════
   MY ANSWERS
══════════════════════════════════════════════════════════════════════════════ */
function renderAnswers() {
  populateCategorySelects();
  const catFilter    = document.getElementById('answersFilterCategory').value;
  const searchFilter = document.getElementById('answersSearch').value.toLowerCase();

  let qs = state.questions;
  if (catFilter !== 'all') qs = qs.filter(q => q.category === catFilter);
  if (searchFilter)        qs = qs.filter(q => q.text.toLowerCase().includes(searchFilter));

  const listEl = document.getElementById('answers-list');
  if (qs.length === 0) {
    listEl.innerHTML = '<p class="empty-state">No questions match your filters.</p>';
    return;
  }

  listEl.innerHTML = qs.map(q => {
    const saved = state.answers[q.id] || '';
    const conf  = state.confidence[q.id] || 'unrated';
    return `
      <div class="answer-card" id="acard-${q.id}">
        <div class="answer-card-header" onclick="app.toggleAnswer('${q.id}')">
          <div style="display:flex;align-items:flex-start;gap:8px;flex:1;min-width:0">
            <span class="confidence-dot conf-dot-${conf}" style="margin-top:6px;flex-shrink:0"></span>
            <h3>${esc(q.text)}</h3>
          </div>
          <span class="answer-chevron">&#8964;</span>
        </div>
        <div class="answer-body">
          <div style="margin-bottom:8px;display:flex;gap:6px;flex-wrap:wrap">
            <span class="q-category-badge">${esc(q.category)}</span>
            <span class="q-difficulty diff-${q.difficulty}">${q.difficulty}</span>
          </div>
          <textarea class="answer-editor" id="ae-${q.id}" placeholder="Write your prepared answer here...">${esc(saved)}</textarea>
          <div style="display:flex;align-items:center">
            <button class="btn btn-primary btn-sm answer-save-btn" onclick="app.saveAnswer('${q.id}')">Save Answer</button>
            <span class="answer-saved-indicator" id="saved-${q.id}">&#10003; Saved</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function toggleAnswer(id) {
  const card = document.getElementById('acard-' + id);
  if (card) card.classList.toggle('open');
}

function openEditAnswer(id) {
  goTo('answers');
  // Reset category filter so the question is visible
  const catFilter = document.getElementById('answersFilterCategory');
  if (catFilter) catFilter.value = 'all';
  renderAnswers();
  // Open the card and scroll to it
  requestAnimationFrame(() => {
    const card = document.getElementById('acard-' + id);
    if (card) {
      card.classList.add('open');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function saveAnswer(id) {
  const ta = document.getElementById('ae-' + id);
  if (!ta) return;
  state.answers[id] = ta.value;
  save(STORAGE.ANSWERS, state.answers);
  const ind = document.getElementById('saved-' + id);
  if (ind) {
    ind.classList.add('show');
    setTimeout(() => ind.classList.remove('show'), 2000);
  }
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHEAT SHEET
══════════════════════════════════════════════════════════════════════════════ */
function renderCheatsheet() {
  const grid = document.getElementById('cheatsheet-grid');
  if (state.cheatblocks.length === 0) {
    grid.innerHTML = '<p class="empty-state">No blocks yet. Click "+ Add Block" to start.</p>';
    return;
  }
  grid.innerHTML = state.cheatblocks.map(b => `
    <div class="cheat-block" style="--accent-color:${b.color || '#6366f1'}">
      <div class="cheat-block-actions">
        <button class="btn-icon-sm" onclick="app.openEditCheatblock('${b.id}')">&#9998;</button>
        <button class="btn-icon-sm" onclick="app.confirmDelete('cheatblock','${b.id}')">&#128465;</button>
      </div>
      <h3>${b.title}</h3>
      <pre>${esc(b.content)}</pre>
    </div>`).join('');
}

function openAddCheatblock() {
  state.editingCheatblockId = null;
  document.getElementById('modal-cheatblock-title').textContent = 'Add Block';
  document.getElementById('mcb-title').value   = '';
  document.getElementById('mcb-content').value = '';
  renderColorSwatches(CHEATBLOCK_COLORS[0]);
  openModal('modal-cheatblock');
}

function openEditCheatblock(id) {
  const b = state.cheatblocks.find(x => x.id === id);
  if (!b) return;
  state.editingCheatblockId = id;
  document.getElementById('modal-cheatblock-title').textContent = 'Edit Block';
  document.getElementById('mcb-title').value   = b.title;
  document.getElementById('mcb-content').value = b.content;
  renderColorSwatches(b.color || CHEATBLOCK_COLORS[0]);
  openModal('modal-cheatblock');
}

function renderColorSwatches(selected) {
  const el = document.getElementById('color-swatches');
  el.innerHTML = CHEATBLOCK_COLORS.map(c => `
    <div class="swatch ${c === selected ? 'selected' : ''}"
         style="background:${c}"
         onclick="app.selectSwatch(this, '${c}')"></div>`).join('');
}

function selectSwatch(el, color) {
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function getSelectedColor() {
  const sel = document.querySelector('.swatch.selected');
  return sel ? sel.style.background : CHEATBLOCK_COLORS[0];
}

function saveCheatblock() {
  const title   = document.getElementById('mcb-title').value.trim();
  const content = document.getElementById('mcb-content').value.trim();
  if (!title) return alert('Please enter a title.');
  const color = getSelectedColor();

  if (state.editingCheatblockId) {
    const idx = state.cheatblocks.findIndex(b => b.id === state.editingCheatblockId);
    if (idx !== -1) state.cheatblocks[idx] = { ...state.cheatblocks[idx], title, content, color };
  } else {
    state.cheatblocks.push({ id: 'cb' + Date.now(), title, content, color });
  }
  save(STORAGE.CHEATBLOCKS, state.cheatblocks);
  closeModal('modal-cheatblock');
  renderCheatsheet();
}

/* ══════════════════════════════════════════════════════════════════════════════
   DELETE
══════════════════════════════════════════════════════════════════════════════ */
function confirmDelete(type, id) {
  const messages = {
    question:   'Delete this question? Your saved answer and confidence rating will also be removed.',
    flashcard:  'Delete this flashcard?',
    cheatblock: 'Delete this cheat sheet block?',
    member:     'Delete this committee member?',
  };
  document.getElementById('confirm-message').textContent = messages[type] || 'Are you sure?';
  state.pendingDeleteFn = () => performDelete(type, id);
  openModal('modal-confirm');
}

function performDelete(type, id) {
  if (type === 'question') {
    state.questions = state.questions.filter(q => q.id !== id);
    delete state.confidence[id];
    delete state.answers[id];
    save(STORAGE.QUESTIONS,  state.questions);
    save(STORAGE.CONFIDENCE, state.confidence);
    save(STORAGE.ANSWERS,    state.answers);
    renderQuestions();
  } else if (type === 'flashcard') {
    state.flashcards = state.flashcards.filter(f => f.id !== id);
    save(STORAGE.FLASHCARDS, state.flashcards);
    renderFlashcardPage();
  } else if (type === 'cheatblock') {
    state.cheatblocks = state.cheatblocks.filter(b => b.id !== id);
    save(STORAGE.CHEATBLOCKS, state.cheatblocks);
    renderCheatsheet();
  } else if (type === 'member') {
    state.committee = state.committee.filter(m => m.id !== id);
    save(STORAGE.COMMITTEE, state.committee);
    renderCommittee();
  }
  closeModal('modal-confirm');
}

/* ══════════════════════════════════════════════════════════════════════════════
   CHAPTER MAP
══════════════════════════════════════════════════════════════════════════════ */
function renderChapterMap() {
  const container = document.getElementById('chaptermap-list');
  if (!container) return;

  container.innerHTML = CHAPTERS.map(ch => {
    const qs = state.questions.filter(q => ch.categories.includes(q.category));
    const total = qs.length;

    const qItems = qs.map(q => {
      const conf = state.confidence[q.id] || 'unrated';
      const confClass = conf === 'high' ? 'conf-high' : conf === 'medium' ? 'conf-medium' : conf === 'low' ? 'conf-low' : '';
      const label = q.text.replace(/^\[.*?\]\s*/, '');
      return `<div class="cm-q-item" onclick="app.goTo('questions')" title="Go to Question Bank">
        <span class="cm-conf-dot ${confClass}"></span>
        <span class="cm-q-item-text">${esc(label)}</span>
        <span class="ep-diff ${q.difficulty}">${q.difficulty}</span>
      </div>`;
    }).join('');

    const numLabel = ch.number !== null ? ch.number : '✕';

    return `<div class="cm-chapter" id="cm-${ch.id}" style="--cm-color:${ch.color}">
      <div class="cm-chapter-header" onclick="app.toggleCmChapter('${ch.id}')">
        <div class="cm-num">${numLabel}</div>
        <div class="cm-chapter-titles">
          <div class="cm-title">${esc(ch.title)}</div>
          <div class="cm-subtitle">${esc(ch.subtitle)}</div>
        </div>
        <div class="cm-meta">
          <span class="cm-q-count">${total} Qs</span>
          <span class="cm-arrow">&#9654;</span>
        </div>
      </div>
      <div class="cm-body">
        <p class="cm-desc">${esc(ch.description)}</p>
        <div class="cm-section-label">Questions from this chapter</div>
        <div class="cm-q-list">${qItems || '<p style="color:var(--text-muted);font-size:.84rem">No questions mapped.</p>'}</div>
        <div class="cm-section-label">Committee angles</div>
        <div class="cm-angles-box">${esc(ch.committeeAngles)}</div>
      </div>
    </div>`;
  }).join('');
}

function toggleCmChapter(id) {
  document.getElementById('cm-' + id)?.classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════════════════════════
   DICTIONARY
══════════════════════════════════════════════════════════════════════════════ */
function renderDictionary() {
  const searchRaw = (document.getElementById('dictSearch')?.value || '').trim();
  const search    = searchRaw.toLowerCase();
  const category  = document.getElementById('dictCategory')?.value || 'all';

  let entries = DEFAULT_DICTIONARY;
  if (category !== 'all') entries = entries.filter(e => e.category === category);
  if (search) entries = entries.filter(e =>
    e.term.toLowerCase().includes(search) || e.definition.toLowerCase().includes(search)
  );

  // Sort alphabetically within category
  entries = [...entries].sort((a, b) => a.term.localeCompare(b.term));

  const listEl = document.getElementById('dict-list');
  if (!listEl) return;

  if (entries.length === 0) {
    listEl.innerHTML = '<p class="dict-empty">No terms match your search.</p>';
    return;
  }

  function highlight(text) {
    if (!search) return esc(text);
    const re = new RegExp('(' + search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return esc(text).replace(re, '<mark class="dict-highlight">$1</mark>');
  }

  // Group by category when showing all
  if (category === 'all') {
    const groups = {};
    entries.forEach(e => {
      if (!groups[e.category]) groups[e.category] = [];
      groups[e.category].push(e);
    });
    const catOrder = ['Core Concept','Measure','Physiology','Oculomotor','Stimulation','Neuroanatomy','Theory','Statistics','Technology'];
    const sorted = catOrder.filter(c => groups[c]).concat(Object.keys(groups).filter(c => !catOrder.includes(c)));

    listEl.innerHTML = sorted.map(cat => `
      <div class="dict-category-group">
        <div class="dict-category-label">${cat}</div>
        ${groups[cat].map(e => `
          <div class="dict-entry">
            <div class="dict-term">${highlight(e.term)}</div>
            <div class="dict-def">${highlight(e.definition)}</div>
          </div>`).join('')}
      </div>`).join('');
  } else {
    listEl.innerHTML = entries.map(e => `
      <div class="dict-entry">
        <div class="dict-term">${highlight(e.term)}</div>
        <div class="dict-def">${highlight(e.definition)}</div>
      </div>`).join('');
  }
}

/* ══════════════════════════════════════════════════════════════════════════════
   EXAM PREP
══════════════════════════════════════════════════════════════════════════════ */
function renderExamPrep() {
  const container = document.getElementById('examprep-list');
  if (!container) return;

  // Group committee questions by category
  const committeeQs = state.questions.filter(q => q.category.startsWith('Committee'));
  const groups = {};
  committeeQs.forEach(q => {
    const cat = q.category; // e.g. "Committee — Dr. Allison"
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(q);
  });

  // Color map keyed by member name fragment
  const colorMap = {
    'Allison':          '#ef4444',
    'Barnett-Cowan':    '#6366f1',
    'Staines':          '#22c55e',
    'Niechwiej-Szwedo': '#f59e0b',
    'Itier':            '#a855f7',
  };

  let html = '';
  Object.keys(groups).forEach(cat => {
    const qs = groups[cat];
    const nameMatch = cat.replace('Committee — Dr. ', '');
    const color = Object.keys(colorMap).find(k => nameMatch.includes(k));
    const accent = color ? colorMap[color] : 'var(--primary)';

    html += `<div class="ep-member-block">
      <div class="ep-member-header" style="--ep-color:${accent}">
        <div>
          <div class="ep-member-name">${nameMatch}</div>
          <div class="ep-member-role">${cat}</div>
        </div>
        <span style="font-size:.82rem;color:var(--text-muted)">${qs.length} question${qs.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="ep-questions">`;

    qs.forEach(q => {
      const answer = state.answers[q.id] || '';
      const hasAnswer = answer.trim().length > 0;
      html += `<div class="ep-q-row" id="eprow-${q.id}">
        <button class="ep-q-toggle" onclick="app.toggleEpRow('${q.id}')">
          <span class="ep-q-arrow">&#9654;</span>
          <span class="ep-q-text">${q.text.replace(/^\[.*?\]\s*/, '')}</span>
          <span class="ep-diff ${q.difficulty}">${q.difficulty}</span>
        </button>
        <div class="ep-answer">
          ${hasAnswer
            ? `<pre>${answer.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`
            : `<p style="color:var(--text-muted);font-style:italic;font-size:.86rem">No answer saved yet.</p>`}
          <div class="ep-answer-actions">
            <button class="btn btn-sm btn-secondary" onclick="app.openEditAnswer('${q.id}')">&#9998; Edit Answer</button>
          </div>
        </div>
      </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html || '<p style="color:var(--text-muted)">No committee questions found.</p>';
}

function toggleEpRow(id) {
  const row = document.getElementById('eprow-' + id);
  if (row) row.classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════════════════════════
   COMMITTEE
══════════════════════════════════════════════════════════════════════════════ */
function renderCommittee() {
  const listEl = document.getElementById('committee-list');
  if (state.committee.length === 0) {
    listEl.innerHTML = '<p class="empty-state">No committee members yet.</p>';
    return;
  }

  listEl.innerHTML = state.committee.map(m => {
    const color = m.color || MEMBER_ROLE_COLORS[m.role] || '#6366f1';
    const angles = (m.angles || []).map(a => `<li>${esc(a)}</li>`).join('');
    return `
      <div class="member-card" style="--member-color:${color}">
        <div class="member-header">
          <div class="member-role-badge" style="background:${color}22;color:${color}">${esc(m.role)}</div>
          <div class="member-actions">
            <button class="btn-icon-sm" onclick="app.openEditMember('${m.id}')">&#9998;</button>
            <button class="btn-icon-sm" onclick="app.confirmDelete('member','${m.id}')">&#128465;</button>
          </div>
        </div>
        <h2 class="member-name">${esc(m.name)}</h2>
        <p class="member-dept">${esc(m.dept)}</p>

        <div class="member-section">
          <div class="member-section-label">Research Focus</div>
          <p class="member-body-text">${esc(m.focus)}</p>
        </div>

        ${angles ? `
        <div class="member-section">
          <div class="member-section-label">Likely Question Angles</div>
          <ul class="member-angles">${angles}</ul>
        </div>` : ''}

        ${m.notes ? `
        <div class="member-section member-notes">
          <div class="member-section-label">Your Notes</div>
          <p class="member-body-text">${esc(m.notes)}</p>
        </div>` : ''}
      </div>`;
  }).join('');
}

function openAddMember() {
  state.editingMemberId = null;
  document.getElementById('modal-member-title').textContent = 'Add Committee Member';
  document.getElementById('mm-name').value   = '';
  document.getElementById('mm-role').value   = 'Internal Member';
  document.getElementById('mm-dept').value   = '';
  document.getElementById('mm-focus').value  = '';
  document.getElementById('mm-angles').value = '';
  document.getElementById('mm-notes').value  = '';
  openModal('modal-member');
}

function openEditMember(id) {
  const m = state.committee.find(x => x.id === id);
  if (!m) return;
  state.editingMemberId = id;
  document.getElementById('modal-member-title').textContent = 'Edit Member';
  document.getElementById('mm-name').value   = m.name;
  document.getElementById('mm-role').value   = m.role;
  document.getElementById('mm-dept').value   = m.dept;
  document.getElementById('mm-focus').value  = m.focus;
  document.getElementById('mm-angles').value = (m.angles || []).join('\n');
  document.getElementById('mm-notes').value  = m.notes || '';
  openModal('modal-member');
}

function saveMember() {
  const name   = document.getElementById('mm-name').value.trim();
  const role   = document.getElementById('mm-role').value;
  const dept   = document.getElementById('mm-dept').value.trim();
  const focus  = document.getElementById('mm-focus').value.trim();
  const angles = document.getElementById('mm-angles').value.split('\n').map(l => l.trim()).filter(Boolean);
  const notes  = document.getElementById('mm-notes').value.trim();
  if (!name) return alert('Please enter a name.');
  const color = MEMBER_ROLE_COLORS[role] || '#6366f1';

  if (state.editingMemberId) {
    const idx = state.committee.findIndex(m => m.id === state.editingMemberId);
    if (idx !== -1) state.committee[idx] = { ...state.committee[idx], name, role, dept, focus, angles, notes, color };
  } else {
    state.committee.push({ id: 'cm' + Date.now(), name, role, dept, focus, angles, notes, color });
  }
  save(STORAGE.COMMITTEE, state.committee);
  closeModal('modal-member');
  renderCommittee();
}

/* ══════════════════════════════════════════════════════════════════════════════
   MODALS
══════════════════════════════════════════════════════════════════════════════ */
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

/* ══════════════════════════════════════════════════════════════════════════════
   UTILITY
══════════════════════════════════════════════════════════════════════════════ */
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════════════════════════════════════════════
   EVENT WIRING
══════════════════════════════════════════════════════════════════════════════ */
function bindEvents() {
  // Nav links
  document.querySelectorAll('.nav-link, .bnav-link').forEach(link => {
    link.addEventListener('click', e => { e.preventDefault(); goTo(link.dataset.page); });
  });

  // Question bank
  document.getElementById('filterCategory').addEventListener('change',  renderQuestions);
  document.getElementById('filterConfidence').addEventListener('change', renderQuestions);
  document.getElementById('btnAddQuestion').addEventListener('click',    openAddQuestion);
  document.getElementById('btnSaveQuestion').addEventListener('click',   saveQuestion);

  // Practice
  document.getElementById('btnStartPractice').addEventListener('click', startPractice);
  document.getElementById('btnSkipQuestion').addEventListener('click',  skipQuestion);
  document.querySelectorAll('.conf-btn[data-conf]').forEach(btn => {
    btn.addEventListener('click', () => submitConfidence(btn.dataset.conf));
  });

  // Flashcards
  document.getElementById('btnAddFlashcard').addEventListener('click', openAddFlashcard);
  document.getElementById('btnSaveFlashcard').addEventListener('click', saveFlashcard);
  document.getElementById('btnPrevCard').addEventListener('click', prevCard);
  document.getElementById('btnNextCard').addEventListener('click', nextCard);
  document.getElementById('flashcardDeck').addEventListener('change', filterFlashcards);

  // Answers
  document.getElementById('answersFilterCategory').addEventListener('change', renderAnswers);
  document.getElementById('answersSearch').addEventListener('input', renderAnswers);

  // Cheat sheet
  document.getElementById('btnAddBlock').addEventListener('click', openAddCheatblock);
  document.getElementById('btnSaveCheatBlock').addEventListener('click', saveCheatblock);

  // Committee
  document.getElementById('btnAddMember').addEventListener('click', openAddMember);
  document.getElementById('btnSaveMember').addEventListener('click', saveMember);

  // Confirm delete
  document.getElementById('btnConfirmDelete').addEventListener('click', () => {
    if (state.pendingDeleteFn) state.pendingDeleteFn();
  });

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.add('hidden');
    });
  });

  // Keyboard: Escape closes modals, arrow keys navigate flashcards
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
    }
    if (state.currentPage === 'flashcards') {
      if (e.key === 'ArrowLeft')  prevCard();
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === ' ')          { e.preventDefault(); flipCard(); }
    }
  });
}

/* ══════════════════════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════════════════════ */
function init() {
  bindEvents();
  populateCategorySelects();
  renderDashboard();
}

/* ══════════════════════════════════════════════════════════════════════════════
   SETTINGS
══════════════════════════════════════════════════════════════════════════════ */
function renderSettings() {
  // Re-render the confidence bars in the settings page
  const barsEl = document.getElementById('category-bars');
  if (!barsEl) return;
  const cats = [...new Set(state.questions.map(q => q.category))].sort();
  barsEl.innerHTML = cats.map(cat => {
    const qs = state.questions.filter(q => q.category === cat);
    const rated = qs.filter(q => state.confidence[q.id]);
    const high  = qs.filter(q => state.confidence[q.id] === 'high').length;
    const pct   = qs.length ? Math.round((high / qs.length) * 100) : 0;
    return `<div class="cat-bar-row">
      <div class="cat-bar-label">
        <span>${esc(cat)}</span>
        <span style="color:var(--text-muted)">${high}/${qs.length} confident</span>
      </div>
      <div class="cat-bar-track">
        <div class="cat-bar-fill" style="width:${pct}%"></div>
      </div>
    </div>`;
  }).join('');
}

function resetConfidence() {
  if (!confirm('Reset all confidence ratings? This cannot be undone.')) return;
  state.confidence = {};
  save(STORAGE.CONFIDENCE, state.confidence);
  renderSettings();
  renderDashboard();
}

function resetAll() {
  if (!confirm('Reset ALL app data (answers, confidence, practice history)? This cannot be undone.')) return;
  Object.values(STORAGE).forEach(key => localStorage.removeItem(key));
  location.reload();
}

// Public API (called from inline HTML onclick handlers)
const app = {
  goTo, flipCard, rateCard, prevCard, nextCard,
  openEditQuestion, openAddFlashcard, openEditCheatblock,
  openEditMember,
  toggleAnswer, saveAnswer, openEditAnswer, confirmDelete, closeModal,
  resetPractice, selectSwatch, toggleEpRow, renderDictionary,
  renderChapterMap, toggleCmChapter,
  renderSettings, resetConfidence, resetAll,
};

document.addEventListener('DOMContentLoaded', init);
