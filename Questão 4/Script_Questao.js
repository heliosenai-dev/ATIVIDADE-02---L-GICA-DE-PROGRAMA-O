let totalPessoas = 0;

let somaSalarioMasculino = 0;
let qtdMasculino = 0;

let mulheres1000a3000 = 0;

let homens2000 = 0;
let mulheres2000 = 0;

function adicionarPessoa() {

    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value.toUpperCase();
    let renda = Number(document.getElementById("renda").value);

    totalPessoas++;

    if (sexo == "M") {

        somaSalarioMasculino += renda;
        qtdMasculino++;

        if (renda >= 2000) {
            homens2000++;
        }

    } else if (sexo == "F") {

        if (renda >= 1000 && renda <= 3000) {
            mulheres1000a3000++;
        }

        if (renda >= 2000) {
            mulheres2000++;
        }
    }

    // Limpa os campos
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("renda").value = "";
}

function mostrarResultado() {

    let mediaMasculina = 0;

    if (qtdMasculino > 0) {
        mediaMasculina = somaSalarioMasculino / qtdMasculino;
    }

    let percentualHomens = (homens2000 / totalPessoas) * 100;
    let percentualMulheres = (mulheres2000 / totalPessoas) * 100;

    document.getElementById("resultado").innerHTML =
        "Total de pessoas: " + totalPessoas + "<br>" +
        "Média salarial masculina: R$ " + mediaMasculina.toFixed(2) + "<br>" +
        "Mulheres com renda entre R$ 1000 e R$ 3000: " + mulheres1000a3000 + "<br>" +
        "Percentual de homens com renda ≥ R$ 2000: " + percentualHomens.toFixed(2) + "%<br>" +
        "Percentual de mulheres com renda ≥ R$ 2000: " + percentualMulheres.toFixed(2) + "%";
}