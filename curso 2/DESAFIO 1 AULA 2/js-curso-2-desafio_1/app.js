let titulo2 = document.querySelector('h1');
titulo2.innerHTML = 'É A HORA DO DESAFIO';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function exibirAlerta() {
    alert('EU AMO JS PRA SEMPRE')
}

function exibirPerguntaCidade(){
    let cidade = prompt('Qual a cidade do Brasil que gostaria de morar?');
    alert(`Estive também em ${cidade} e gostei muito!!`);
}

function somaNumeros(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}