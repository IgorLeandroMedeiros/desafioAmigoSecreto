//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Array para armazenar os nomes dos amigos!
let amigos = [];

/**
 * Adiciona um amigo à lista de amigos.
 *
 * - A função captura o nome inserido no campo de texto, valida se o nome é válido e não duplicado,
 *   e o adiciona ao array `amigos`. Após adicionar, a lista é atualizada na interface.
 *
 * Etapas:
 * 1. Captura o valor do campo de entrada e remove espaços extras.
 * 2. Verifica se o campo está vazio e, se estiver, exibe um alerta e impede a execução.
 * 3. Valida se o nome do amigo já foi adicionado anteriormente ao array, para evitar duplicidade.
 * 4. Se o nome for válido e único, adiciona o nome ao array `amigos`.
 * 5. Limpa o campo de entrada após a inserção do nome.
 * 6. Atualiza a lista de amigos na interface chamando a função `listaExibir()`.
 */
function addAmigos() {
  // Captura o valor do campo de entrada, remove espaços extras e converte para minúsculas
  let amigoInput = document.getElementById("amigo").value.trim().toLowerCase();

  // verifica se o input está vazio
  if (amigoInput == "") {
    alert("Campo vazio, por favor insira o nome de um amigo!");
    document.querySelector("#amigo").focus();
    return;
  }
  //verifica  se o nome ja foi adicionado! duplicidade
  if (amigos.includes(amigoInput)) {
    // Exibe um alerta e limpa o campo de entrada
    alert("Este amigo já foi adicionado!");
    document.querySelector("#amigo").value = "";
    document.querySelector("#amigo").focus();
    return;
  }
  //add nome amigo no array de amigos
  amigos.push(amigoInput);

  //limpar input apos add um amigo
  document.querySelector("#amigo").value = "";
  console.log(amigos);
  //função para exibir nomes na tela
  listaExibir();
}

/*
 * Exibe os valores da lista de amigos na interface HTML.
 *
 * A função realiza o seguinte:
 * 1. Limpa a lista existente na página.
 * 2. Para cada amigo no array 'amigos', cria um elemento <li> com o nome do amigo.
 * 3. Adiciona cada item <li> dentro de um elemento <ul> na interface.
 */
function listaExibir() {
  // Seleciona o elemento <ul> no HTML e limpa sua lista
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  //loop para  percorrer o array de amigos e cria um <li> para cada nome
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    // Define o texto do <li> como o nome do amigo no índice atual
    li.textContent = amigos[i];
    // Adiciona o <li> criado dentro do <ul> na página
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  //teste - remover se for necessário
  if (amigos.length === 0) {
    alert("Não há amigos para sortear");
    return;
  } else if (amigos.length < 2) {
    alert("É necessario 2 amigos para iniciar o sorteio");
    return;
  }
  let RandomIndex = Math.floor(Math.random() * amigos.length);
  console.log(amigos[RandomIndex]);

  //armazena o resultado de RandomIndex
  let amigoSorteado = amigos[RandomIndex];
  //Exibe na tela o amigo sorteado
  document.querySelector(
    "#resultado"
  ).innerHTML = `O amigo secreto sorteado é : ${amigoSorteado}`;
}

//Adicionar confirmação de envio via teclado
const InputAmigo = document.querySelector("#amigo");
//add event listener para o evento de teclado
InputAmigo.addEventListener("keydown", function (event) {
  //verificar se a tecla ENTER foi acionada
  if (event.key === "Enter" || event.keyCode === 13) {
    event.preventDefault(); // Evita o envio do formulário padrão
    addAmigos();
  }
});
