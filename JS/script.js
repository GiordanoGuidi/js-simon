
//# RECUPERO GLI ELEMENTI
const numberElement = document.querySelector('.number-element');
console.log(numberElement)
const totalRandomNumbers = 5;
const arrayRandomNumbers = [];
const formElement = document.querySelector('form');
console.log(formElement);
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

//CREO TIMER PER ATTIVAZIONE FUNZIONE PER FAR SPARIRE I NUMERI
setTimeout(function(){
    removeNumbers();
},timer);


//# CREO FUNZIONE CHE MOSTRA IL FORM
const showForm = ()=>{
    formElement.classList.remove('d-none');
    }

//# CREO FUNZIONE PER RECUPERARE VALORI DEGLI INPUT
const userAnswers = []
const askNumbers = ()=>{
    // INSERISCO I VALORE DEGLI INPUT NELL'ARRAY
    for(let i = 0;i < inputElement.length;i++){
        userAnswers.push(parseInt(inputElement[i].value))
    }return userAnswers;
}

/*CREO TIMER PIU' LUNGO DEL PRECEDENTE PER ATTIVARE FUNZIONE
CHE CHIEDE I NUMERI ALL'UTENTE*/
setTimeout(function(){
    //DICHIARO FUNZIONE CHE MOSTRA IL FORM
    showForm();
},timer + 10)


// CREO ADD EVENT LISTNER SUL FORM
formElement.addEventListener('submit',function(event){
    event.preventDefault();
    //RECUPERO I VALORI DEGLI INPUT
    askNumbers();
    // FACCIO SPARIRE IL FORM DOPO IL CLICK
    formElement.classList.add('d-none');
    //CONFRONTO I NUMERI DELL'UTENTE CON I NUMERI RANDOM
    const correctNumbers = [];

    for(let i = 0; i < arrayRandomNumbers.length; i++){
        if(arrayRandomNumbers[i] === userAnswers[i]){
            // INSERISCO IN CORRECT NUMBERS I NUMERI CHE COMBACIANO
            correctNumbers.push(userAnswers[i])
            //FACCIO COMPARIRE L'ELEMENTO
            numberElement.style.display='block'  
        }
        // SCRIVO IN PAGINA IL MESSAGGIO
        numberElement.innerHTML= `i numeri corretti sono: <strong>${correctNumbers}</strong>`;
    }
})  








