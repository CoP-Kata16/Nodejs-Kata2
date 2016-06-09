// un uso muy común de nodeJS
// es disponer de un servidor
// que publique el contenido estático de un directorio
(function () {
	"use strict";
	// Ahora requeimos más módulos propios de NodeJS (se instalan al instalar node)
	var http = require('http'),
		path = require('path'),
		fs = require('fs');

	
	http.createServer(staticServer).listen(3000);

	function staticServer(req, res) {
		// acceder a la url
		var pathname = req.url;
		console.log('me piden... ' + pathname);
		if (pathname === "/") {
			//TODO: llamar a la pagina home
		} else {
			// TODO: llamar al servidor de ficheros
		}

	}

	function fileServer(res, pathname) {
		// TODO:obtener la ruta en disco a partir de la ruta web
		// TODO: utilizar: process.cwd() --> para obtener el directorio donde se ejecuta la aplicación
		// TODO: utilzar path.join para construir la ruta con el nombre del fichero.
		

		// TODO: utilizar el modulo fs para comprobar si existe el fichero (fs.exists(filename,function)
		// TODO: Si existe el fichero utilizar para crear un stream de lectura del fichero y enviarlo en el response.
		//		 (fs.createReadStream(filename).pipe(res)), 
		console.log('busco en el disco de forma asincrona... ' + filename);
		
	}

	function homePage(res) {
		res.writeHead(200, {
			"Content-Type": "text/html"
		});
		res.write("<html>");
		res.write("<head>");
		res.write("<meta charset='utf-8'>");
		res.write("<title>Hola Mundo</title>");
		res.write("</head>");
		res.write("<body>");
		res.write("<h1>Texto Hard-coded</h1><p>enviado por NodeJS al navegador<p> ;-)");
		res.write("</body>");
		res.write("</html>");
		res.end();
	}



	function notFound(res) {
		res.writeHead(404, {
			'Content-Type': 'text/html'
		});
		res.write("<html>");
		res.write("<head>");
		res.write("<meta charset='utf-8'>");
		res.write("<title>Hola Mundo</title>");
		res.write("</head>");
		res.write("<body>");
		res.write('<h1>404</h1> Nada por aquí');
		res.write("</body>");
		res.write("</html>");
		res.end();
	}
}());
