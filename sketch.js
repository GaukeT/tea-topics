let lang;
let stop;
let isStopped = false;
let choice = 0;
let quest = ['Welcome at TeaTopics! Choose a language to start with...'];
let emptyState = 'Choose an option';

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  
  lang = createSelect();
  lang.position(width - 140, 10);
  lang.option(emptyState);
  lang.disable(emptyState);
  lang.selected(emptyState);
  
  lang.option('Dutch');
  lang.option('English');
  lang.changed(selectLang);
  
  stop = createButton('Stop / Start');
  stop.center();
  stop.mousePressed(stopMe)
}

function draw() {
  background(255);
  textFont('Verdana', 12);
  textStyle(NORMAL);
  
  if (!isStopped) {
    choice = int(random(quest.length))
  } else {
    if (lang.value() != emptyState) {
      textSize(18);
      textStyle(BOLD);
    }
  }
    
  textAlign(CENTER);
  text(quest[choice], width/2, height/2 - 50);
}

function stopMe() {
  isStopped = !isStopped;
}

function selectLang() {
  switch(lang.value()) {
  case 'Dutch':
    quest = questions_nl;
    break;
  case 'English':
    quest = questions_en;
    break;
  default:
    quest = quest;
  }
  
  isStopped = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  lang.position(width - 140, 10);
  stop.center();
}