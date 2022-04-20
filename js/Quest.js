import { questions_en } from "./questions-en.js";
import { questions_nl } from "./questions-nl.js";

export default class Quest {
    constructor(root) {
        this.el = {
            start: root.querySelector(".start-btn"),
            quest: root.querySelector(".quest"),
            lang: root.querySelector(".lang")
        }

        this.interval = null;
        this.selectedQuestions = null;

        this.el.start.disabled = true;
        this.el.start.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.lang.addEventListener("change", () => {
            this.selectLanguage();
        });
    
        // console.log(this);
    }

    start() {
        if (this.selectedQuestions === null) return;
        this.el.start.disabled = true;

        let remainingSeconds = 5;

        this.interval = setInterval(() => {
            let r = Math.floor(Math.random() * this.selectedQuestions.length);
            this.el.quest.innerHTML = this.selectedQuestions[r];

            if (remainingSeconds <= 0) {
              this.el.quest.innerHTML = '<strong>' + this.selectedQuestions[r] + '</strong>';
              this.stop();
            }

            remainingSeconds--;
        }, 125);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.el.start.disabled = false;
    }

    selectLanguage() {
        switch(this.el.lang.value) {
          case 'Dutch':
            this.selectedQuestions = questions_nl;
            break;
          case 'English':
            this.selectedQuestions = questions_en;
            break;
          default:
            this.selectedQuestions = this.selectedQuestions;
            console.log("whoops");
        }

        if (this.selectedQuestions !== null) {
            this.el.start.disabled = false;
        }
    }
}
