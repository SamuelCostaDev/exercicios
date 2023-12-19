let menu = "";
const vagas = []

do {
    menu = prompt("Bem vindo ao Sistema de Vagas" +
    "\n\nEscolha uma Opção" +
    "\n1. Vagas Disponíveis" +
    "\n2.Criar uma Vaga" +
    "\n3. Ver Vaga" +
    "\n4. Sair")

    switch (menu) {
        case "1":
            const vagasDisponiveis = vagas.map(function (vaga) {
                const infos = vaga.contato
                return infos
            })

            vagasDisponiveis()
            break;
        case "2":
            const vaga = {};
            vaga.nome = prompt("Escreva o nome da Vaga:");
            vaga.empresa = prompt("Escreva o nome da Empresa:")
            vaga.contrato = prompt("Escreva qual o tipo de contratação oferecido:")
            vaga.info = prompt("Escreva as informações:")
            vaga.contato = prompt("Escreva a forma de contato")

            const adicionar = confirm("Deseja Publicar a vaga?\n" +
            "\nNome da Vaga: " + vaga.nome + 
            "\nNome da Empresa: " + vaga.empresa +
            "\nForma de Contrato: " + vaga.contato +
            "\nInformações: " + vaga.info +
            "\nContato: " + vaga.contato)

            if (adicionar) {
                vagas.push(vaga)
            }
            break;
        case "3":
            
            break;
        case "4":
            
            break;
        default:
            break;
    }
} while (menu !== "4");