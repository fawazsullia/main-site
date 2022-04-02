const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {createServer} = require("http")
const httpServer = createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer);


const staticRoutes = require("./routes/staticRoutes")
const downloadRoutes =require("./routes/downloadRoutes");
const { isObject } = require("util");

//middlewares
app.use("/static" , express.static("public"))

//route middlewares
app.use("/", staticRoutes )
app.use("/download", downloadRoutes)

//handle socket connection
io.on("connection", (socket)=>{
socket.on("message", (data)=> {
    io.emit("chat",  data)
})

})


httpServer.listen(PORT, ()=> console.log("Server started"))
