const {randomUUID}=require('node:crypto');

let tasks=[
    {id: randomUUID(), title:'aprender api rest', completed:false},
    {id: randomUUID(), title:'utilizar el mvc en la api rest', completed:false},
];
function findAll(){
    return tasks;
}

function addTask(title){
    const task={
        id: randomUUID(),
        title:title,
        completed:false
    };
    tasks.push(task);
    return task;
}

function revomeTask(id){
    const index=task.findIndex(item=>item.id===id);
    if(index!==-1){
        tasks.splice(index,1);
        return true;
    }
    return false;
}

function findById(id) {
    return tasks.find(item => item.id === id) || null;
}

function updateTitle(id, newTitle) {
    const t = tasks.find(item => item.id === id);
    if (t) {
        t.title = newTitle;
        return t;
    }
    return null;
}

function completeTask(id) {
    const t = tasks.find(item => item.id === id);
    if (t) {
        t.completed = true;
        return t;
    }
    return null;
}

module.exports={
    findAll,
    addTask,
    revomeTask,
    findById,
    updateTitle,
    completeTask
};
