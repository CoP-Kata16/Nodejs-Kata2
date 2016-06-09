// En este caso 'simulamos' una Clase instanciable
var CuentaExportable = (function(){
	// un módulo puede a su vez requerir de otros
	var Matematicas = require('./matematicas.js');

	// La cuenta tendrá una función que acturá de constructor
	var Cuenta = function (propietario) {
		this.propietario = propietario;
		this.saldo = 0;
		console.log("creada cuenta para "  + this.propietario + " con " + this.saldo + "€")
    };


	// una vez creada una variable, se le pueden agregar métodos y propiedades
	Cuenta.prototype = {
		ingresar: function(dinero){
			this.saldo = Matematicas.sumar(this.saldo,dinero);
			console.log("ingresar: " + dinero + " a " + this.propietario + " tiene " + this.saldo + "€");
		},
		retirar: function(dinero){
			this.saldo = Matematicas.restar(this.saldo,dinero);
			console.log("retirar: " + dinero + " a " + this.propietario + " tiene " + this.saldo + "€");
		}
	}

	return Cuenta;
})();

// de todo el código que tenga en este fichero solamente se va a poder utiliar fuera lo que ponga en module.exports 
// se exporta la variable CuentaExportable,
// dicha variable apunta a una función que retorna un objeto

module.exports = CuentaExportable;

// se puede hacer también así
//module.exports = función(){

//}
