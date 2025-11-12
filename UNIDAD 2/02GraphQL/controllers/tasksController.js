const tasksModel = require('../models/tasksModel');
const { sendMail } = require('../utils/sendgrid');

const resolvers = {
    Query: {
        getAllTasks: () => tasksModel.getAllTasks()
    },
    Mutation: {
        createTask: (_, { name }) => tasksModel.createTask(name),
        completeTask: async (_, { id }) => {
            const updated = tasksModel.completeTask(id);
            if (updated && updated.completed) {
                // Enviar correo al completar la tarea
                try {
                    await sendMail(
                        'brfecurielgo@ittepic.edu.mx',
                        'Tarea completada',
                        `La tarea "${updated.name}" ha sido completada.`
                    );
                } catch (err) {
                    console.error('Error enviando correo:', err);
                }
            }
            return updated;
        },
        deleteTask: (_, { id }) => tasksModel.deleteTask(id)
    }
};

module.exports = resolvers;