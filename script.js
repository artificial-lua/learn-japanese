"use strict";

// Storage keys
const THEME_KEY = "learnjp-theme";
const SCRIPT_KEY = "learnjp-script";

// App-level globals (file-scope)
const ganaStorage = {
    hiragana: {
        "gana": {
            "あ": [
                "아"
            ],
            "い": [
                "이"
            ],
            "う": [
                "우"
            ],
            "え": [
                "에"
            ],
            "お": [
                "오"
            ],
            "か": [
                "카"
            ],
            "き": [
                "키"
            ],
            "く": [
                "쿠"
            ],
            "け": [
                "케"
            ],
            "こ": [
                "코"
            ],
            "さ": [
                "사"
            ],
            "し": [
                "시"
            ],
            "す": [
                "스"
            ],
            "せ": [
                "세"
            ],
            "そ": [
                "소"
            ],
            "た": [
                "타"
            ],
            "ち": [
                "치"
            ],
            "つ": [
                "츠"
            ],
            "て": [
                "테"
            ],
            "と": [
                "토"
            ],
            "な": [
                "나"
            ],
            "に": [
                "니"
            ],
            "ぬ": [
                "누"
            ],
            "ね": [
                "네"
            ],
            "の": [
                "노"
            ],
            "は": [
                "하"
            ],
            "ひ": [
                "히"
            ],
            "ふ": [
                "후"
            ],
            "へ": [
                "헤"
            ],
            "ほ": [
                "호"
            ],
            "ま": [
                "마"
            ],
            "み": [
                "미"
            ],
            "む": [
                "무"
            ],
            "め": [
                "메"
            ],
            "も": [
                "모"
            ],
            "や": [
                "야"
            ],
            "ゆ": [
                "유"
            ],
            "よ": [
                "요"
            ],
            "ら": [
                "라"
            ],
            "り": [
                "리"
            ],
            "る": [
                "루"
            ],
            "れ": [
                "레"
            ],
            "ろ": [
                "로"
            ],
            "わ": [
                "와"
            ],
            "を": [
                "오"
            ],
            "ん": [
                "응"
            ],
            "が": [
                "가"
            ],
            "ぎ": [
                "기"
            ],
            "ぐ": [
                "구"
            ],
            "げ": [
                "게"
            ],
            "ご": [
                "고"
            ],
            "ざ": [
                "자"
            ],
            "じ": [
                "지"
            ],
            "ず": [
                "즈"
            ],
            "ぜ": [
                "제"
            ],
            "ぞ": [
                "조"
            ],
            "だ": [
                "다"
            ],
            "ぢ": [
                "지"
            ],
            "づ": [
                "즈"
            ],
            "で": [
                "데"
            ],
            "ど": [
                "도"
            ],
            "ば": [
                "바"
            ],
            "び": [
                "비"
            ],
            "ぶ": [
                "부"
            ],
            "べ": [
                "베"
            ],
            "ぼ": [
                "보"
            ],
            "ぱ": [
                "파"
            ],
            "ぴ": [
                "피"
            ],
            "ぷ": [
                "푸"
            ],
            "ぺ": [
                "페"
            ],
            "ぽ": [
                "포"
            ],
            "きゃ": [
                "캬"
            ],
            "きゅ": [
                "큐"
            ],
            "きょ": [
                "쿄"
            ],
            "しゃ": [
                "샤"
            ],
            "しゅ": [
                "슈"
            ],
            "しょ": [
                "쇼"
            ],
            "ちゃ": [
                "챠"
            ],
            "ちゅ": [
                "츄"
            ],
            "ちょ": [
                "쵸"
            ],
            "にゃ": [
                "냐"
            ],
            "にゅ": [
                "뉴"
            ],
            "にょ": [
                "뇨"
            ],
            "ひゃ": [
                "햐"
            ],
            "ひゅ": [
                "휴"
            ],
            "ひょ": [
                "효"
            ],
            "みゃ": [
                "먀"
            ],
            "みゅ": [
                "뮤"
            ],
            "みょ": [
                "묘"
            ],
            "りゃ": [
                "랴"
            ],
            "りゅ": [
                "류"
            ],
            "りょ": [
                "료"
            ],
            "ぎゃ": [
                "갸"
            ],
            "ぎゅ": [
                "규"
            ],
            "ぎょ": [
                "교"
            ],
            "じゃ": [
                "쟈"
            ],
            "じゅ": [
                "쥬"
            ],
            "じょ": [
                "죠"
            ],
            "ぢゃ": [
                "쟈"
            ],
            "ぢゅ": [
                "쥬"
            ],
            "ぢょ": [
                "죠"
            ],
            "びゃ": [
                "뱌"
            ],
            "びゅ": [
                "뷰"
            ],
            "びょ": [
                "뵤"
            ],
            "ぴゃ": [
                "퍄"
            ],
            "ぴゅ": [
                "퓨"
            ],
            "ぴょ": [
                "표"
            ]
        },
        "sound": {
            "아": [
                "あ"
            ],
            "이": [
                "い"
            ],
            "우": [
                "う"
            ],
            "에": [
                "え"
            ],
            "오": [
                "お",
                "を"
            ],
            "카": [
                "か"
            ],
            "키": [
                "き"
            ],
            "쿠": [
                "く"
            ],
            "케": [
                "け"
            ],
            "코": [
                "こ"
            ],
            "사": [
                "さ"
            ],
            "시": [
                "し"
            ],
            "스": [
                "す"
            ],
            "세": [
                "せ"
            ],
            "소": [
                "そ"
            ],
            "타": [
                "た"
            ],
            "치": [
                "ち"
            ],
            "츠": [
                "つ"
            ],
            "테": [
                "て"
            ],
            "토": [
                "と"
            ],
            "나": [
                "な"
            ],
            "니": [
                "に"
            ],
            "누": [
                "ぬ"
            ],
            "네": [
                "ね"
            ],
            "노": [
                "の"
            ],
            "하": [
                "は"
            ],
            "히": [
                "ひ"
            ],
            "후": [
                "ふ"
            ],
            "헤": [
                "へ"
            ],
            "호": [
                "ほ"
            ],
            "마": [
                "ま"
            ],
            "미": [
                "み"
            ],
            "무": [
                "む"
            ],
            "메": [
                "め"
            ],
            "모": [
                "も"
            ],
            "야": [
                "や"
            ],
            "유": [
                "ゆ"
            ],
            "요": [
                "よ"
            ],
            "라": [
                "ら"
            ],
            "리": [
                "り"
            ],
            "루": [
                "る"
            ],
            "레": [
                "れ"
            ],
            "로": [
                "ろ"
            ],
            "와": [
                "わ"
            ],
            "응": [
                "ん"
            ],
            "가": [
                "が"
            ],
            "기": [
                "ぎ"
            ],
            "구": [
                "ぐ"
            ],
            "게": [
                "げ"
            ],
            "고": [
                "ご"
            ],
            "자": [
                "ざ"
            ],
            "지": [
                "じ",
                "ぢ"
            ],
            "즈": [
                "ず",
                "づ"
            ],
            "제": [
                "ぜ"
            ],
            "조": [
                "ぞ"
            ],
            "다": [
                "だ"
            ],
            "데": [
                "で"
            ],
            "도": [
                "ど"
            ],
            "바": [
                "ば"
            ],
            "비": [
                "び"
            ],
            "부": [
                "ぶ"
            ],
            "베": [
                "べ"
            ],
            "보": [
                "ぼ"
            ],
            "파": [
                "ぱ"
            ],
            "피": [
                "ぴ"
            ],
            "푸": [
                "ぷ"
            ],
            "페": [
                "ぺ"
            ],
            "포": [
                "ぽ"
            ],
            "캬": [
                "きゃ"
            ],
            "큐": [
                "きゅ"
            ],
            "쿄": [
                "きょ"
            ],
            "샤": [
                "しゃ"
            ],
            "슈": [
                "しゅ"
            ],
            "쇼": [
                "しょ"
            ],
            "챠": [
                "ちゃ"
            ],
            "츄": [
                "ちゅ"
            ],
            "쵸": [
                "ちょ"
            ],
            "냐": [
                "にゃ"
            ],
            "뉴": [
                "にゅ"
            ],
            "뇨": [
                "にょ"
            ],
            "햐": [
                "ひゃ"
            ],
            "휴": [
                "ひゅ"
            ],
            "효": [
                "ひょ"
            ],
            "먀": [
                "みゃ"
            ],
            "뮤": [
                "みゅ"
            ],
            "묘": [
                "みょ"
            ],
            "랴": [
                "りゃ"
            ],
            "류": [
                "りゅ"
            ],
            "료": [
                "りょ"
            ],
            "갸": [
                "ぎゃ"
            ],
            "규": [
                "ぎゅ"
            ],
            "교": [
                "ぎょ"
            ],
            "쟈": [
                "じゃ",
                "ぢゃ"
            ],
            "쥬": [
                "じゅ",
                "ぢゅ"
            ],
            "죠": [
                "じょ",
                "ぢょ"
            ],
            "뱌": [
                "びゃ"
            ],
            "뷰": [
                "びゅ"
            ],
            "뵤": [
                "びょ"
            ],
            "퍄": [
                "ぴゃ"
            ],
            "퓨": [
                "ぴゅ"
            ],
            "표": [
                "ぴょ"
            ]
        },
        "title": "히라가나"
    }
};
ganaStorage.hiragana.gana.length = Object.keys(ganaStorage.hiragana.gana).length;
let currentScriptMode = 'hiragana';
function getScriptMode() { return currentScriptMode; }
function getHiraganaData() { return ganaStorage.hiragana; }
let timerApiGlobal = null;
function getTimer() { return timerApiGlobal; }

