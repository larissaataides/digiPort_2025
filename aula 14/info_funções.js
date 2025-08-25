//utilizar funções para otimizar o código 
/*
//estrutura de uma função: 
function nomeDaFuncao (parametros){
	//estrutura da função 
return retornoDaFuncao; //opcional 

}
*/

//exemplo 
function somar(a,b){
	return a + b;
}
console.log(somar(2, 3)); 

//arrow function
const somar2 = (a, b) => {
	return a + b;
}	
console.log(somar(2, 3));

//outra forma de escrever a arrow function
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map((x) => x * x);
console.log(quadrados); // [1, 4, 9, 16, 25]
//aí no final teria um array com os quadrados dos números
