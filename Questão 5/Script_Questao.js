let total = 0;
let menor18 = 0;
let maior65 = 0;
let entre18e64 = 0;
let masculino = 0;
let feminino = 0;

function adicionarPessoa() {

    if (total >= 5) {
        return;
    }

    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value.toUpperCase();

    total++;

    // Verifica a idade
    if (idade < 18) {
        menor18++;
    } else if (idade > 65) {
        maior65++;
    } else {
        entre18e64++;
    }

    // Verifica o sexo
    if (sexo == "M") {
        masculino++;
    } else if (sexo == "F") {
        feminino++;
    }

    // Atualiza contador
    document.getElementById("contador").innerHTML =
        "Pessoas cadastradas: " + total + "/5";

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";

    // Mostra resultado ao cadastrar 5 pessoas
    if (total == 5) {
        document.getElementById("resultado").innerHTML =
            "<h3>Resultado Final</h3>" +
            "Menores de 18 anos: " + menor18 + "<br>" +
            "Maiores de 65 anos: " + maior65 + "<br>" +
            "Entre 18 e 64 anos: " + entre18e64 + "<br>" +
            "Masculino: " + masculino + "<br>" +
            "Feminino: " + feminino;
    }
}