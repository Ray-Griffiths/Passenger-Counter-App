// document.getElementById("count-el").innerText = 5

// let count = 0;

// let myAge = 30;

// console.log(myAge);

/*let myAge = 30;
let humanDogRatio = 5;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge); 

let bonusPoints = 50;

bonusPoints = bonusPoints - 25; 


function increment() {
  console.log("The button was clicked");
  
}
let count = 0; 

let lapsCompleted = 0;

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}
incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted); */

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save(){
  
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
  
}
save();












