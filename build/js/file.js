const d = document;
const archivo = 'data.json';
let acumulado = 0, resultado;

const btn = d.querySelector('.button');

btn.addEventListener('click',(e)=>{
    
    fetch(archivo)
    .then(resultado=>resultado.json())
    .then(datos=>{

       for (let index = 0; index < datos.length; index++) {
        d.querySelector(`.cat${index+1}`).textContent = datos[index].category;
        d.querySelector(`.span${index+1}`).textContent = datos[index].score;
        d.querySelector(`.img${index+1}`).src = datos[index].icon;   
        
        acumulado = acumulado + datos[index].score;
        console.log(acumulado);
       }

       let resultado = acumulado/4;

       d.querySelector('.circulo_number').textContent = Math.round(resultado);
    })
})