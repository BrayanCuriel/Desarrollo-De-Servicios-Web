const {gql} = require('apollo-server');

const typeDefs = gql`
    """definición del tipo Task"""
    type Task {
    """identificador único de la tarea"""
        id: ID!
    """nombre de la tarea"""
        name: String!
    """indica si la tarea está completada"""
        completed: Boolean!
    }
        type Query {
        """Obtiene todas las tareas"""
            getAllTasks: [Task]
        }
    type Mutation {
        """Crea una nueva tarea"""
        createTask(name: String!): Task
        """Marca una tarea como completada"""
        completeTask(id: ID!): Task
        """Elimina una tarea"""
        deleteTask(id: ID!): Boolean
    }
`;

module.exports = typeDefs;