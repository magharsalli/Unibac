const accountSid = 'ACe0622a0e3584c2ae13fce65cc7f84c4d'
const authToken  = '918c4961e9e35a271551d2d37b23df99'

const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const express = require('express')
const app = express();

app.post('/sms', (req, res) =>{
	
	const twiml = new MessagingResponse();
	
	twiml.
});
