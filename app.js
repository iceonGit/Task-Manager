require("dotenv").config();

const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler")

const app = express();
const port = 3000;


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use('/api/v1/tasks',tasks)
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log("Server started on port 3000");
        })
    }
    catch(err){
        console.log(err);
    }
}

start();
