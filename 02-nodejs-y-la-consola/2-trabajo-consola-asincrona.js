// La forma más sencilla de interacción es mediante la consola

// Versión básica de interacción con la consola
(function () {
	"use strict";
	// Se abre un buffer para repuerar la entrada del usuario
	var stdin = process.stdin;

	var nombre = 'Anónimo';
	var edad = 43;

	console.log("¿Cómo te llamas ?");

	// el buffer emite eventos
	// a los eventos se responde con callbacks
	// así funiona el mundo asíncrono
	// el primer parámetro "data" es en nombre de un evento y el segundo la función a la que llamará.
	stdin.once("data", function(datos){ // función callback que se ejecutara en respuesta al evento
		nombre = datos.toString();
		imprimir();
	});


	function imprimir() {
		console.log(nombre + " tiene " + edad + " años");
	}

}());
