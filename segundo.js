var res = document.getElementById("respuesta")

window.comunication.inicioCorrecto(function(event,args){
    res.innerHTML = args
})