let livros = [
    {cod:1, nome:" Harry potter", autor:" J.K. Rowling"},
    {cod:2,nome:" Senhor dos Anéis", autor:" Tolkien"}
];

function mostrarlivros(){
    let output = document.querySelector("#listagem");
    // limpando a div onde irá exibir
    output.innerHTML = "";

    livros.forEach(livro =>{
        // adicionando os livros dentro da DIV
        output.innerHTML += `código:${livro.cod} - Nome:${livro.nome} - Autor:${livro.autor}<br>`;
    });
}

mostrarlivros();

function adicionarLivro(){
    let input_cod = document.querySelector("#codigo").value;
    let input_nome = document.querySelector("#nome").value;
    let input_autor = document.querySelector("#autor").value;

    // verificando se as váriavies não estão vazias
    if(input_cod&&input_nome&&input_autor){
        livros.push(
            {cod:input_cod,nome:input_nome,autor:input_autor});
            alert("Livro adicionado com sucesso!");
            mostrarlivros();
    }
    else{
        alert("Dados inválidos");
    }
}

function excluirLivro(){
    let input_codExcluir = document.querySelector("#codExcluir").value;

    // procura o número do indice do vetor que contenha o valor
    let indice = livros.findIndex(livro=> livro.cod == input_codExcluir);

// findIndex retorna o primeiro índice com o valor localizado
// se não encontrar o valor, ele retorna -1

// onde será exibidio a resposta
let output = document.querySelector("#resultadoExcluir");
// verificando se encontrou o item que irá excluir
if(indice !=-1){
    livros.splice(indice,1);
    // splice(indice a ser excluido, quantos itens irá excluir)
    output.innerHTML = `<h3 style="color:green>" livro ${input_codExcluir} excluido com sucesso! </h3>`;
    mostrarlivros();
    // limpar o campo
    document.querySelector("#codExclir").value = ""
    }
    else{
        output.innerHTML = `<h3 style="color:green>" livro ${input_codExcluir} não encontrado </h3>`;
    }
}
    function limparCampos(){
    document.querySelector("#codigo").value = "";
    document.querySelector("#nome").value = "";
    document.querySelector("#autor").value = "";
}
