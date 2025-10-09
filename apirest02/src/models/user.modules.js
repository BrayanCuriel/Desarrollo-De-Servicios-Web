// SRC/model/user.modules.js
const { randomUUID, randomBytes } = require("node:crypto");

let users = [
  {
    id: randomUUID(),
    name: "brayan",
    email: "brayan123gmail.com",
    active: true,
    age: 22,
    apiKey: randomBytes(16).toString("hex"), //API Key única
  },
  {
    id: randomUUID(),
    name: "fernando",
    email: "fernan@example.com",
    active: true,
    age: 18,
    apiKey: randomBytes(16).toString("hex"),
  },
];

// Obtener todos los usuarios
function findAll() {
  return users;
}

// Buscar usuario por ID
function findById(id) {
  return users.find((u) => u.id === id) || null;
}

// Agregar usuario nuevo con API key
function addUser(item) {
  const user = {
    id: randomUUID(),
    name: item.name,
    email: item.email,
    active: true,
    age: item.age,
    apiKey: randomBytes(16).toString("hex"), //API key generada automáticamente
  };
  users.push(user);
  return user;
}

// Actualizar usuario
function updateUser(id, data) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  users[index] = {
    ...users[index],
    name: data.name ?? users[index].name,
    email: data.email ?? users[index].email,
    active: data.active ?? users[index].active,
    age: typeof data.age === "undefined" ? users[index].age : Number(data.age),
  };

  return users[index];
}

// Filtrar usuarios
function filterUser(filter = {}) {
  let result = users;

  if (filter.name) {
    const q = String(filter.name).toLowerCase();
    result = result.filter((item) => item.name.toLowerCase().includes(q));
  }

  if (filter.age) {
    const q = Number(filter.age);
    result = result.filter((item) => item.age === q);
  }

  if (typeof filter.active !== "undefined") {
    const q = filter.active === "true" || filter.active === true;
    result = result.filter((item) => item.active === q);
  }

  if (filter.email) {
    const q = String(filter.email).toLowerCase();
    result = result.filter((item) => item.email.toLowerCase().includes(q));
  }

  return result;
}

// Regenerar API key
function regenerateApiKey(id) {
  const user = findById(id);
  if (!user) return null;
  user.apiKey = randomBytes(16).toString("hex");
  return user.apiKey;
}

module.exports = {
  findAll,
  findById,
  addUser,
  updateUser,
  filterUser,
  regenerateApiKey,
};
