let qu; 
let lang;
let quest = [];

window.onload = function init() {
  document.getElementById('start').disabled = true;
  lang = document.getElementById('lang');
  
  qu = document.getElementById('question');
  qu.innerText = 'Welcome at TeaTopics! Choose a language to start.';
}

function start() {
  // TODO: animation of options in quest with random(false)

  random(true);
}

function random(bold) {
  let r = Math.floor(Math.random() * quest.length);
  if (bold) {
    qu.innerHTML = '<strong>' + quest[r] + '</strong>';
  } else {
    qu.innerHTML = quest[r];
  }
}

function selectLanguage() {
  switch(lang.value) {
    case 'Dutch':
      quest = questions_nl;
      break;
    case 'English':
      quest = questions_en;
      break;
    default:
      quest = quest;
  }

  document.getElementById('start').disabled = false;
}
