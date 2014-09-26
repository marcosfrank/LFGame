var clock;
var provincias = {
    1:["misiones","posadas"],
    2:["corrientes","corrientes"],
    3:["chaco","resistencia"],
    4:["formosa","formosa"],
    5:["salta","salta"],
    6:["jujuy","san salvador de jujuy"],
    7:["tucuman","san miguel de tucuman"],
    8:["catamarca","san fernando del valle de catamarca"],
    9:["cordoba","cordoba"],
    10:["la rioja","la rioja"],
    11:["san juan","san juan"],
    12:["mendoza","mendoza"],
    13:["neuquen","neuquen"],
    14:["san luis","san luis"],
    15:["santa fe","santa fe de la vera cruz"],
    16: ["santiago del estero", "santiago del estero"],
    17:["entre rios","parana"],
    18:["buenos aires","la plata"],
    19:["la pampa","santa rosa"],
    20:["rio negro","viedma"],
    21:["chubut","rawson"],
    22:["santa cruz","rio gallegos"],
    23:["tierra del fuego","ushuaia"]
}
$(document).ready(function () {
    $("div#errores").hide();
    habilitarPaginacion(2);
    // Instantiate a counter
    clock = new FlipClock($('.clock'), 180, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true,
        stop: function () {
            window.location.replace("TimeOut.html?NivelGeografia.html");

        }
    });

    function validarDisntintasZonas() {
        var uls = $("#ulselections").find("ul");
        var clases = [];
        for (var i = 0; i < uls.length; i++) {
            if (clases.indexOf($(uls[i]).attr("class")) == -1) {
                clases.push($(uls[i]).attr("class"));
            } else {
                return false;
            }
        }
        return true;
    }

    function validarCantidadProvincias() {
        return ($("#ulselections").find("ul").length == 5)
    }

    function validarNombresYCapitales() {
        var uls = $("#ulselections").find("ul");
        var ban = true;
        for (var i = 0; i < uls.length; i++) {
            var cod = $(uls[i]).attr("cod").toString();
            if ($(uls[i]).find("input.provincia").val().toLowerCase().trim() != provincias[cod][0] || $(uls[i]).find("input.capital").val().toLowerCase().trim() != provincias[cod][1]) {
                $(uls[i]).find("input").addClass("error");
                ban = false;
            } else {
                $(uls[i]).find("input").removeClass("error");
            }
        }
        return ban;
    }


    //$("#contenidoNivel").load("../templates/geografia1.htm");
    $("#btnContinuar").on("click", function () {
        if ($(this).val() == "Corregir!") {
            if (validarCantidadProvincias()) {
                if (validarDisntintasZonas()) {
                    if (validarNombresYCapitales()) {
                        $("#btnContinuar").val("Continuar >>");
                        $("#btnContinuar").css("background-color", "lightgreen");
                        clock.setTime(1000);
                    } else {
                        $("#btnContinuar").attr("disable", true);
                        $("#btnContinuar").css("background-color", "lightcoral");
                        $("#btnContinuar").css("cursor", "auto");
                        $("div#errores span").text("Los nombres de las provincias o capitales de las mismas no son correctas. Tenes 30 segundos para revisar lo que has hecho mal. APROVECHALOS");
                        $("div#errores").fadeIn();
                        clock.setTime(30);
                    }
                } else {
                    $("#btnContinuar").attr("disabled", true);
                    $("#btnContinuar").css("background-color", "lightcoral");
                    $("#btnContinuar").css("cursor", "auto");
                    $("div#errores span").text("Las 5 provincias deben ser de distintas zonas. Tenes 15 segundos para revisar lo que has hecho mal. APROVECHALOS");
                    $("div#errores").fadeIn();
                    clock.setTime(15);
                }
            } else {
                $("#btnContinuar").attr("disabled", true);
                $("#btnContinuar").css("background-color", "lightcoral");
                $("#btnContinuar").css("cursor", "auto");
                $("div#errores span").text("Debes seleccionar 5 provincias. Tenes 10 segundos para revisar lo que has hecho mal. APROVECHALOS");
                $("div#errores").fadeIn();
                clock.setTime(10);
            }
        } else {
            localStorage.setItem("nivelActual", "3");
            window.location.replace("NivelMatematica.html");
        }



    });



});