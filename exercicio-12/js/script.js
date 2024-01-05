const button = document.getElementById("btn");
const cadastrar = document.getElementById("cadastrar")

const habilidade = document.getElementById("habilidade");
const technologiesContainer = document.getElementById("technologies-container");
const habilidades = document.getElementById("habs");
const tableBody = document.querySelector("#table tbody");

let programador = [];
let experiencia = []

function createRadioInput(labelText) {
  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.setAttribute("class", "form-check-input radio");
  radio.setAttribute("name", "habilidade");

  const label = document.createElement("label");
  label.innerHTML = labelText;
  label.setAttribute("class", "form-check-label depois");

  return { radio, label };
}

function addTechnology() {
  tableBody.innerHTML = '';
  const newDivRadio = document.createElement("div");

  const label1 = createRadioInput("0-2").label;
  const radio1 = createRadioInput().radio;
  radio1.value = "0-2 anos"
  const label2 = createRadioInput("3-4").label;
  const radio2 = createRadioInput().radio;
  radio2.value = "3-4 anos"

  const label3 = createRadioInput("5+").label;
  const radio3 = createRadioInput().radio;
  radio3.value = "5+ anos"

  newDivRadio.append(label1, radio1, label2, radio2, label3, radio3);
  habilidades.append(newDivRadio);

  const newRow = tableBody.insertRow();
  newRow.setAttribute("class", "oi")
  // Adiciona o valor do input de habilidade na primeira célula
  newRow.insertCell().textContent = habilidade.value;

  // Adiciona cada par de label e radio em células diferentes

  newRow.insertCell().append(label1, radio1);

  newRow.insertCell().append(label2, radio2);
  newRow.insertCell().append(label3, radio3);

};


function cadastrasr() {
  const nome = document.getElementById("name").value;
  const linguagem = document.getElementById("habilidade").value;

  if (nome === "" || linguagem === "") {
    alert("Por favor, preencha todos os campos antes de cadastrar.");
    document.getElementById("name").focus();
    return;
  }else{

    const selectedRadio = document.querySelector('input[name="habilidade"]:checked');
    const habilidadeValue = selectedRadio.value; // Get value if selected, otherwise empty string
  
    const tbody = document.querySelector("table.table tbody");
  
    const row = document.createElement("tr");
  
    const nameCell = document.createElement("td");
    nameCell.textContent = nome;
  
    const linguagemCell = document.createElement("td");
    linguagemCell.textContent = linguagem;
  
    const habilidadeCell = document.createElement("td");
    habilidadeCell.textContent = habilidadeValue;
    
    tableBody.innerHTML = '';


    row.appendChild(nameCell);
    row.appendChild(linguagemCell)
    row.appendChild(habilidadeCell);
    tbody.appendChild(row);
  
    document.getElementById("name").value = "";
    document.getElementById("habilidade").value = "";
    const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    modal.hide();
  }
  
}
