const carro1 = prompt("Digite o do carro: ");
const velocidade1 = parseFloat(prompt("Digite a velocidade do carro"));


const carro2 = prompt("Digite o do carro: ");
const velocidade2 = parseFloat(prompt("Digite a velocidade do carro"));

if (velocidade1 > velocidade2) {
    alert(carro1 + "Mais rapido que o carro" +"" + carro2)
} else if(velocidade2 > velocidade1){
    alert(carro2  + " Mais rapido que o carro " + carro1)
} else {
    alert(carro1 + "e" + carro2 + "Possuem velocidades iguais")
}