const express = require('express')
const path = require("path")
const cors = require("cors");
const decodeRoute =require('./routes/decode')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname ,"public")))
app.use("/decode", decodeRoute);

app.listen(3000,()=>{
    console.log("server is listening on port 3000: ")
})