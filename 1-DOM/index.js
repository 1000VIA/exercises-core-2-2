/*

Obtener e imprimir en consola del siguiente HTML los siguientes elementos

* todos los div's
* el elemento con Id 'header'
* el primer elemento con clase 'box'
* todos los elementos con la clase 'wrap'
* todos los elementos div con la clase 'wrap'
* solo el elemento con clase 'box' que se encuentra dentro del elemento 'wrap' que a su vez esta dentro del elemento 'container'

*/

let divs = document.getElementsByTagName('div')
console.log(divs);

let header = document.getElementById('header');
console.log(header);

let box = document.getElementsByClassName('box')[0];
console.log(box);

let class_wrap = document.getElementsByClassName('wrap');
console.log(class_wrap);

let div_wrap = document.querySelectorAll('div.wrap');
console.log(div_wrap);

let class_box = document.querySelectorAll('.container .wrap .box');
console.log(class_box);