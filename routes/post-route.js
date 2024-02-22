const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

router.get('/', postController.getPosts);
router.post('/', postController.postPost);
router.put('/', postController.putPost);
router.delete('/', postController.deletePost);

module.exports = router;
