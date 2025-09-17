//seleccionar los elementos

const outputElementQuote = document.querySelector("#quotes-content");
const generateButtonQuote = document.querySelector("#quotes-button");

function generateQuote() {
    async function getQuote() {
        try {
            const response = await fetch(
                "https://api.allorigins.win/get?url=" +
                    encodeURIComponent("https://zenquotes.io/api/random")
            );
            const data = await response.json();
            const quote = JSON.parse(data.contents); // la API devuelve string en `contents`
            console.log(`"${quote[0].q}" — ${quote[0].a}`);
            outputElementQuote.textContent = `"${quote[0].q}" — ${quote[0].a}`;
        } catch (error) {
            console.error("Error al obtener la cita:", error);
        }
    }

    getQuote();
}

generateButtonQuote.addEventListener("click", generateQuote);
