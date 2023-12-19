let numero1 = prompt("Digite um número:");
let operacao = prompt("Digite a operação")
let numero2 = prompt("Digite outro número:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let resultado;

switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
            
    default:
        console.error("Operação Inválida");
        break;
}

console.log(resultado);