// Responsável por encontrar os divisores
function mostrarDivisores() {
    // Obtém o valor digitado pelo usuário
    const numero = Number(document.getElementById("numero").value);

    if (!Number.isInteger(numero) || numero <= 0) {
        document.getElementById("resultado").textContent =
            "Digite um número inteiro positivo.";
        return;
    }

    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    // Exibe o resultado na página
    document.getElementById("resultado").textContent =
        `Divisores de ${numero}: ${divisores.join(" ")}`;
}