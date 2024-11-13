var botaoAdicionar = Document.querySelector("adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event)
{
  event.preventDefault();

  var form = document.querySelector("aform-adiciona");
  var nome = form.nome.value;
