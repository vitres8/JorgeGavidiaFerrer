//Seleccionar elementos
const inputElement = document.querySelector("#input-01");
const fromElement = document.querySelector("#from-01");
const toElement = document.querySelector("#to-01");
const outputElement = document.querySelector("#output-01");
const convertButton = document.querySelector("#button-01");
const messageElement = document.querySelector("#message-01");

//Funcion para convertir las unidades

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (fromValue == toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "Es la misma unidad, elija otra";
        return;
    }

    let meters;
    switch (fromValue) {
        case "m":
            meters = inputElement.value;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
        default:
            break;
    }

    let result;

    switch (toValue) {
        case "m":
            result = meters;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
        case "km":
            result = meters / 1000;
            break;
        default:
            break;
    }

    outputElement.value = result;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    const message = `${inputElement.value} ${fromLabel} are equivalent to ${result} ${toLabel} `;
    messageElement.textContent = message;
    console.log(fromLabel, toLabel);
}

convertButton.addEventListener("click", convert);
