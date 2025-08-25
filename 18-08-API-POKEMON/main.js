let pokemon1 = null;
let pokemon2 = null;
let hp1;
let hp2;

function buscarPokemon(){
    //nome da variavel que vai armazenar o pokemon
    let pkm_name = document.querySelector("#pkm_name").value;

//serve para realizar requisições HTTP assíncronas,
// permitindo que sua aplicação web busque recursos de um servidor ou de outras fontes externas
fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name}`)
    .then(resposta => {
        if(!resposta.ok){
        throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
        })
        //pega os dados do pokemon
        .then(dados => {
            const  p = new Pokemon();
            p.nome = dados.name;
            p.tipo = dados.types.map(t=> t.type.name);
            p.peso = dados.weight;
            p.sprite = dados.sprites.front_default;
            p.hp = dados.stats[0].base_stat;
            p.ataque = dados.stats[1].base_stat;
            p.defesa = dados.stats[2].base_stat;
            // console.log(p.exibirDados());

            //Resposta do servidor com nome,tipo, peso e foto/sprite
    document.getElementById("resultado").innerHTML = `<h1>${p.nome}</h1> 
           <p>Tipo:${p.tipo} </p>
            <p>Nome:${p.nome} </p>
            <p>Peso:${p.peso} kg </p>
            <p>Peso:${p.ataque} </p>
            <p>Peso:${p.defesa} </p>
            <p>Peso:${p.hp} </p>

            <img src="${p.sprite}">`;
            document.getElementById("hp1").max = p.hp;
            document.getElementById("hp2").value = p.hp;

            pokemon1 = p;
            hp1 = p.hp;
        })
        //senão pegar o alerta de erro
        //se der erro exibe a mensagem de erro
        .catch(erro => {
            alert(erro.message);
        })
}

function buscarPokemon2(){
    //nome da variavel que vai armazenar o pokemon
    let pkm_name2 = document.querySelector("#pkm_name2").value;

//serve para realizar requisições HTTP assíncronas,
// permitindo que sua aplicação web busque recursos de um servidor ou de outras fontes externas
fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta2 => {
        if(!resposta2.ok){
        throw new Error("Pokemon não encontrado");
        }
        return resposta2.json();
        })
        //pega os dados do pokemon
        .then(dados => {
            const  p2 = new Pokemon();
            p2.nome = dados.name;
            p2.tipo = dados.types.map(t=> t.type.name);
            p2.peso = dados.weight;
            p2.sprite = dados.sprites.front_default;
            p2.hp = dados.stats[0].base_stat;
            p2.ataque = dados.stats[1].base_stat;
            p2.defesa = dados.stats[2].base_stat;
            // console.log(p.exibirDados());

            //Resposta do servidor com nome,tipo, peso e foto/sprite
    document.getElementById("resultado2").innerHTML = 
          `<h1>${p2.nome}</h1> 
           <p>Tipo:${p2.tipo} </p>
            <p>Nome:${p2.nome} </p>
            <p>Peso:${p2.peso} kg </p>
            <p>Peso:${p2.ataque} </p>
            <p>Peso:${p2.defesa} </p>
            <p>Peso:${p2.hp} </p>

            <img src="${p2.sprite}">`;
            document.getElementById("hp1").max = p2.hp;
            document.getElementById("hp2").value = p2.hp;

            pokemon2 = p2;
            hp2 = p2.hp;

        })
        //senão pegar o alerta de erro
        //se der erro exibe a mensagem de erro
        .catch(erro => {
            alert(erro.message);
        })
}

function batalhar(){
    if(!pokemon1 || !pokemon2){
        alert("Selecione 2 pokemons!")
        return;
    }

    //definindo o hp inicial de cada pokémon
    let hp1 = pokemon1.hp;
    let hp2 = pokemon2.hp;

    //esquema de ínicio de ataque
    // número ímpar = player 1
    // número par = player 2
    let turno =1;

    // acumulando mensagens dos turnos
    let log = "";

    // zerando as mensagens no ínicio da batalha
    document.getElementById("resultadoBatalha").innerHTML="";
    document.getElementById("resultadoLog").innerHTML="";

    let intervalo = setInterval(() => {
        // verificar se tem pontos de vida
        if(hp1>0 && hp2>0){
            // verificando o turno de quem é
            // ímpar é player 1
            if(turno%2==0){
                // dano gerado por número aletório
                // jut=nto com o ataque e defesa
    let dano = Math.max(1,pokemon1.ataque-pokemon1.defesa);

    //tirando a pontuação de dano do player2
    hp2-=dano;
    document.getElementById("hp2").value-=dano;

    log+= `<p>${pokemon1.nome} atacou o ${pokemon2.nome} e causou ${dano} de dano`;
            }

            else{
                //ataque do oponente
                let dano = Math.max(1,pokemon2.ataque-pokemon2.defesa);

        //tirando a pontuação de dano do player2
        hp2-=dano;
        document.getElementById("hp2").value-=dano;

    log+= `<p>${pokemon2.nome} atacou o ${pokemon1.nome} e causou ${dano} de dano`;
            }
            document.getElementById("resultadoLog").innerHTML=log;
            turno++;
        }
        //fechando o if dos pontos zerados
        else{
            clearInterval(intervalo);
        }
    }, 1000);
    // 1000 = 1 segundo

}