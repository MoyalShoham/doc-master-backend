const { db } = require('../firebase-config');
const { getDocs, collection, addDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const { get } = require('../routes/user-route');

const getUsers = async (req, res) => {
    // const users = await 
    try {
        const users = await getDocs(collection(db, "users"));
        res.send(users.docs.map(doc => doc.data()));
    } catch (error) {
        res.status(400).send(error.message);
    }

}
const postUser = async (req, res) => {
    let user = req.body;
    try {
        const docRef = await addDoc(collection(db, "users"), user);
        res.send(docRef.id);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const putUser = async (req, res) => {
    let user = getUserById(req.params.id);
    try {
        const docRef = await updateDoc(collection(db, "users"), user);
        res.send(docRef.id);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getUserById = async (req, res) => {
    res.send('Get User by Id');
}
const deleteUser = async (req, res) => {
    res.send('Delete User');
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser,
    getUserById
}
