/* 
**************************
**************************

Agregar la dentro del metodo .then() la logica necesaria para imprimir el valor 'value'

**************************
**************************
*/

const myPromise = Promise.resolve(50)

myPromise.then(function(value) {
    // logica aqui 
})

/*
**************************
**************************

Agregar dentro del Callback 'funcion1' la logica necesaria sumarle al valor 'value' la cantidad 10 y luego imprimirlo

**************************
**************************
*/

const addValue = function(value) {
    // logica aqui.
}

const anotherPromise = Promise.resolve()

anotherPromise.then(addValue)

/* 
**************************
**************************

Crear una promesa que resuelva con el string 'foo'

**************************
**************************
*/

// logica aqui

/* 
**************************
**************************

A la promesa anterior agregar un metodo .then() para concatenar al string su propio nombre. 

**************************
**************************
*/

// logica a aqui