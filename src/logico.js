 function toggleFormulario() {
    const checkbox = document.getElementById("botao");
    const formulario = document.querySelector(".conteudo__formulario");
    if (checkbox.checked) {
      formulario.style.display = "none";
    } else {
      formulario.style.display = "block";
    }
  }