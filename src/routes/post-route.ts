import express from 'express';
const router = express.Router();
import postController from '../controllers/post-controller';
import authMiddleware from '../common/auth-middlewre';


router.get('/', authMiddleware, postController.get.bind(postController));
router.get('/:id', authMiddleware, postController.getById.bind(postController));
router.post('/', authMiddleware, postController.post.bind(postController));
router.put('/:id', authMiddleware, postController.put.bind(postController));
router.delete('/:id', authMiddleware,  postController.remove.bind(postController));


export default router;