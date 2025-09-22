function verificarSaldo(cuenta, monto) {
  return new Promise((resolve, reject) => {
    // Simulamos un saldo fijo para la cuenta
    const saldoDisponible = 1000;
    
    if (saldoDisponible >= monto) {
      const saldoRestante = saldoDisponible - monto;
      resolve({ cuenta, saldoRestante, mensaje: "Transacción aprobada" });
    } else {
      reject({ error: "Fondos insuficientes", saldoDisponible, codigo: 402 });
    }
  });
}

verificarSaldo("123456", 2000)//aqui se cambia el monto para probar.
  .then(respuesta => console.log(respuesta.mensaje))
  .catch(error => console.log(error.error));