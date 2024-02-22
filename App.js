const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const userRoute = require('./routes/user-route');
const postRoute = require('./routes/post-route');

const port = process.env.PORT;

app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
