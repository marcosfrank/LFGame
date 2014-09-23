/// <reference path="jquery-1.11.1.min.js" />



//FUNCION que permite habilitar la paginacion segun el nivel en el que esta
//el jugador en el local storage. 
//NivelIngreso: es el nivel al que entro el jugador
function habilitarPaginacion(nivelIngreso) {
    var links = $("#paginacionNiveles").find("a");
    var nivelA = localStorage.getItem("nivelActual");
    if (nivelA) {
        if (nivelA > nivelIngreso) {
            for (var i = nivelIngreso; i <= nivelA; i++) {
                $(links[i]).removeClass("inactive");
            }
            $(links).last().removeClass("inactive");
        }
    } else {
        localStorage.setItem("nivelActual", "0");
    }
}