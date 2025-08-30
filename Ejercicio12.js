//12.
let precios = [10, 20, 30, 40];
let total = precios.reduce(function(suma, precio) {
  return suma + precio;
}, 0);
console.log(total);