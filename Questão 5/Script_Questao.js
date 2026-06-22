function pesquisa() {

    let totalPessoas = 0;

    let somaSalarioMasculino = 0;
    let qtdMasculino = 0;

    let mulheres1000a3000 = 0;

    let masc2000 = 0;
    let fem2000 = 0;

    while (true) {

        let idade = parseInt(("Digite a idade (0 para encerrar):"));

        if (idade == 0) {
            break;
        }

        let sexo = ("Digite o sexo (M/F):").toUpperCase();
        let renda = parseFloat(("Digite a renda:"));

        totalPessoas++;

        // Média salarial masculina
        if (sexo == "M") {
            somaSalarioMasculino += renda;
            qtdMasculino++;

            if (renda >= 2000) {
                masc2000++;
            }
        }

        // Mulheres com renda entre 1000 e 3000
        if (sexo == "F") {

            if (renda >= 1000 && renda <= 3000) {
                mulheres1000a3000++;
            }

            if (renda >= 2000) {
                fem2000++;
            }
        }
    }

    let mediaMasculino = 0;

    if (qtdMasculino > 0) {
        mediaMasculino = somaSalarioMasculino / qtdMasculino;
    }

    let percMasc = 0;
    let percFem = 0;

    if (totalPessoas > 0) {
        percMasc = (masc2000 / totalPessoas) * 100;
        percFem = (fem2000 / totalPessoas) * 100;
    }

    alert(
        "RESULTADO DA PESQUISA\n\n" +
        "Total de pessoas: " + totalPessoas + "\n" +
        "Média salarial masculina: R$ " + mediaMasculino.toFixed(2) + "\n" +
        "Mulheres com renda entre R$1000 e R$3000: " + mulheres1000a3000 + "\n" +
        "Percentual de homens com salário >= R$2000: " + percMasc.toFixed(2) + "%\n" +
        "Percentual de mulheres com salário >= R$2000: " + percFem.toFixed(2) + "%"
    );
}