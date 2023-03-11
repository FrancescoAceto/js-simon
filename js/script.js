/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let NumberInput1EL = document.getElementById("NumberInput1");
let NumberInput2EL = document.getElementById("NumberInput2");
let NumberInput3EL = document.getElementById("NumberInput3");
let NumberInput4EL = document.getElementById("NumberInput4");
let NumberInput5EL = document.getElementById("NumberInput5");

let UserNumbersEl = document.getElementById("UserNumbers");

let PlaybuttonEL = document.getElementById("playbutton");

let OutputButtonEL = document.getElementById("OutputButton");

PlaybuttonEL.addEventListener("click", function () {
    UserNumbersEl.innerText = randomNumbers;
})

setTimeout(function () {
    disappearNumbers(UserNumbersEl);
}, 10000);













function disappearNumbers(UserNumbersEL) {
    UserNumbersEL.innerText = " ";
}



createRandomNumbers(5);

function createRandomNumbers(quantity) {
    randomNumbers = [];
    for (let i = 0; i < quantity; i++) {
        randomNumbers.push(randomNumberBetween(1, 10));
        console.log(randomNumbers);
        
    }
}


function randomNumberBetween(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min)
  return random;
}