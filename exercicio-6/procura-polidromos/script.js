const palavra = prompt("Digite uma palavra: ");
let palavraInvertida = "";

for (let index = palavra.length - 1; index >= 0; index--) {
    palavraInvertida += palavra[index];
    
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
  } else {
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
  }