let exexucao = true;
let cartas = [];

while (exexucao) {
    const menu = parseFloat(prompt("Escolha uma opção: " +
    "\n1. Ver mão" +
    "\n2. Adicionar uma carta" +
    "\n3. Puxar uma carta" +
    "\n4. Sair"))

    switch (menu) {
        case 1:
            if (cartas.length  === 0) {
                alert("Mão Vazia");
            }else {
                alert("Em sua mão possui as seguintes cartas:\n" +
                cartas.map((carta, i) => (i + 1) + "º " + carta).join("\n"));
            }
            break;
        case 2:
            const adicionarCarta = prompt("Adicione uma Carta:");
            cartas.push(adicionarCarta);
            alert("A carta: " + adicionarCarta + " foi adicionada a mão");
            break;
        case 3:
            const cartasPossuidas = alert("As cartas da sua mão são:\n " +
            cartas.map((carta, i) => (i + 1) + "º " + carta).join("\n"));
            const nomeCarta = prompt("Qual nome da carta: ");
            const indexCarta = cartas.indexOf(nomeCarta)
            const cartaRemovida = cartas.splice(indexCarta, 1)[0];

            if (indexCarta !== -1) {
                alert("A carta " + cartaRemovida + " foi removida da sua mão.");
                let i = cartas.map((carta, i) => (i + 1) + "º " + carta).join("\n")
                alert(i)
            } else {
                alert("A carta " + nomeCarta + " não está na sua mão.");
            }
            break;
        case 4: 
            alert("Saindo do programa...");
            exexucao = false;
            break;
        default:
            break;
    }
}