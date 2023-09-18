import Exchange, { KHR_to_USD, USD_to_KHR } from "/public/src/js/class/exchangeCurrencies_Class.js";


const sub_btn = document.querySelector("#submit-btn");
const current_currencies_input = document.querySelector("#current-currencies-input");
const change_currencies_input = document.querySelector("#change-currencies-input");
const amount = document.querySelector("#amount-input");

const display_Exchange_Amount = document.querySelector("#display-exchange");

async function CheckCurrencies(currentCurrencies, changeCurrencies) {

    const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currentCurrencies}.json`);
    const data = await res.json();

    const exchange = new Exchange(
        current_currencies_input.value, 
        change_currencies_input.value, 
        amount.value, 
        data,
        display_Exchange_Amount
          ); 

    if (currentCurrencies == "usd" && changeCurrencies == "khr") {
        USD_to_KHR(exchange);
    }

    if (currentCurrencies == "khr" && changeCurrencies == "usd") {
        KHR_to_USD(exchange);
    }
}

sub_btn.addEventListener("click", () => {
    CheckCurrencies(current_currencies_input.value, change_currencies_input.value);
     
})

