/* ── Nav ── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('sidenav');
  const overlay = document.getElementById('overlay');
  if (toggle && nav) {
    const open  = () => { nav.classList.add('open');  overlay && overlay.classList.add('show'); };
    const close = () => { nav.classList.remove('open'); overlay && overlay.classList.remove('show'); };
    toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
    overlay && overlay.addEventListener('click', close);
  }
})();

/* ── Accordion ── */
document.querySelectorAll('.acc-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.nextElementSibling.classList.toggle('open', !expanded);
  });
});

/* ── localStorage helpers ── */
const store = {
  get: (k, fallback = null) => {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

/* ── Checklist persistence ── */
function initChecklist(namespace) {
  const saved = store.get('checklist:' + namespace, {});
  const boxes = document.querySelectorAll('.check input[type=checkbox]');
  const label = document.getElementById('progLabel');
  const fill  = document.getElementById('progFill');

  boxes.forEach(b => {
    if (saved[b.dataset.id]) b.checked = true;
    b.addEventListener('change', () => {
      saved[b.dataset.id] = b.checked;
      store.set('checklist:' + namespace, saved);
      updateBar();
    });
  });

  function updateBar() {
    const total = boxes.length, done = [...boxes].filter(b => b.checked).length;
    if (label) label.textContent = `${done} of ${total} complete`;
    if (fill)  fill.style.width  = total ? (done / total * 100) + '%' : '0%';
  }
  updateBar();

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    boxes.forEach(b => { b.checked = false; });
    store.set('checklist:' + namespace, {});
    updateBar();
  });
}

/* ── Notes persistence ── */
function initNotes(namespace) {
  document.querySelectorAll('textarea[data-note]').forEach(ta => {
    const key = 'note:' + namespace + ':' + ta.dataset.note;
    ta.value = store.get(key, '');
    ta.addEventListener('input', () => store.set(key, ta.value));
  });
}
