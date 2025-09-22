function descargarArchivo(tamaño) {
  return new Promise((resolve, reject) => {
    // Verificamos si el tamaño es válido
    if (tamaño <= 50) {
      resolve("Descarga completada");
    } else {
      reject("El archivo es demasiado grande");
    }
  });
}
descargarArchivo(60)//aqui cambia el tamaño para probar.
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));