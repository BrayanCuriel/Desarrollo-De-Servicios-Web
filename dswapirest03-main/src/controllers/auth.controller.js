const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const JWT_SECRET = process.env.JWT_SECRET || 'hola123';

async function register(req, res) {
    const {username, password} = req.body;
    if(!username || !password) {
        return res.status(400).json({message: 'Username and password are required'});
    }
    const created = await User.createUser({username, password});
    if(!created) {
        return res.status(409).json({message: 'Username already exists'});
    }
    res.status(201).json(created);
}

async function login(req, res) {
    const {username, password} = req.body;
    if(!username || !password) {
        return res.status(401).json({message: 'Username and password are required'});
    }
    const user = User.findByUsername(username);
    if(!user) {
        return res.status(401).json({message: 'Invalid credentials'});
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        return res.status(401).json({message: 'Invalid credentials'});
    }
    const token = jwt.sign({id: user.id, username: user.username}, JWT_SECRET, {expiresIn: '1m'});
    res.status(200).json({token});
}

module.exports = {
    register,
    login
};