let opcao = "";

do {
    opcao = prompt("Calculadora Geométrica:" +
    "\n1. Área do Triângulo" +
    "\n2. Área do Retângulo" +
    "\n3. Área do Quadrado" +
    "\n4. Área do Trapézio" +
    "\n5. Área do Círculo" +
    "\n6. Sair" 
    )
    switch (opcao) {
        case "1":
            function areaTriangulo(base, altura) {
                const calculo = base * altura / 2
                const resultado = alert("Área do Triângulo = " + calculo);
                return resultado
            }
            areaTriangulo(
                prompt("Digite a Base"), 
                prompt("Digite a Altura"));
            break;

        case "2":
            function areaRetangulo(base, altura) {
                const calculo = base * altura
                const resultado = alert("Área do Retângulo = " + calculo);
                return resultado
            }
            areaRetangulo(
                parseFloat(prompt("Digite a Base")), 
                parseFloat(prompt("Digite a Altura")));
            break;

        case "3": 
            function areaQuadrado(lado, lado) {
                const calculo = lado * lado
                const resultado = alert("O Resultado da Área do Quadrado é: " + calculo)
                return calculo
            }
            areaQuadrado(parseFloat(
                prompt("Digite o Lado")), 
                parseFloat(prompt("Digite o Lado")))
            break;

        case "4": 
            const valoresTrapezio = {
                base_maior: parseFloat(prompt("Digite a Base Maior")),
                base_menor: parseFloat(prompt("Digite a Base Menor")),
                altura:  parseFloat(prompt("Digite a Altura"))
            }
            function areaTrapezio(trapezio) {
                const calculo = (trapezio.base_maior + trapezio.base_menor) * trapezio.altura / 2
                alert("O Resultado da Área do Trapézio é: " + calculo)
            }
            areaTrapezio(valoresTrapezio)
            break;
            
        case "5": 
            function areaCirculo(raio, raio) {
                const calculo = 3.14 * raio * raio
                const resultado = alert("O Resultado da Área do Circulo é: " + calculo)
                return resultado
            }
            areaCirculo(parseFloat(
                prompt("Digite o Raio")), 
                parseFloat(prompt("Digite o Raio")))
            break;
        case "6":
            alert("Encerrando o Programa...")
            break;

        default:
            alert("Por favor, selecione um item válido")
            break;
    }
} while (opcao !== "6");