$(document).ready(function () {
   $("div#errores").hide();
   habilitarPaginacion(4);
	//OBJETO EJERCICIO
	function pelicula(nom, dir, act, src, osc ) {
		this.nombre = nom,
		this.director = dir,
		this.actor = act,
		this.source = src,
		this.oscars = osc
 
	};


	function crearLIDesordenados() {
		//DIRECTORES
		var arrayDirectores = ejerciciosElegidos.slice(0);
		arrayDirectores = arrayDirectores.sort(function () { return Math.random() - 0.5 });
		//ACTORES
		var arrayActores = ejerciciosElegidos.slice(0);
		arrayActores = arrayActores.sort(function () { return Math.random() - 0.5 });
		//OSCAR
		var arrayOscars = ejerciciosElegidos.slice(0);
		arrayOscars = arrayOscars.sort(function () { return Math.random() - 0.5 });
		//FOTOS
		var arrayFotos = ejerciciosElegidos.slice(0);
		arrayFotos = arrayFotos.sort(function () { return Math.random() - 0.5 });

		for (i = 0; i < 4; i++) {
			$('ul#opcionesDirectores').append("<li class='directores'>" + arrayDirectores[i].director + "</li>");
			$('ul#opcionesActores').append("<li class='actor'>" + arrayActores[i].actor + "</li>");
			$('ul#opcionesOscars').append("<li class='oscars'>" + arrayOscars[i].oscars + "</li>");
			$('ul#opcionesScreenshot').append("<li class='screenshot'><img width='300' height='300' alt='sample-image' src='images/LFGame/" + arrayFotos[i].source + ".jpg'></li>");
		}
		
		
	}

	//EJERCICIOS
	var ej1 = new pelicula("HARRY POTTER V: LA ORDEN DEL FENIX", "David Yates", "Daniel Radcliffe", "espectaculo1", 0);
	var ej2 = new pelicula("EL SEÑOR DE LOS ANILLOS III: EL RETORNO DEL REY", "Peter Jackson", "Viggo Mortensen", "espectaculo2", 11);
	var ej3 = new pelicula("GLADIADOR", "Ridley Scott", "Russell Crowe", "espectaculo3", 5);
	var ej4 = new pelicula("STAR WARS III: UNA NUEVA ESPERANZA", "George Lucas", "Harrison Ford", "espectaculo4", 7);
	var ej5 = new pelicula("EL PADRINO II", "Francis Ford Coppola", "Al Pacino", "espectaculo5", 6);
	var ej6 = new pelicula("EL ULTIMATUM BOURNE", "Paul Greengrass", "Matt Damon", "espectaculo6", 3);
	var ej7 = new pelicula("TOP GUN", "Tony Scott", "Tom Cruise", "espectaculo7", 1);
	var ej8 = new pelicula("INFILTRADOS", "Martin Scorsese", "Leonardo Di Caprio", "espectaculo8", 4);

	//SELECCION DEL EJERCICIO QUE SE VA A EVALUAR
	//Variable que hay que setear con la cantidad de ejercicios en total que posee el nivel de matematica
	var cantidadEjercicios = 8;
	var intervalo = 1 / cantidadEjercicios;
	var ejerciciosElegidos = [];

	while (ejerciciosElegidos.length < 4) {
		var random = Math.random();
		if (random <= intervalo * 1) { if (ejerciciosElegidos.indexOf(ej1) == -1) { ejerciciosElegidos.push(ej1); } }
		else if (random <= intervalo * 2) { if (ejerciciosElegidos.indexOf(ej2) == -1) { ejerciciosElegidos.push(ej2); } }
		else if (random <= intervalo * 3) { if (ejerciciosElegidos.indexOf(ej3) == -1) { ejerciciosElegidos.push(ej3); } }
		else if (random <= intervalo * 4) { if (ejerciciosElegidos.indexOf(ej4) == -1) { ejerciciosElegidos.push(ej4); } }
		else if (random <= intervalo * 5) { if (ejerciciosElegidos.indexOf(ej5) == -1) { ejerciciosElegidos.push(ej5); } }
		else if (random <= intervalo * 6) { if (ejerciciosElegidos.indexOf(ej6) == -1) { ejerciciosElegidos.push(ej6); } }
		else if (random <= intervalo * 7) { if (ejerciciosElegidos.indexOf(ej7) == -1) { ejerciciosElegidos.push(ej7); } }
		else if (random <= intervalo * 8) { if (ejerciciosElegidos.indexOf(ej8) == -1) { ejerciciosElegidos.push(ej8); } }
	};

 
	
	function corregirTodos(){
		var resolucion = true;
		for (var i=0; i < ejerciciosElegidos.length; i++){
			var indice = i +1;
			var contenedor = "contPelicula" + indice;
			if(!comparaEjercicioResolucion(ejerciciosElegidos[i],contenedor)){
				resolucion = false;
			}
		}
		return resolucion;
	}

	function comparaEjercicioResolucion(ejercicio,contendorSolucion){
		//contenedorSolucion es el id del UL de la solucion
		//ejercicio es el objeto pelicula correspondiente
		contendorSolucion = "#"+contendorSolucion;

		if($(contendorSolucion).find('li.directores').length==0 || $(contendorSolucion).find('li.actor').length==0 || $(contendorSolucion).find('li.oscars').length==0 || $(contendorSolucion).find('li.screenshot').length==0){
			$(contendorSolucion).removeClass('sinErrores');
			$(contendorSolucion).addClass('conErrores');
			return false;
		}else if($('ul#contPelicula1').find('li').length!=4){
			$(contendorSolucion).removeClass('sinErrores');
			$(contendorSolucion).addClass('conErrores');
			return false;
		}else if($(contendorSolucion).find('li.directores').text()!= ejercicio.director || $(contendorSolucion).find('li.actor').text()!= ejercicio.actor || $(contendorSolucion).find('li.oscars').text() != ejercicio.oscars || $(contendorSolucion).find('li.screenshot img').attr('src')!= ("images/LFGame/" + ejercicio.source + ".jpg")){
			$(contendorSolucion).removeClass('sinErrores');
			$(contendorSolucion).addClass('conErrores');
			return false;
		}else{
			$(contendorSolucion).removeClass('conErrores');
			$(contendorSolucion).addClass('sinErrores');
			return true;
		}
	}
	

	// Instantiate a counter
	var clock;
	clock = new FlipClock($('.clock'), 120, {
		clockFace: 'Counter',
		autoStart: true,
		countdown: true,
		stop: function () {
			window.location.replace("TimeOut.html");
		}
	});

	$("span#titulo1").text(ejerciciosElegidos[0].nombre);
	$("span#titulo2").text(ejerciciosElegidos[1].nombre);
	$("span#titulo3").text(ejerciciosElegidos[2].nombre);
	$("span#titulo4").text(ejerciciosElegidos[3].nombre);
	crearLIDesordenados();

    $("ul.contenedor").droppable();

	$("ul.contenedor").sortable({
		connectWith: 'ul.contenedor',
		placeholder: 'placeholder',
		forcePlaceHolderSize: true,
	});

	$("ul.opciones li").draggable({
		connectToSortable: ".contenedor",
		revert: "invalid"
	});

    
	
	$("#btnContinuar").on("click", function () {
        if ($(this).val() == "Corregir!") {
            if(corregirTodos()){
			    //SI ESTAN TODOS BIEN
			    $("#btnContinuar").val("Continuar >>");
                $("#btnContinuar").css("background-color", "lightgreen");
                clock.setTime(1000);
		    }else{
                $("#btnContinuar").attr("disabled", true);
                $("#btnContinuar").css("background-color", "lightcoral");
                $("#btnContinuar").css("cursor", "auto");
                $("div#errores span").text("Hay algunos errores. Tenes 15 segundos para revisar lo que has hecho mal. APROVECHALOS");
                $("div#errores").fadeIn();
                clock.setTime(15);
		    }
        }else{
            
            localStorage.setItem("nivelActual", "5");
            window.location.replace("NivelHistoria.html");
        }
		
		
	});

});




