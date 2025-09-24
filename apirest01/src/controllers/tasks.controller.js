const task = require('../models/task.model');

exports.findAll = (req, res) => {
    res.status(200).json(task.findAll());
};

exports.addTask = (req, res) => {
    const title = req.body.title;
    const createdTask = task.addTask(title);
    res.status(201).json(createdTask);
};

exports.removeTask = (req, res) => {
    const id = req.params.id;
    const ok = task.revomeTask(id);
    if (!ok)
        return res.status(404).json({ message: 'tarea no encontrada' });
    res.status(204).json({ message: 'tarea eliminada' });
};

exports.findById = (req, res) => {
    const id = req.params.id;
    const t = task.findById(id);
    if (!t) return res.status(404).json({ message: 'tarea no encontrada' });
    res.status(200).json(t);
};

exports.updateTitle = (req, res) => {
    const id = req.params.id;
    const newTitle = req.body.title;
    const t = task.updateTitle(id, newTitle);
    if (!t) return res.status(404).json({ message: 'tarea no encontrada' });
    res.status(200).json(t);
};

exports.completeTask = (req, res) => {
    const id = req.params.id;
    const t = task.completeTask(id);
    if (!t) return res.status(404).json({ message: 'tarea no encontrada' });
    res.status(200).json(t);
};
