/* Student-number entry gate — shared across every study-guide page (the hub has its own inline
   version of this in ba2/hub/index.html instead of this popup).
   This is a soft deterrent + personalization touch, NOT real access control: the full roster
   ships to every visitor's browser in students.json, so anyone using dev tools can read it or
   bypass this check. It's meant to keep casual visitors out and greet recognized students by name,
   not to withstand a determined bypass attempt.
   Depends on: <body data-root-prefix="..."> (same convention as _shared/scripts/week.js) so
   students.json and the localStorage flag resolve correctly from any folder depth. */
(function(){
  var STORAGE_KEY = 'ba-student';
  var ROOT_PREFIX = document.body.dataset.rootPrefix || '';

  function getStored(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    }catch(e){ return null; }
  }

  function store(student){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(student)); }catch(e){}
  }

  function showGreeting(name){
    // The greeting chip only shows on the hub (pages without a .topbar-start, i.e. the back/contents
    // button row used by study-guide pages) — the gate check itself still runs everywhere.
    if(document.querySelector('.topbar-start')) return;
    var chip = document.createElement('div');
    chip.className = 'gate-greeting gate-greeting-standalone';
    chip.textContent = 'Welcome, ' + name;
    document.body.appendChild(chip);
  }

  function buildOverlay(onSubmit){
    var overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML =
      '<div class="gate-box">' +
        '<div class="gate-title">Enter your student number</div>' +
        '<div class="gate-sub">This course is for enrolled students only.</div>' +
        '<input type="text" class="gate-input" inputmode="numeric" autocomplete="off" placeholder="Student number">' +
        '<button type="button" class="gate-submit">Continue</button>' +
        '<div class="gate-error" hidden>That number isn’t recognized. Please try again.</div>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.classList.add('gate-locked');

    var input = overlay.querySelector('.gate-input');
    var submitBtn = overlay.querySelector('.gate-submit');
    var errorEl = overlay.querySelector('.gate-error');

    function attempt(){
      var value = input.value.trim();
      if(!value) return;
      var ok = onSubmit(value);
      if(ok){
        document.body.classList.remove('gate-locked');
        overlay.remove();
      } else {
        errorEl.hidden = false;
        input.value = '';
        input.focus();
      }
    }

    submitBtn.addEventListener('click', attempt);
    input.addEventListener('keydown', function(e){
      if(e.key === 'Enter') attempt();
    });
    input.focus();
  }

  function showLoadError(){
    var overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML =
      '<div class="gate-box">' +
        '<div class="gate-title">Couldn’t load the student list</div>' +
        '<div class="gate-sub">Please refresh the page. If this keeps happening, contact your instructor.</div>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.classList.add('gate-locked');
  }

  var stored = getStored();

  fetch(ROOT_PREFIX + '_shared/students.json')
    .then(function(res){ return res.json(); })
    .then(function(data){
      var roster = (data && data.students) || [];
      function findById(id){
        for(var i = 0; i < roster.length; i++){
          if(roster[i].id === id) return roster[i];
        }
        return null;
      }

      if(stored && findById(stored.id)){
        showGreeting(stored.name);
        return;
      }

      buildOverlay(function(value){
        var match = findById(value);
        if(!match) return false;
        store(match);
        showGreeting(match.name);
        return true;
      });
    })
    .catch(showLoadError);
})();
