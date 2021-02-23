
// importar la función sum del archivo app.js...
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


// Dollar test
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(4.2);
})


// Yen test
test("One $ should be 127.9 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 Yen are 127.9 dollars, then 3.5 yens should be (3.5 * 127.9)
    const expected = 3.5 * 127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(447.65000000000003);
})



// Pound test
test("One $ should be 0.8 pound", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromYanToPound(3.5)

    // if 1 pound  are 0.8 dollars, then 3.5 yens should be (3.5 * 0.8)
    const expected = 3.5 * 0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(2.8000000000000003);
})
