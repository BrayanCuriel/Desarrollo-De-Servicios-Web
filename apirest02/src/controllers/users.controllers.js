// SRC/controller/users.controllers.js
const userModel = require("../models/user.modules");

function findAll() {
  return userModel.findAll();
}

function findById(id) {
  return userModel.findById(id);
}

function addUser(data) {
  return userModel.addUser(data);
}

function updateUser(id, data) {
  return userModel.updateUser(id, data);
}

function filterUser(filter) {
  return userModel.filterUser(filter);
}

function regenerateApiKey(id) {
  return userModel.regenerateApiKey(id);
}

module.exports = {
  findAll,
  findById,
  addUser,
  updateUser,
  filterUser,
  regenerateApiKey,
};
