const startButton = document.querySelector(".start-button");
const qcontainer = document.querySelector(".q-container");
const stats = document.querySelector(".stats");
const wrongAnswer = document.querySelectorAll(".wrong");
const startImage = document.querySelector('#start-image');

//question container elements
const questionL = document.querySelector("#question");
const answerA = document.querySelector("#A");
const answerB = document.querySelector("#B");
const answerC = document.querySelector("#C");
const answerD = document.querySelector("#D");

//player stats elements
const scoreL = document.querySelector("#score");
const whiffsL = document.querySelector("#whiffs");
const penaltyL = document.querySelector("penalty");
const timerL =document.querySelector("#timer");
const leaderboardL = document.querySelector("leaderboard");

var timerID;


var score = 0;
var whiffs = 0;


    
startImage.addEventListener('click', function(){
    var t=60;
    timerID = setInterval(startTimer,1000,t)
});

startButton.addEventListener('click', quizStart);
    

function quizStart(){
    startButton.classList.add('hidden');
    qcontainer.classList.remove('hidden');
    stats.classList.remove('hidden');
    scoreL.textContent = 0;
    whiffsL.textContent = 0;
    
    
    let q =0;                   //set question
    newQuestion(q);
    qcontainer.addEventListener('click', function(e){
        e.preventDefault();
        console.log("target  ", e.target.id == questions[q].correct);                              //test
     
        if(e.target.id == questions[q].correct){
            score += questions[q].points;
            scoreL.textContent = score;
        } else { 
            t -= 5;
            whiffs +=1; 
            whiffsL.textContent = whiffs;}
        q++;
        newQuestion(q);

    });
}
///////////////////////////////////////////// functions called inside quiz start

function endGame(x){
    clearInterval(x);
    startButton.classList.remove('hidden');
    qcontainer.classList.add('hidden');
    stats.classList.add('hidden');
    let newPlayer = {
        name: 'player!',
        scoreTotal: score,
        whiffsTotal: whiffs
    };
    
};

function displayLeaders (player){
    localStorage.setItem(gameStats, player);
    console.log(player);
    score=0;
    whiffs=0;
};

function startTimer(x){
    if(!!x){
        timerL.textContent = x;
        x--;
        
        console.log(x);
        return t=x;

    } else{
        
        endGame(timerID);
    }

};

function newQuestion(q){

    questionL.textContent = questions[q].question;
    answerA.textContent = questions[q].answers[0];
    answerB.textContent = questions[q].answers[1];
    answerC.textContent = questions[q].answers[2];
    answerD.textContent = questions[q].answers[3];
    
};

/////////////////////////////////////////  array of question cards ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
       correct: "B",
       points: 100
    }
   ]