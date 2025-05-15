//variaveis locais - restrito a uma função

//variaveis globais - pode ser acessada em qualquer ponto do codigo
//let para variaveis globais +recomendado 
let jogos = [
    {nome: "Bloodborn",anoLancamento:"2014"},
    {nome: "GTA VI",  anoLancamento:"2026"}

];
//se chamar a funcao exibir jogos aqui ela funciona pois  a leitura do programa é   muito rapida 

function exibirJogo(){
    let output = document.querySelector('#listar')
output.innerHTML = "";
// Limpar campo
jogos.forEach( jogos => {
output.innerHTML += (`Nome: ${jogos.nome} | Ano de Lançamento: ${jogos.anoLancamento} <br>`);
});
}

function adicionarJogo(){
    let input_nome = document.querySelector("#input-nome").value;
    let input_lancamento = document.querySelector("#input-lancamento").value;

    // verificado se tem valor nas variaveis
    if(input_nome&&input_lancamento){
jogos.push({
    nome:input_nome,
    anoLancamento:input_lancamento
});
alert("jogo cadastrado com sucesso! ");
exibirJogo();
limparCampo();
}
else{
alert("Dados Invalidos");
}
}


function limparCampo(){
let input_nome = document.querySelector("#input-nome");
input_nome.value= " ";
let input_lancamento = document.querySelector("#input-lancamento");
input_lancamento.value = " ";
}

function buscarJogo(){
let nomeBusca = document.querySelector("#nomeBusca").value.toLowerCase();

// alocando os dados da busca em uma variável
let resultados =  jogos.filter(jogo => jogo.nome.toLowerCase().includes(nomeBusca));
// filter = função para localzar informações no vetor
// includes é o termo a ser buscado
//console.log(resultados);
let output = document.querySelector('#resultadobusca')
output.innerHTML = "";

if(resultados.length>0){
    resultados.forEach( resultados => {
        output.innerHTML += (`Nome: ${resultados.nome} | Ano de Lançamento: ${resultados.anoLancamento} <br>`);
        });
}
else{
     output.innerHTML = "<h3> Nenhuum jogo encontrado! <h3> ";
}
}