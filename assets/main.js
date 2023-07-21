const inputs = document.querySelectorAll("input");

for (const input of inputs) {
  input.addEventListener("keydown", function (event) {
    // Obtém o código da tecla pressionada
    const tecla = event.key;

    // Verifica se a tecla pressionada é um número ou a tecla backspace
    if (!(/[0-9]/.test(tecla) || tecla === "Backspace")) {
      // Se não for um número nem a tecla de apagar, previne a ação padrão (não insere o caractere)
      event.preventDefault();
    }
  });
}

