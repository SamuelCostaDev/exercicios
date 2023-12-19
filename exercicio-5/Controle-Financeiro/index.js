const dinheiro = parseFloat(prompt("Qual a quantidade de dinheiro disponível?"))
const acao = prompt("Valor Total: " + dinheiro +
"\nDeseja adicionar ou remover dinheiro? (Sim/Não"
)


switch (acao) {
    case "Sim":
        const opcao = prompt("Selecione uma Opção:" +
        "\n1) Adicionar" +
        "\n2) Remover"
        )
        if (opcao === 1) {
            const adicionar = parseFloat(prompt("Adicione o a quantidade que deseja adicionar:"))

            dinheiro += adicionar
            alert(dinheiro)

        }else{
            const remover = parseFloat(prompt("Adicione o a quantidade que deseja adicionar:"))
            dinheiro -= remover
            alert("Deu bom2")

        }
        break;
    default:
        break;
}