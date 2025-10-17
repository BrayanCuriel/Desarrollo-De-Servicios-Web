const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');

let users = [];

function findById(id) {
    const userFind = users.find((u) => u.id === id);
    if (!userFind) return null;
    return { id: userFind.id, username: userFind.username };
}

function findByUsername(username) {
    return users.find((u) => u.username === username) || null;
}

async function createUser({ username, password }) {
    const existing = users.find((u) => u.username === username);
    if (existing) return null;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        id: randomUUID(),
        username,
        password: hashedPassword,
    };

    users.push(user);
    return { id: user.id, username: user.username };
}

module.exports = {
    findById,
    findByUsername,
    createUser,
};