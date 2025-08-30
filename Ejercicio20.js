//20. crud
let tareas = [];

function agregarTarea(id, descripcion) {
  tareas.push({ id: id, descripcion: descripcion, completado: false });
}

function eliminarTarea(id) {
  tareas = tareas.filter(function(tarea) {
    return tarea.id !== id;
  });
}


// Ejemplo de uso:
agregarTarea(1, "Estudiar JavaScript");
agregarTarea(2, "Hacer ejercicio");
eliminarTarea(2);
console.log(tareas);