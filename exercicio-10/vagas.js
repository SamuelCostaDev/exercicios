let menu = "";
const vagas = []

do {
    menu = prompt("Bem vindo ao Sistema de Vagas" +
    "\n\nEscolha uma opção" +
    "\n1. Vagas disponíveis" +
    "\n2. Criar uma vaga" +
    "\n3. Ver vaga" +
    "\n4. Sair")

    switch (menu) {
        case "1":
            // Ver vagas Disponíveis 

            if (vagas.length === 0) {
                alert("Não possui vagas disponíveis")
            } else {
                const vagasDisponiveis = vagas.map(function (vaga) {
                    return ( 
                     "\nVaga: " + vaga.nome + 
                     "\nEmpresa: " + vaga.empresa +
                     "\nContrato: " + vaga.contrato +
                     "\nInformações: " + vaga.info +
                     "\nContato: " + vaga.contato
                     )
                 })
     
     
                 vagasDisponiveis.forEach(function (vaga) {
                     alert(vaga)
                 })
            }
            
            break;
        case "2":
            // Adicionar uma nova vaga
            const vaga = {};
            vaga.nome = prompt("Escreva o nome da vaga:");
            vaga.empresa = prompt("Escreva o nome da empresa:")
            vaga.contrato = prompt("Escreva qual o tipo de contratação oferecido:")
            vaga.info = prompt("Escreva as informações:")
            vaga.contato = prompt("Escreva a forma de contato")

            const adicionar = confirm("Deseja publicar a vaga?\n" +
            "\nNome da Vaga: " + vaga.nome + 
            "\nNome da Empresa: " + vaga.empresa +
            "\nForma de Contrato: " + vaga.contrato +
            "\nInformações: " + vaga.info +
            "\nContato: " + vaga.contato)

            if (adicionar) {
                vagas.push(vaga)
            }
            break;
        case "3":
            const buscarVaga = prompt("Qual vaga está buscando?")
            const vagaEncontrada = vagas.filter(function (vaga) {
                return vaga.nome === buscarVaga
            })

            if (vagaEncontrada.length > 0) {
                vagaEncontrada.forEach(function (vaga) {
                    const inscricao = prompt(
                        "\nVaga: " + vaga.nome +
                        "\nEmpresa: " + vaga.empresa +
                        "\nContrato: " + vaga.contrato +
                        "\nInformações: " + vaga.info +
                        "\nContato: " + vaga.contato +
                        "\n" + "\n" + "Deseja inscrever-se? (Sim/Não)"
                    )

                    if (inscricao === "Sim") {
                        alert("Candidato inscrito com sucesso")
                    }else if (inscricao === "Não"){
                        alert("Candidato não inscrito")
                    }
                })
            } else {
                alert("Vaga não encontrada");
            }
            break;
        case "4":
            alert("Encerrando...")
            break;
        default:
            break;
    }
} while (menu !== "4");