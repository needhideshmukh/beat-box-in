const score = document.querySelector(".score");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector("button .play");
const cursor = document.querySelector(".cursor img");
const hole1 = document.querySelector(".hole1");
const hole2 = document.querySelector(".hole2");
const hole3 = document.querySelector(".hole3");
const hole4 = document.querySelector(".hole4");
const hole5 = document.querySelector(".hole5");
const hole6 = document.querySelector(".hole6");
const hole7 = document.querySelector(".hole7");
const hole8 = document.querySelector(".hole8");
const hole9 = document.querySelector(".hole9");
const counter = document.querySelector(".counter");
const gameOver1 = document.querySelector(".gameOver");
const finalScore = document.querySelector(".finalScore");




// for cursor
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease-out";

    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});

function startGameNow(){
   timer();
randomBox();
}

// playBtn.addEventListener("click", () => {
//     playBtn.style.display = "none";
//     playBtn.style.display = "inline-block";

let hole;
let points = 0;
const mole = document.querySelector(".box");
let moleRandom = Array[Math.floor(Math.random() * Array.length)];

function randomBox() {
  let Array = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];
     setInterval(() => {
    let randomB = Math.floor(Math.random() * Array.length);
    let moleRandom = Array[randomB];
    var a = moleRandom.classList.add("show");
     moleRandom.addEventListener("click",hit);
    setInterval(()=>{
        var b = moleRandom.classList.remove("show");
        //  moleRandom.addEventListener("click",hit);
    },1000)
  }, 2000);
}

var hitPosition = moleRandom;

function hit(){
  points++;
 var pointsScored = document.querySelector(".score");
 pointsScored.innerHTML ="score : " + points;

}



const startGame = setInterval(() => {
  let boxImg = document.createElement("img");
  boxImg.setAttribute("src", "gameImages/mole.png");
  boxImg.setAttribute("class", "box");
  boxImg.classList.remove("boxImg");

  setTimeout(() => {
    boxImg.classList.remove("boxImg");
  }, 600);
}, 700);




// function gameOver(){
//   window.querySelector("body").finalScore.innerHTML= style.gameOver + points;
// }

 
function timer(){
  var timer1 = 30;
  
 var timerrrrrr = setInterval(() => {
    var timerrr =  timer1--;
    if(timerrr === 0){
      clearInterval(timerrrrrr);
           finalScore.innerHTML = points;points
    gameOver1.classList.remove("hide");
    }
    counter.innerHTML= timerrr;
  }, 1000);


}



// }
// )

// const hole = document.querySelectorAll('.hole');
// const scoreBoard = document.querySelectorAll('.score');
// const box = document.querySelectorAll('.box');
// let lastHole;
// let timeUp = false;
// let score = 0;

// function yourTime (min, max){
//    return Math.floor(Math.random() * (max - min) + min); //  to properly generate a random integer in a set interval this formula
// }

// function RandomHole(holes){
// const index = math.floor(math.random)* hole.length;
// const hole = holes[index];

// if(hole === RandomHole){
//     return RandomHole(holes)
// }

// lastHole = hole;
// return hole;
// }

// function pop(){
//     const time = yourTime (500, 1000); //random time for which box will pop up
//     consthole =  RandomHole(holes); // random block
//     hole.classList.add('up');

// setTimeout(() =>{
// hole.classList.remove('up');

// if(!timeUp){
// pop();
// }
// }, time);
// }

// function startGame(){
//     scoreBoard.textContent = 0;
//     timeUp = false;
//     score = 0;
//     pop();
//     setTimeout(() => timeUp = true, 15000)
// }