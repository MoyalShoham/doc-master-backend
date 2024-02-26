import { Request, Response, NextFunction } from 'express';
import { getAuth } from 'firebase/auth';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('authMiddleware');

    const auth = getAuth();
    if (!auth) {
        return res.status(401).send('Unauthorized');
    }
    
    next();
};

export default authMiddleware;