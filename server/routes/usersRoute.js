const express = require('express');
const getAllUsers = require('../controllers/usersController');

const router = express.Router();

// routes
router.get('/', (req, res) => {
  return res.send('Hello from the inside...');
});

//  get all users
router.get('/users', getAllUsers);

//  get single user
router.get('/users/:id', (req, res) => {});

module.exports = router;
