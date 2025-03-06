// min & max for generating casual numbers 
const minNumber = 1;
const maxNumber = 50;
// array with casual numbers 
const casualArray = generateRandomNumbers(minNumber, maxNumber);
let timerCount = 10;

const numbersListElement = document.getElementById("numbers-list");
const countDownElement = document.getElementById("countdown");
const formElement = document.getElementById("answers-form");
console.log(formElement);
console.log(countDownElement)

// Stampo in console i numeri casuali generati 
for(i=0; i < casualArray.length; i++){
    const currentNumber = casualArray[i];
    const pageCurrentNumber = document.createElement("li");
    pageCurrentNumber.innerText = currentNumber;
    numbersListElement.append(pageCurrentNumber);
}


const timerInterval = setInterval(function(){
    countDownElement.innerText = timerCount;
    console.log(timerCount);
    console.log(countDownElement);
    timerCount--;
    if(timerCount === 0){
        countDownElement.innerText = 0;
        numbersListElement.classList.replace("d-flex", "d-none");
        formElement.classList.remove("d-none");
        clearInterval(timerInterval);
    }
}, 1_000);













// Functions 




function generateRandomNumbers (min, max){
    const arrayNumbers = [];
    for(i=0; i<5; i++){
        const randomNum = Math.floor((Math.random() * max + min) - min);
        arrayNumbers.push(randomNum);
    }
    
    return arrayNumbers;
}


