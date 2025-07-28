const A = new Aluno("Gabriel","Desenvolvimento de Sistemas","6,5","7,8","5,5");
console.log(A);

const B = new Aluno("Miguel", "Mecânica", "7,5","8,8","4,5");
console.log(B.exibir());

function inserir(){
    let nome = document.querySelector("#nome").value;
    let curso = document.querySelector("#curso").value;
    let nota1 = document.querySelector("#nota1").value;
    let nota2 = document.querySelector("#nota2").value;
    let nota3 = document.querySelector("#nota3").value;

    const C = new Aluno(nome,curso,nota1,nota2,nota3)
    document.querySelector("calcularMedia").innerHTML = C.calcularMedia();
}