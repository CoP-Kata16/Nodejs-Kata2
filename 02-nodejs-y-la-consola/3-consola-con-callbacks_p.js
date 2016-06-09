 //Versión más elaborada con callbacks
(function () {
	"use strict";
	// ahora vmos a escribir también en otro buffer
	var stdin = process.stdin,
		stdout = process.stdout; // buffer de salida hacia la conola

	//TODO: definir objeto persona


	//TODO: Llamar a la función "preguntar", para que pregunte"¿Cómo te llamas ?" y que guarde nombre
	

	function preguntar(pregunta, procesoPosterior) {
		
		// TODO: mostar pregunta por consola
		
		// TODO: - Utilizar el buffer de entrada para sucribirme al evento de entrada de texto desde consola, 
		//      mediane el método "once()" (hecho en el ejercicio anterior). 
		//      Este evento llamará asincronamente a la funcíon que le pasamos a la función "preguntar" 
		// en el segundo parámetro.
		
	}

	function guardarNombre(nombre) {
		//TODO: guardar la nombre en el objeto persona
	
		//TODO: Volver a preguntar "Hola " + persona.nombre + " ¿Cuántos años tienes?" y que guarde la edad
		
	}

	function guardarEdad(edad) {
		
		//TODO: guardar la edad en el objeto persona
		
		// TODO: si es mayou o = a 18 mostrar mensaje: "Adelante, puedes pasar " + persona.nombre + " de " + persona.edad + " años \n"
		// TODO: si es mener a 18 mostrar mensaje: "Lo siento, no puedes pasar " + persona.nombre + " de " + persona.edad + " años \n"
		
		// TODO: salir del proceso con exit();
		
	}

	

}());
