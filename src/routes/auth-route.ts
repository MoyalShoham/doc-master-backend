import express from 'express';
const router = express.Router();
import authController from '../controllers/auth-controller';


router.post('/login',authController.login);
router.get('/logout', authController.logout);
router.post('/register', authController.register);

export default router;