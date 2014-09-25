/// <reference path="jquery-1.11.1.min.js" />

$(document).ready(function () {
    habilitarPaginacion(1);
    var nivel = localStorage.getItem("nivelActual");
    if (nivel > 1) {
        $("#btnVolverNivel").val("Nivel Actual");
    }

    $("#btnVolverNivel").on("click", function () {
        switch (parseInt(nivel)) {
            case 1:
                window.location.replace("NivelIdioma.html");
                break;
            case 2:
                window.location.replace("NivelGeografia.html");
                break;
            case 3:
                window.location.replace("NivelMatematica.html");
                break;
            case 4:
                window.location.replace("NivelEspectaculos.html");
                break;
            case 5:
                window.location.replace("NivelHistoria.html");
                break;
            default:
                window.location.replace("NivelIdioma.html");
                break;
        }
    });
});