let state = 'loading';

const promptBox = document.getElementById('prompt');
const questionChar = document.getElementById('question-char');
const answerBoxes = document.querySelectorAll('.options .option .option-text');
const answerButtons = document.querySelectorAll('.option');
// Stats bar elements
const accFillEl = document.getElementById('accuracy-fill');
const accTextEl = document.getElementById('accuracy-text');
const timeFillEl = document.getElementById('time-fill');
const timeTextEl = document.getElementById('time-text');

const history = {
    correctAnswers: [],
    times: [],
};

if (window.localStorage.getItem('learnjp-history')) {
    try {
        const parsed = JSON.parse(window.localStorage.getItem('learnjp-history'));
        if (parsed && Array.isArray(parsed.correctAnswers) && Array.isArray(parsed.times)) {
            history.correctAnswers = parsed.correctAnswers;
            history.times = parsed.times;
        }
    } catch (e) {
        // Ignore
    }
}
console.log('Loaded history:', history);

function updateStatsBars() {
    try {
        // Accuracy
        var total = history.correctAnswers.length;
        var correct = history.correctAnswers.reduce(function (sum, v) { return sum + (v ? 1 : 0); }, 0);
        var acc = total > 0 ? Math.round((correct / total) * 100) : 0;
        if (accFillEl) {
            accFillEl.style.width = Math.max(0, Math.min(100, acc)) + '%';
            var bar = accFillEl.parentElement;
            if (bar && bar.setAttribute) bar.setAttribute('aria-valuenow', String(acc));
        }
        if (accTextEl) accTextEl.textContent = acc + '%';

        // Time comparison (last vs average), with 50% as average baseline
        var times = history.times || [];
        var last = times.length ? times[times.length - 1] : 0;
        var avg = times.length ? (times.reduce(function (s, v) { return s + v; }, 0) / times.length) : 0;
        var fillPct = 0;
        var ratioText = '–';
        if (avg > 0 && last >= 0) {
            var ratio = last / avg; // 1.0 = average
            fillPct = Math.max(0, Math.min(100, 50 * ratio)); // 50% at average
            ratioText = (Math.round(ratio * 100) / 100) + 'x';
        }
        if (timeFillEl) {
            timeFillEl.style.width = fillPct + '%';
            var bar2 = timeFillEl.parentElement;
            if (bar2 && bar2.setAttribute) bar2.setAttribute('aria-valuenow', String(Math.round(fillPct)));
        }
        if (timeTextEl) timeTextEl.textContent = ratioText;
    } catch (_) { /* no-op */ }
}

