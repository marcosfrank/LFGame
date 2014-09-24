/// <reference path="jquery-1.10.2.min.js" />
/// <reference path="jquery-ui.min.js" />
var clock;
var indicesElegidos = [];

//INTRUCCIONES AÑADIR UN EJERCICO
//Todos los datos son obligatorios
//Las imagenes van en orden que sucedieron en la historia
//AÑOS: 3 cifras 1 letra: DEJAR ESPACIO ENTRE NUMERO Y LETRA
//      2 cifras 1 letra: DEJAR 2 ESPACIOS ENTRE NUMERO Y LETRA
//      1 cifras 1 letra: DEJAR 3 ESPACIOS ENTRE NUMERO Y LETRA
//      en otro caso no dejar espacios.
//      El ejercicio esta preparado para el año minimo 99999 A
//A --> Antes de Cristo                 D --> Despues de Cristo
var ejercicios = [
        { titulo: "MONUMENTOS HISTORICOS I", inicio: "3000A", fin: "100 D", imagenes: [{ src: "images/LFGame/historia/historia-monu1-stonehenge.jpg", caption: "Inglaterra - S _ _ _ _ _ _ _ _ _" }, { src: "images/LFGame/historia/historia-monu1-giza.jpg", caption: "Egipto - G _ _ _" }, { src: "images/LFGame/historia/historia-monu1-petra.jpg", caption: "Jordania - P _ _ _ _" }, { src: "images/LFGame/historia/historia-monu1-coliseo.jpg", caption: "Italia - C _ _ _ _ _ _"}] },
        { titulo: "MONUMENTOS HISTORICOS II", inicio: "500 D", fin: "1500D", imagenes: [{ src: "images/LFGame/historia/historia-monu2-chichenitza.jpg", caption: "México - C _ _ _ _ _ _  I _ _ _ " }, { src: "images/LFGame/historia/historia-monu2-santasofia.jpg", caption: "Turquía: S _ _ _ _  &nbsp; S _ _ _ _" }, { src: "images/LFGame/historia/historia-monu2-pisa.jpg", caption: "Italia - P _ _ _" }, { src: "images/LFGame/historia/historia-monu2-machupichu.jpg", caption: "Perú - M _ _ _ _  &nbsp; P _ _ _ _"}] },
        { titulo: "MONUMENTOS HISTORICOS III", inicio: "1600D", fin: "1900D", imagenes: [{ src: "images/LFGame/historia/historia-monu3-tajmahal.jpg", caption: "India - T _ _  &nbsp; M _ _ _ _" }, { src: "images/LFGame/historia/historia-monu3-bigben.jpg", caption: "Inglaterra - B _ _  &nbsp; B _ _" }, { src: "images/LFGame/historia/historia-monu3-libertad.jpg", caption: "EEUU - L _ _ _ _ _ _ _" }, { src: "images/LFGame/historia/historia-monu3-eiffel.jpg", caption: "Francia - E _ _ _ _ _"}] },
        { titulo: "GUERRAS INTERNACIONALES", inicio: "1910D", fin: "2000D", imagenes: [{ src: "images/LFGame/historia/historia-guerra-primera.jpg", caption: "La Gran Guerra" }, { src: "images/LFGame/historia/historia-guerra-segunda.jpg", caption: "La Guerra Total" }, { src: "images/LFGame/historia/historia-guerra-fria.jpg", caption: "La Guerra sin Disparos" }, { src: "images/LFGame/historia/historia-guerra-malvinas.jpg", caption: "Los piratas nos robaron"}] },
        { titulo: "PRESIDENTES ARGENTINOS", inicio: "1810D", fin: "1990D", imagenes: [{ src: "images/LFGame/historia/historia-pres-rivadavia.jpg", caption: "Primera Junta" }, { src: "images/LFGame/historia/historia-pres-sarmiento.jpg", caption: "El fundador de escuelas" }, { src: "images/LFGame/historia/historia-pres-peron.jpg", caption: "Tres Presidencias" }, { src: "images/LFGame/historia/historia-pres-alfonsin.jpg", caption: "Vuelta de la Democracia"}] },
        { titulo: "MODA", inicio: "1800A", fin: "2014D", imagenes: [{ src: "images/LFGame/historia/historia-moda-1810.jpg", caption: "Muy Colonial" }, { src: "images/LFGame/historia/historia-moda-1900.jpg", caption: "Ajustado a la Cintura" }, { src: "images/LFGame/historia/historia-moda-1980.jpg", caption: "Colorido" }, { src: "images/LFGame/historia/historia-moda-2014.jpg", caption: "Todo Cortito"}] },
        { titulo: "INVENTOS I", inicio: "18000A", fin: "1000A", imagenes: [{ src: "images/LFGame/historia/historia-inventos1-casamamut.jpg", caption: "Ahi vivian" }, { src: "images/LFGame/historia/historia-inventos1-fuego.jpg", caption: "Cocina y Calefaccion" }, { src: "images/LFGame/historia/historia-inventos1-hacha.jpg", caption: "Arma y Herramienta" }, { src: "images/LFGame/historia/historia-inventos1-rueda.jpg", caption: "Movilidad"}] },
        { titulo: "INVENTOS II", inicio: "1500D", fin: "1850D", imagenes: [{ src: "images/LFGame/historia/historia-inventos2-microscopio.jpg", caption: "Veamos adentro" }, { src: "images/LFGame/historia/historia-inventos2-relojpendulo.jpg", caption: "¿Qué hora es?" }, { src: "images/LFGame/historia/historia-inventos2-maquinavapor.jpg", caption: "Primer Motor" }, { src: "images/LFGame/historia/historia-inventos2-trenvapor.jpg", caption: "Trasnporte"}] },
        { titulo: "INVENTOS III", inicio: "1850D", fin: "1950D", imagenes: [{ src: "images/LFGame/historia/historia-inventos3-telefono.jpg", caption: "Te llamo mas tarde" }, { src: "images/LFGame/historia/historia-inventos3-lampara.jpg", caption: "Y se hizo la luz" }, { src: "images/LFGame/historia/historia-inventos3-automovil.jpg", caption: "Vamos de paseo" }, { src: "images/LFGame/historia/historia-inventos3-birome.jpg", caption: "Made in Argentina"}] }
    ];

