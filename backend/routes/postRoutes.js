const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

router.post('/', PostController.CreatePost); 
router.get('/', PostController.GetPosts);    
router.put('/:id', PostController.UpdatePost); 
router.delete('/:id', PostController.DeletePost); 

module.exports = router;
