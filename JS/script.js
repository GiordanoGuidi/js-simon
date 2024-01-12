console.log('hello world')

//# RECUPERO GLI ELEMENTI
const numberElement = document.querySelector('.number-element');
console.log(numberElement)
const totalRandomNumbers = 5;
const arrayRandomNumbers = [];

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
const disappearNumbers = ()=>{
    numberElement.style.display='none'
}
// FACCIO VARIABILE TEMPO IN SECONDI
const timer = 30 * 1000;
//CREO TIMER PER ATTIVAZIONE FUNZIONE
setTimeout(function(){
    disappearNumbers();
},timer);

