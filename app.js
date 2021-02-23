
// esta es mi función que suma dos números....s
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)



/// Exchange app

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = 0;
    // convert the given valueInEuro to dollars
    valueInDollar = valueInEuro * oneEuroIs["USD"];
    //return the doller value
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = 0;
    // convert the given valueInEuro to dollars
    valueInYen = valueInDollar * oneEuroIs["JPY"];
    //return the Yen value
    return valueInYen;
}

const fromYanToPound = (valueInDollar) => {
    let valueInPoundn = 0;
    // convert the given valueInEuro to dollars
    valueInPoundn = valueInDollar * oneEuroIs["GBP"];
    //return the Yen value
    return valueInPoundn;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound }
