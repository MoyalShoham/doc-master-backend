const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.getUsers);
router.post('/', userController.postUser);
router.put('/:id', userController.putUser);
router.delete('/', userController.deleteUser);
router.get('/:id', userController.getUserById);

module.exports = router;
