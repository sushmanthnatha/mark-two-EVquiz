
var readlineSync = require('readline-sync');

var name = readlineSync.question("May I know your name ?\n");
const print = console.log;
console.log(" ");

print('Hello '+name+' ! Welcome to EV QUIZ! \n\n');


var score = 0;
function play(question,myAnswer)
{
  
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===myAnswer.toLowerCase())
  {
    console.log("You are right 🙂 ");
    score++;
    console.log("Current score : " + score +"\n");
  } else{
    console.log("You are wrong 😒");
    score--;
    console.log("Current score : " + score+"\n");
  }
}

console.log("Your current score is : " + score);
console.log("Let's begin the quiz\n")


var questions =[
  {
    question: (`Which company has the biggest EV manufacturing plant?
    (a)Hero (b)Ather (c)Ola (d)Simple Energy\n`),
    myAnswer:"c"
  },
  {
    question:(`Which company manufactured 1st EV bike ?            
    (a)Ola (b)Revolt Motors (c)Hero (d)Srivari Motors\n`),
    myAnswer:"b"
  },
  {
    question:(`Does Ola S1 has cruise mode ?
    (a)yes (b)no\n`),
    myAnswer:"b"
  },
  {
    question:(`Most sold EV brand until mid 2020?
    (a)Hero (b)Pure EV (c)Benling India \n`),
    myAnswer:"a"
  },
  {
    question:(`Which state/UT in India does gives the higgest additional subsidy on EV ?
    (a)Delhi (b)Maharashtra (c)Gujarat (d)Rajasthan\n`),
    myAnswer:"c"
  }

];

for(var i =0; i<questions.length;i++)
{
  var start = questions[i];
  play(start.question, start.myAnswer);
}


console.log("\nYour final score is : ",score);
