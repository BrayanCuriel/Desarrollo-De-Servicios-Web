function consultarClima(ciudad) {
  return new Promise((resolve, reject) => {
    // Base de datos simulada de ciudades
    const climaDB = {
      "madrid": { temperatura: 25, condicion: "soleado" },
      "barcelona": { temperatura: 22, condicion: "nublado" },
      "sevilla": { temperatura: 30, condicion: "caluroso" }
    };
    
    // Buscamos la ciudad en la base de datos
    if (climaDB[ciudad.toLowerCase()]) {
      const datos = climaDB[ciudad.toLowerCase()];
      resolve({ ciudad, temperatura: datos.temperatura, condicion: datos.condicion });
    } else {
      reject({ error: "Ciudad no encontrada", codigo: 404 });
    }
  });
}

consultarClima("Madrid")
  .then(respuesta => console.log(`El clima en ${respuesta.ciudad} es ${respuesta.condicion} y ${respuesta.temperatura}°C`))
  .catch(error => console.log(error.error));