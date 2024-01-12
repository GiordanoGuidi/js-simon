console.log('hello world')

//# RECUPERO GLI ELEMENTI
const numberElement = document.querySelector('.number-element');
console.log(numberElement)
const totalRandomNumbers = 5;
const arrayRandomNumbers = [];
const inputElement = document.querySelectorAll('input')
console.log('sono gli input', inputElement)

//#FUNZIONE PER GENERARE NUMERI RANDOM
const generateRandomNumber = (min,max,randomNumbers)=>{
    while(arrayRandomNumbers .length< totalRandomNumbers){
        let randomNumber =Math.floor(Math.random() * max - min + 1) + min;
        if(!arrayRandomNumbers.includes(randomNumber))
        arrayRandomNumbers.push(randomNumber);

    }
    return arrayRandomNumbers;
}


//# FUNZIONE PER STAMPARE IN PAGINA I NUMERI RANDOM
const numberPrinter = ()=>{
    for(let i = 0; i < arrayRandomNumbers.length ; i++ ){
        numberElement.innerText += `  ${arrayRandomNumbers[i]},` ;
        console.log('sono le i', arrayRandomNumbers[i])
    }
    console.log(numberElement)
}

//GENERO 5 NUMERI RANDOM
(generateRandomNumber(1,100,totalRandomNumbers));

//STAMPO IN PAGINA I NUMERI
numberPrinter();


//# FUNZIONE PER FAR SPARIRE I NUMERI
const removeNumbers = ()=>{
    numberElement.style.display='none'
}

// FACCIO VARIABILE TEMPO IN SECONDI
const timer = 2 * 1000;

//CREO TIMER PER ATTIVAZIONE FUNZIONE
setTimeout(function(){
    removeNumbers();
},timer);

let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
let fourthNumber = 0;
let fifthNumber = 0;

//# CREO FUNZIONE CHE MOSTRA I TAG INPUT
const showInput = ()=>{
    inputElement.forEach(function(input){
        input.classList.remove('d-none');
        console.log('eccolliiii', inputElement)
    })
}

//# CREO FUNZIONE CHE CHIEDE I NUMERI ALL'UTENTE
const userAnswer = []
const askNumbers = ()=>{
    //MOSTRO GLI INPUT ELEMENT
    showInput();
    // CHIEDO I NUMERI ALL'UTENTE
    
    // firstNumber = parseInt(prompt('dimmi il primo numero', 1))
    // secondNumber = parseInt(prompt('dimmi il secondo numero', 2))
    // thirdNumber = parseInt(prompt('dimmi il terzo numero', 3))
    // fourthNumber = parseInt(prompt('dimmi il quarto numero', 4))
    // fifthNumber = parseInt(prompt('dimmi il quinto numero', 5))
    userAnswer.push(firstNumber,secondNumber,thirdNumber,fourthNumber,fifthNumber);
    console.table('risposte utente' ,userAnswer)
    return userAnswer;
    
}
// CREO TIMER PIU' LUNGO DEL PRECEDENTE PER ATTIVARE FUNZIONE
setTimeout(function(){
    askNumbers();
    //ARRAY NUMERI CORRETTI
    const correctNumbers = [];
    for(let i = 0; i < arrayRandomNumbers.length; i++){
        if(arrayRandomNumbers[i] === userAnswer[i]){
            // INSERISCO IN CORRECT NUMBERS I NUMERI CHE COMBACIANO
            correctNumbers.push(userAnswer[i])
            console.table('sono i numeri corretti',correctNumbers)
            numberElement.style.display='block'

        }
        numberElement.innerHTML= `i numeri corretti sono: <strong>${correctNumbers}</strong>`;
    }
},timer + 10)







