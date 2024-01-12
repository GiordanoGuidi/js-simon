console.log('hello world')

//# RECUPERO GLI ELEMENTI
const numberElement1 = document.getElementById('num-1');
const numberElement2 = document.getElementById('num-2');
const numberElement3 = document.getElementById('num-3');
const numberElement4 = document.getElementById('num-4');
const numberElement5 = document.getElementById('num-5');
const totalRandomNumbers = 5;

//#FUNZIONE PER GENERARE NUMERI RANDOM
const generateRandomNumber = (min,max,randomNumbers)=>{
    const arrayRandomNumbers = [];
    while(arrayRandomNumbers .length< totalRandomNumbers){
        let randomNumber =Math.floor(Math.random() * max - min + 1) + min;
        if(!arrayRandomNumbers.includes(randomNumber))
        arrayRandomNumbers.push(randomNumber);
    }
    return arrayRandomNumbers;
}

(generateRandomNumber(1,100,totalRandomNumbers));


