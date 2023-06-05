
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


//con esto solo hago que hacepte numero en parte de contacto telefono
const input = document.getElementById("inpTelefono");
input.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const numbersOnly = inputValue.replace(/[^0-9]/g, "");
  input.value = numbersOnly;
});




