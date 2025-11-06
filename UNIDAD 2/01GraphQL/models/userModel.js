const users =[
    {id: '1', name: 'Brayan', age: 30, email: 'correo1@gmail.com'},
    {id: '2', name: 'Fernando', age: 30, email:'correo2@gmail.com'}
];

function getAll(){
    return users;
}

function getById(id){
    return users.find(user => user.id === id);
}

function create (name,email,age){
    const newUser={
        id: (users.length + 1).toString(),
        name: name,
        email: email,
        age: age
    }
    users.push(newUser);
    return newUser;
}

module.exports = {
    users,
    create,
    getAll,
    getById
};