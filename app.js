// var Emitter = require("./emitter"); //inyectamos la dependencia
var config = require("./config"); //inyectamos la dependencia de config
var Emitter = require("events");
/* Al ejecutar node app en la terminal después de escribir el código de la
línea 2, la terminal muestra un error que dice que Emitter no está definido. */

var emtr = new Emitter(); //iniciamos el emisor de eventos

emtr.on(config.events.GREET, () => {
  console.log("somewhere, someone said hello");
});

emtr.on(config.events.GREET, () => {
  console.log("a greeting occured!");
});
/* acabamos de agregar dos funciones con el mismo nombre pero
diferente comportamiento */

console.log("Hello!"); //imprimimos un saludo normal
emtr.emit("greet");
// a trvés de las funciones emtr, imprimimos su contenido

emtr.on(config.events.JUMP, () => {
  console.log("someone jumped!");
});

console.log(emtr);
emtr.emit("jump");

//Emitter se convirtió en un objeto

/* 

Después de modificar el código y al ejecutar node app, la terminal regresa
un objeto EventEmitter con otro objeto dentro llamado _events que tiene dos
propiedades, greet y jump, que dentro de estas tienen funciones anonimas.
Existen dos eventos en _eventsCount y un número indefinido de listeners.
También regresa los mensajes de los otros console.log

*/
