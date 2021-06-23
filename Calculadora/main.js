const tela = document.getElementById("tela");
function addDig(dig) {
    let digito = tela.innerHTML;
    document.getElementById("tela").innerHTML = digito + dig;
}

// Função para limpar a tela
function limpar() {
    tela.innerHTML = "";
}

// Função para efetuar a operação
function efetuar() {
    let telaPreenchida = tela.innerHTML;
    if(telaPreenchida) {
        tela.innerHTML = eval(telaPreenchida);
    }
}