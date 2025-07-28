const c = new Cliente("Gabriela","gabi@gmail.com","2009-04-09");
// criando uma instância/objeto da classe Cliente (o "c" pega tudo que tiver no cliente e atribui a ele)
console.log(c);

const c2 = new Cliente("José","jose@gmail.com","2006-03-02");
console.log(c2.exibir());
console.log(c2.calcular(10*20));

function inserir(){
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let dataNascimento = document.querySelector("#dataNascimento").value;

    const c3 = new Cliente(nome,email,dataNascimento)
    document.querySelector("mensagem").innerHTML = c3.exibir();
}