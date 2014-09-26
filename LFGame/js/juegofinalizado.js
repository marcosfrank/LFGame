/// <reference path="jquery-1.11.1.min.js" />

function mostrarDiv(indice,contexto) {
    $("#contenedorInstrucciones").find("div.instruccion:nth-child(" + indice + ")").show("slow");
    $(contexto).parent().find("input").attr("disabled","disabled");
}

$(document).ready(function () {
    $("div.instruccion").hide();
    $("input.noencuentro").on("click", function () {
        if ($(this).attr("id") != "primero") {
            alert("Lo lamentamos mucho. Estamos seguro que la proxima podrás reclamar tu premio. Vuelve a intentarlo");
            window.location.replace("JuegoTerminado.html");
        }
    });
});