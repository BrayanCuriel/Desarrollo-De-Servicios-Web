function autenticarUsuario(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    // Comprobamos las credenciales
    if (usuario === "admin" && contraseña === "1234") {
      resolve({ usuario, rol: "Administrador", mensaje: "Inicio de sesión exitoso" });
    } else {
      reject({ error: "Credenciales incorrectas", codigo: 401 });
    }
  });
}

autenticarUsuario("brayan", "hola123")//aqui se cambia el usuario y la contraseña.
  .then(respuesta => console.log(respuesta.mensaje))
  .catch(error => console.log(error.error));