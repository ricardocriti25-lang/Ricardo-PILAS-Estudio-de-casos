let pila = [40, 10, 30, 20];
let codigos = [...pila];
for (let i = 0; i < codigos.length - 1; i++) {
  for (let j = 0; j < codigos.length - 1 - i; j++) {
    if (codigos[j] > codigos[j + 1]) {
      let aux = codigos[j];
      codigos[j] = codigos[j + 1];
      codigos[j + 1] = aux;
    }
  }
}
console.log(codigos);
console.log("Pila:", pila);
