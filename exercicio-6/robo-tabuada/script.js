const numero = parseInt(prompt("Digite um Número (1 a 20): "));
const modelo = prompt("Você deseja todos os resultados de uma vez? (Sim/Não)");

if (modelo.toLowerCase() === "sim") {
    let tabuadaSoma = "";
    let tabuadaSubtracao = "";
    let tabuadaMultiplicacao = "";
    let tabuadaDivisao = "";

    for (let index = 1; index <= 20; index++) {
        const soma = numero + index;
        const sub = numero - index;
        const mult = numero * index;
        const divisao = (numero / index).toFixed(2);

        tabuadaSoma += numero + " + " + index + " = " + soma + "\n";
        tabuadaSubtracao += numero + " - " + index + " = " + sub + "\n";
        tabuadaMultiplicacao += numero + " x " + index + " = " + mult + "\n";
        tabuadaDivisao += numero + " / " + index + " = " + divisao + "\n";
    }

    alert("Tabuada de soma do número " + numero + ":\n" + tabuadaSoma);
    alert("Tabuada de subtração do número " + numero + ":\n" + tabuadaSubtracao);
    alert("Tabuada de multiplicação do número " + numero + ":\n" + tabuadaMultiplicacao);
    alert("Tabuada de divisão do número " + numero + ":\n" + tabuadaDivisao);
} else {
    const operacao = prompt("Selecione uma operação: (+, -, *, /)");

    switch (operacao) {
        case "+":
        case "-":
        case "*":
        case "/":
            let tabuada = "";

            for (let index = 1; index <= 20; index++) {
                const resultado =
                    operacao === "+" ? numero + index :
                    operacao === "-" ? numero - index :
                    operacao === "*" ? numero * index :
                    (numero / index).toFixed(2);

                tabuada += numero + " " + operacao + " " + index + " = " + resultado + "\n";
            }

            alert("Tabuada do número " + numero + " para a operação " + operacao + ":\n" + tabuada);
            break;
        default:
            alert("Selecione uma operação correta");
            break;
    }
}
