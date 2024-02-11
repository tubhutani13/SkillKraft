const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/',userController.getAllUsers);

router.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUserById)
    .delete(userController.deleteUserById);

module.exports = router;
