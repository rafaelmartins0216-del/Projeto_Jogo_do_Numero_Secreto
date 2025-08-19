let listaDeNumerosSorteados=[]
let tentativas = 1;
let numeroLimite=10;

//função feita para verificar chute 
function verificarChute() {
    let chute = document.querySelector('.container__input').value

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Número correto, Parabéns');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        exibirTextoNaTela('p', `com apenas ${tentativas} ${palavraTentativa} você acertou!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Número incorreto');
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p', 'Dica: numero menor')
        } else if (chute < numeroAleatorio) {
            exibirTextoNaTela('p', 'Dica:numero maior')
        }
        tentativas++;
        limparCampo();
    }

}

//função para exibir texto na tela pegando parametros 
//
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
exibirTexto()

function exibirTexto(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite);
    let quantidadeDeElementosNaLista=listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumerosSorteados=[]
    }
    //include olha se o elemento esta na lista
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        //recursividade , se o numero aleatorio ja for escolhido gera um novo numero e assim por dianta
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
let numeroAleatorio = gerarNumeroAleatorio();

//função para limpar o campo
function limparCampo() {

    document.querySelector('.container__input').value = ""

}

function novoJogo() {
    //aqui temos que clicar no botão 
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTexto();
}