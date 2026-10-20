let ropa = ["Camisa", "Vestido", "Pantalon"];
let buscar = "Vestido";
let encontrado = false;
for (let i = 0; i < ropa.length; i++) {
  if (ropa[i] === buscar) encontrado = true;
}
console.log(encontrado ? "Encontrada" : "No encontrada");
