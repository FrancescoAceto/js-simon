/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let NumbersInputsTotal = [
    document.getElementById("NumberInput1"),
    document.getElementById("NumberInput2"),
    document.getElementById("NumberInput3"),
    document.getElementById("NumberInput4"),
    document.getElementById("NumberInput5"),
];

let UserNumbersEL = document.getElementById("UserNumbers");

let PlaybuttonEL = document.getElementById("playbutton");

let OutputButtonEL = document.getElementById("OutputButton");

let UserOutputEL = document.getElementById("UserOutput");

PlaybuttonEL.addEventListener("click", function () {
    UserNumbersEL.innerText = randomNumbers;
})

setTimeout(function () {
    disappearNumbers(UserNumbersEL);
}, 10000);

OutputButtonEL.addEventListener("click", function (){
    
    checknumbers (RandomNumbersArray, NumbersInputsTotal);

});

function checknumbers(UserNumbersEL, userNumbers) {
    
    let rightNumbers = [];

    for(let i = 0; i < userNumbers.length; i++) {

        if(UserNumbersEL[i] == userNumbers[i].value) {
          
            rightNumbers.push(UserNumbersEL[i]);
            
            console.log("trovato");
        }
    }

}










function disappearNumbers(UserNumbersEL) {
    UserNumbersEL.innerText = " ";
}



let RandomNumbersArray = createRandomNumbers(5);

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