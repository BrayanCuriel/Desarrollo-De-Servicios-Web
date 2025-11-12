// utils/sendgrid.js (usando Mailjet)

require('dotenv').config();
const Mailjet = require('node-mailjet');
const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
const MAILJET_API_SECRET = process.env.MAILJET_API_SECRET;
const mailjetClient = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_API_SECRET);

/**
 * Envía un correo usando Mailjet
 * @param {string} to - Correo destino
 * @param {string} subject - Asunto
 * @param {string} text - Texto del mensaje
 * @returns {Promise}
 */
function sendMail(to, subject, text) {
	return mailjetClient
		.post('send', { version: 'v3.1' })
		.request({
			Messages: [
				{
					From: {
						Email: 'brfecurielgo@ittepic.edu.mx',
						Name: 'Notificador de Tareas'
					},
					To: [
						{
							Email: to,
							Name: 'Usuario'
						}
					],
					Subject: subject,
					TextPart: text,
				}
			]
		});
}

module.exports = { sendMail };
