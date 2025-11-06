// Cliente simple para consumir la API GraphQL local
// Usa fetch (global o node-fetch como fallback)
const fetch = globalThis.fetch || require('node-fetch');

const GRAPHQL_URL = 'http://localhost:4000/';

async function runQuery(query, variables = {}) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors, null, 2));
  }
  return json.data;
}

const GET_ALL_USERS = `
  query {
    getAllUsers {
      id
      name
      email
      age
    }
  }
`;

const CREATE_USER = `
  mutation CreateUser($name: String!, $email: String!, $age: Int!) {
    createUser(name: $name, email: $email, age: $age) {
      id
      name
      email
      age
    }
  }
`;

(async function main() {
  try {
    console.log('Consultando usuarios (antes):');
    let data = await runQuery(GET_ALL_USERS);
    console.log(JSON.stringify(data.getAllUsers, null, 2));

    console.log('\nCreando un nuevo usuario de ejemplo...');
    const variables = { name: 'Nuevo Usuario', email: 'nuevo@example.com', age: 25 };
    data = await runQuery(CREATE_USER, variables);
    console.log('Usuario creado:');
    console.log(JSON.stringify(data.createUser, null, 2));

    console.log('\nConsultando usuarios (después):');
    data = await runQuery(GET_ALL_USERS);
    console.log(JSON.stringify(data.getAllUsers, null, 2));
  } catch (err) {
    console.error('Error ejecutando consulta GraphQL:', err.message || err);
    process.exitCode = 1;
  }
})();
