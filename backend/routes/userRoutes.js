const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const { getAllUsers, deleteUser } = require('../controllers/adminControllers');


const router = express.Router();

// user
router.post('/register', registerUser);
router.post('/login', loginUser);

// admin
router.get('/user', getAllUsers);
router.delete('/user-delete', deleteUser);



module.exports = router;
