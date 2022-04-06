let lang;
let stop;
let isStopped = false;
let choice = 0;
let quest = ['Welcome at TeaTopics! Choose a language to start.'];
let emptyState = 'Choose a language';
let tea;

function preload() {
  tea = loadImage('cup-of-tea.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  
  lang = createSelect();
  lang.position(width - 150, 10);
  lang.option(emptyState);
  lang.disable(emptyState);
  lang.selected(emptyState);
  
  lang.option('Dutch');
  lang.option('English');
  lang.changed(selectLang);
}

function draw() {
  background(255);
  textFont('Verdana', 16);
  textStyle(NORMAL);
  
  if (!isStopped) {
    choice = int(random(quest.length))
  } else {
    if (lang.value() != emptyState) {
      textSize(20);
      textStyle(BOLD);
    }
  }
    
  textAlign(CENTER);
  text(quest[choice], width/2, height/2 - 50);

  tint(255, 55);
  image(tea, width/2 - 115, height/2 - 300, 250, 250);
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
  
  if (!stop) {
    stop = createButton('Stop - Start');
    stop.center();
    stop.mousePressed(stopMe)
  }

  isStopped = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  lang.position(width - 150, 10);
  if (stop) {
    stop.center();
  }
}