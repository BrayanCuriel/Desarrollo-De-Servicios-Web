function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    // Comprobamos si la edad es suficiente
    if (edad >= 18) {
      resolve("Compra permitida");
    } else {
      reject("Debes ser mayor de edad para comprar este producto");
    }
  });
}

verificarEdad(17)//aqui se cambia.
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));