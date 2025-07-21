//Luiz Otavio Miranda tem 30 anos, 84kgs
//tem 1.8 de altura e tem seu IMC de 25,9259
//Luiz nasceu em 1980

const nome = 'Luiz Otávio Miranda';
let nomeMaiusculo = nome.toUpperCase();
const sobrenome = "Miranda";
//console.log(nomeMaiusculo); // maiúsculo
let idade = 30;
let altura = 1.80;
//const anoNascimento = 1980;
let peso = 84;
let anoAtual = 2010;

const imc = peso / (altura*altura);
const anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos', 'e pesa', peso, 'quilos')