// Lightweight pub/sub without window events
const scriptModeListeners = new Set();
function onScriptModeChange(handler) {
    if (typeof handler === 'function') {
        scriptModeListeners.add(handler);
        return function unsubscribe() { scriptModeListeners.delete(handler); };
    }
    return function noop() { };
}

// ===== Theme toggle =====
function applyTheme(root, btn, mode) {
    if (mode) root.dataset.theme = mode;
    if (btn) {
        var isDark = (root.dataset.theme || "").toLowerCase() === "dark";
        btn.setAttribute("aria-pressed", String(isDark));
    }
}

function onThemeToggleClick(root, btn, storage, key) {
    var next = (root.dataset.theme === "light") ? "dark" : "light";
    applyTheme(root, btn, next);
    try { storage.setItem(key, next); } catch (_) { }
}

function initThemeToggle(doc, storage, matchMediaFn, key) {
    var root = doc.documentElement;
    var btn = doc.getElementById("theme-toggle");
    if (!btn) return;

    var stored = storage.getItem(key);
    if (stored === "light" || stored === "dark") {
        applyTheme(root, btn, stored);
    } else {
        var prefersLight = matchMediaFn && matchMediaFn("(prefers-color-scheme: light)");
        applyTheme(root, btn, prefersLight ? "light" : "dark");
    }

    function handler() { onThemeToggleClick(root, btn, storage, key); }
    btn.addEventListener("click", handler);
}

