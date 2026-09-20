/* BA2 week page — shared interactive behaviors. Loaded via <script src> from every week page.
   Depends on: manifest.js (window.BA2_MANIFEST) loaded first, and — on pages with exercises —
   a question-bank file (window.WEEK_QUESTIONS) loaded first too. */

/* ---------- Manifest link resolution ----------
   Pages that load this script live at different folder depths (BA1 recap at the repo root,
   the BA2 hub 2 levels down, week pages 3 levels down under ba2/study-guides/<id>/). Each page
   declares its own distance back to the repo root via <body data-root-prefix="...">, e.g.
   data-root-prefix="../../../" for a week page, or omit it entirely at the repo root (defaults to "").
   All manifest links are then built as ROOT_PREFIX + a repo-root-relative path, so one formula
   works from any depth. */
var ROOT_PREFIX = document.body.dataset.rootPrefix || '';
function manifestHrefFor(w){
  return w.href ? (ROOT_PREFIX + w.href) : (ROOT_PREFIX + 'ba2/study-guides/' + w.id + '/index.html');
}

/* ---------- Back-to-hub button ---------- */
var backBtn = document.getElementById('backBtn');
if(backBtn){ backBtn.href = ROOT_PREFIX + 'ba2/hub/index.html'; }

/* ---------- Dark mode toggle ----------
   Preference is stored in localStorage so it persists across pages/reloads; falls back to the
   OS-level prefers-color-scheme on first visit. See the html[data-theme="dark"] variable overrides
   in _shared/styles/week.css for the actual palette swap. */
(function(){
  var STORAGE_KEY = 'ba-theme';
  var toggle = document.getElementById('themeToggle');
  function applyTheme(theme){
    document.documentElement.dataset.theme = theme;
    if(toggle){
      toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  var stored = null;
  try{ stored = localStorage.getItem(STORAGE_KEY); }catch(e){}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));
  if(toggle){
    toggle.addEventListener('click', function(){
      var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try{ localStorage.setItem(STORAGE_KEY, next); }catch(e){}
    });
  }
})();

/* ---------- Language toggle (EN / AR / FA) ---------- */
var RTL_LANGS = ['ar', 'fa'];

/* Externalized-strings i18n pilot (currently week-01 only): pages that load a
   _shared/i18n/<page>.strings.js file set window.PAGE_I18N_STRINGS = { key: {en,ar,fa}, ... }
   and mark placeholders with data-i18n="key" instead of the data-lang sibling-div pattern.
   No-op on every other page (querySelectorAll finds nothing there), so this is safe to call
   unconditionally from setLang(). Falls back to English if a language is missing for a key. */
function fillI18n(lang){
  if(!window.PAGE_I18N_STRINGS) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var entry = window.PAGE_I18N_STRINGS[el.dataset.i18n];
    if(!entry) return;
    el.innerHTML = entry[lang] || entry.en || '';
  });
}

function setLang(lang){
  if(!lang) return;
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.indexOf(lang) !== -1 ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-lang]').forEach(function(el){
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  document.querySelectorAll('.langbar button[data-setlang]').forEach(function(b){
    b.classList.toggle('active', b.dataset.setlang === lang);
  });
  fillI18n(lang);
}
document.querySelectorAll('.langbar button[data-setlang]').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.dataset.setlang); });
});
/* data-i18n placeholders (unlike data-lang siblings) have no content until JS fills them in,
   so run fillI18n once at load for whichever language starts active (default "en"). */
(function(){
  var activeBtn = document.querySelector('.langbar button[data-setlang].active');
  fillI18n(activeBtn ? activeBtn.dataset.setlang : 'en');
})();

/* ---------- Tabs ---------- */
document.querySelectorAll('.tabs').forEach(function(tabgroup){
  var heads = tabgroup.querySelectorAll('.tab-btn');
  var panels = tabgroup.querySelectorAll('.tab-panel');
  heads.forEach(function(btn){
    btn.addEventListener('click', function(){
      heads.forEach(function(h){ h.classList.remove('active'); });
      panels.forEach(function(p){ p.classList.remove('active'); });
      btn.classList.add('active');
      tabgroup.querySelector('[data-panel="' + btn.dataset.tab + '"]').classList.add('active');
    });
  });
});

/* ---------- Scrollspy: highlight the sidebar link for the section nearest the top ---------- */
(function(){
  var sections = Array.prototype.slice.call(document.querySelectorAll('main.main section[id]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.sidebar nav a[href^="#"]'));
  if(!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;
  function setCurrent(id){
    navLinks.forEach(function(a){
      a.classList.toggle('current', a.getAttribute('href') === '#' + id);
    });
  }
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ setCurrent(entry.target.id); }
    });
  }, { rootMargin: '-10% 0px -80% 0px', threshold: 0 });
  sections.forEach(function(s){ observer.observe(s); });
})();

