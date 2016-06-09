(function(){

	var express = require("express");
	var bodyParser = require("body-parser");

	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());


	app.get("/",function(req, res){
		res.send("Hola express!!");
	});

	app.get("/maestros", function(req, res){

		res.json({
			categoriasIngresos:['nomina', 'Ventas', 'Intereses Depósitos'], 
			categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
		});

	});


	var movimientos = [];

	app.get("/movimientos", function(req, res){
		res.json(movimientos);
	});


	app.get("/movimientos/:movimientoId", function(req, res){
		res.json(movimientos[req.params.movimientoId]);
	});

	app.post("/movimientos/", function(req, res){
		var nuevoMovimiento = req.body;
		nuevoMovimiento.id = movimientos.length;
		res.json(movimientos.push(nuevoMovimiento));
	});

	app.put("/movimientos/:id", function(req, res){
		movimientos[req.params.id] = req.body;
		res.json(1);
	});

	app.listen(3000);

}())