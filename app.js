let amigos = [];
//Função para exibir uma mensagem no HTML usando javascript

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function addAmigos() {
  //usar o valor do campo de entrada de texto

  let amigoInput = document.querySelector("#amigo").value.trim().toLowerCase();

  if (amigoInput === "") {
    exibirTextoNaTela(".section-title", "Por favor insira o nome de um amigo");
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

  //Resetar o campo de entrada para um novo nome e foca o input
  document.querySelector("#amigo").value = "";
  document.querySelector("#amigo").focus;
  console.log(amigos);
}
