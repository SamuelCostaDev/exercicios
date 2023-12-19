let listaPacientes = [];
let execucao = true;

while (execucao) {
    const menu = parseFloat(prompt("Selecione uma opção: " +
    "\n1. Lista De Pacientes" +
    "\n2. Adicionar Paciente" +
    "\n3. Consultar Paciente" +
    "\n4. Sair"
    ));
    switch (menu) {
        case 1:
            if (listaPacientes.length === 0) {
                alert("Lista de Pacientes Vazia")
            } else {
                alert("Lista de Pacientes:\n" + listaPacientes.map((paciente, index) => + index+1 + "º "+paciente).join("\n"))
            }
            break;
        case 2:
            const adicionarPaciente = prompt("Insira o nome do paciente: ");
            listaPacientes.push(adicionarPaciente);
            alert(adicionarPaciente + " adicionado à fila.");
            break;
        case 3:
            const consultaPaciente = listaPacientes.shift()
            alert("Paciente constultado: " + consultaPaciente)
            break;
        case 4:
            alert("Saindo do programa!")
            execucao = false;
            break;
        default:
            console.log("Deu errado")
            break;
    }   
}