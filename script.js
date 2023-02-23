const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value')
    const currencyValue = document.getElementById('currency-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.high 
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

    if(select.value === "US$ Dólar Americano"){
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar)
    }
    
    if(select.value === "€ Euro"){
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(inputReal / euro)
    }

    if(select.value === "Bitcoin"){
        currencyValue.innerHTML = (inputReal / bitcoin).toFixed(2)
    }

}
const changeCurrency = () => {
    const currencyName = document.getElementById("moeda")
    const currencyImg = document.getElementById('img-currency')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/Dólar.jpg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.jpg"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.png"
    }

    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)
