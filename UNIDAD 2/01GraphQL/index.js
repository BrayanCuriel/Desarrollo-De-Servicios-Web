const {ApolloServer}= require('apollo-server');
const typeDefs = require('./schemas/userSchema');
const resolvers = require('./controllers/userController');

// Configuración del servidor Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Iniciar el servidor
server.listen().then(({url})=>{
    console.log(`Servidor GraphQL ejecutándose en la URL: ${url}`);
});