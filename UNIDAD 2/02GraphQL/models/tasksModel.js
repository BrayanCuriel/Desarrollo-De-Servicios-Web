const task = [
    {id: 1, name: 'Tarea 1', completed: false},
    {id: 2, name: 'Tarea 2', completed: false},
];

function getAllTasks() {
    return task;
}


function createTask(name){
    const newTask = {
        id: task.length + 1,
        name,
        completed: false
    }
    task.push(newTask);
    return newTask;
}

function completeTask(id){
    const t = task.find(t => t.id == id);
    if (t) {
        t.completed = true;
        return t;
    }
    return null;
}

function deleteTask(id){
    const idx = task.findIndex(t => t.id == id);
    if (idx !== -1) {
        task.splice(idx, 1);
        return true;
    }
    return false;
}

module.exports = {
    getAllTasks,
    createTask,
    completeTask,
    deleteTask
};