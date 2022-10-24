const startButton = document.querySelector(".start-button");
const qcontainer = document.querySelector(".q-container");
const stats = document.querySelector(".stats");
const wrongAnswer = document.querySelectorAll(".wrong");
//player elements
const initialsL = document.querySelector('.initials');
const scoreRecent = document.querySelector('.score-recent');
const qImg = document.querySelector('.q-img')
const whiffsRecent = document.querySelector('.whiffs-recent');
const getInitials = document.querySelector('.get-initials');
const input = document.querySelector('#input');
const maingrid = document.querySelector('#maingrid');




//question container elements
const questionL = document.querySelector(".question");
const answerA = document.querySelector("#A");
const answerB = document.querySelector("#B");
const answerC = document.querySelector("#C");
const answerD = document.querySelector("#D");

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
///////////////////////////////////-------------------------questions
const questions = [

    {
       question: "correct answer is 3",
       answers: ["A","B","3","D" ],
       correct: "C",
       points: 25
    },

    {
       question: "correct answer is B",
       answers: ["A","B","C","A" ],
       correct: "B",
       points: 100
    },

    {
       question: "correct answer is 12",
       answers: ["A","B","C","12" ],
       correct: "D",
       points: 100
    },
    {
        question: "correct answer is 3",
        answers: ["A","B","3","D" ],
        correct: "C",
        points: 25
     },
      {
        question: "correct answer is B",
        answers: ["A","B","C","A" ],
        correct: "B",
        points: 100
     },
     {
        question: "correct answer is 12",
        answers: ["A","B","C","12" ],
        correct: "D",
        points: 100
     },
     {
        question: "correct answer is 3",
        answers: ["A","B","3","D" ],
        correct: "C",
        points: 25
     },
 
     {
        question: "correct answer is B",
        answers: ["A","B","C","A" ],
        correct: "B",
        points: 100
     },
 
     {
        question: "correct answer is 12",
        answers: ["A","B","C","12" ],
        correct: "D",
        points: 100
     },
     {
         question: "correct answer is 3",
         answers: ["A","B","3","D" ],
         correct: "C",
         points: 25
      },
       {
         question: "correct answer is B",
         answers: ["A","B","C","A" ],
         correct: "B",
         points: 100
      },
      {
         question: "correct answer is 12",
         answers: ["A","B","C","12" ],
         correct: "D",
         points: 100
      }
   ]

/////////////////////////////////--------------------------end questions

    

startButton.addEventListener('click', quizStart);
    

function quizStart(){
    leaderboardL.classList.add('hidden');
    startButton.classList.add('hidden');
    qcontainer.classList.remove('hidden');
    stats.classList.remove('hidden');
    qImg.classList.remove('hidden');
    startButton.removeEventListener('click', quizStart);

    timer = crockfordTimer(60);
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
    qImg.classList.add('hidden')
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

    questionL.textContent = questions[x].question;
    answerA.textContent = questions[x].answers[0];
    answerB.textContent = questions[x].answers[1];
    answerC.textContent = questions[x].answers[2];
    answerD.textContent = questions[x].answers[3];
    
};

