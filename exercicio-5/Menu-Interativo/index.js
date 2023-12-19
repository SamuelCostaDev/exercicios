let escolha;

do {
const opcoes = parseFloat(prompt("Escolha uma das 5 opções abaixo:" +
"\n1) Opção 1" +
"\n2) Opção 2" +
"\n3) Opção 3" +
"\n4) Opção 4" +
"\n5) Opção 5" +
"\n6) Encerrar" 
));

switch (opcoes) {
    case 1:
        alert("Você escolheu a opção 1")
        break;
    case 2:
        alert("Você escolheu a opção 2")
        break;
    case 3:
        alert("Você escolheu a opção 3")
        break;
    case 4:
        alert("Você escolheu a opção 4")
        break;
    case 5:
        alert("Você escolheu a opção 5")
        break;
    case 6:
        alert("Encerrando...")
        break;

    default:
        alert("Opção Inválida.." +
        "\nEscolha uma opção válida"
        )
        break;
}
    escolha = opcoes
} while (escolha !== 6);