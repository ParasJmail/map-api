const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

dotenv.config();



const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongodb connected")
}).catch(err => console.log(err));

app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

app.listen(process.env.PORT || 4000,()=>{
    console.log("Backend server is running!")
})