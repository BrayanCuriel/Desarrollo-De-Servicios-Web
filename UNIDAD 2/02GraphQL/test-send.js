// test-send.js - Prueba del flujo completo del CRUD con envío de correo

const tasksModel = require('./models/tasksModel');
const tasksController = require('./controllers/tasksController');

console.log('=== Prueba del CRUD de Tareas ===\n');

// 1. Obtener todas las tareas
console.log('1. Obteniendo todas las tareas...');
let allTasks = tasksModel.getAllTasks();
console.log('Tareas actuales:', allTasks);
console.log('');

// 2. Crear una nueva tarea
console.log('2. Creando una nueva tarea...');
let newTask = tasksModel.createTask('Nueva Tarea de Prueba');
console.log('Tarea creada:', newTask);
console.log('');

// 3. Obtener todas las tareas (debe incluir la nueva)
console.log('3. Obteniendo todas las tareas después de crear...');
allTasks = tasksModel.getAllTasks();
console.log('Tareas actuales:', allTasks);
console.log('');

// 4. Completar una tarea
console.log('4. Marcando la tarea como completada...');
console.log('Esto enviará un correo a brfecurielgo@ittepic.edu.mx');
const resolver = tasksController.Mutation.completeTask(null, { id: newTask.id });
resolver.then(() => {
  console.log('✓ Tarea completada correctamente');
  
  // 5. Obtener todas las tareas después de completar
  console.log('\n5. Obteniendo todas las tareas después de completar...');
  allTasks = tasksModel.getAllTasks();
  console.log('Tareas actuales:', allTasks);
  console.log('');

  // 6. Eliminar una tarea
  console.log('6. Eliminando una tarea...');
  const deleted = tasksModel.deleteTask(newTask.id);
  console.log('¿Se eliminó correctamente?:', deleted);
  console.log('');

  // 7. Obtener todas las tareas después de eliminar
  console.log('7. Obteniendo todas las tareas después de eliminar...');
  allTasks = tasksModel.getAllTasks();
  console.log('Tareas actuales:', allTasks);
  console.log('');

  console.log('=== Prueba completada exitosamente ===');
}).catch((err) => {
  console.error('Error al completar la tarea:', err);
});
