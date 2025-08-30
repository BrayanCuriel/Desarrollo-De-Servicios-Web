//14. 
function promesa() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Promesa resuelta");
    }, 2000);
  });
}
promesa().then(function(mensaje) {
  console.log(mensaje);
});