const prompt = require("prompt-sync")();
let soma = 0 
let numero = 0 

while (numero >= 0){
    soma += numero; //somar os numeros
   numero = parseInt(prompt("qual numero?"))
   if (numero < 0) {
    break; //sair do while se for negativo
   }
}
console.log("a soma dos numeros é: " + soma)