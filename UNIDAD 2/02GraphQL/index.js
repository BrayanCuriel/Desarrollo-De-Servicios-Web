const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schemas/tasksSchema');
const resolvers = require('./controllers/tasksController');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log(`Servidor GraphQL ejecutándose en la URL: ${url}`);
});