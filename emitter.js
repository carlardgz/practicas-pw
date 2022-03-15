function Emitter() {
  this.events = {}; // <= función constructora
}
/* al inicio contiene un objeto vacío, 
  por lo tanto, este módulo exporta un constructor */

// agregamos función miembro llamada "on", que recibe dos parámetros
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  /* validamos si events contiene algo o si está vacío.
    Si tiene algo; lo tomamos, si no, le asignamos un array vacío
    que será llenado con funciones */
  this.events[type].push(listener);
  /* una vez que tenemos un array, invocamos a la función “push” 
    y en el índice “type” metemos la función que corresponde a “listener”. */
};
//Se hce uso del nombre de la “key” de un objeto para acceder a su contenido.

Emitter.prototype.emit = function (type) {
  /* Función miembro llamada emit con un parámetro que corresponde 
    al nombre de la función que queremos invocar*/
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

module.exports = Emitter; // <= exportamos el constructor
