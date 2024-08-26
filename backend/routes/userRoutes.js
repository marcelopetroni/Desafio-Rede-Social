const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/', UserController.CreateUser); 
router.get('/', UserController.GetUsers);    
router.put('/:id', UserController.UpdateUser); 
router.delete('/:id', UserController.DeleteUser); 

module.exports = router;
