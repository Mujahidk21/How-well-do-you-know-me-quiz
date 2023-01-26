 var readlineSync = require('readline-sync');
 var score = 0;
var userName = readlineSync.question("may i know your name ? ")
var welMsg = ("welcome to the quiz : "+ userName+"\n");
console.log(welMsg);

function play(question,answer){
  var userAns = readlineSync.question
  (question);
  if(userAns===answer){
    console.log("Hurray ! you are right. ");
    score++;
    console.log("your score is : "+ score+"\n");
  }else{
    console.log("Oops ! you are wrong. ");
    score--;
    console.log("your score is : "+ score+"\n");
  }
}
var questions = [{
  question: "where do I live ?",
  answer:"tpt"
},{
  question: "where do I study ? ",
  answer: "svu"
},{
  question: "what's my hobby ? ",
  answer: "reading"
},{
  question: "what's my favourite food ? ",
  answer: "dosa"
},{
  question: "what's the name of my pet ? ",
  answer: "joe"
}]
   for (var i = 0; i<=questions.length; i++) {
    var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
  }