// class define a estrutura do nosso projeto
// dentro da class iremos definir as características/atributos
class Cliente{
    // metódo/função construtor
    // tem a função de colocar "requisitos" dentro da chamada classe
    constructor(nome,email,dataNascimento)
    {
    // this referencia a informação para a própria classe
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    }
    
    exibir(){
        return `Nome: ${this.nome} Email: ${this.email} Data de Nascimento: ${this.dataNascimento }`;
    }

    calcular(qtd, valor){
        return qtd*valor;
    }
}
