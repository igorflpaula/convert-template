// Cotação
const USD = 6.07;
const EUR = 6.38;
const GBP = 7.69;

// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipular o input amount para receber apenas números
amount.addEventListener("input", () => {
    
    const hasCharacterRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharacterRegex, "");
});

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    
    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrenctBRL(price)}`
        
        let total = amount * price;
        result.textContent = formatCurrenctBRL(total);
        // Aplica a classe que exibe o footer
        footer.classList.add("show-result");
    } catch (error) {
        // Remove a classe
        footer.classList.remove("show-result")
        console.log(error);
        alert("Não foi possível converter.")
    }
}

function formatCurrenctBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}