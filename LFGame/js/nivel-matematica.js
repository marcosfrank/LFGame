
$(document).ready(function () {

    var clock;
    // Instantiate a counter
    clock = new FlipClock($('.clock'), 1000, {
        clockFace: 'Counter',
        autoStart: true,
        countdown: true,
        stop: function () {
            window.location.replace("TimeOut.html");
        }
    });


    //SELECCION DEL EJERCICIO QUE SE VA A EVALUAR

    //Variable que hay que setear con la cantidad de ejercicios en total que posee el nivel de matematica
    var cantidadEjercicios = 4;
    var intervalo = 1 / cantidadEjercicios;
    var division = Math.random();
    //Variable que guarda el ejercicio elegido
    var ejercicioElegido;
    if (division <= intervalo) {
        ejercicioElegido = 1;
        $('div#funcion_matematica').append("<img width='300' height='300' class='pull-left' alt='sample-image' src='images/LFGame/matematica1.png'>");
        setCoordenada("X", "-2")
    } else if (division <= (intervalo * 2)) {
        ejercicioElegido = 2;
        $('div#funcion_matematica').append("<img width='300' height='300' class='pull-left' alt='sample-image' src='images/LFGame/matematica2.png'>");
        setCoordenada("X", "1,57")
    } else if (division <= (intervalo * 3)) {
        ejercicioElegido = 3;
        $('div#funcion_matematica').append("<img width='300' height='300' class='pull-left' alt='sample-image' src='images/LFGame/matematica3.png'>");
        setCoordenada("Y", "-1")
    }
    else if (division <= (intervalo * 4)) {
        ejercicioElegido = 4;
        $('div#funcion_matematica').append("<img width='300' height='300' class='pull-left' alt='sample-image' src='images/LFGame/matematica4.png'>");
        setCoordenada("Y", "1,38")
    }


    function setCoordenada(eje, valor) {
        var coordenada = "";
        if (eje === "X") { coordenada = $('#txtCoordenadaX') } else { coordenada = $('#txtCoordenadaY') }
        coordenada.val(valor);
        coordenada.attr("disabled", "disabled");
        coordenada.attr("style", "color:brown");
    }
    //Botones [ ( -
    $(".llaveParentesisAbre").on("click", function () {
        var valor = $(this).val();
        switch (valor) {
            case "-":
                $(this).val("[");
                break;
            case "[":
                $(this).val("(");
                break;
            case "(":
                $(this).val("-");
                break;
        }
    });

    //Botones ] ) -
    $(".llaveParentesisCierra").on("click", function () {
        var valor = $(this).val();
        switch (valor) {
            case "-":
                $(this).val("]");
                break;
            case "]":
                $(this).val(")");
                break;
            case ")":
                $(this).val("-");
                break;
        }
    });

    //Botones ; , / |
    $(".comaPuntoComaBarra").on("click", function () {
        var valor = $(this).val();
        switch (valor) {
            case "/":
                $(this).val("|");
                break;
            case "|":
                $(this).val(",");
                break;
            case ",":
                $(this).val(";");
                break;
            case ";":
                $(this).val("/");
                break;
        }
    });


    $("#btnContinuar").on("click", function () {
        switch (ejercicioElegido) {
            case 1:
                if (corregirE1()) {
                    $("div#errores").fadeOut();
                } else {
                    $("div#errores").fadeIn();
                    clock.setTime(30);
                    alert('Tenes 30 segundos para revisar lo que has hecho mal. APROVECHALOS');
                }
                break;
            case 2:
                if (corregirE2()) {
                    $("div#errores").fadeOut();
                } else {
                    $("div#errores").fadeIn();
                    clock.setTime(30);
                    alert('Tenes 30 segundos para revisar lo que has hecho mal. APROVECHALOS');
                }
                break;
            case 3:
                if (corregirE3()) {
                    $("div#errores").fadeOut();
                } else {
                    $("div#errores").fadeIn();
                    clock.setTime(30);
                    alert('Tenes 30 segundos para revisar lo que has hecho mal. APROVECHALOS');
                }
                break;
            case 4:
                if (corregirE4()) {
                    $("div#errores").fadeOut();
                } else {
                    $("div#errores").fadeIn();
                    clock.setTime(30);
                    alert('Tenes 30 segundos para revisar lo que has hecho mal. APROVECHALOS');

                }
                break;
        }
    });


    //CorreccionEjercicio1
    function corregirE1() {
        var resultado = true;
        //HAGO IF SEPARADOS POR SI QUIERO MOSTRAR MENSAJES
        //Dominio
        if ($("#btnCorcheteDominioInicio").val().trim() !== "(" || $("#txtValorDominioInicio").val().trim() !== "-4" || $("#btnComaDominio").val().trim() !== ";" || $("#txtValorDominioFinal").val().trim() !== "0" || $("#btnCorcheteDominioFinal").val().trim() !== "]") {
            $("ul#listaErrores").find("li#dominio").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#dominio").hide(); }
        //Imagen
        if ($("#btnCorcheteImagenInicio").val().trim() !== "[" || $("#txtValorImagenInicio").val().trim() !== "-1" || $("#btnComaImagen").val().trim() !== ";" || $("#txtValorImagenFinal").val().trim() !== "3" || $("#btnCorcheteImagenFinal").val().trim() !== "]") {
            $("ul#listaErrores").find("li#imagen").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#imagen").hide(); }
        //Raices   
        if ($("#txtRaiz1").val().trim() !== "-3" || $("#txtRaiz2").val().trim() !== "-1" || $("#txtRaiz3").val().trim() !== "") {
            $("ul#listaErrores").find("li#raices").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#raices").hide(); }
        //Punto   
        if ($("#txtCoordenadaX").val().trim() !== "-2" || $("#txtCoordenadaY").val().trim() !== "-1") {
            $("ul#listaErrores").find("li#punto").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#punto").hide(); }
        //Ordenada al origen   
        if ($("#txtOrdenadaAlOrigen").val().trim() !== "3") {
            $("ul#listaErrores").find("li#ordenada").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#ordenada").hide(); }
        //Abscisa al origen   
        if ($("#txtAbscisaAlOrigen").val().trim() !== "") {
            $("ul#listaErrores").find("li#abscisa").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#abscisa").hide(); }
        //Intervalo de Crecimiento
        if ($("#btnCorcheteICrecimientoInicio").val().trim() !== "(" || $("#txtValorICrecimientoInicio").val().trim() !== "-2" || $("#btnComaICrecimiento").val().trim() !== ";" || $("#txtValorICrecimientoFinal").val().trim() !== "0" || $("#btnCorcheteICrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#crecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#crecimiento").hide(); }
        //Intervalo de Decrecimiento
        if ($("#btnCorcheteIDecrecimientoInicio").val().trim() !== "(" || $("#txtValorIDecrecimientoInicio").val().trim() !== "-4" || $("#btnComaIDecrecimiento").val().trim() !== ";" || $("#txtValorIDecrecimientoFinal").val().trim() !== "-2" || $("#btnCorcheteIDecrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#decrecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#decrecimiento").hide(); }
        return resultado;
    }

    //CorreccionEjercicio2
    function corregirE2() {
        var resultado = true;
        //HAGO IF SEPARADOS POR SI QUIERO MOSTRAR MENSAJES
        //Dominio
        if ($("#btnCorcheteDominioInicio").val().trim() !== "[" || $("#txtValorDominioInicio").val().trim() !== "-3" || $("#btnComaDominio").val().trim() !== ";" || $("#txtValorDominioFinal").val().trim() !== "3" || $("#btnCorcheteDominioFinal").val().trim() !== "]") {
            $("ul#listaErrores").find("li#dominio").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#dominio").hide(); }
        //Imagen
        if ($("#btnCorcheteImagenInicio").val().trim() !== "(" || $("#txtValorImagenInicio").val().trim() !== "0" || $("#btnComaImagen").val().trim() !== ";" || $("#txtValorImagenFinal").val().trim() !== "3" || $("#btnCorcheteImagenFinal").val().trim() !== "]") {
            $("ul#listaErrores").find("li#imagen").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#imagen").hide(); }
        //Raices   
        if ($("#txtRaiz1").val().trim() !== "" || $("#txtRaiz2").val().trim() !== "" || $("#txtRaiz3").val().trim() !== "") {
            $("ul#listaErrores").find("li#raices").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#raices").hide(); }
        //Punto   
        if ($("#txtCoordenadaX").val().trim() !== "1,57" || $("#txtCoordenadaY").val().trim() !== "") {
            $("ul#listaErrores").find("li#punto").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#punto").hide(); }
        //Ordenada al origen   
        if ($("#txtOrdenadaAlOrigen").val().trim() !== "1") {
            $("ul#listaErrores").find("li#ordenada").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#ordenada").hide(); }
        //Abscisa al origen   
        if ($("#txtAbscisaAlOrigen").val().trim() !== "") {
            $("ul#listaErrores").find("li#abscisa").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#abscisa").hide(); }
        //Intervalo de Crecimiento
        if ($("#btnCorcheteICrecimientoInicio").val().trim() !== "(" || $("#txtValorICrecimientoInicio").val().trim() !== "-1,57" || $("#btnComaICrecimiento").val().trim() !== ";" || $("#txtValorICrecimientoFinal").val().trim() !== "0" || $("#btnCorcheteICrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#crecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#crecimiento").hide(); }
        //Intervalo de Decrecimiento
        if ($("#btnCorcheteIDecrecimientoInicio").val().trim() !== "(" || $("#txtValorIDecrecimientoInicio").val().trim() !== "-2,36" || $("#btnComaIDecrecimiento").val().trim() !== ";" || $("#txtValorIDecrecimientoFinal").val().trim() !== "-1,57" || $("#btnCorcheteIDecrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#decrecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#decrecimiento").hide(); }
        return resultado;
    }


    //CorreccionEjercicio3
    function corregirE3() {
        var resultado = true;
        //HAGO IF SEPARADOS POR SI QUIERO MOSTRAR MENSAJES
        //Dominio
        if ($("#btnCorcheteDominioInicio").val().trim() !== "(" || $("#txtValorDominioInicio").val().trim() !== "-1" || $("#btnComaDominio").val().trim() !== ";" || $("#txtValorDominioFinal").val().trim() !== "2" || $("#btnCorcheteDominioFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#dominio").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#dominio").hide(); }
        //Imagen
        if ($("#btnCorcheteImagenInicio").val().trim() !== "(" || $("#txtValorImagenInicio").val().trim() !== "-3" || $("#btnComaImagen").val().trim() !== ";" || $("#txtValorImagenFinal").val().trim() !== "3" || $("#btnCorcheteImagenFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#imagen").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#imagen").hide(); }
        //Raices   
        if ($("#txtRaiz1").val().trim() !== "0,5" || $("#txtRaiz2").val().trim() !== "" || $("#txtRaiz3").val().trim() !== "") {
            $("ul#listaErrores").find("li#raices").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#raices").hide(); }
        //Punto   
        if ($("#txtCoordenadaX").val().trim() !== "1" || $("#txtCoordenadaY").val().trim() !== "-1") {
            $("ul#listaErrores").find("li#punto").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#punto").hide(); }
        //Ordenada al origen   
        if ($("#txtOrdenadaAlOrigen").val().trim() !== "1") {
            $("ul#listaErrores").find("li#ordenada").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#ordenada").hide(); }
        //Abscisa al origen   
        if ($("#txtAbscisaAlOrigen").val().trim() !== "0,5") {
            $("ul#listaErrores").find("li#abscisa").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#abscisa").hide(); }
        //Intervalo de Crecimiento
        if ($("#txtValorICrecimientoInicio").val().trim() !== "" || $("#txtValorICrecimientoFinal").val().trim() !== "") {
            $("ul#listaErrores").find("li#crecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#crecimiento").hide(); }
        //Intervalo de Decrecimiento
        if ($("#btnCorcheteIDecrecimientoInicio").val().trim() !== "(" || $("#txtValorIDecrecimientoInicio").val().trim() !== "-1" || $("#btnComaIDecrecimiento").val().trim() !== ";" || $("#txtValorIDecrecimientoFinal").val().trim() !== "2" || $("#btnCorcheteIDecrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#decrecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#decrecimiento").hide(); }
        return resultado;
    }

    function corregirE4() {
        var resultado = true;
        //HAGO IF SEPARADOS POR SI QUIERO MOSTRAR MENSAJES
        //Dominio
        if ($("#btnCorcheteDominioInicio").val().trim() !== "[" || $("#txtValorDominioInicio").val().trim() !== "-2" || $("#btnComaDominio").val().trim() !== ";" || $("#txtValorDominioFinal").val().trim() !== "3" || $("#btnCorcheteDominioFinal").val().trim() !== "]") {
            $("ul#listaErrores").find("li#dominio").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#dominio").hide(); }
        //Imagen
        if ($("#btnCorcheteImagenInicio").val().trim() !== "[" || $("#txtValorImagenInicio").val().trim() !== "-2" || $("#btnComaImagen").val().trim() !== ";" || $("#txtValorImagenFinal").val().trim() !== "2" || $("#btnCorcheteImagenFinal").val().trim() !== "]") {
            $("ul#listaErrores").find("li#imagen").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#imagen").hide(); }
        //Raices   
        if ($("#txtRaiz1").val().trim() !== "0" || $("#txtRaiz2").val().trim() !== "" || $("#txtRaiz3").val().trim() !== "") {
            $("ul#listaErrores").find("li#raices").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#raices").hide(); }
        //Punto   
        if ($("#txtCoordenadaX").val().trim() !== "1,38" || $("#txtCoordenadaY").val().trim() !== "1,38") {
            $("ul#listaErrores").find("li#punto").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#punto").hide(); }
        //Ordenada al origen   
        if ($("#txtOrdenadaAlOrigen").val().trim() !== "0") {
            $("ul#listaErrores").find("li#ordenada").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#ordenada").hide(); }
        //Abscisa al origen   
        if ($("#txtAbscisaAlOrigen").val().trim() !== "0") {
            $("ul#listaErrores").find("li#abscisa").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#abscisa").hide(); }
        //Intervalo de Crecimiento
        if ($("#btnCorcheteICrecimientoInicio").val().trim() !== "(" || $("#txtValorICrecimientoInicio").val().trim() !== "-2" || $("#btnComaICrecimiento").val().trim() !== ";" || $("#txtValorICrecimientoFinal").val().trim() !== "1,38" || $("#btnCorcheteICrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#crecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#crecimiento").hide(); }
        //Intervalo de Decrecimiento
        if ($("#btnCorcheteIDecrecimientoInicio").val().trim() !== "(" || $("#txtValorIDecrecimientoInicio").val().trim() !== "1,38" || $("#btnComaIDecrecimiento").val().trim() !== ";" || $("#txtValorIDecrecimientoFinal").val().trim() !== "2" || $("#btnCorcheteIDecrecimientoFinal").val().trim() !== ")") {
            $("ul#listaErrores").find("li#decrecimiento").show();
            resultado = false;
        } else { $("ul#listaErrores").find("li#decrecimiento").hide(); }
        return resultado;
    }

    //FIN ARCHIVO
});