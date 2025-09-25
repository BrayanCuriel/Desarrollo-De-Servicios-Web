const users=require('../models/user.model');

function findAll(req,res){
    res.status(200).json(users.findAll()); 
};

function findById(req,res){
    const user=users.findById(req.params.id);//path params
    return user ? res.status(200).json(user) : res.status(404).json({message:'usuario no encontrado'});
};

function addUser(req,res){
    const newUser=users.addUser(req.body);
    res.status(201).json(newUser);
};

function updateUser(req,res){
    const updatedUser=users.updateUser(req.params.id,req.body);
    return updatedUser ? res.status(200).json(updatedUser) : res.status(404).json({message:'usuario no encontrado'});
};

module.exports={
    findAll,
    findById,
    addUser,
    updateUser
};