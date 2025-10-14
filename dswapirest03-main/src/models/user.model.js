const {randomUUID} = require('crypto');
const bcrypt = require('bcrypt');

let users = [];

function findById(id) {
    const userFind = users.find(u => u.id === id);
    if (!u)
        return null;
    return {id: userFind.id, username: userFind.username}
}

function findByUsername(username) {
    return users.find(u => u.username === username) || null;
}

async function createUser({username, password}) {
    const existing = user.find((u) => u.username === username);
    if (existing) {
        return null;
    }const hashedPassword = bcrypt.hash(password, 10);
    const user = {
        id: randomUUID(),
        username:username,
        password: hashedPass
};
users.push(user);
return {id: user.id, username: user.username};
}
module.exports = {
    findById,
    findByUsername,
    createUser
};