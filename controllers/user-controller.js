const { db } = require('../firebase-config');
const { doc, setDoc, getDocs, collection, addDoc, updateDoc, deleteDoc, where, query, getDoc} = require('firebase/firestore');
const { get } = require('../routes/user-route');
const querySnapshot = require('firebase/firestore');
const usersRef = collection(db, "users");


//working
const getUsers = async (req, res) => {
    // const users = await 
    try {
        const users = await getDocs(usersRef);
        res.send(users.docs.map(doc => doc.data()));
    } catch (error) {
        res.status(400).send(error.message);
    }

}

//working
const postUser = async (req, res) => {
    let user = req.body;
    try {
        const docRef = await addDoc(collection(db, "users"), user);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//working
const getUserById = async (req, res) => {
    try {
        const q = query(usersRef, where("id", "==", req.params.id));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs[0].data();
        res.status(200).send(userData);
    } catch (error) {
        res.status(404).send(error.message);
    }
}


//working
const putUser = async (req, res) => {
    const newUser = req.body;
    try {
        const userQuery = query(usersRef, where("id", "==", req.params.id));
        const querySnapshot = await getDocs(userQuery);
        const userDoc = querySnapshot.docs[0]; // Assuming you're expecting only one document
        if (!userDoc) {
            throw new Error("User not found");
        }
        await updateDoc(doc(db, 'users', userDoc.id), newUser);
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//working
const deleteUser = async (req, res) => {

    try {
        const userQuery = query(usersRef, where("id", "==", req.params.id));
        const querySnapshot = await getDocs(userQuery);
        const userDoc = querySnapshot.docs[0]; // Assuming you're expecting only one document
        if (!userDoc) {
            throw new Error("User not found");
        }
        await deleteDoc(doc(db, 'users', userDoc.id));
        res.status(200).send("User deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getUserById
}
