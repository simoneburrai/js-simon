// min & max for generating casual numbers 
const minNumber = 1;
const maxNumber = 50;
// array with casual numbers 
const casualArray = generateRandomNumbers(minNumber, maxNumber);
// Timer count 
let timerCount = 1;

// HTML Elements 
const numbersListElement = document.getElementById("numbers-list");
const countDownElement = document.getElementById("countdown");
const formElement = document.getElementById("answers-form");
const instructionsElement = document.getElementById("instructions");
const instructions2Element = document.getElementById("instructions2");
const buttonElement = document.querySelector("button");
const messageElement = document.getElementById("message");


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
    // stampo messaggio dei numeri indovinati 
   
    // creo un array di numeri vuoto 
    const userNumbers = [];
    // prendo tutti gli input dall'HTML 
    const inputElements = document.querySelectorAll("input");
    // per ogni input prendo il valore e lo inserisco in un array 
    for(i=0; i<inputElements.length; i++){
        userNumbers.push(parseInt(inputElements[i].value));
    }

    // creo una variabile, contenente l'array dei valori uguali tra i due array
    const result = twoArraysValuesControl(userNumbers, casualArray);
    if(result.length !== 0){
        messageElement.classList.replace("text-danger", "text-success")
        messageElement.innerText = "I numeri indovinati sono ";
        messageElement.append(`(${result})`);
        
    }else {
        messageElement.classList.replace("text-succcess", "text-danger")
        messageElement.innerText = "Hai inserito valori uguali, mettere tutti numeri diversi";
    }
    
    
    // Se l'array non è vuoto cambio il colore del messaggio in verde 
   
    // Aggiungo al messaggio i numeri azzeccati 
   
});










// -------------------- FUNCTIONS ---------------------------


// Funzione che genera un array con 5 numeri casuali
//Se ci sono numeri uguali non inserirlo all'interno dell'array e aumenta il numero di iterazioni 

function generateRandomNumbers (min, max){
    const arrayNumbers = [];
    let howManyNumbersGenerated = 5;
    for(i=0; i < howManyNumbersGenerated; i++){  
        const randomNum = Math.ceil((Math.random() * max - min) + min);
        if(!(arrayNumbers.includes(randomNum))){
        arrayNumbers.push(randomNum);
        }else {
            howManyNumbersGenerated++;
        }
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
    for(let i=0; i < arr.length; i++){
        if(arr2.includes(arr[i])){
            equalValuesArray.push(arr[i]);
        }
    }
    return equalValuesArray;
}


// // Funzione per controllare se gli elementi all'interno di un array sono uguali 
// function equalElementsInArray (arr) {
//     for(i=0; i < arr.length; i++){
//         for(a = arr.length; a > 0; a++){
//            if(i !== a){
//                 if (arr[i] === arr[a]){
//                     return false;
//                 }else {
//                     return true;
//                 }
//            }
//         }
//     }
// }