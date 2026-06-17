// Contador
function contarDivisiveis() {
    let contador = 0;
    
 // Loop de 1 até 1000
    for (let i = 1; i <= 1000; i++) {
// Verifica se o resto da divisão por 7 é igual a zero
        if (i % 7 === 0) {
            contador++;
        }
    }
  // Exibe o resultado na tela
    document.getElementById("resultado").innerText = 
        "Existem " + contador + " números divisíveis por 7 entre 1 e 1000.";
}

        