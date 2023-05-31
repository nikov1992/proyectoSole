
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







