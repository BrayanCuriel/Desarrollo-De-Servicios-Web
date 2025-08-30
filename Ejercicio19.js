//19. Uso de fetch:
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function(respuesta) {
    return respuesta.json();
  })
  .then(function(data) {
    console.log(data);
  });