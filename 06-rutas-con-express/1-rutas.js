(function () {
	"use strict";
	var express = require('express');

	var app = express();

	
	// la ruta base
	app.get('/', alRecibirPeticion);
	
	// función que se ejecutará cuando nos llamen 
	function alRecibirPeticion(peticion, respuesta){
		respuesta.send('Hola Express (rutas)!');
	}
	
	// Cada ruta tiene su propia función (en este caso anónima inline)
	app.get('/about', function (peticion, respuesta) {
		respuesta.send('Página creada por gente que sabe Express!');
	});

	app.listen(3000);
}());