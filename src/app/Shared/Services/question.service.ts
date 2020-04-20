import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({

    providedIn : 'root'
})
export class QuestionService{

    private _jsonURL = '/assets/quiz.json';

    constructor(private http: HttpClient) {
        // this.GetQuestions().subscribe(data => {
        //     console.log(data);
        // });
    }

    public GetQuestions(): Observable<any> {
        return this.http.get(this._jsonURL);
    }
    
}