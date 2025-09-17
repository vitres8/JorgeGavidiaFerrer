//Seleccionar elementos

const inputElementMatrix = document.querySelector("#input-04");
const outputElementMatrixGen = document.querySelector("#matrix-generated");
const generateButton = document.querySelector("#button-04");

function generate() {
    outputElementMatrixGen.textContent = "";
    let matrixSize = inputElementMatrix.value;
    let matrixGen = [matrixSize];

    for (let i = 0; i < matrixSize; i++) {
        matrixGen[i] = [];
        for (let j = 0; j < matrixSize; j++) {
            matrixGen[i][j] = Math.floor(Math.random() * 10);
        }
    }
    matrixGen;
    for (let i = 0; i < matrixGen.length; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < matrixGen.length; j++) {
            let td = document.createElement("td");
            td.textContent = matrixGen[i][j];
            tr.appendChild(td);
        }
        outputElementMatrixGen.appendChild(tr);
    }

    console.log(matrixSize, matrixGen);
}

generateButton.addEventListener("click", generate);