/* ---------- Exercise renderer + grading ----------
   Each exercise is authored in the page as a placeholder:
     <div class="exercise" data-question-id="welcome"></div>
   Question data comes from window.WEEK_QUESTIONS[id] = {
     answer: 'a'|'b'|'c',
     en: { q, options: [str,str,str], submit, correct, incorrect },
     ar: { ... }, fa: { ... }
   }
   Renders one question/options/submit/feedback block per available language,
   using the same [data-lang] show/hide mechanism as the rest of the page. */
(function(){
  var bank = window.WEEK_QUESTIONS || {};
  var placeholders = document.querySelectorAll('.exercise[data-question-id]');
  if(!placeholders.length) return;

  var LABELS = {
    en: { exercise: 'Exercise', submit: 'Submit', correct: 'Correct!', incorrect: 'Not quite — try again.' },
    ar: { exercise: 'تمرين', submit: 'إرسال', correct: 'إجابة صحيحة!', incorrect: 'ليست صحيحة تمامًا — حاول مرة أخرى.' },
    fa: { exercise: 'تمرین', submit: 'ارسال', correct: 'درست است!', incorrect: 'درست نیست — دوباره تلاش کن.' }
  };

  placeholders.forEach(function(box){
    var qid = box.dataset.questionId;
    var data = bank[qid];
    if(!data) return;
    box.dataset.answer = data.answer;

    var head = document.createElement('div');
    head.className = 'exercise-head';
    Object.keys(LABELS).forEach(function(lang){
      if(!data[lang]) return;
      var span = document.createElement('span');
      span.className = 'box-label';
      var inner = document.createElement('span');
      inner.dataset.lang = lang;
      if(lang === 'en') inner.classList.add('active');
      inner.textContent = LABELS[lang].exercise;
      span.appendChild(inner);
      head.appendChild(span);
    });
    box.appendChild(head);

    Object.keys(LABELS).forEach(function(lang){
      var d = data[lang];
      if(!d) return;
      var wrap = document.createElement('div');
      wrap.dataset.lang = lang;
      if(lang === 'en') wrap.classList.add('active');

      var q = document.createElement('p');
      q.className = 'exercise-q';
      q.textContent = d.q;
      wrap.appendChild(q);

      var opts = document.createElement('div');
      opts.className = 'exercise-options';
      var letters = ['a', 'b', 'c'];
      d.options.forEach(function(optText, i){
        var label = document.createElement('label');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'ex-' + qid + '-' + lang;
        input.value = letters[i];
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + optText));
        opts.appendChild(label);
      });
      wrap.appendChild(opts);

      var submitBtn = document.createElement('button');
      submitBtn.type = 'button';
      submitBtn.className = 'exercise-submit';
      submitBtn.textContent = LABELS[lang].submit;
      wrap.appendChild(submitBtn);

      var feedback = document.createElement('div');
      feedback.className = 'exercise-feedback';
      feedback.hidden = true;
      wrap.appendChild(feedback);

      submitBtn.addEventListener('click', function(){
        var checked = wrap.querySelector('input[type=radio]:checked');
        if(!checked) return;
        feedback.hidden = false;
        if(checked.value === data.answer){
          feedback.className = 'exercise-feedback correct';
          feedback.innerHTML = '&#10003; ' + LABELS[lang].correct;
        } else {
          feedback.className = 'exercise-feedback incorrect';
          feedback.innerHTML = '&#10007; ' + LABELS[lang].incorrect;
        }
      });

      box.appendChild(wrap);
    });
  });
})();

/* ---------- Course-contents drawer ---------- */
(function(){
  var btn = document.getElementById('contentsBtn');
  var panel = document.getElementById('contentsPanel');
  var overlay = document.getElementById('contentsOverlay');
  var closeBtn = document.getElementById('contentsClose');
  var list = document.getElementById('contentsList');
  if(!btn || !panel || !overlay) return;

  // Draft/comparison pages (ids ending in "-v2") are internal-only and never listed here.
  var manifest = ((window.BA2_MANIFEST && window.BA2_MANIFEST.weeks) || []).filter(function(w){ return w.id.slice(-3) !== '-v2'; });
  var currentId = document.body.dataset.weekId;

  manifest.forEach(function(w){
    var li = document.createElement('li');
    if(w.published){
      var a = document.createElement('a');
      a.href = manifestHrefFor(w);
      a.textContent = w.title;
      if(w.id === currentId){ a.classList.add('current'); }
      li.appendChild(a);
    } else {
      var row = document.createElement('span');
      row.className = 'soon';
      var label = document.createElement('span');
      label.textContent = w.title;
      var badge = document.createElement('span');
      badge.className = 'soon-badge';
      badge.textContent = 'Soon';
      row.appendChild(label);
      row.appendChild(badge);
      li.appendChild(row);
    }
    list.appendChild(li);
  });

  function openPanel(){ panel.hidden = false; overlay.hidden = false; }
  function closePanel(){ panel.hidden = true; overlay.hidden = true; }
  btn.addEventListener('click', openPanel);
  overlay.addEventListener('click', closePanel);
  closeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closePanel(); }
  });
})();

