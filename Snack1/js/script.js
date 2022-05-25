/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/


let arrayVuoto = [];


let i= 0;
let somma = 0; 

do {
let number = parseInt(prompt("inserisci un numero"));
    arrayVuoto.push(number);
    
    
    somma = arrayVuoto[i] + somma;
    i++;




}while (somma<49)

console.log(somma);
console.log(arrayVuoto);



