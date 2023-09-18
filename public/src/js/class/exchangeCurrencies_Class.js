export default class Exchange {
    constructor(currentCurrencies, changeCurrencies, amount, data, display_Exchange)
    {
        this.currentCurrencies = currentCurrencies;
        this.changeCurrencies = changeCurrencies;
        this.amount = amount;
        this.data = data;
        this.display_Exchange = display_Exchange;
    }
}

export function USD_to_KHR(exchange) {
    let result = exchange.amount * exchange.data.usd.khr;
    exchange.display_Exchange.innerHTML = Math.ceil(result) + "Riel";
}

export function KHR_to_USD(exchange) {
    let result = exchange.amount * exchange.data.khr.usd;
    exchange.display_Exchange.innerHTML = Math.ceil(result).toFixed(2) + "$";
}