const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use("/static" , express.static("public"))

//routes

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})





app.listen(PORT, ()=> console.log("Server started"))