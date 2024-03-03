import express from 'express';
const router = express.Router();
import userController  from '../controllers/user-controller';
import authMiddleware from '../common/auth-middlewre';

router.get('/', authMiddleware, userController.get.bind(userController));
router.post('/', authMiddleware, userController.post.bind(userController));
router.put('/:id', authMiddleware, userController.put.bind(userController));
router.delete('/:id', authMiddleware, userController.remove.bind(userController));
router.get('/:id', authMiddleware, userController.getById.bind(userController));
router.get('/get-files/:id', authMiddleware, userController.getFileById.bind(userController));
router.post('/post-file', authMiddleware, userController.postFile.bind(userController));
router.get('/get-files', authMiddleware, userController.getFiles.bind(userController));
router.put('/edit-user-full-name', userController.editUserFullName.bind(userController));

export default router;