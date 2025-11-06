# Cliente de ejemplo para GraphQL (01GraphQL)

Este directorio contiene un servidor GraphQL simple (Apollo) y un cliente Node.js de ejemplo que consume la API.

Archivos principales:

- `index.js` - servidor Apollo Server que expone las queries/mutations definidas en `schemas/userSchema.js`.
- `models/userModel.js` - datos en memoria y funciones CRUD (se corrigió un pequeño bug en la creación de id).
- `graphql-client.js` - cliente Node.js que realiza una consulta `getAllUsers` y una mutación `createUser` como ejemplo.

Instrucciones rápidas:

1. Abrir una terminal en este directorio:

```powershell
cd "c:\Desarrollo de Servicios Web\Desarrollo-De-Servicios-Web\UNIDAD 2\01GraphQL"
```

2. Instalar dependencias (añadí `node-fetch` para el cliente):

```powershell
npm install
```

3. Iniciar el servidor GraphQL:

```powershell
npm run start
```

El servidor imprimirá la URL (por defecto `http://localhost:4000/`).

4. En otra terminal, ejecutar el cliente de ejemplo:

```powershell
npm run client
```

Verás la lista de usuarios actual, la creación de un usuario de prueba y la lista actualizada.

Notas:
- Si tu versión de Node ya incluye `fetch` global (Node 18+), `graphql-client.js` usará la implementación nativa; de lo contrario usa `node-fetch`.
- `models/userModel.js` tenía un typo (`user.legth`) al crear el id; fue corregido a `users.length`.

Si quieres que adapte el cliente para peticiones desde el navegador, o que use una librería (por ejemplo `graphql-request` o `apollo-client`), dímelo y lo preparo.