//FUNCIONES QUE SE USAN MAS ADELANTE

function crearDivContenedor(indice) {
    var ej = ejercicios[indice];
    $("#nivel").append("<h5>" + ej.titulo + "</h5>");
    $("#nivel").append("<div class='filaContenedora'></div>");
    var contenedor = $("#nivel").children().last();
    crearAnioFijo(contenedor, "izquierda", ej.inicio.trim());
    var imgClonadas = ej.imagenes.slice(0);
    crearLiDesordenados(contenedor, imgClonadas);
    crearAnioFijo(contenedor, "derecha", ej.fin.trim());
    $("#nivel").append("<br />");
}

function crearAnioFijo(contenedor,lado,anio) {
    $(contenedor).append("<div class='anioFijo'></div>");
    var divAnio = $(contenedor).find("div").last();
    divAnio.addClass(lado);
    if (anio.length == 6) {
        divAnio.addClass("fiveNumbers");
    }
    for (var i = 0; i < anio.length; i++) {
        if (anio.charAt(i) == " ") {
            divAnio.append("<span>&nbsp;</span>");
        } else if (!(isNaN(anio.charAt(i)))) {
            divAnio.append("<span>" + anio.charAt(i) + "</span>");
        } else {
            divAnio.append("<span class='era'>" + anio.charAt(i) + "</span>");
        }
        
    }
}

function crearLiDesordenados(contenedor, imagenes) {
    $(contenedor).append("<ul class='opciones'></ul>");
    imagenes.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i<imagenes.length ; i++) {
        $(contenedor).find("ul").append("<li class='opcion'><figure><img src=" + imagenes[i].src + " alt='historia' /><figcaption>" + imagenes[i].caption + "</figcaption></figure></li>");
    }
}

function corregirTodos() {
    var filas = $("div.filaContenedora");
    var resultado = true;
    for (var i = 0; i < 3; i++) { 
        if (!corregirUno(ejercicios[indicesElegidos[i]], filas[i])) {
            resultado = false;
            $(filas[i]).css("background-color", "Lightpink");
        } else {
        
        }
    }
    return resultado;
}

function corregirUno(ejercicio, fila) {
    var imgs = $(fila).find("img");
    for (var e = 0; e < 4; e++) {
        if ($(imgs[e]).attr("src") != ejercicio.imagenes[e].src) {
            return false;
        }
    }
    return true;
}




//READY DEL DOCUMENTO

$(document).ready(function () {
    $("div#errores").hide();
    // Instantiate a counter
    clock = new FlipClock($('.clock'), 120, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true,
        stop: function () {
            alert("El tiempo se acabo");
            window.location.replace("TimeOut.html?NivelHistoria.html");
        }
    });

    $("#btnContinuar").on("click", function () {
        if ($(this).val() == "Corregir!") {
            if (corregirTodos()) {
                $("#btnContinuar").val("Continuar >>");
                $("#btnContinuar").css("background-color", "lightgreen");
                clock.setTime(1000);
            } else {
                $("#btnContinuar").attr("disabled", true);
                $("#btnContinuar").css("background-color", "lightcoral");
                $("#btnContinuar").css("cursor", "auto");
                $("div#errores span").text("Tenes 30 segundos para revisar lo que has hecho mal. APROVECHALOS");
                $("div#errores").fadeIn();
                clock.setTime(30);
            }
        } else {
            alert("terminaste el juego");
        }

    });


    var cantEjercicios = ejercicios.length;

    //SI SE AGREGAN EJERCICIOS: HAY QUE CAMBIAR EL VALOR DE ESTA VARIBLE
    var intervalo = 1 / cantEjercicios;
    while (indicesElegidos.length < 3) {
        var aleatorio = Math.random();
        var indEjTentativo = Math.floor(aleatorio / intervalo);
        if (indicesElegidos.indexOf(indEjTentativo) == -1) {
            indicesElegidos.push(indEjTentativo);
            crearDivContenedor(indEjTentativo);
        }
    };


    $("ul.opciones").sortable({
        axis: "x"

    });

    $("ul.opciones").disableSelection();

});