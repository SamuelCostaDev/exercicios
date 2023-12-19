const valorMetro = parseFloat(prompt('Digite um número em metros: '));

const unidades = parseFloat(prompt(valorMetro + " metros " + "\nEscolha para qual unidade de medida esse valor deve ser convertido: \n1. milímetro (mm) \n2. centímetro (cm) \n3. decímetro (dm) \n4. decâmetro (dam) \n5. hectômetro (hm) \n6. quilômetro (km)" ));
let ConversorDeMedidas = 0;
switch (unidades) {
    case 1:
        ConversorDeMedidas = valorMetro * 1000;
        
        alert("Valor dado em metros: " + valorMetro + "m" + "\nConversão: " + ConversorDeMedidas + "mm");
        break;
    case 2:
        ConversorDeMedidas = valorMetro * 100;
        
        alert("Valor dado em metros: " + valorMetro + "m" + "\nConversão: " + ConversorDeMedidas + "cm");
        break;
    case 3:
        ConversorDeMedidas = valorMetro * 10;
        
        alert("Valor dado em metros: " + valorMetro + "m" + "\nConversão: " + ConversorDeMedidas + "dm");
        break;
    case 4:
        ConversorDeMedidas = valorMetro / 10;
        
        alert("Valor dado em metros: " + valorMetro + "m" + "\nConversão: " + ConversorDeMedidas + "dam");
        break;
    case 5:
        ConversorDeMedidas = valorMetro / 100;
        
        alert("Valor dado em metros: " + valorMetro + "m" + "\nConversão: " + ConversorDeMedidas + "hm");
        break;
    case 6:
        ConversorDeMedidas = valorMetro / 1000;
        
        alert("Valor dado em metros: " + valorMetro + "m" + "\nConversão: " + ConversorDeMedidas + "km");
        break;
    default:
        alert("Entrada Inválida");
        break;
}