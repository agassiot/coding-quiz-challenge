var questions = [

    
    {
      question: "Which of the following will evaluate to true?",
      answers: ["Math.sign(x) != Math.sign(y)",
                 "!(x === y)",
                 "Infinity == 1/x && -Infinity == 1/y",
                 "!!x" ],  //1
      correct: "C",
      points: 100,
    },
    {
      question: "What will be the output of the code above?",
      answers: ["true","false","TypeError","undefined" ],
      correct: "B",
      points: 100,
    },
    {
      question: "What will be the output of the code above?", //3
      answers: ["false","0","SyntaxError","true" ],
      correct: "D",
      points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["null","undefined","true","false" ],
       correct: "C",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //5
       answers: ["ReferenceError","undefined","TypeError","SyntaxError" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["undefined","TypeError","ReferenceError","SyntaxError" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?", //7
       answers: ["undefined","NaN","TypeError","0" ],
       correct: "D",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["undefined","1","NaN","12" ],
       correct: "C",
       points: 100,
    },
    {
       question: "What will be the output of the code above?", //9
       answers: ["undefined","0","NaN","-0" ],
       correct: "B",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //10
       answers: ["undefined",`""`,"0","TypeError" ],
       correct: "B",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["false","undefined","true","{boolean: false}" ],
       correct: "C",
       points: 100,
    },
    {
       question: "What will be the output of the code above?", //12
       answers: ["andrew","ReferenceError","undefined","undeclared" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["the answer is A","the answer is B","undefined","ReferenceError" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?", //14
       answers: ["A","B","C","no output" ],
       correct: "C",
       points: 100,
    },
    {
       question: "What will be the output of the code above?", //15
       answers: ["A","B","C","no output" ],
       correct: "B",
       points: 100,
    },
    {
       question: "What will be the output of the code above?", //16
       answers: ["false","undefined","true","SyntaxError" ],
       correct: "C",
       points: 100,
    },
    {
       question: "Which of the following is a primitive data type?",    //17 
       answers: ["A","B","C","no output" ],
       correct: "B",
       points: 100,
    },
    {
       question: "Which of the following is not an object?",  //18
       answers: ["A","B","SyntaxErrror","no output" ],
       correct: "B",
       points: 100,
    },
    {
       question: "Which of the following is not a primitive data type?", //19
       answers: ["A","B","C","12" ],
       correct: "A",
       points: 100,
    },
       
    {
       question: "What will be the output of the code above?",
       answers: ["A","B","C","12" ],
       correct: "B",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //21
       answers: ["true","B","3","D" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["A","B","C","A" ],
       correct: "B",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //23
       answers: ["'what do the brackets do?'","SyntaxError","ReferenceError","undefined" ],
       correct: "C",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //24
       answers: ["TypeError","1","ReferenceError","2" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",
       answers: ["ReferenceError","TypeError","2","1" ],
       correct: "D",
       points: 100,
    },
    {
       question: "The following code will throw a reference error. Which string doesn't get logged to the console first?",
       answers: ["'do you see me?'","'What about me?'","'and me, too?'","nothing gets logged" ],                            //26
       correct: "C",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //27
       answers: ["Morpheus what is The Matrix?",
                 "ReferenceError",
                 "what is The Matrix",
                 "undefined what is The Matrix" ],
       correct: "D",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //28
       answers: ["undefined what is The Matrix",
                 "what is The Matrix",
                 "ReferenceError",
                 "Morpheus what is The Matrix?" ],
       correct: "A",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //29
       answers: ["ReferenceError",
                 "undefined what is The Matrix",
                 "what is The Matrix",
                 "Morpheus what is The Matrix?" ],
       correct: "B",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //30
       answers: ["ReferenceError",
                 "undefined what is The Matrix",
                 "what is The Matrix",
                 "Morpheus what is The Matrix?" ],
       correct: "D",
       points: 100,
    },
    {
       question: "What will be the output of the code above?",  //31
       answers: ["i: 3, i: 3, i: 3,","i: 1, i: 2, i: 3","i: 4, i: 4, i: 4, i: 4","i: 1, i: 2, i: 3, i: 4" ],
       correct: "C",
       points: 100,
    },
    {
       question: "Evaluate the time complexity of the algorithm below the comment line:",  //32
       answers: ["linear","quadratic","cubic","logarithmic" ],
       correct: "A",
       points: 100,
    }
  ]




const startButton = document.querySelector(".start-button");
const qcontainer = document.querySelector(".q-container");
const stats = document.querySelector(".stats");
const wrongAnswer = document.querySelectorAll(".wrong");
//player elements
const initialsL = document.querySelector('.initials');
const scoreRecent = document.querySelector('.score-recent');
const whiffsRecent = document.querySelector('.whiffs-recent');
const getInitials = document.querySelector('.get-initials');
const input = document.querySelector('#input');
const maingrid = document.querySelector('#maingrid');



function getPath(arg) {
    return (item)=> arg.indexOf(item)+1;
} 

var path = getPath(questions);

function setPath(x) {
    return questImgL.setAttribute('src',`./assets/images/question${x}.png`);
}

//question container elements
const questionL = document.querySelector(".question");
const articleL = document.querySelector('[name="answers"]');
const questImgL = document.querySelector(".q-img");
const answerA = document.querySelector("#A");
const answerB = document.querySelector("#B");
const answerC = document.querySelector("#C");
const answerD = document.querySelector("#D");

const choiceA = document.querySelector('[name="A"]');
const choiceB = document.querySelector('[name="B"]');
const choiceC = document.querySelector('[name="C"]');
const choiceD = document.querySelector('[name="D"]');


//player stats elements
const scoreL = document.querySelector(".score");
const whiffsL = document.querySelector(".whiffs");
const penaltyL = document.querySelector("#penalty");
const timerL =document.querySelector(".timer");
const leaderboardL = document.querySelector(".leaderboard");

var player = {
    name: "na",
    score: "na",
    whiffs: "na"
}

var intervalID;
var score = 0;
var whiffs = 0;
var q;
var timer;
    

startButton.addEventListener('click', quizStart);
    

function quizStart(){
    leaderboardL.classList.add('hidden');
    startButton.classList.add('hidden');
    qcontainer.classList.remove('hidden');
    stats.classList.remove('hidden');
    articleL.classList.remove('hidden');
    startButton.removeEventListener('click', quizStart);

    timer = crockfordTimer(120);
    scoreL.textContent = 0;
    whiffsL.textContent = 0;
    timerL.textContent = 60;
    score=0;
    whiffs=0;
    q =0;
    
    
    startTimer();
                       //set question
    newQuestion(q);
    qcontainer.addEventListener('click', handleclick);
   
   

    function startTimer(){
             intervalID = setInterval(timer.decrement, 1000)
            }

    };
    
    


    


//////// functions called inside quiz start

/////////////////////////////------------------------timer
// this patten was invented by a pretty-smart guy named Douglas in 2001

function crockfordTimer(timer){
    let t = timer;
    timerL.textContent = t;
    var timerAPI = {decrement,penalize, };
        return timerAPI;

function decrement(){
    t --;
    console.log(t);
    return (t<=0 ? endGame() : timerL.textContent = t)
    }
    
function penalize(){
    t -=5;
    console.log(t)
     return (t<=0 ?  endGame() : timerL.textContent = t);
    }

};

//////////////////////////////////////////////////////////////////
function handleclick(e){
        e.preventDefault();
       if(q == (questions.length-1)) {
        q =0;
       }
        if(e.target.id == questions[q].correct){
            score += questions[q].points;
            scoreL.textContent = score;
        } else { 
            displayPenalty();
            whiffs +=1; 
            whiffsL.textContent = whiffs;
            timer.penalize();
        }

        q++;
        newQuestion(q);
 

    };

function endGame(){
    clearInterval(intervalID);
    qcontainer.classList.add('hidden');
    stats.classList.add('hidden');
    articleL.classList.add('hidden')
    getInitials.classList.remove('hidden');
    qcontainer.removeEventListener('click', handleclick);
    getInitials.addEventListener('submit',nameSubmit);

    
};
function nameSubmit(e){
    e.preventDefault();
    player.name = input.value;
    player.score = score;
    player.whiffs = whiffs;
    localStorage.setItem('name', `${player.name}`);
    localStorage.setItem('score', `${player.score}`);
    localStorage.setItem('whiffs', `${player.whiffs}`);

    return displayLeaders();

};


function displayLeaders (){
    getInitials.removeEventListener('click', nameSubmit)
    getInitials.classList.add('hidden');
    leaderboardL.classList.remove('hidden');
    initialsL.textContent = localStorage.getItem('name');
    scoreRecent.textContent = localStorage.getItem('score');
    whiffsRecent.textContent = localStorage.getItem('whiffs');
    startButton.classList.remove('hidden');
    startButton.addEventListener('click', quizStart);

    console.log(player);
   
};

function displayPenalty(){
    penaltyL.classList.remove('hidden');
    maingrid.classList.add('penalize');
    setTimeout(()=>maingrid.classList.remove('penalize'),250);
    setTimeout(()=>penaltyL.classList.add('hidden'),1500);
}

function newQuestion(x){

    console.log(path(questions[x]));
    setPath(path(questions[x]));
    questionL.textContent = questions[x].question;
    choiceA.textContent = questions[x].answers[0];
    choiceB.textContent = questions[x].answers[1];
    choiceC.textContent = questions[x].answers[2];
    choiceD.textContent = questions[x].answers[3];
};







