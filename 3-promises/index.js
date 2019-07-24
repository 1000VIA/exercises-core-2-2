/* 
**************************
**************************

Agregar la dentro del metodo .then() la logica necesaria para imprimir el valor 'value'

**************************
**************************
*/

let myPromise = Promise.resolve(50)

myPromise.then(function(value) {
    myPromise = value;
    console.log(value);
    // logica aqui 
})

/*
**************************
**************************

Agregar dentro del Callback 'funcion1' la logica necesaria sumarle al valor 'value' la cantidad 10 y luego imprimirlo

**************************changeBackgroundColorOnClick
**************************
*/

const addValue = function(value) {
    value = value + 10;
    console.log(value);
}

let anotherPromise = Promise.resolve(10)

anotherPromise.then(addValue)

/* 
**************************
**************************

Crear una promesa que resuelva con el string 'foo'

**************************'myPromiseFoo' has already been declared
**************************
*/

const addValueFoo = function(value) {
        console.log(value);
    } // logica aqui

let myPromiseFoo = Promise.resolve('foo');

myPromiseFoo.then(addValueFoo);

/* 
**************************
**************************

A la promesa anterior agregar un metodo .then() para concatenar al string su propio nombre. 

**************************
**************************
*/

let myPromiseFooConcat = Promise.resolve('foo');

myPromiseFooConcat.then(function(value) {
        console.log(value);

    }) // logica a aqui