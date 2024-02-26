import app from './App';
const port = process.env.PORT;

app.listen(3000, () => {
    console.log(`Server is running on localhost:${port}/` );
});
