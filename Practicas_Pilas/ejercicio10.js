class Nodo {
  constructor(prenda) {
    this.prenda = prenda;
    this.siguiente = null;
  }
}
class Pila {
  constructor() { this.tope = null; }
  push(prenda) {
    let nuevo = new Nodo(prenda);
    nuevo.siguiente = this.tope;
    this.tope = nuevo;
  }
  pop() {
    if (this.tope === null) return "Pila vacia";
    let prenda = this.tope.prenda;
    this.tope = this.tope.siguiente;
    return prenda;
  }
  peek() {
    return this.tope === null ? "Pila vacia" : this.tope.prenda;
  }
}
let ropa = new Pila();
ropa.push("Camisa");
ropa.push("Pantalon");
ropa.push("Sudadera");
console.log(ropa.peek());
console.log(ropa.pop());
console.log(ropa.peek());
