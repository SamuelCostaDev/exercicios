const imoveis = [];
let opcao = "";

do {
    let quantImoveis = "";
    for (let i = 0; i < imoveis.length; i++) {
        quantImoveis += i+1
    }

    opcao = prompt("Quantidade de Imóveis:\n" + quantImoveis.length +
    "\nEscolha uma ação:\n1. Adicionar Imóvel\n2. Imóveis Salvos\n3. Sair")

    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.nome = prompt("Nome do proprietário: ");
            imovel.quartos = parseFloat(prompt("Quantidade de quartos: "));
            imovel.banheiro = parseFloat(prompt("Quantidade de banheiros: "));
            imovel.garagem = prompt("Possui garagem: (Sim/Não)");

            const confirmacao = confirm("Salvar imóvel?\n" +
            "\nProprietário: " + imovel.nome +
            "\n Quartos: " + imovel.quartos +
            "\n Banheiros: " + imovel.banheiro +
            "\n Garagem: " + imovel.garagem);
        
            if (confirmacao) {
                imoveis.push(imovel)
            }
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imovel: " + (i + 1) + "\n" +
                "Nome do proprietário: " + imoveis[i].nome + "\n" +
                "Quantidade de quartos: " + imoveis[i].quartos + "\n" +
                "Quantidade de banheiros: " + imoveis[i].banheiro + "\n" +
                "Possui garagem: " + imoveis[i].garagem);
            }
           
            break;
        case "3":
            alert("Encerrando...");
            break;
        default:
            break;
    }
} while (opcao !== "3");