// Variáveis Locais - Restrito a uma função
// Variáveis Globais - acesso de todo o escopo do código
// let para váriaveis globais

let jogos = [
    {nome: "Bloodborne", anoLancamento:"2014"},
    {nome: "GTA VI", anoLancamento:"2026"},
];

exibirJogo();

function exibirJogo(){
    let input_nome = document.querySelector("input-nome").ariaValueMax;
    let input_lancamento = document.querySelector("#input-lancamento").value;

    //verificando se tem valor nas váriaveis
    if(input_nome&&input_lancamento){
    jogos.push({
        nome:input_nome,
        anoLancamento:input_lancamento
    });
    alert("Jogo cadastra'do com sucesso!");
    }
    else{
        alert("Dados inválidos");
    }
    let output = document.querySelector("#listar");
    output.innerHTML = "";
// limpar o campo

    jogos.forEach(jogo => {
        output.innerHTML += (`Nome: ${jogo.nome} | Ano de Lançamento: ${jogo.anoLancamento} <br>`);
    });

}