// ===== Timer =====
function createTimer(displayEl, perf, raf, caf) {
    if (!displayEl) return null;

    var running = false;
    var rafId = null;
    var baseStart = 0;
    var acc = 0;

    function fmt(ms) {
        ms = Math.max(0, ms);
        var totalMs = Math.floor(ms);
        var m = Math.floor(totalMs / 60000);
        var s = Math.floor((totalMs % 60000) / 1000);
        var mm = String(m).padStart(2, "0");
        var ss = String(s).padStart(2, "0");
        var mmm = String(totalMs % 1000).padStart(3, "0");
        return mm + ":" + ss + "." + mmm;
    }

    function render() {
        var now = perf.now();
        var elapsed = running ? acc + (now - baseStart) : acc;
        displayEl.textContent = fmt(elapsed);
    }

    function tick() {
        render();
        if (running) rafId = raf(tick);
    }

    function start() {
        if (running) return;
        running = true;
        baseStart = perf.now();
        rafId = raf(tick);
    }

    function stop() {
        if (!running) return;
        acc += perf.now() - baseStart;
        running = false;
        if (rafId != null) caf(rafId);
        rafId = null;
        render();
    }

    function reset() {
        acc = 0;
        if (running) baseStart = perf.now();
        render();
    }

    function getTime() {
        if (running) {
            return acc + (perf.now() - baseStart);
        }
        return acc;
    }

    // Initialize display
    displayEl.textContent = "00:00.000";

    return { start: start, stop: stop, reset: reset, getTime: getTime, get running() { return running; } };
}

// ===== Custom script dropdown =====
function initScriptDropdown(wrap, btn, list, valSpan, storage, key, win, doc) {
    if (!wrap || !btn || !list || !valSpan) return null;

    var options = Array.prototype.slice.call(list.querySelectorAll('[role="option"]'));
    var open = false;
    var activeIndex = Math.max(0, options.findIndex(function (o) { return o.getAttribute('aria-selected') === 'true'; }));

    function setSelectedByValue(value, persist) {
        if (persist === void 0) persist = true;
        var idx = options.findIndex(function (o) { return o.dataset.value === String(value); });
        if (idx === -1) return;
        options.forEach(function (o, i) { o.setAttribute('aria-selected', String(i === idx)); });
        activeIndex = idx;
        valSpan.dataset.value = options[idx].dataset.value;
        valSpan.textContent = options[idx].textContent;
        if (persist) {
            try { storage.setItem(key, valSpan.dataset.value); } catch (_) { }
        }
        // Update module state and notify listeners (no window events)
        currentScriptMode = valSpan.dataset.value;
        scriptModeListeners.forEach(function (fn) {
            try { fn(currentScriptMode); } catch (_) { }
        });
        ready();
    }

    function openList() {
        if (open) return;
        open = true;
        wrap.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        list.hidden = false;
        setTimeout(function () {
            var opt = options[activeIndex];
            if (opt) opt.focus({ preventScroll: true });
        }, 0);
    }

    function closeList() {
        if (!open) return;
        open = false;
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        list.hidden = true;
        btn.focus({ preventScroll: true });
    }

    function onButtonClick() { open ? closeList() : openList(); }
    function onButtonKeydown(e) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openList();
        }
    }
    function onOptionClick(e) {
        var opt = e.currentTarget;
        setSelectedByValue(opt.dataset.value);
        closeList();
    }
    function onOptionHover(e) {
        var opt = e.currentTarget;
        var i = options.indexOf(opt);
        if (i >= 0) activeIndex = i;
    }
    function onListKeydown(e) {
        if (e.key === 'Escape') { e.preventDefault(); closeList(); return; }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = (activeIndex + 1) % options.length;
            options[activeIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = (activeIndex - 1 + options.length) % options.length;
            options[activeIndex].focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            var opt2 = options[activeIndex];
            if (opt2) {
                setSelectedByValue(opt2.dataset.value);
                closeList();
            }
        }
    }
    function onDocClick(e) { if (!wrap.contains(e.target)) closeList(); }

    // Init from storage
    var stored = storage.getItem(key);
    if (stored && options.some(function (o) { return o.dataset.value === stored; })) {
        setSelectedByValue(stored, false);
    } else {
        setSelectedByValue(valSpan.dataset.value || 'hiragana', false);
    }

    // Wire
    btn.addEventListener('click', onButtonClick);
    btn.addEventListener('keydown', onButtonKeydown);
    options.forEach(function (opt) {
        opt.addEventListener('click', onOptionClick);
        opt.addEventListener('mousemove', onOptionHover);
    });
    list.addEventListener('keydown', onListKeydown);
    doc.addEventListener('click', onDocClick);

    return { setSelectedByValue: setSelectedByValue };
}

