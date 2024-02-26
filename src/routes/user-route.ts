import express from 'express';
const router = express.Router();
import userController  from '../controllers/user-controller';
import authMiddleware from '../common/auth-middlewre';

router.get('/', authMiddleware, userController.get.bind(userController));
router.post('/', authMiddleware, userController.post.bind(userController));
router.put('/:id', authMiddleware, userController.put.bind(userController));
router.delete('/:id', authMiddleware, userController.remove.bind(userController));
router.get('/:id', authMiddleware, userController.getById.bind(userController));

export default router;