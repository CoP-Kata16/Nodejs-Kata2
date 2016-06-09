// Otro caso muy común es disponer de una
// Biblioteca de funciones de ayuda
// retorno un objeto en el que sus propiedades son metodos
var Matematicas = (function(){
	return {
		sumar: function(a,b){
			return a + b;
		},
		restar: function(a,b){
			return a - b;
		}
	}

})();

// exportamos una variable
// que apunta a una función
// que devuelve un objeto
module.exports = Matematicas;
