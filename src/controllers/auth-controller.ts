import { Request, Response } from 'express';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../firebase-config';


const register = (req: Request, res: Response) => {
    const { email, password } = req.body;
    if ( email === undefined || password === undefined ) {
        return res.status(400).send('email or password are missing');
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const uid = user.uid;
            const email = user.email;
            addDoc(collection(db.db, 'users'), { 
                "uid": uid,
                "email": email,
                "fullName": null,
                "profilePicture": null,
                "createdAt": new Date().toISOString().slice(0, 10),
                "updatedAt": new Date().toISOString().slice(0, 10),
                "files": null,
                "favoriteFiles": null,
                "sharedFiles": null,
                "sharedWithMeFiles": null
                })
                .then(() => {
                    console.log('Document successfully written!');
                })
                .catch((error) => {
                    console.error('Error writing document: ', error);
                });
            res.status(201).send(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(400).json({ errorCode, errorMessage });
        });    
};

const login = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            res.status(200).send(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(400).json({ errorCode, errorMessage });
        });
};

const logout = (req: Request, res: Response) => {
    const auth = getAuth();
    if (auth.currentUser === null) {
        return res.status(404).send('No user logged in');
    }
    signOut(auth).then(() => {
        res.status(200).send('Logged out ' );
    }).catch((error) => {
        res.status(400).json({ error });
    });
};

export default {
    register,
    login,
    logout
};