function clearAnswerButtons() {
    answerButtons.forEach((b) => b.classList.remove('select', 'correct', 'wrong'))
}

answerButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = btn.textContent.replaceAll('\n', '').trim();;
        const currentStorage = ganaStorage[currentScriptMode];
        const correctAnswer = questionChar.textContent
        const correctSound = currentStorage.gana[correctAnswer];

        if (state !== 'question') return;

        if (btn.classList.contains('select')) {
            if (correctSound.includes(selected)) {
                btn.classList.remove('select');
                btn.classList.add('correct');
                state = 'answered';
                timerApiGlobal.stop();
                promptBox.classList.add('ready');
                history.correctAnswers.push(true);
                history.times.push(timerApiGlobal.getTime());
            } else {
                btn.classList.remove('select');
                answerButtons.forEach((b) => {
                    const buttonSound = b.textContent.replaceAll('\n', '').trim();
                    if (correctSound.includes(buttonSound)) {
                        b.classList.add('correct');
                    }
                });
                state = 'answered';
                timerApiGlobal.stop();
                promptBox.classList.add('ready');
                btn.classList.add('wrong');
                history.correctAnswers.push(false);
                history.times.push(timerApiGlobal.getTime());
            }
            if (history.correctAnswers.length > 100) {
                history.correctAnswers.shift();
                history.times.shift();
            }
            window.localStorage.setItem('learnjp-history', JSON.stringify(history));
            console.log('History:', history);
            updateStatsBars();
        } else {
            clearAnswerButtons();
            btn.classList.add('select');
        }
    });
});

// Set option texts to 1, 2, 3, 4 and expose helper
function setOptionCharacter(values) {
    if (values.length !== 4) {
        throw new Error('Expected 4 option values');
    }
    answerBoxes.forEach((el, i) => {
        el.textContent = (i < values.length) ? String(values[i]) : '';
    });
}

function setQuestionText(text) {
    questionChar.textContent = text;
    promptBox.classList.remove('ready');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomAnswers(soundStorage, exclude) {
    const keys = Object.keys(soundStorage);
    const filtered = keys.filter(key => key !== exclude);
    const shuffled = shuffleArray(filtered);
    return shuffled.slice(0, 3);
}

function getRandomQuestion() {
    clearAnswerButtons();
    let currentStorage
    switch (currentScriptMode) {
        case 'hiragana':
            currentStorage = ganaStorage.hiragana
            break;
        // case 'katakana':
        //     currentStorage = ganaStorage.katakana
        //     break;
    }
    const randomIndex = Math.floor(Math.random() * currentStorage.gana.length);
    const answer = Object.keys(currentStorage.gana)[randomIndex];
    state = 'question';
    setQuestionText(answer);
    setOptionCharacter(shuffleArray([currentStorage.gana[answer], ...getRandomAnswers(currentStorage.sound, answer)])
    );
    timerApiGlobal.reset();
    timerApiGlobal.start();
}

promptBox.addEventListener('click', () => {
    switch (state) {
        case 'loading':
            // Do nothing
            break;
        case 'ready':
        case 'answered':
            getRandomQuestion();
            break;
    }
})

function ready() {
    promptBox.classList.add('ready');
    state = 'ready';
    clearAnswerButtons();
    setOptionCharacter(['', '', '', '']);
    questionChar.textContent = '준비';
    timerApiGlobal.stop();
    timerApiGlobal.reset();
}

// ===== Boot =====
function boot() {
    var doc = document;
    var win = window;
    var storage = window.localStorage;

    // Theme
    var mm = function (q) { return (win.matchMedia && win.matchMedia(q).matches); };
    initThemeToggle(doc, storage, mm, THEME_KEY);

    // Timer
    var timerApi = createTimer(
        doc.getElementById('elapsed'),
        win.performance,
        win.requestAnimationFrame.bind(win),
        win.cancelAnimationFrame.bind(win)
    );
    if (timerApi) {
        timerApiGlobal = timerApi;
    }

    // Dropdown
    initScriptDropdown(
        doc.querySelector('.script-select'),
        doc.getElementById('script-toggle'),
        doc.getElementById('script-list'),
        doc.querySelector('.script-select .script-value'),
        storage,
        SCRIPT_KEY,
        win,
        doc
    );

    ready()
    // Initialize stats bars from stored history
    updateStatsBars();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
