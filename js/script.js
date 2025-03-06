// min & max for generating casual numbers 
const minNumber = 1;
const maxNumber = 50;
// array with casual numbers 
const casualArray = generateRandomNumbers(minNumber, maxNumber);
// Timer count 
let timerCount = 3;

arrayProva = [3, 2, 7, 8, 9];

const userNumbers = [];

// HTML Elements 
const numbersListElement = document.getElementById("numbers-list");
const countDownElement = document.getElementById("countdown");
const formElement = document.getElementById("answers-form");
const instructionsElement = document.getElementById("instructions");
const instructions2Element = document.getElementById("instructions2");
const buttonElement = document.querySelector("button");

// Stampo in console i numeri casuali generati 
for(i=0; i < casualArray.length; i++){
    const currentNumber = casualArray[i];
    const pageCurrentNumber = document.createElement("li");
    pageCurrentNumber.innerText = currentNumber;
    numbersListElement.append(pageCurrentNumber);
}

// timer interval function 
const timerInterval = setInterval(intervalCounter, 1_000);

// Form Event listener 
formElement.addEventListener("submit", function(event){
    event.preventDefault();
    const inputElements = document.querySelectorAll("input");
    for(i=0; i<inputElements.length; i++){
        userNumbers.push(parseInt(inputElements[i].value));
    }
    console.log(userNumbers);
    console.log(casualArray);
    console.log(twoArraysValuesControl(userNumbers, casualArray));
});










// -------------------- FUNCTIONS ---------------------------


// Funzione che genera un array con 5 numeri casuali 

function generateRandomNumbers (min, max){
    const arrayNumbers = [];
    for(i=0; i<5; i++){
        const randomNum = Math.floor((Math.random() * max + min) - min);
        arrayNumbers.push(randomNum);
    }
    
    return arrayNumbers;
}


// Counter from 10 to 0 interval function 
function intervalCounter (){
    countDownElement.innerText = timerCount;
    timerCount--;
    if(timerCount === 0){
        countDownElement.innerText = 0;
        // all display and not display elements settings 
        numbersListElement.classList.replace("d-flex", "d-none");
        formElement.classList.remove("d-none");
        instructionsElement.classList.add("d-none");
        instructions2Element.classList.remove("d-none");
        clearInterval(timerInterval);
    }
}




// Funzione per controllare due array se hanno valori uguali e inserirli in un nuovo array
function twoArraysValuesControl (arr, arr2){
    const equalValuesArray = [];
    console.log("Questo è l'array dell'utente", arr);
    console.log("Questo è l'array casuale", arr2);
    for(let i=0; i < arr.length; i++){
        if(arr2.includes(arr[i])){
            equalValuesArray.push(arr[i]);
        }
    }
    return equalValuesArray;
}
