function Validation(){
let year = document.getElementById("date-3").value


if (2021-year<18){
    alert("Debe ser mayor de 18 años para registrarse")
  } 


let pass = document.getElementById("date-1").value
let rPass = document.getElementById("date-2").value

if (pass!=rPass){
    alert("Las contraseñas no coinciden")
  } 
}