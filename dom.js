console.log('Si funciona');
const input1= document.querySelector('#calculo1');
const form= document.querySelector('#form');
const input2= document.querySelector('#calculo2');
const pResult= document.querySelector('#resul');
const btn = document.querySelector('#btnCalcular');

form.addEventListener('submit', sumarInputs);

function sumarInputs(event){
    console.log(event);
    event.preventDefault();
    const sumaInputs = parseInt(input1.value)+parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;
}