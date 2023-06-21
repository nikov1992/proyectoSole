
//eventos del Menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})
const titulo1 = document.getElementById('titulo')
console.log(titulo1);


// 12312312312 con esto solo hago que hacepte numero en parte de contacto telefono
// const input = document.getElementById("inpTelefono");
// input.addEventListener("input", function(event) {
//   const inputValue = event.target.value;
//   const numbersOnly = inputValue.replace(/[^0-9]/g, "");
//   input.value = numbersOnly;
// });


let hideTextBtns = document.getElementById('hideTextBtns')
let hideText = document.getElementById('hideText')


hideTextBtns.addEventListener('click' , mostrarTexto)


function mostrarTexto (){
  hideText.classList.toggle('show')
  if(hideText.classList.contains('show')){
    hideTextBtns.innerHTML = 'Leer menos';
  }
  else
  hideTextBtns.innerHTML = 'Seguir Leyendo';
}

let hideTextBtns2 = document.getElementById('hideTextBtns2')
let hideText2 = document.getElementById('hideText2')


hideTextBtns2.addEventListener('click' , mostrarTexto2)

function mostrarTexto2 (){
  hideText2.classList.toggle('show2')
  if(hideText2.classList.contains('show2')){
    hideTextBtns2.innerHTML = 'Leer menos';
  }
  else
  hideTextBtns2.innerHTML = 'Seguir Leyendo';
}


//FUNCION PARA LA SECCION DE CONTACTO
function ajustarTamano(elemento) {
  elemento.style.height = "auto";
  // elemento.style.height = elemento.scrollHeight + "px";
}



