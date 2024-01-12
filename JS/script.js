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

(generateRandomNumber(1,100,totalRandomNumbers));

//# FUNZIONE PER STAMPARE IN PAGINA I NUMERI RANDOM
const numberPrinter = ()=>{
    for(let i = 0; i < arrayRandomNumbers.length ; i++ ){
        numberElement.innerText += `  ${arrayRandomNumbers[i]},` ;
        console.log('sono le i', arrayRandomNumbers[i])
    }
    console.log(numberElement)
}
numberPrinter();


