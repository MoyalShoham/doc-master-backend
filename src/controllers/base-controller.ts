import db from '../../firebase-config';
import { doc, getDocs, addDoc, updateDoc, deleteDoc, where, query, CollectionReference, DocumentData} from 'firebase/firestore';
import { Request, Response } from 'express';
// import { Request, Response } from 'express';





class BaseController {
    collectionRef: CollectionReference<DocumentData, DocumentData>;
    collectionName: string;
    database = db;
    constructor(collectionName: string, collectionRef: CollectionReference<DocumentData, DocumentData>) {
        this.collectionName = collectionName;
        this.collectionRef = collectionRef;
    }
    async get (req: Request, res: Response) {
       
        try {
            const users = await getDocs(this.collectionRef);
            res.status(200).send(users.docs.map(doc => doc.data()));
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async post (req: Request, res: Response) {
        const user = req.body;
        try {
            const docRef = await addDoc(this.collectionRef, user);
            res.status(201).send(docRef.id);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async getById (req: Request, res: Response) {
        try {
            const q = query(this.collectionRef, where("id", "==", req.params.id));
            const querySnapshot = await getDocs(q);
            const userData = querySnapshot.docs[0].data();
            res.status(200).send(userData);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
    async put (req: Request, res: Response) {
        const newUser = req.body;
        try {
            const userQuery = query(this.collectionRef, where("id", "==", req.params.id));
            const querySnapshot = await getDocs(userQuery);
            const userDoc = querySnapshot.docs[0]; // Assuming you're expecting only one document
            if (!userDoc) {
                throw new Error("User not found");
            }
            await updateDoc(doc(this.collectionRef), newUser);
            res.status(200).send(newUser);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async remove (req: Request, res: Response) {
        try {
            const userQuery = query(this.collectionRef, where("id", "==", req.params.id));
            const querySnapshot = await getDocs(userQuery);
            const userDoc = querySnapshot.docs[0]; // Assuming you're expecting only one document
            if (!userDoc) {
                throw new Error("User not found");
            }
            await deleteDoc(doc(this.collectionRef));
            res.status(200).send("User deleted");
        } catch (error) {
            res.status(400).send(error.message);
        }
    }


}

export default BaseController;