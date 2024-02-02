const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".select-currency")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas
    
    console.log(currencySelect.value)
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

convertButton.addEventListener("click", convertValues )



