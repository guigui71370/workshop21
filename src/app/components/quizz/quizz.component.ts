import {Component, Input, OnInit} from '@angular/core';
import {QuestionsInterface} from "../home-content/home-content.component";
import {trackByIndex} from "../../questions/trackBy";
import { shuffle } from 'lodash/fp'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  @Input() public questions: QuestionsInterface[]
  public trackByIndex = trackByIndex
  public idQuestion: number = 0
  public status: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.questions = shuffle(this.questions)
  }

  public answered() {
    if (!this.status) {
      this.status = !this.status
    }
  }

  public getQuestion(questions: QuestionsInterface[], newQuestion: boolean) {
    if (newQuestion) {
      this.idQuestion += 1;
      this.status = !this.status
    }

    return questions[this.idQuestion]
  }
}
