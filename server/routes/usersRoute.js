const express = require('express');
const getAllUsers = require('../controllers/usersController');

const router = express.Router();

// routes
router.get('/', (req, res) => res.send('Hello from the inside...')); // api home
router.get('/users', getAllUsers); // get all users
router.get('/users/:id', (req, res) => {}); // get single user

module.exports = router;
