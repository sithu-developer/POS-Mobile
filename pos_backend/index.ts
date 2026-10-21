import express , { type Express } from "express";


const app : Express = express();
const port = 5000;


app.listen(port , () => {
    console.log(`Express server is running at port : ${port}`)
})
