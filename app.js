let amigos = [];
let mensagemMinimaExibida = false;
const numeroMinimoDeParticipantes = 3;

//Função para exibir uma mensagem no HTML usando javascript
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function addAmigos() {
  //usar o valor do campo de entrada de texto
  let amigoInput = document.querySelector("#amigo").value.trim().toLowerCase();

  //limpar mensagem anterior
  exibirTextoNaTela(".section-title", "Por favor insira o nome de um amigo");
  if (amigoInput === "") {
    exibirTextoNaTela(".section-title", "Insira um nome válido!");
    return;
  }
  if (amigos.includes(amigoInput)) {
    exibirTextoNaTela(
      ".section-title",
      `O nome ${amigoInput} já foi adicionado`
    );
    return;
  }

  //add amigos no array
  amigos.push(amigoInput);
  exibirTextoNaTela(
    ".section-title",
    `Amigo adicionado insira o nome de outro amigo`
  );
  // Verificar se atingiu o número mínimo de amigos para o sorteio
  // Só exibe a mensagem de quantidade mínima uma vez, quando o número de amigos atingir o mínimo
  if (amigos.length >= numeroMinimoDeParticipantes && !mensagemMinimaExibida) {
    exibirTextoNaTela(
      ".section-title",
      `Você atingiu o número mínimo de participantes!`
    );
    mensagemMinimaExibida = true; // Marca que a mensagem já foi exibida, evitando que apareça novamente
  }
  //Resetar o campo de entrada para um novo nome e foca o input
  document.querySelector("#amigo").value = "";
  document.querySelector("#amigo").focus();
  console.log(amigos);
  exibirListaDeAmigos();
}

//Atualizar lista e exibir na tela
function exibirListaDeAmigos() {
  //elemento html onde a lista sera exibida

  let listaAmigos = document.querySelector("#listaAmigos");

  //Limpar a lista de amigos apos add um nome
  listaAmigos.innerHTML = "";
  //loop para percorrer o array e a criação de um <li> para cada valor nome

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i]; //define o valor do conteudo de li com base no valor do array amigos
    listaAmigos.appendChild(li); ///adicionar o li na lista
  }
}

function sortearAmigo() {
  //verifica se tem amigos na lista

  if (amigos.length === 0) {
    exibirTextoNaTela(".section-title", "Não tem amigos para sortear");
    return;
  }
  if (amigos.length < 3) {
    exibirTextoNaTela(
      ".section-title",
      "Tem que ter pelo menos 3 amigos para sortear"
    );
    return;
  }
  const RandomIndex = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[RandomIndex];
  console.log(amigoSorteado);
  exibirTextoNaTela("#resultado", `O amigo sorteado foi: ${amigoSorteado}`);
  exibirTextoNaTela(".section-title", `Parabéns ${amigoSorteado}`);
  //limpar a lista de amigos
  amigos = [];
  limparListaNomes();
  document.querySelector("#resetar").removeAttribute("disabled");
}

function limparListaNomes() {
  let listaNomes = document.querySelector("#listaAmigos");
  listaNomes.innerHTML = "";
}

function reiniciarSorteio() {
  amigos = [];
  limparListaNomes();
  exibirTextoNaTela(".main-title", "Amigo Secreto");
  exibirTextoNaTela(".section-title", "Digite o nome dos seus amigos");
  exibirTextoNaTela("#resultado", "");
  document.querySelector("#resetar").setAttribute("disabled", true);
  mensagemMinimaExibida = false;
}
document.querySelector("#resetar").addEventListener("click", reiniciarSorteio);
