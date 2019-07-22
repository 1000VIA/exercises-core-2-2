/**
***************************
**************************

Agregar la logica necesaria a la funcion 'onClick' que permita cambiar el contenido del div con clase box

**************************
**************************z
 */

function changeTextOnclick(e) {
    let changeClassBox = document.querySelector('.box')
    changeClassBox.innerHTML = 'Este es mi nuevo texto :-)' // logica aqui.
}
const button1 = document.getElementById('btn-1')
button1.addEventListener('click', changeTextOnclick)

/*
**************************
**************************

Agregar un evento click al boton del HTML que cambie el color del div con clase box

**************************
**************************
*/

const box = document.querySelector('.box')
const button2 = document.querySelector('.btn-2')

function changeBackgroundColorOnClick() {
    box.style.backgroundColor = 'teal'
}
button2.addEventListener('click', changeBackgroundColorOnClick)