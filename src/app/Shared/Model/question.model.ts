export class question{

    Id : number;
    question : string;
    options : string[];
    answer : string;


    constructor(Id : number, ques : string, quesOptions :string[], answer : string )
    {
        this.Id = Id;
        this.question = ques;
        this.options = quesOptions;
        this.answer = answer;
      
    }
}