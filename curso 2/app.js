let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
  console.log (chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertouu!!');
        exibirTextoNaTela ('p', 'Parabens você descobriu o número secreto');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor!!');
        } else {
            exibirTextoNaTela('p', 'O número é maior!!');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *  10 + 1);
}