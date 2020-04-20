import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../Shared/Services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private questionService : QuestionService) { }

  ngOnInit() {
     this.questionService.GetQuestions().subscribe(data => {
      console.log(data);
  });
  }

}