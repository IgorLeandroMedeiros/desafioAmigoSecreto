//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Array para armazenar os nomes dos amigos!
let amigos = [];

//Função para adicionar os amigos ao array.
//capturar os valores do input .trim remover os espaços vazios da string
function addAmigos() {
  let amigoInput = document.getElementById("amigo").value.trim().toLowerCase();

  // verificar se o input está vazio
  if (amigoInput == "") {
    alert("Campo vazio, por favor insira o nome de um amigo!");
    document.querySelector("#amigo").focus();
    return;
  }
  //validar se o nome ja foi adicionado! duplicidade
  if (amigos.includes(amigoInput)) {
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
