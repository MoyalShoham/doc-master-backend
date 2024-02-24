const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const {addDoc , collection}   = require('firebase/firestore');
const { db } = require('./firebase-config');




app.use(bodyParser.json());

const userRoute = require('./routes/user-route');
const postRoute = require('./routes/post-route');

const port = process.env.PORT;

app.use('/users', userRoute);
app.use('/posts', postRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


 
// addUsers()


