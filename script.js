const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".select-currency")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas
    
    const dolarToday = 4.97
    const libraToday = 6.28
    const euroToday = 5.37


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR" ,{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".logo-convertido")
    
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues )



