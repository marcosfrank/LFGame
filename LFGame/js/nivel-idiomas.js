
/// <reference path="jquery-1.10.2.min.js" />
/// <reference path="jquery-ui.min.js" />
  var clock;

//Cada ejercicio tendra los siguientes atributos:
//codigo: Codigo del ejercicio (entero)
//antes: Es el texto que va antes de las opciones (texto)
//despues: Es el texto que va despues de las opciones(texto)
//opciones: Son las opciones posibles que puede elegir el jugador(array de op). 
//	valor: es el valor de la opcion (texto)
//	correcto: indica si es la opcion correcto (booleano)
var ejercicios = [
	    { codigo: 1, antes: "I usually study", despues: "Home on the afternoon.", opciones: [{ valor: "on", correcto: false }, { valor: "at", correcto: true }, { valor: "in", correcto: false}] },
	    { codigo: 2, antes: "I was ", despues: "Marcos' house playing computer games.", opciones: [{ valor: "at", correcto: true }, { valor: "in", correcto: false }, { valor: "on", correcto: false}] },
	    { codigo: 3, antes: "My new house is", despues: "155 Ana Maria Janer Street. My oldest one, is near too.", opciones: [{ valor: "at", correcto: true }, { valor: "in", correcto: false }, { valor: "on", correcto: false}] },
	    { codigo: 4, antes: "Mama hurry up! I'm standing up", despues: "the door.", opciones: [{ valor: "at", correcto: true }, { valor: "in", correcto: false }, { valor: "on", correcto: false}] },
	    { codigo: 5, antes: "I passed all my last holidays", despues: "the beach. Sand, sun, sea. Ohhh!", opciones: [{ valor: "on", correcto: true }, { valor: "at", correcto: false }, { valor: "in", correcto: false}] },
	    { codigo: 6, antes: "I spent all the morning", despues: "a bus.", opciones: [{ valor: "on", correcto: true }, { valor: "at", correcto: false }, { valor: "in", correcto: false}] },
	    { codigo: 7, antes: "Drive straight for 300 metres,and you'll have your destiny", despues: "the left.", opciones: [{ valor: "on", correcto: true }, { valor: "at", correcto: false }, { valor: "in", correcto: false}] },
	    { codigo: 8, antes: "I lived all my life", despues: "Argentina.", opciones: [{ valor: "in", correcto: true }, { valor: "at", correcto: false }, { valor: "on", correcto: false}] },
	    { codigo: 9, antes: "I want to be near my parents so, I'll live", despues: "Ceres.", opciones: [{ valor: "in", correcto: true }, { valor: "at", correcto: false }, { valor: "on", correcto: false}] },
	    { codigo: 10, antes: "I was locked", despues: "the bedroom for four hours.", opciones: [{ valor: "in", correcto: true }, { valor: "on", correcto: false }, { valor: "at", correcto: false}] },
	    { codigo: 11, antes: "That's an extrange sentence. I read it one time", despues: "a book.", opciones: [{ valor: "in", correcto: true }, { valor: "at", correcto: false }, { valor: "on", correcto: false}] },
	    { codigo: 12, antes: "I was", despues: "in the race. It's an excellent result for me.", opciones: [{ valor: "second", correcto: true }, { valor: "3rd", correcto: false }, { valor: "three", correcto: false}] },
	    { codigo: 13, antes: "I ", despues: "an awful movie yesterday. It was a terror one.", opciones: [{ valor: "saw", correcto: true }, { valor: "see", correcto: false }, { valor: "am seeing", correcto: false}] },
	    { codigo: 14, antes: "You", despues: "English right now. Come on!", opciones: [{ valor: "are learning", correcto: true }, { valor: "learn", correcto: false }, { valor: "learned", correcto: false}] },
	    { codigo: 15, antes: "It's an", despues: "building. Look at that awesome roof.", opciones: [{ valor: "interesting", correcto: true }, { valor: "interested", correcto: false }, { valor: "interest", correcto: false}] },
	    { codigo: 16, antes: "I'm", despues: "about my English exams. They're so difficult", opciones: [{ valor: "worried", correcto: true }, { valor: "worry", correcto: false }, { valor: "worring", correcto: false}] },
	    { codigo: 17, antes: "I", despues: "Leandro Frank. I have short brown-coloured hair. My eyes too.", opciones: [{ valor: "am", correcto: true }, { valor: "was", correcto: false }, { valor: "will be", correcto: false}] },
	    { codigo: 18, antes: "Don't worry, I", despues: "careful tomorrow at the show.", opciones: [{ valor: "will be", correcto: true }, { valor: "were", correcto: false }, { valor: "was", correcto: false}] },
    ];

//FUNCIONES QUE SE USAN MAS ADELANTE

function crearDivContenedor(indice) {
    var c = $("#contenedorPadre");
    var ej = ejercicios[indice];
    c.append("<div class='contenedor'></div>");
    var cont = c.children().last();
    //    cont.append("<div class='fijo'>" + ej.antes + "</div>");
    crearAppend(cont,"fijo",ej.antes);
    var ordenDivs = [];
    //Hasta ej.opciones.length -1 porque el ultimo elemento no lo sorteo, lo asigno directo
    while (ordenDivs.length < (ej.opciones.length - 1)) {
        var indOpTentativo = Math.floor(Math.random() / (1 / ej.opciones.length));
        if (ordenDivs.indexOf(indOpTentativo) == -1) {
            ordenDivs.push(indOpTentativo);
            //            cont.append("<div class='opcion'>" + ej.opciones[indOpTentativo].valor + "</div>");
            crearAppend(cont, "opcion", ej.opciones[indOpTentativo].valor);
        }
    }
    //Asignacion del elemento restante. Se puede utilizar el mismo array ordenDivs
    for (var indice = 0; indice <= ordenDivs.length; indice++) {
        if (ordenDivs.indexOf(indice) == -1) {
            crearAppend(cont, "opcion", ej.opciones[indice].valor);
//            cont.append("<div class='opcion'>" + ej.opciones[indice].valor + "</div>");
            break;
        }
    }
    //cont.append("<div class='fijo'>" + ej.despues + "</div>");
    crearAppend(cont, "fijo", ej.despues);
}

function crearAppend(contenedor, clase, texto) {
    if (texto.trim()!="") {
        contenedor.append("<div class="+ clase +">" + texto + "</div>");
    }
}

function getRespuestaCorrecta(ejercicio) {
    for (var i = 0; i < ejercicio.opciones.length; i++) {
        if (ejercicio.opciones[i].correcto) {
            return ejercicio.opciones[i].valor;
        }
    }
    return "";
}

//READY DEL DOCUMENTO


$(document).ready(function () {

    // Instantiate a counter
    clock = new FlipClock($('.clock'), 1000, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true,
        stop: function () {
            alert("El tiempo se acabo");
            window.location.replace("http://www.google.com");
        }
    });

    var indicesElegidos = [];
    //SI SE AGREGAN EJERCICIOS: HAY QUE CAMBIAR EL VALOR DE ESTA VARIBLE
    var cantidadEjercicios = 18;
    var intervalo = 1 / 18;
    while (indicesElegidos.length < 6) {
        var aleatorio = Math.random();
        var indEjTentativo = Math.floor(aleatorio / intervalo);
        if (indicesElegidos.indexOf(indEjTentativo) == -1) {
            indicesElegidos.push(indEjTentativo);
            crearDivContenedor(indEjTentativo);
        }
    };


    $("div.opcion").on("click", function () {
        if ($(this).hasClass("seleccionado")) {
            $(this).addClass("seleccionado");
        } else {
            $(this).parent().find("div.seleccionado").removeClass("seleccionado");
            $(this).addClass("seleccionado");
        }
    });

    $("#btnContinuar").on("click", function () {

        if ($("#contenedorPadre div.seleccionado").length == 6) {
            var contenedores = $("#contenedorPadre div.contenedor");
            var sinError = true;
            for (var i = 0; i < 6; i++) {
                //Toma el div contenedor actual
                var actual = contenedores.first();
                var respCorrecta = getRespuestaCorrecta(ejercicios[indicesElegidos[i]]);
                if (respCorrecta != actual.find(".seleccionado").text()) {
                    actual.find(".seleccionado").addClass("error");
                    sinError = false;
                }
                //Quita el primer contenedor de la lista
                contenedores = contenedores.next();
            }
            if (sinError) {
                alert('muy bien');
            } else {
                clock.setTime(30);
                alert('Tienes algunos errores.\n Tenes 30 segundos para revisar lo que has hecho mal.\n\t APROVECHALOS');
            }
        } else {
            clock.setTime(5);
            alert('Debes seleccionar la respuesta en los 6 ejercicios.\n Tenes 5 segundos para revisar lo que has hecho mal.\n\t APROVECHALOS');
        }

    });

});

