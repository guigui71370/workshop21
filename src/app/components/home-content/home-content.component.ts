import {Component, OnInit} from '@angular/core';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import { QuestionsService} from "../../questions/questions.service";
import {Observable } from "rxjs";

export interface QuestionsInterface {
  _id: string,
  question: string,
  reponses: {
    [rep: string]: boolean
  }
}

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;
  public questions$: Observable<QuestionsInterface[]>

  constructor(public questionsService: QuestionsService) {
    this.questions$ = questionsService.GetXhrQuestions()
  }

  ngOnInit() {

  }

}
