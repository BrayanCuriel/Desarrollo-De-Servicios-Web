function procesarPago(monto) {
  return new Promise((resolve, reject) => {
    // Verificamos que el monto sea válido
    if (monto > 0) {
      resolve("Pago exitoso de " + monto);
    } else {
      reject("Error: Monto inválido");
    }
  });
}

procesarPago(0) //aqui se cambia el monto para probar.
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));