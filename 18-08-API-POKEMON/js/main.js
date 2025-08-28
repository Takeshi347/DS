let pokemon1 = null;
let pokemon2 = null;
let hp1;
let hp2;

function buscarPokemon() {
  let pkm_name = document.querySelector("#pkm_name").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name}`)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error("Pokemon não encontrado");
      }
      return resposta.json();
    })
    .then(dados => {
      const p = new Pokemon();
      p.nome = dados.name;
      p.tipo = dados.types.map(t => t.type.name);
      p.peso = dados.weight;
      p.sprite = dados.sprites.front_default;
      p.hp = dados.stats[0].base_stat;
      p.ataque = dados.stats[1].base_stat;
      p.defesa = dados.stats[2].base_stat;
      // console.log(p.exibirDados());    
      document.getElementById("resultado").innerHTML =
        `<h1>${p.nome}</h1> 
<ul>
   <li>Tipo: ${p.tipo}</li>
   <li>Peso: ${p.peso}</li>
   <li>HP: ${p.hp}</li>
   <li>Ataque: ${p.ataque}</li>
   <li>Defesa: ${p.defesa}</li>
</ul>
   <img src="${p.sprite}">
   `;
      document.getElementById("hp1").max = p.hp;
      document.getElementById("hp1").value = p.hp;

      pokemon1 = p;
      hp1 = p.hp;
    })
    .catch(erro => {
      alert(erro.message);
    });


}


function buscarPokemon2() {
  let pkm_name2 = document.querySelector("#pkm_name2").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error("Pokemon não encontrado");
      }
      return resposta.json();
    })
    .then(dados => {
      const p2 = new Pokemon();
      p2.nome = dados.name;
      p2.tipo = dados.types.map(t => t.type.name);
      p2.peso = dados.weight;
      p2.sprite = dados.sprites.front_default;
      p2.hp = dados.stats[0].base_stat;
      p2.ataque = dados.stats[1].base_stat;
      p2.defesa = dados.stats[2].base_stat;
      // console.log(p.exibirDados());    
      document.getElementById("resultado2").innerHTML =
        `<h1>${p2.nome}</h1> 
<ul>
   <li>Tipo: ${p2.tipo}</li>
   <li>Peso: ${p2.peso}</li>
   <li>HP: ${p2.hp}</li>
   <li>Ataque: ${p2.ataque}</li>
   <li>Defesa: ${p2.defesa}</li>
</ul>
   <img src="${p2.sprite}">
   `;
      document.getElementById("hp2").max = p2.hp;
      document.getElementById("hp2").value = p2.hp;

      pokemon2 = p2;
      hp2 = p2.hp;
    })
    .catch(erro => {
      alert(erro.message);
    });
}

function batalhar() {
  // validação pra ver se tem 2 pokemons
  if (!pokemon1 || !pokemon2) {
    alert("Selecione 2 pokemons!")
    return;
  }
  // definindo o hp inicial de cada pokemon
  let hp1 = pokemon1.hp;
  let hp2 = pokemon2.hp;

  // esquema de inicio de ataque
  // número ímpar = player 1
  // número par = player2
  let turno = 1;

  // acumulando mensagens dos turnos
  let log = "";

  // zerando as mensagens no inicio da batalha
  document.getElementById("resultadoBatalha").innerHTML = "";

  let resultadoBatalha = document.getElementById("resultadoBatalha");

  document.getElementById("resultadoLog").innerHTML = "";

  // estrutura de repetição com temporizador
  let intervalo = setInterval(() => {
    // verificar se tem pontos de vida
    if (hp1 > 0 && hp2 > 0) {
      // verificando o turno de quem é
      // ímpar é player 1
      if (turno % 2 == 0) {
        // dano gerado por número aleatório
        // junto com o ataque e defesa
        let dano = Math.max(1, pokemon1.ataque - pokemon1.defesa);

        // tirando a pontuação de dano do player2
        hp2 -= dano;
        document.getElementById("hp2").value -= dano;

        log += `<p>${pokemon1.nome} atacou o ${pokemon2.nome} e causou ${dano} de dano`;
      }
      // ataque do oponente
      else {
        let dano = Math.max(1, pokemon2.ataque - pokemon2.defesa);
        // tirando a pontuação de dano do player2
        hp1 -= dano;
        document.getElementById("hp1").value -= dano;

        log += `<p>${pokemon2.nome} atacou o ${pokemon1.nome} e causou ${dano} de dano`;
      }
      document.getElementById("resultadoLog").innerHTML = log;
      turno++;
    }
    
    // fechando o if dos pontos zerados
    else { 
      clearInterval(intervalo);

      if (hp1 <= 0 && hp2 <= 0) {
        resultadoBatalha.innerHTML = `<p>Empate! Ambos os pokémons caíram ao mesmo tempo!</p>`;
      } else if (hp1 <= 0) {
        resultadoBatalha.innerHTML = `<p>${pokemon2.nome} venceu a batalha!</p>`;
      } else {
        resultadoBatalha.innerHTML = `<p>${pokemon1.nome} venceu a batalha!</p>`;
      }
    }
  }, 1000);
}
