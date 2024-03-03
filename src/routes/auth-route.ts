import express from 'express';
const router = express.Router();
import authController from '../controllers/auth-controller';
import authMiddleware from '../common/auth-middlewre';


router.post('/login',authController.login);
router.get('/logout', authController.logout);
router.post('/register', authMiddleware, authController.register);

export default router;