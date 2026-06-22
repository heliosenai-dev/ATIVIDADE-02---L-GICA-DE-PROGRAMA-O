  // Contadores
        let menor18 = 0;
        let maior65 = 0;
        let entre18e64 = 0;
        let feminino = 0;
        let masculino = 0;

        function analisar() {

            // Repete 4 vezes
            for(let i = 1; i <= 4; i++) {

                let nome = prompt("Digite o nome da pessoa " + i + ":");
                let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
                let sexo = prompt("Digite o sexo (M ou F):");

                // Verifica a idade
                if(idade < 18) {
                    menor18++;
                }
                else if(idade > 65) {
                    maior65++;
                }
                else {
                    entre18e64++;
                }

                // Verifica o sexo
                if(sexo.toUpperCase() == "F") {
                    feminino++;
                }
                else if(sexo.toUpperCase() == "M") {
                    masculino++;
                }
            }

            // Mostra os resultados
            alert(
                "RESULTADOS\n\n" +
                "Menores de 18 anos: " + menor18 + "\n" +
                "Maiores de 65 anos: " + maior65 + "\n" +
                "Entre 18 e 64 anos: " + entre18e64 + "\n" +
                "Feminino: " + feminino + "\n" +
                "Masculino: " + masculino
            );
        }