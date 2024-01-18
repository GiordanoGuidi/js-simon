
//# RECUPERO GLI ELEMENTI
const numberListElement = document.getElementById('number-list');
const totalRandomNumbers = 5;
const arrayRandomNumbers = [];
const formElement = document.querySelector('form');
console.log(formElement);
const inputElement = document.querySelectorAll('input')
const countdownElement = document.getElementById('countdown')
const rulesElement = document.getElementById('rules')


//# FUNZIONE PER GENERARE NUMERI RANDOM
const generateRandomNumber = (min,max,randomNumbers)=>{
    while(arrayRandomNumbers .length< totalRandomNumbers){
        let randomNumber =Math.floor(Math.random() * max - min + 1) + min;
        if(!arrayRandomNumbers.includes(randomNumber))
        arrayRandomNumbers.push(randomNumber);

    }
    return arrayRandomNumbers;
}

//# FUNZIONE PER STAMPARE IN PAGINA I NUMERI RANDOM E CREARE GLI INPUT
const numberPrinter = ()=>{
    for(let i = 0; i < totalRandomNumbers ; i++ ){
        console.log('sono le i', arrayRandomNumbers[i])
        items += `<li>${arrayRandomNumbers[i]}</li>`
        inputs += `<input type="number" placeholder="inserisci 1° numero" value=""  class="first-inpu" required></input>`
    }
    
    numberListElement.innerHTML = items ;
    formElement.innerHTML += inputs
}

//# FUNZIONE PER FAR SPARIRE I NUMERI
const removeNumbers = ()=>{
    numberListElement.classList.add('d-none');
    rulesElement.innerText = 'Inserisci i numeri che ti ricordi:';
    //CREO IL BUTTON
    const button = document.createElement('button');
    button.innerText = 'VAI';
    // LO AGGANCIO IN
    formElement.appendChild(button)
}

//#  FUNZIONE CHE MOSTRA IL FORM
const showForm = ()=>{
    formElement.classList.remove('d-none');
}
//# FUNZIONE PER RECUPERARE VALORI DEGLI INPUT
const userAnswers = []
const getUserAnswers = ()=>{
    // INSERISCO I VALORE DEGLI INPUT NELL'ARRAY
    for(let i = 0;i < inpuItems.length;i++){
        userAnswers.push(parseInt(inpuItems[i].value))
    }return userAnswers;
}

//GENERO 5 NUMERI RANDOM
(generateRandomNumber(1,100,totalRandomNumbers));

//STAMPO IN PAGINA I NUMERI
let items = '';
let inputs = '';
numberPrinter();

//RECUPERO GLI INPUT
const inpuItems = document.querySelectorAll('input');
console.log('input items', inpuItems)

// FACCIO VARIABILE TEMPO IN SECONDI
let timer = 2;
countdownElement.innerText = timer
// CREO TIMER ATTIVAZIONE FUNZIONE PER FAR SPARIRE I NUMERI
const interval = setInterval(()=>{
    countdownElement.innerText = --timer;
    if(timer === 0){
        clearInterval(interval);
        //RIMUOVO I NUMERI
        removeNumbers()
        countdownElement.classList.add('d-none');
        /*MOSTRO IL FORM*/
        showForm();
    }
},1000);
//! DOBBIAMO SISTEMARE L'INVIO DEL BOTTONE
// CREO ADD EVENT LISTNER SUL FORM
formElement.addEventListener('submit',function(event){
    event.preventDefault();
    //RECUPERO I VALORI DEGLI INPUT
    getUserAnswers();
    // FACCIO SPARIRE IL FORM DOPO IL CLICK
    formElement.classList.add('d-none');
    //FACCIO SPARIRE LE REGOLE
    rulesElement.classList.add('d-none');
    //CONFRONTO I NUMERI DELL'UTENTE CON I NUMERI RANDOM
    const correctNumbers = [];

    for(let i = 0; i < arrayRandomNumbers.length; i++){
        console.table('array',arrayRandomNumbers, 'user',userAnswers)

        if(arrayRandomNumbers[i] === userAnswers[i]){
            // INSERISCO IN CORRECT NUMBERS I NUMERI CHE COMBACIANO
            correctNumbers.push(userAnswers[i])
            //FACCIO COMPARIRE L'ELEMENTO
            numberListElement.classList.remove('d-none')
        }
        // SCRIVO IN PAGINA IL MESSAGGIO
        numberListElement.innerHTML= `i numeri corretti sono: <strong>${correctNumbers}</strong>`;
    }
})  








