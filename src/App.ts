import express from 'express';
const app = express();
import dotenv  from 'dotenv'
dotenv.config();
import bodyParser from 'body-parser';
import authRoute from './routes/auth-route';
import userRoute from './routes/user-route';
import postRoute from './routes/post-route';

// import {addDoc , collection}   from 'firebase/firestore';
// import { db } from './firebase-config';




app.use(bodyParser.json());




app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/auth', authRoute);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });


export default app;
 
// addUsers()


