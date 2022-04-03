const express = require('express');
const {
  getAllUsers,
  getSingleUser,
} = require('../controllers/usersController');

const router = express.Router();

// routes
router.get('/', (req, res) => res.send('Hello from the inside...')); // api home
router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);

module.exports = router;
