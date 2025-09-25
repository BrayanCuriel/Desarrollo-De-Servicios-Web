const {randomUUID} = require('node:crypto');

let users = [
    {id: randomUUID(), name: 'brayan', email: 'brfecurielgo@ittepic.edu.mx',active:true,age:21},
    {id: randomUUID(), name: 'fernando', email: 'brfecurielgo@ittepic.edu.mx',active:true,age:21}
];

function findAll(){
    return users;
}

function findById(id){
    return users.find(u => u.id === id) || null;
}

function addUser(item){
    const user ={
        id : randomUUID(),
        name : item.name, //obligatorio
        email : item.email, //obligatorio
        age : item.age || 0,
        active : true
    }

    users.push(user);
    return user;
}


function updateUser(id, data){
    const index = users.findIndex((u) => u.id === id);
    if(index === -1)
        return null;

    users[index]={
        ...users[index],
        name:typeof data.name==="undefined" ? users[index].name : data.name,
        age:typeof data.age==="undefined" ? users[index].age : Number(data.age),
        email:typeof data.email==="undefined" ? users[index].email : data.email,
        active:typeof data.active==="undefined" ? users[index].active : Boolean(data.active)
    }

    return users[index];
}

module.exports={
    findAll,
    findById,
    addUser,
    updateUser
}