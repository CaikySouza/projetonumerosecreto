function exibirHelloWorld(){
    console.log ('Hello World');
}
exibirHelloWorld();


function exibirNome(nome){
    console.log(`Olá ${nome} !!`);
}
exibirNome('Caiky');


function voltarDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = voltarDobro(198);
  console.log(resultadoDobro);


function mediaDosNumeros(a, b, c){
    return(a + b + c) /3;
}
let media = mediaDosNumeros(8, 9, 158);
console.log(media);


function qualMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = qualMaior(158, 789);
  console.log(maiorNumero);