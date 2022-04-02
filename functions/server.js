const express = require('express');
const cors = require('cors');
// routes
const usersRoute = require('./routes/usersRoute');

const app = express();
app.use(cors());
app.use(express.json());

// utilize netlify serverless functions
app.use('/.netlify/functions/api', usersRoute);
// utilize netlify redirects
app.use('/api', usersRoute);

module.exports.handler = serverless(app);
