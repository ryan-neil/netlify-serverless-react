const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
// routes
const usersRoute = require('../server/routes/usersRoute');

const app = express();
app.use(cors());
app.use(express.json());

// utilize netlify serverless functions
app.use('/.netlify/functions/api', usersRoute);
// utilize netlify redirects
app.use('/api', usersRoute);

module.exports.handler = serverless(app);
