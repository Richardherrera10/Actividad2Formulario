var formulario = document.getElementById("form-login")
var pass = document.getElementById("pass-login")
var nombre = document.getElementById("nombre-login")
var correo = document.getElementById("email")
var fechaNac = document.getElementById("fecha-login")
var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")
var regNombre = RegExp("\w+")
var regEmail = RegExp("\w+@[a-z]+\.[a-z]")
var error = ""    


var hoyDateObj = new Date()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    if(nombre.value.match(regNombre)){
        error ="\nUsuario debe ser un valor alfanumérico"
    }

    if(correo.value.match(regEmail)){
        error = "\nCorreo debe tener la forma: texto@dominio.com"
    }
    if(!pass.value.match(expMay)){
        error+="\nContraseña tener una mayúscula"
    }if(!pass.value.match(expMin)){
        error+="\nContraseña tener una minúscula"
    }if(!pass.value.match(expNum)){
        error+="\nContraseña tener un número"
    }
    fechaElegida = fechaNac.value
    fechaElegida = new Date(fechaElegida)

    if (fechaElegida-hoyDateObj > 0){
        error +="\nEligió fecha futura"
    }    
    if (error == ""){
        window.comunication.registroValido([nombre.value, pass.value]);
    }else{
        alert(error)
    }


})