/* ---------- Prev/next week navigation ---------- */
(function(){
  var nav = document.getElementById('weekNav');
  if(!nav) return;
  var allWeeks = (window.BA2_MANIFEST && window.BA2_MANIFEST.weeks) || [];
  // Draft/comparison pages (ids ending in "-v2") are excluded from prev/next ordering entirely.
  var manifest = allWeeks.filter(function(w){ return w.id.slice(-3) !== '-v2'; });
  var currentId = document.body.dataset.weekId;
  // A "-v2" draft page navigates as if it were its non-v2 counterpart.
  var navId = currentId && currentId.slice(-3) === '-v2' ? currentId.slice(0, -3) : currentId;
  var idx = manifest.findIndex(function(w){ return w.id === navId; });
  if(idx === -1) return;
  var prev = idx > 0 ? manifest[idx - 1] : null;
  var next = idx < manifest.length - 1 ? manifest[idx + 1] : null;

  function makeBtn(entry, dir){
    if(!entry){
      var spacer = document.createElement('div');
      spacer.className = 'week-nav-spacer';
      return spacer;
    }
    var dirLabelEn = dir === 'prev' ? '&larr; Previous' : 'Next &rarr;';
    if(entry.published){
      var a = document.createElement('a');
      a.className = 'week-nav-btn ' + dir;
      a.href = manifestHrefFor(entry);
      a.innerHTML = '<span class="wn-dir">' + dirLabelEn + '</span><span class="wn-label">' + entry.title + '</span>';
      return a;
    } else {
      var span = document.createElement('span');
      span.className = 'week-nav-btn ' + dir + ' soon';
      span.innerHTML = '<span class="wn-dir">' + dirLabelEn + '</span><span class="wn-label">' + entry.title + ' &#183; coming soon</span>';
      return span;
    }
  }
  nav.appendChild(makeBtn(prev, 'prev'));
  nav.appendChild(makeBtn(next, 'next'));
})();

/* ---------- Copy-to-clipboard for code blocks ----------
   Each code block is authored as:
     <div class="code-block"><pre><code>SELECT ...</code></pre><button class="code-copy-btn" type="button">Copy</button></div>
   Harmless no-op on pages without any .code-block elements. */
document.querySelectorAll('.code-block').forEach(function(block){
  var btn = block.querySelector('.code-copy-btn');
  var code = block.querySelector('code');
  if(!btn || !code) return;
  var originalLabel = btn.textContent;
  btn.addEventListener('click', function(){
    var text = code.textContent;
    function showCopied(){
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(function(){
        btn.textContent = originalLabel;
        btn.classList.remove('copied');
      }, 1500);
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(showCopied).catch(function(){});
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try{ document.execCommand('copy'); showCopied(); }catch(e){}
      document.body.removeChild(ta);
    }
  });
});

/* ---------- Discount-slider demo (week-00 specific; harmless no-op on pages without it) ---------- */
(function(){
  var slider = document.getElementById('discountSlider');
  if(!slider) return;
  var arDigits = '٠١٢٣٤٥٦٧٨٩';
  var faDigits = '۰۱۲۳۴۵۶۷۸۹';
  function toDigits(n, table){
    return String(n).split('').map(function(d){ return table[parseInt(d, 10)]; }).join('');
  }
  slider.addEventListener('input', function(){
    var v = parseInt(slider.value, 10);
    document.getElementById('discountReadout').textContent = v + '%';
    // toy peak-shaped model, peak near 22%
    var x = v / 100;
    var peak = 0.22;
    var val = Math.max(0, 100 - Math.pow((x - peak) * 140, 2));
    val = Math.round(val);
    document.getElementById('revenueBar').style.width = val + '%';
    var enOut = document.getElementById('revenueOutEn');
    var arOut = document.getElementById('revenueOutAr');
    var faOut = document.getElementById('revenueOutFa');
    if(enOut) enOut.textContent = val + '%';
    if(arOut) arOut.textContent = toDigits(val, arDigits) + '٪';
    if(faOut) faOut.textContent = toDigits(val, faDigits) + '٪';
  });
})();
