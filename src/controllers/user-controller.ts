import { collection } from "firebase/firestore";
import BaseController from "./base-controller";
import db from "../../firebase-config";
import { auth } from "firebase-admin";
import { addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Request, Response } from "express";



class UserController extends BaseController {
    constructor() {
        super("users", collection(db.db, "users"));
    }
    protected auth = auth;
    async postFile(req: Request, res: Response) {
        // const file = req.file;
        // const fileUrl = file.path;
        const collectionRef = collection(db.db, 'filesOf-' + getAuth().currentUser.uid);
        try {
            await addDoc(collectionRef, { 
                "fileUrl": null,
                "createdAt": new Date().toISOString().slice(0, 10),
                "updatedAt": new Date().toISOString().slice(0, 10),
                "sharedWith": null,
                "favorite": false,
                "shared": false,
                "fileName": null,
                "fileType": null,
                "fileSize": null,
                "expirationDate": null,
            });
            res.status(201).send('File uploaded');
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getFiles (req: Request, res: Response) {
        try {
            const files = await getDocs(collection(db.db, getAuth().currentUser.uid+'files'));
            if (files.empty) {
                throw new Error("No file found");
            }
            res.status(200).send(files.docs.map(doc => doc.data()));
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    async editUserFullName(req: Request, res: Response) {
        const user = req.body;
        try {
            console.log(req.params.uid);
            const docRef = doc(db.db, "users", req.params.uid);
            await updateDoc(docRef, {
                fullName: user.fullName
            });
            res.status(200).send('User updated');
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

}


// const userController = new BaseController("users", collection(db.db, "users"));
// class UserController extends BaseController {

//     private collectionName = "users";
//     private collectionRef = collection(db.db, this.collectionName);

//     constructor() {
//         super("users", collection(db.db, "users"));
//     }

// }

export default new UserController();