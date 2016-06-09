Estos ejercicios sirven para iniciarnos en el desarrollo de nodejs, si quisieramos desarrollar un pograma ocn fuerte interación con el usuario de entrada y salida y buscar en el repositorio de modulos . 

# Practica 1 (pasos a seguir)

1) Declarar dos variable con el buffer de entrada y el de salida:

process.stdin; 
process.stdout;


2) Crear el objeto persona con los atributos "nombre" y "edad"

3) Definir la función "preguntar", que va a tener dos parámetros:

	- el primero: un String con la pregunta a realizar.
	- el segundo: una función, que se llamará asincronamente (callback) al producirse el evento de entrada de datos desde la consola, cuando el usuario conteste a la pregunta.

	Esta función debe realizar lo siguiente:

	- Utilizando el método "write()" del buffer de salida, escribir por consola la pregunta a relizar al usuario. 
	Nota: (la primera vez que se llame a esta función será con el primer parámetros igual a "¿Cómo te llamas ?:" y la segunda vez con el primer parámetros igual a: "Hola " + persona.nombre + " ¿Cuántos años tienes?")

	- Utilizar el buffer de entrada para sucribirme al evento de entrada de texto desde consola, mediane el método "once()" (hecho en el ejercicio anterior). Este evento llamará asincronamente a la funcíon que le pasamos a la función "preguntar" en el segundo parámetro.

	
4) Definir la función "guardarNombre", que va a tener un solo parámetro en el que recibe el nombre de la persona.

	- Guardará el nombre en el objeto persona.
	- Llamará a la función "preguntar", pasandole como primer parámetro una cadena en la que manda un saludo personalizado y preguntará por la edad. ("Hola " + persona.nombre + " ¿Cuántos años tienes?")

5) Definir la función "guardarEdad", que va a tener un parámetro en el que recibe la edad de la persona.

	- Guardará la edad en el objeto persona.
	- Si la edad es superior o igual a 18 años mandará a la consola, utilizando el método "write()" del buffer de salida, el mensaje:
		"Adelante, puedes pasar " + persona.nombre + " de " + persona.edad + " años \n"
	- Si la edad es inferior a 18 años, madará a la consolta el mensaje: 
		"Lo siento, no puedes pasar " + persona.nombre + " de " + persona.edad + " años \n"

	





