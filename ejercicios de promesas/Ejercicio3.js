let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 };

function verificarStock(producto, cantidad) {
  return new Promise((resolve, reject) => {
    // Buscamos el producto en el inventario
    if (inventario[producto] >= cantidad) {
      resolve("Stock disponible, procediendo con la compra");
    } else {
      reject("Stock insuficiente");
    }
  });
}

verificarStock("teclado", 2)//aqui se cambia el producto y la cantidad.
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));