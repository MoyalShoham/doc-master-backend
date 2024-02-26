"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_config_1 = require("../../firebase-config");
const firestore_1 = require("firebase/firestore");
// import { Request, Response } from 'express';
const usersRef = (0, firestore_1.collection)(firebase_config_1.db, "users");
//working
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const users = await 
    try {
        const users = yield (0, firestore_1.getDocs)(usersRef);
        res.status(200).send(users.docs.map(doc => doc.data()));
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//working
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.body;
    try {
        const docRef = yield (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_config_1.db, "users"), user);
        res.status(201).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//working
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = (0, firestore_1.query)(usersRef, (0, firestore_1.where)("id", "==", req.params.id));
        const querySnapshot = yield (0, firestore_1.getDocs)(q);
        const userData = querySnapshot.docs[0].data();
        res.status(200).send(userData);
    }
    catch (error) {
        res.status(404).send(error.message);
    }
});
//working
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    try {
        const userQuery = (0, firestore_1.query)(usersRef, (0, firestore_1.where)("id", "==", req.params.id));
        const querySnapshot = yield (0, firestore_1.getDocs)(userQuery);
        const userDoc = querySnapshot.docs[0]; // Assuming you're expecting only one document
        if (!userDoc) {
            throw new Error("User not found");
        }
        yield (0, firestore_1.updateDoc)((0, firestore_1.doc)(firebase_config_1.db, 'users', userDoc.id), newUser);
        res.status(200).send(newUser);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//working
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userQuery = (0, firestore_1.query)(usersRef, (0, firestore_1.where)("id", "==", req.params.id));
        const querySnapshot = yield (0, firestore_1.getDocs)(userQuery);
        const userDoc = querySnapshot.docs[0]; // Assuming you're expecting only one document
        if (!userDoc) {
            throw new Error("User not found");
        }
        yield (0, firestore_1.deleteDoc)((0, firestore_1.doc)(firebase_config_1.db, 'users', userDoc.id));
        res.status(200).send("User deleted");
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getUserById
};
//# sourceMappingURL=user-controller.js.map