// 1:14
(function () {
	"use strict";
	var express = require('express');
	// Paquete externo para... parsear el body :-)
	var bodyParser = require('body-parser');

	var app = express();

	var numMovs = 0;

	// Permite recuperar como objetos JavaScript el contenido emitido por el cliente
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.use(function (peticion, respuesta, siguiente) {
		console.log("recibida petición: " + peticion.url);
		siguiente();
	});

	// Hasta ahora hemos visto como responder a peticiones GET devolviendo HTML
	app.get('/', function (peticion, respuesta) {
		respuesta.send('Hola Express!');
	});

	
	var movimientos = [];
	
	// TODO: Obtener todos los movimientos
	
	
	// TODO: Obtener un movimiento pasado como parametro
	
	// TODO: Insertar un movimiento
	

	// TODO: Actualizar un movimiento pasado como parametro
	

	// TODO: Borrar un movimiento pasado como parametro
	


	app.listen(3000);
}());