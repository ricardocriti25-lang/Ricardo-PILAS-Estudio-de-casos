function evaluar(expresion) {
  let numeros = [];
  let operadores = [];
  function prioridad(op) {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  }
  function calcular() {
    let b = numeros.pop();
    let a = numeros.pop();
    let op = operadores.pop();
    if (op === "+") numeros.push(a + b);
    if (op === "-") numeros.push(a - b);
    if (op === "*") numeros.push(a * b);
    if (op === "/") numeros.push(a / b);
  }
  let partes = expresion.match(/\d+(?:\.\d+)?|[()+*/-]/g);
  for (let parte of partes) {
    if (!isNaN(Number(parte))) numeros.push(Number(parte));
    else if (parte === "(") operadores.push(parte);
    else if (parte === ")") {
      while (operadores[operadores.length - 1] !== "(") calcular();
      operadores.pop();
    } else {
      while (operadores.length && prioridad(operadores[operadores.length - 1]) >= prioridad(parte)) calcular();
      operadores.push(parte);
    }
  }
  while (operadores.length) calcular();
  return numeros.pop();
}
let ejercicios = [
  "5 + 3", "10 - 4", "6 * 2", "20 / 5", "(4 + 3) * 2",
  "18 - (6 + 2)", "3 * (5 + 4)", "(12 / 3) + 7",
  "(8 + 2) * (6 - 3)", "24 / (2 + 4) + 5"
];
for (let i = 0; i < ejercicios.length; i++) {
  console.log("Ejercicio " + (i + 1), ejercicios[i], "=", evaluar(ejercicios[i]));
}
