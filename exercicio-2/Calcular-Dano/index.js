const personagem = prompt("Insira o nome do personagem:");
const poderAtaque = parseFloat(prompt("Insira o ataque do poder"));

const oponente = prompt("Insira o nome do Oponente");
let pontosVida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const defesa = parseFloat(prompt("Qual o poder de defesa?"));
const escudo = prompt("Ele possui escudo? (Sim/Não)");

let dano = 0;

if (poderAtaque > defesa && escudo === "Não") {
    dano = poderAtaque - defesa;
} else if (poderAtaque > defesa && escudo === "Sim") {
    dano = (poderAtaque - defesa) / 2;
};

pontosVida -= dano;

alert(personagem + " causou " + dano + " pontos de dano em " + oponente);
alert(
    personagem + "\nPoder de ataque: " + poderAtaque + "\n\n" + oponente + "\nPontos de vida: " + pontosVida + "\nPoder de defesa: " + defesa + "\nPossui escudo: " + escudo
);