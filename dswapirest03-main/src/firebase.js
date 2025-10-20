const admin = require('firebase-admin');
const fs = require('fs');

function initFirebase() {
  if (admin.apps.length) return admin;

  // Preferir ruta a archivo JSON en FIREBASE_SERVICE_ACCOUNT_PATH
  const keyPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  const keyJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  let credentials = null;
  if (keyJson) {
    try {
      credentials = JSON.parse(keyJson);
    } catch (err) {
      console.error('FIREBASE_SERVICE_ACCOUNT_JSON no es JSON válido');
      throw err;
    }
  } else if (keyPath && fs.existsSync(keyPath)) {
    credentials = require(keyPath);
  } else {
    console.warn('No se encontró credencial de servicio de Firebase. Setea FIREBASE_SERVICE_ACCOUNT_PATH o FIREBASE_SERVICE_ACCOUNT_JSON');
  }

  if (credentials) {
    admin.initializeApp({
      credential: admin.credential.cert(credentials),
    });
    console.log('Firebase Admin inicializado');
  }

  return admin;
}

module.exports = initFirebase();
